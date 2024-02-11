import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Avatar, Typography} from '@mui/material';

const UserDetails = () => {
    const {username} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(`https://api.github.com/users/${username}`)
            .then(response => setUser(response.data))
            .catch(error => console.error(error));
    }, [username]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Typography variant="h3">User Details</Typography>
            <Avatar alt={`${user.login}'s avatar`} src={user.avatar_url} sx={{width: 100, height: 100}}/>
            <div style={{paddingTop:"15px"}}>
                <Typography variant="body1">Name: {user.name}</Typography>
                <Typography variant="body1">Login: {user.login}</Typography>
                <Typography variant="body1">Company: {user.company}</Typography>
                <Typography variant="body1">Followers: {user.followers}</Typography>
                <Typography variant="body1">Following: {user.following}</Typography>
                <Typography variant="body1">Public Repositories: {user.public_repos}</Typography>
            </div>
        </div>
    );
};

export default UserDetails;
