
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

//components
import SwipeDrawer from './SwipeDrawer';
import Notes from './notes/Notes';
import Archives from './archives/Archives';
import DeleteNotes from './delete/DeleteNotes';
import EditNotes from './edit/EditNotePage';
import DataProvider from '../context/DataProvider';


const Home = () => {
    return (
        
            <Box style={{ display: 'flex', width: '100%' }}>
                <Router>
                <SwipeDrawer />
                    <Routes>
                        <Route path='/*' element={<Notes />} />
                        <Route path='/archive' element={<Archives />} />
                        <Route path='/delete' element={<DeleteNotes />} />
                        <Route path='/note/:noteID/*' element={<EditNotes />} />
                    </Routes>
                </Router>
            </Box>
        
    )
}

export default Home;