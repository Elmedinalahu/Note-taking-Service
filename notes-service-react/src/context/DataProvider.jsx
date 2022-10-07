import { createContext, useState } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const [notes, setNotes] = useState([]);
    const [archiveNotes, setArchiveNotes] = useState([]);
    const [deleteNotes, setDeleteNotes] = useState([]);
    const [search, setSearch] = useState('');

    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setArchiveNotes,
            deleteNotes,
            setDeleteNotes,
            search,
            setSearch
        }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;