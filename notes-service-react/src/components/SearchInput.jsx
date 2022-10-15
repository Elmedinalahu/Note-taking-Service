import { Search } from "@mui/icons-material";
import { Input, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataProvider";

const StyledInput = styled(Input)`
    width: 500px;
    margin-left: 20px;
`;

function SearchInput(props) {

    const { search, setSearch } = useContext(DataContext);
    const [hide, setHide] = useState(false);
    // hide input on small screen with media query
    const isMobile = useMediaQuery('(max-width: 600px)', {
        // if true, hide input
        // if false, show input
        onChange: (matches) => setHide(matches)
    });

    useEffect(() => {
        if (isMobile) {
            setHide(true);
        } else {
            setHide(false);
        }
    }, [isMobile, setHide]);

    // return icon if hidden
    if (hide) {
        return (
            <Search
                className="text-black ml-3"
                onClick={() => setHide(false)}
            />
        )
    }

    return <StyledInput type="text" placeholder="Search"
        onChange={event => {
            setSearch(event.target.value);
        }}
    />
}

export default SearchInput;
