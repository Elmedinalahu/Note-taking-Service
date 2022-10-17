import { useContext } from 'react';
import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { UnarchiveOutlined as Unarchive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import { DataContext } from '../../context/DataProvider';

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    box-shadow: none;
    color:purple;
`

// archive note component
const Archive = ({ archive }) => {

    const { archiveNotes, removeNote, unarchiveNote, setArchiveNotes, setDeleteNotes } = useContext(DataContext);

    const deleteNote = (archive) => {
        const updatedNotes = archiveNotes.filter(data => data.id !== archive.id);
        setArchiveNotes(updatedNotes);
        setDeleteNotes(prevArr => [archive, ...prevArr]);
        removeNote(archive.id);
    }

    return (
        <StyledCard>
                <CardContent>
                    <Typography>{archive.heading}</Typography>
                    <Typography>{archive.text}</Typography>
                </CardContent>
                <CardActions>
                    <Unarchive 
                        fontSize="small" 
                        style={{ marginLeft: 'auto', cursor: 'pointer' }} 
                        onClick={() => unarchiveNote(archive.id)}
                    />
                    <Delete 
                        fontSize="small"
                        style={{cursor: 'pointer'}}
                        onClick={() => deleteNote(archive)}
                    />
                </CardActions>
        </StyledCard>
    )
}

export default Archive;