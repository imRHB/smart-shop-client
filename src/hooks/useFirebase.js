import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";

import initializeFirebase from '../Firebase/firebase.init';

initializeFirebase();


const useFirebase = () => {

    const auth = getAuth();

    const [user, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    //create and sign in user with email and password

    const getUserEmail = e => {
        setEmail(e.target.value);

    };
    const getUserPassword = e => {
        setPassword(e.target.value);

    };

    //registration



    //user sign in with email and password

    const userLogin = () => {

        setIsLoading(true);

        return signInWithEmailAndPassword(auth, email, password)

    };


    //set user name



    //reset password

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                alert('Password Reset Successfully! Check your email!!')
            })
    }



    //user state change

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user)
            } else {
                setUsers({})
            }
            setIsLoading(false);
        });
        return () => unSubscribe;
    }, [isLoading, auth])



    //Sign out

    const logOut = () => {
        setIsLoading(true);

        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))

    };


    //return all functions
    return {
        user,
        setUsers,
        error,
        getUserEmail,
        getUserPassword,
        setError,
        email,
        handleResetPassword,
        userLogin,
        isLoading,
        logOut
    }
};

export default useFirebase;

