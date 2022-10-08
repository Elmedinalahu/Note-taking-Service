import { useContext } from 'react';
import { Route, Routes, useParams } from "react-router-dom";

import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { DataContext } from '../../context/DataProvider';

//components
import Note from '../notes/Note';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const EditNotes = (props) => {
    const { noteID } = useParams();

    const { notes } = useContext(DataContext);

    const note = notes[0] || {};
    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Grid container>
                    <Routes>
                        <Route path='/*' element={<Note note={note} />} />
                        <Route path='/edit' element={<Note note={note} />} />
                    </Routes>
                </Grid>
            </Box>
        </Box>
    )
}

export default EditNotes;