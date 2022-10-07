import { useContext } from 'react';
import { Card, CardContent, CardActions, Typography, Tooltip, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArchiveOutlined, DeleteOutlineOutlined as Delete, Edit } from '@mui/icons-material';
import { DataContext } from '../../context/DataProvider';
import { Link } from 'react-router-dom';


const Archive = styled(ArchiveOutlined)`
    color: purple;
    pointer: cursor;
    margin-left: auto;
`;

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    box-shadow: none;
`

const Note = ({ note }) => {

    const { notes, setNotes, setArchiveNotes, setDeleteNotes } = useContext(DataContext);

    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setArchiveNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeleteNotes(prevArr => [note, ...prevArr]);
    }

    return (
        <StyledCard>
                <CardContent>
                    <Typography>{note.heading}</Typography>
                    <Typography>{note.text}</Typography>
                </CardContent>
                <CardActions style={{ justifyContent: "flex-end" }}>
                <Tooltip title="Edit">
                    <Link to={"/note/" + note.id + "/edit"}>
                    <IconButton>
                    <Edit fontSize="small" />
                    </IconButton>
                    </Link>
                </Tooltip>
                <Tooltip title="Archive">
                    <IconButton>
                    <Archive 
                        fontSize="small"
                        onClick={() => archiveNote(note)}
                    />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton>
                    <Delete
                        fontSize="small"
                        onClick={() => deleteNote(note)}
                    />
                    </IconButton>
                </Tooltip>
                </CardActions>
        </StyledCard>
    )
}

export default Note;