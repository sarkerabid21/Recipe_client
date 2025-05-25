import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    
const logOutUser = () => {
    return signOut(auth);
};

   
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const userInfo = {
        user,
        createUser,
        logInUser,
        logOutUser
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
