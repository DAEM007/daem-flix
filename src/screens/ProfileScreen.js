import React from 'react';
import './ProfileScreen.css';
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

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
                        <div className='profileScreen__plans'>
                            <h3>Plans</h3>
                            <button
                                onClick={ () => 
                                    signOut(auth)
                                        .then(() => console.log(`${user.email} signed out!`))
                                        .catch((err) => alert(err.message))
                                }
                                className='profileScreen__signOut'
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;