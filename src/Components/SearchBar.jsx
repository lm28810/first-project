import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material' 
import { Search } from '@mui/icons-material'


const SearchBar = () => {
  return (
      
      <Paper component='form' sx={{ borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, boxShadow: 'none', mr: { sm: 5 }  }}>
          <input className='SearchBar' placeholder="Search" value="" style={{ outline: 'none', border: 'none', width: "40vw" }} />
          <IconButton type='Submit' sx={{P:10, color: 'red'}}>
              <Search/>
          </IconButton >
              
          </Paper>
          
    
  )
}

export default SearchBar