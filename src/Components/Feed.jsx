import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import { SideBar } from './index'

const Feed = () => {
  return (
    <Stack sx={{ flexdirection: { sx: "column", md: "row " } }}>
      <Box sx={{height: {sx: "auto", md: "92vh", borderRight: "1px solid #3d3d3d", px: {sx:0, md: 2}}}}>
        
        <SideBar/>
        
        <Typography className='Copyright' variant='body2' sx={{ mt: 1.5, color: "#fff" }}>
          Copyright 2022
        </Typography>
      </Box>

    </Stack>
  )
}

export default Feed