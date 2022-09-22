import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../Utils/Constans'
import { SearchBar } from './index'

const NavBar = () => {
  return (
   
<Stack direction="row" alignItems='center' p={2} sx={{position : "sticky", top: 0, background:'#000' , justifyContent: "space-between"}} >
      <Link to="/" style={{display:"flex", alignItem: "center" }}>
      <img src={logo} alt="logo" height={42} />
      
      </Link>
      <SearchBar/>
</Stack>
      
    
  )
}

export default NavBar