import React from 'react';
import './ProfileScreen.css';
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen__body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen__info'>
                    <img 
                        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
                        alt='avatar'
                    />
                    <div className='profileScreen__details'>
                        <h2>{ user.email }</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;