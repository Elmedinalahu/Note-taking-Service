import { Input } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const StyledInput = styled(Input)`
    width: 500px;
    margin-left: 20px;
    
`;

function SearchInput(props) {

    const { search, setSearch } = useContext(DataContext);
    return <StyledInput type="text" placeholder="Search"
        onChange={event => {
            setSearch(event.target.value);
        }}
    />
}

export default SearchInput;
