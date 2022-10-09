import { useContext } from 'react';

import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { DataContext } from '../../context/DataProvider';

//components
import Archive from './Archive';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Archives = () => {

    const { archiveNotes, search } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Grid container>
                    {
                        archiveNotes.filter(archive => {
                        return archive.text.includes(search)
                        || archive.heading.includes(search);
                        }).map(archive => (
                            <Grid item>
                                <Archive archive={archive} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default Archives;