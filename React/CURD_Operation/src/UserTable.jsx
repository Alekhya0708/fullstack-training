import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton
} from '@mui/material';
import { Visibility, Edit, Delete } from '@mui/icons-material';

const UserTable = ({ users, onView, onEdit, onDelete }) => (
  <TableContainer sx={{ maxWidth: 800, margin: 'auto', border: '1px solid #e0e0e0', borderRadius: 2 }}>
    <Table stickyHeader size="small">
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: 'bold', width: "auto" }}>Name</TableCell>
          <TableCell sx={{ fontWeight: 'bold', width: 'auto' }}>City</TableCell>
          <TableCell sx={{ fontWeight: 'bold', width: 'auto' }}>SSN</TableCell>
          <TableCell sx={{ fontWeight: 'bold', width: 'auto' }}>Phone</TableCell>
          <TableCell sx={{ fontWeight: 'bold', width: 'auto' }} align="center">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} align="center">No users found</TableCell>
          </TableRow>
        ) : (
          users.map((user, idx) => (
            <TableRow
              key={idx}
              hover
              sx={{
                '&:hover': { backgroundColor: '#f9f9f9' },
                backgroundColor: idx % 2 === 0 ? '#e3f2fd' : '#bbdefb' 
              }}
            >
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.city}</TableCell>
              <TableCell>{user.ssn}</TableCell>
              <TableCell>{user.phnNum}</TableCell>
              <TableCell align="center">
                <IconButton color="primary" onClick={() => onView(user)}><Visibility fontSize="small" /></IconButton>
                <IconButton color="secondary" onClick={() => onEdit(user)}><Edit fontSize="small" /></IconButton>
                <IconButton color="error" onClick={() => onDelete(user)}><Delete fontSize="small" /></IconButton>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  </TableContainer>
);

export default UserTable;
