import { Router } from '@mui/icons-material';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './Components';


import './App.css';

function App() {
  return (
    <BrowserRouter >
      <Box sx={{backgroundColor: '#000'}}>
        <NavBar />
        <Routes>
          <Route pathe="/" exact element={<Feed /> } />
          <Route pathe="/video/:id" exact element={<VideoDetail />} />
          <Route pathe="/channel/:id" element={<ChannelDetail /> } />
          <Route pathe="/search/:searchTerm" element={<SearchFeed />} />
</Routes>
        
    </Box>
    </BrowserRouter>

  );
}

export default App;
