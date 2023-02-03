import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function Search() {
  return (
    <Paper
    elevation={0}
      component="form"
      sx={{ p: '2px 10px', bgcolor: "#F5F5F5" , display: 'flex', alignItems: 'center', width: 250, borderRadius: 10 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: 0.8+"rem" }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search items' }}
      />
      <IconButton type="button" sx={{ p: '2px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
