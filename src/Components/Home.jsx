import React, { useContext } from 'react';
import { UserContext } from '../Providers/AuthProviders';

const Home = () => {
    const {user} = useContext(UserContext)
    console.log(user);
    return (
        <div>
            This is home {user && <span>{user.displayName}</span>}
        </div>
    );
};

export default Home;