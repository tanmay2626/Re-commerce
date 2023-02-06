import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <Paper
    elevation={0}
      component="form"
      sx={{ p: '5px 10px', bgcolor: "#F5F5F5" , display: 'flex', alignItems: 'center', width: { xs: 80+"%" , md: 200 }, borderRadius: 10, m: { xs: "0 auto"  } }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: 0.8+"rem" }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search items' }}
      />
      <IconButton type="button" sx={{ p: '2px' }} aria-label="search">
        <SearchIcon fontSize="small" />
      </IconButton>
    </Paper>

  );
}
