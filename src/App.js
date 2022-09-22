import { Router } from '@mui/icons-material';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './Components';


import './App.css';

function App() {
  return (
    <BrowserRouter >
      <Box sx={{ backgroundColor: '#000' }}>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Feed /> } />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail /> } />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
</Routes>
        
    </Box>
    </BrowserRouter>

  );
}

export default App;
