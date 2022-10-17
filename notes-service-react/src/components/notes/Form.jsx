import { useState, useRef, useContext } from 'react';
import { Box, TextField, ClickAwayListener } from '@mui/material';
import { styled } from '@mui/material/styles';
import { v4 as uuid } from 'uuid';
import { DataContext } from '../../context/DataProvider';
const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    margin: auto;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
    border-color: #e0e0e0;
    width: 600px;
    @media (max-width: 900px) {
        width: 90%;
        margin: 0px;
    }
    border-radius: 8px;
    min-height: 30px;
    padding: 10px 15px;
`

const defaultNote = {
    id: '',
    heading: '',
    text: ''
}

const Form = () => {
    const [showTextField, setShowTextField] = useState(false);
    const [note, setAddNote] = useState({ ...defaultNote, id: uuid() });
    const { addNote } = useContext(DataContext);
    const containerRef = useRef();
    const handleClickAway = () => {
        setShowTextField(false);
        containerRef.current.style.minheight = '30px'
        setAddNote({ ...defaultNote, id: uuid() });

        if (note.heading || note.text) {
            addNote(note);
        }
    }
    
    const onTextAreaClick = () => {
        setShowTextField(true);
        containerRef.current.style.minheight = '70px'
    }

    const onTextChange = (e) => {
        let changedNote = { ...note, [e.target.name]: e.target.value };
        setAddNote(changedNote);
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container ref={containerRef}>
                {   showTextField && 
                    <TextField 
                        placeholder="Title"
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        style={{ marginBottom: 10 }}
                        onChange={(e) => onTextChange(e)}
                        name='heading'
                        value={note.heading}
                    />
                }
                <TextField
                    placeholder="Take a note..."
                    multiline
                    maxRows={Infinity}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    onClick={onTextAreaClick}
                    onChange={(e) => onTextChange(e)}
                    name='text'
                    value={note.text}
                />
            </Container>
        </ClickAwayListener>
    )
}

export default Form;