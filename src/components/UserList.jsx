import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://api.github.com/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    }, []);

    const redirectToUserDetail = (username) => {
        navigate(`/user/${username}`)
    }

    return (
        <div>
            <Typography variant="h3">User Lists</Typography>
            <List>
                {users.map(user => (
                    <ListItem key={user.id} style={{padding: "5px"}}>
                        <div onClick={() => redirectToUserDetail(user.login)}>
                            <ListItemAvatar>
                                <Avatar alt={`${user.login}'s avatar`} src={user.avatar_url}
                                        sx={{width: 75, height: 75}}/>
                            </ListItemAvatar>
                            <ListItemText>
                                <p>{user.name}</p>
                                <p>{user.login}</p>
                            </ListItemText>
                            <Divider />
                        </div>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default UserList;
