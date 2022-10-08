

import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const NavList = () => {
    const navigate = useNavigate();

    const navList = [
        { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/home' },
        { id: 2, name: 'Archives', icon: <Archive />, route: '/archive' },
        { id: 3, name: 'Trash', icon: <Delete />, route: '/delete' },

    ]

    const onClick = (url: string) => {
        navigate(url);
    }
    
    return (
        <List>
        {
            navList.map(list => (
                <ListItem button key={list.id} onClick={() => onClick(list.route)}>
                   
                        <ListItemIcon style={{ alignItems: 'center', color: 'purple'}}>
                            {list.icon}
                        </ListItemIcon>
                        <ListItemText primary={list.name} />
                   
                </ListItem>
            ))
        }
        </List>
    )
}

export default NavList;