import React from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';

const SearchField = ({ searchCriteria, setSearchCriteria, onSearch }) => {
  const handleChange = (field, value) => {
    setSearchCriteria(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        {Object.entries(searchCriteria).map(([key, value]) => (
          <Grid item key={key}>
            <TextField
              label={key === "phnNum" ? "Phone Number" : key}
              value={value}
              onChange={(e) => handleChange(key, e.target.value)}
              variant="outlined"
              size="small"
            />
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={onSearch}
        sx={{ marginTop: 2, marginBottom: 2}}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchField;
