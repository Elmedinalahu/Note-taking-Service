import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext(null);

// call API for delete and archive
const callAPI = (path, method, body) => {
    return fetch('https://localhost:7259' + path, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => response.json()).catch((error) => {
        console.log(error);
    });
}


const DataProvider = ({ children }) => {
    // state for notes
    const [notes, setNotes] = useState([]);
    const [archiveNotes, setArchiveNotes] = useState([]);
    const [deleteNotes, setDeleteNotes] = useState([]);
    const [search, setSearch] = useState('');

    // get all notes
    const refreshNotes = async () => {
        const data = await callAPI('/api/Notes', 'GET');
        if (data.length > 0) {
            setNotes(data);
        }
    }

    // initialize all notes
    useEffect(() => {
        refreshNotes();
    }, []);

    // add note
    const addNote = async (note) => {
        setNotes(prevArr => [note, ...prevArr])
        const response = await callAPI('/api/Notes', 'POST', note)
        if (response) {
            // refresh notes
            refreshNotes();
        }
    }

    // update note
    const editNote = (note) => {
        setNotes(notes.map((n) => n.id === note.id ? note : n));
        return callAPI('/api/Notes/' + note.id, 'PUT', note);
    }

    // archive note
    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);

        const archivedNote = notes.filter(note => note.id === note.id);
        setArchiveNotes(prevArr => [...prevArr, ...archivedNote]);
        return callAPI('/api/Notes/' + note.id, 'DELETE');
    }

    // delete note
    const removeNote = (noteID) => {
        const updatedNotes = notes.filter(note => note.id !== noteID);
        setNotes(updatedNotes);
        // set deletedNotes
        const deletedNote = notes.filter(note => note.id === noteID);
        setDeleteNotes(prevArr => [...prevArr, ...deletedNote]);
        return callAPI('/api/Notes/' + noteID, 'DELETE');
    }

    // unarchive note
    const unarchiveNote = (noteID) => {
        const updatedArchiveNotes = archiveNotes.filter(note => note.id !== noteID);
        setArchiveNotes(updatedArchiveNotes);

        const restoredNote = archiveNotes.find(note => note.id === noteID);
        if (restoredNote) {
            setNotes((prevArr) => [...prevArr, restoredNote]);
            // re-add note to database
            addNote(restoredNote);
        }
    }

    // undelete note
    const restoreNote = (noteID) => {
        const updatedDeleteNotes = deleteNotes.filter(note => note.id !== noteID);
        setDeleteNotes(updatedDeleteNotes);

        const restoredNote = deleteNotes.find(note => note.id === noteID);
        if (restoredNote) {
            setNotes((prevArr) => [...prevArr, restoredNote]);
            // re-add note to database
            addNote(restoredNote);
        }
    }

    return (
        // pass all states and functions to children
        <DataContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setArchiveNotes,
            deleteNotes,
            setDeleteNotes,
            search,
            setSearch,
            addNote,
            editNote,
            removeNote,
            archiveNote,
            restoreNote,
            unarchiveNote,
        }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;

