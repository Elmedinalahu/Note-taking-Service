import { useContext } from 'react';
import { Card, CardContent, CardActions, Typography, Tooltip, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArchiveOutlined, DeleteOutlineOutlined as Delete, Edit, Search } from '@mui/icons-material';
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

    const { notes, archiveNote, removeNote } = useContext(DataContext);

    return (
        // This is the note card
                // This is the note card actions for archive, view, delete and edit
        <StyledCard>
                <CardContent>
                    <Typography>{note.heading}</Typography>
                    <Typography>{note.text}</Typography>
                </CardContent>
                <CardActions style={{ justifyContent: "flex-end" }}>
                <Tooltip title="Edit">
                    <Link to={"/note/" + note.id + "/edit"}>
                    <IconButton>
                    <Edit 
                    fontSize="small"
                    style={{color: 'purple'}}
                    />
                    </IconButton>
                    </Link>
                </Tooltip>
                <Tooltip title="View">
                    <Link to={"/note/" + note.id}>
                    <IconButton>
                    <Search 
                    fontSize="small"
                    style={{color: 'purple'}}
                    />
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
                        style={{color: 'purple'}}
                        onClick={() => removeNote(note.id)}
                    />
                    </IconButton>
                </Tooltip>
                </CardActions>
        </StyledCard>
    )
}

export default Note;
