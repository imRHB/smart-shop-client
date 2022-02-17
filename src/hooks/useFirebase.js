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

        return createUserWithEmailAndPassword(auth, email, password)
    };

    const loginWithEmailAndPassword = (email, password) => {
        setIsLoading(true);

        return signInWithEmailAndPassword(auth, email, password)
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
    }, [isLoading, auth]);

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