import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';

// This is the edit note page
export default function EditNote({ noteID }) {
    const navigate = useNavigate();
    const { editNote, notes } = useContext(DataContext);

    const [note, setNote] = useState(notes.find(note => note.id === noteID));
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote({
            ...note,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editNote(note);
        navigate('/home');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="heading" 
                value={note.heading} 
                onChange={handleChange} 
                placeholder="Enter heading"
                className="border-2 border-purple-600 rounded-md p-2 m-3"
            />
            <input 
                type="text" 
                name="text" 
                value={note.text} 
                onChange={handleChange} 
                placeholder="Enter text"
                className="border-2 border-purple-600 rounded-md p-2 m-3"
            />
            <button 
                type="submit"
                className="bg-purple-600 text-white p-2 rounded-md m-3"
            >
                Update
            </button>
        </form>
    )
}
