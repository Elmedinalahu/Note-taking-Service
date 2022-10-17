import { useContext, useState, useEffect } from 'react';
import { Card, CardContent, CardActions, Typography, Tooltip, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArchiveOutlined, DeleteOutlineOutlined as Delete, Edit, Search } from '@mui/icons-material';
import { DataContext } from '../../context/DataProvider';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    const [notes, getNotes] = useState([]);

//     const { notes, setNotes, setArchiveNotes, setDeleteNotes } = useContext(DataContext);

//     const archiveNote = (note) => {
//         const updatedNotes = notes.filter(data => data.id !== note.id);
//         setNotes(updatedNotes);
//         setArchiveNotes(prevArr => [note, ...prevArr]);
//     }

//     const deleteNote = (note) => {
//         const updatedNotes = notes.filter(data => data.id !== note.id);
//         setNotes(updatedNotes);
//         setDeleteNotes(prevArr => [note, ...prevArr]);
//     }
  

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        const url = 'https://localhost:7259/api/Notes';
        axios.get(url).then((response) => {
            const GetAllNotes = response.data;
            console.log(notes);
            getNotes(GetAllNotes);
        }).catch((err) => {
            console.log(err);
        });
    }
    
    
    
    return (
        <StyledCard>
                <CardContent>
                    <Typography>{notes.heading}</Typography>
                    <Typography>{notes.text}</Typography>
                </CardContent>
                <CardActions style={{ justifyContent: "flex-end" }}>
                <Tooltip title="Edit">
                    <Link to={"/note/" + notes.id + "/edit"}>
                    <IconButton>
                    <Edit 
                    fontSize="small"
                    style={{color: 'purple'}}
                    />
                    </IconButton>
                    </Link>
                </Tooltip>
                <Tooltip title="View">
                    <Link to={"/note/" + notes.id}>
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
                        // onClick={() => archiveNote(note)}
                    />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton>
                    <Delete
                        fontSize="small"
                        style={{color: 'purple'}}
                        // onClick={() => deleteNote(note)}
                    />
                    </IconButton>
                </Tooltip>
                </CardActions>
        </StyledCard>
    )
}



export default Note;