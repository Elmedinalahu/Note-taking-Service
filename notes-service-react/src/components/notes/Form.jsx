import { useState, useRef, useContext } from 'react';

import { Box, TextField, ClickAwayListener } from '@mui/material';
import { styled } from '@mui/material/styles';
import { v4 as uuid } from 'uuid';

import { DataContext } from '../../context/DataProvider';

import axios from 'axios';
import { useEffect } from 'react';
import { ClearAll } from '@mui/icons-material';

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

const note = {
    id: '',
    heading: '',
    text: ''
}

function Form() {

    const [heading, setHeading] = useState('');
    const [text, setText] = useState('');
    const [data, setData] = useState([]);
    const [notes, getNotes] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        const url = 'https://localhost:7259/api/Notes';
        axios.get(url).then((response) => {
            const GetAllNotes = response.data;
            console.log(notes);
            getNotes(GetAllNotes);
        }).catch((err)=>{
            console.log(err);
        });
    }
    

    const handleClickAway = (e) => {
            e.preventDefault();

        const url = 'https://localhost:7259/api/Notes';
            const data = {
                heading: heading,
                text: text,
            }

            axios.post(url, data)
                .then((result) => {
                    
                    console.log(result.data)
                })
                .catch((error) => {
                    console.log(error);
                });
    }




    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container >
                {
                    <TextField
                        placeholder="Title"
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        style={{ marginBottom: 10 }}
                        onChange={(e) => setHeading(e.target.value)}
                        name='heading'
                    />
                }
                <TextField
                    placeholder="Take a note..."
                    multiline
                    maxRows={Infinity}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    onChange={(e) => setText(e.target.value)}
                    name='text'
                />
                <button onClick = {getData}>Get</button>
            </Container>
        </ClickAwayListener>
    )
}

export default Form;