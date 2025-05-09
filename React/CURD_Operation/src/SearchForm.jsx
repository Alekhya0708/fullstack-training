import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Typography } from '@mui/material';
import SearchField from './SearchField';
import UserTable from './UserTable';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ViewUser from './ViewUser';
import BulkAdd from './BulkAdd';
import DeleteUser from './DeleteUser';

const SearchForm = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    firstName: "", lastName: "", middleName: "", city: "", state: "", country: "", zip: "", ssn: "", phnNum: ""
  });

  const [openAddSingle, setOpenAddSingle] = useState(false);
  const [openAddBulk, setOpenAddBulk] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const fields = Object.keys(searchCriteria);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:8080/users')
      .then(response => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
      .catch(error => console.error('Fetch error:', error));
  };

  const handleSearch = () => {
    const filtered = {};
    fields.forEach(key => {
      if (searchCriteria[key].trim() !== "") {
        filtered[key] = searchCriteria[key];
      }
    });

    axios.post('http://localhost:8080/users/search', filtered)
      .then(response => setFilteredUsers(response.data))
      .catch(error => console.error('Search error:', error));
  };

  const handleAddUser = () => {
    axios.post('http://localhost:8080/users', selectedUser)
      .then(() => {
        alert("User added successfully!");
        setOpenAddSingle(false);
        fetchUsers();
      })
      .catch(error => alert("Add failed: " + error.message));
  };

  const handleBulkAddUser = (usersToAdd) => {
    axios.post('http://localhost:8080/users/bulk', usersToAdd)
      .then(() => {
        alert('Users added successfully!');
        setOpenAddBulk(false);
        fetchUsers();
      })
      .catch((error) => {
        alert('Error adding users: ' + error.message);
      });
  };

  const handleEditUser = () => {
    axios.put(`http://localhost:8080/users/${selectedUser.ssn}`, selectedUser)
      .then(() => {
        fetchUsers();
        setOpenEdit(false);
      })
      .catch(err => alert("Edit failed: " + err));
  };

  const handleDelete = (ssn) => {
    const user = users.find(u => u.ssn === ssn);
    setUserToDelete(user);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (!userToDelete) return;

    axios.delete(`http://localhost:8080/users/${userToDelete.ssn}`)
      .then(() => {
        alert("User deleted.");
        setUsers(users.filter(user => user.ssn !== userToDelete.ssn));
        setFilteredUsers(filteredUsers.filter(user => user.ssn !== userToDelete.ssn));
      })
      .catch(error => {
        console.error("Delete error:", error);
        alert("Failed to delete.");
      })
      .finally(() => {
        setDeleteDialogOpen(false);
        setUserToDelete(null);
      });
  };

  const handleOpenAddSingle = () => {
    setSelectedUser(fields.reduce((obj, key) => ({ ...obj, [key]: "" }), {}));
    setOpenAddSingle(true);
  };

  const handleOpenAddBulk = () => {
    setOpenAddBulk(true);
  };

  const handleOpenEdit = (user) => {
    setSelectedUser({ ...user });
    setOpenEdit(true);
  };

  const handleOpenView = (user) => {
    setSelectedUser(user);
    setOpenView(true);
  };

  const handleFieldChange = (key, value) => {
    setSelectedUser(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
        User Data Form
      </Typography>
            <SearchField
              searchCriteria={searchCriteria}
              setSearchCriteria={setSearchCriteria}
              onSearch={handleSearch}
            />
            <UserTable
              users={filteredUsers}
              onView={handleOpenView}
              onEdit={handleOpenEdit}
              onDelete={handleDelete}
            />
            <div style={{textAlign:"center", marginTop:"15px", marginBottom:"15px"}}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpenAddSingle}
                sx={{ marginRight: 2 }}
              >
                Add User
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleOpenAddBulk}
              >
                Bulk Add Users
              </Button>
              </div>
      <AddUser
        open={openAddSingle}
        onClose={() => setOpenAddSingle(false)}
        selectedUser={selectedUser}
        handleFieldChange={handleFieldChange}
        handleAddUser={handleAddUser}
        fields={fields}
      />
      <BulkAdd
        open={openAddBulk}
        onClose={() => setOpenAddBulk(false)}
        handleBulkAddUser={handleBulkAddUser}
        fields={fields}
      />
      <EditUser
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        selectedUser={selectedUser}
        handleFieldChange={handleFieldChange}
        handleEditUser={handleEditUser}
        fields={fields}
      />
      <ViewUser
        open={openView}
        onClose={() => setOpenView(false)}
        selectedUser={selectedUser}
        fields={fields}
      />
      <DeleteUser
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        user={userToDelete}
      />
    </Container>
  );
};

export default SearchForm;
