//components
import { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataContext } from '../../context/DataProvider';
import DeleteNote from './DeleteNote';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

// This is the delete page
const DeleteNotes = () => {
    const { deleteNotes, search } = useContext(DataContext);
    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Grid container>{
                        deleteNotes.filter(deleteNote => {
                        return deleteNote.text.includes(search)
                        || deleteNote.heading.includes(search);
                        }).map(deleteNote => (
                            <Grid item>
                                <DeleteNote deleteNote={deleteNote} />
                            </Grid>
                        ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default DeleteNotes;