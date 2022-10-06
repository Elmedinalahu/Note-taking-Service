import { createContext, useState } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState('');


    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            search,
            setSearch,
        }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;