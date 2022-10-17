import { useContext } from 'react';
import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RestoreFromTrashOutlined as Restore, DeleteForeverOutlined as Delete } from '@mui/icons-material';
import { DataContext } from '../../context/DataProvider';

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    box-shadow: none;
`
//delete note component 
const DeleteNote = ({ deleteNote }) => {
    const { removeNote, restoreNote } = useContext(DataContext);
    return (
        <StyledCard>
                <CardContent>
                    <Typography>{deleteNote.heading}</Typography>
                    <Typography>{deleteNote.text}</Typography>
                </CardContent>
                <CardActions>
                    <Delete 
                        fontSize="small"
                        style={{ marginLeft: 'auto', color: 'red', cursor: 'pointer' }} 
                        //remove note from deleteNotes array
                        onClick={() => removeNote(deleteNote.id)} />
                    <Restore 
                        fontSize="small"
                        style={{color:'green', cursor: 'pointer' }}
                        onClick={() => restoreNote(deleteNote.id)}/>
                </CardActions>
        </StyledCard>
    )
}

export default DeleteNote;