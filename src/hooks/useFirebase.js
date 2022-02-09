import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const auth = getAuth();

    const registerWithEmailAndPassword = (email, password) => {
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {

            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const loginWithEmailAndPassword = (email, password) => {
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {

            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        setIsLoading(true);

        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }

            setIsLoading(false);
        })

        return () => unsubscribed;
    }, [auth]);

    const logout = () => {
        setIsLoading(true);

        signOut(auth)
            .then(() => {

            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };


    return {
        user,
        error,
        isLoading,
        registerWithEmailAndPassword,
        loginWithEmailAndPassword,
        logout
    }
};

export default useFirebase;