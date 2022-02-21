import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import initializeFirebase from "../Firebase/firebase.init";
import {
  saveEmployeeToDB,
  setAuthError,
  setLoading,
  setEmployee,
  checkAdminStatus,
} from "../store/employee";

initializeFirebase();

const useFirebase = () => {
  const auth = getAuth();
  const dispatch = useDispatch();

  const employee = useSelector((state) => state.entities.employee.employeeInfo);
  const authError = useSelector((state) => state.entities.employee.error);
  const loading = useSelector((state) => state.entities.employee.loading);
  const admin = useSelector((state) => state.entities.employee.admin);

  dispatch(checkAdminStatus(employee.email));

  // Register new employee
  const registerEmployee = (name, email, password, navigate, location) => {
    dispatch(setLoading({ loading: true }));
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Empty error for successfully register
        dispatch(setAuthError({ error: "" }));

        // Save employee data to Database
        dispatch(saveEmployeeToDB({ name, email }));

        // Update employee's name to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            dispatch(setAuthError({ error: "" }));
          })
          .catch((error) => {
            dispatch(setAuthError({ error: error.message }));
          });

        // Redirect user to the page where they come from
        redirectInitialPage(navigate, location);
      })
      .catch((error) => {
        // Set error
        dispatch(setAuthError({ error: error.message }));
      })
      .finally(() => {
        // update loading status
        dispatch(setLoading({ loading: false }));
      });
  };

  // Login with email and password
  const loginWithEmailAndPassword = (email, password, navigate, location) => {
    // dispatch(setLoading({ loading: true }));
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Empty error for successfully login
        dispatch(setAuthError({ error: "" }));
        // Redirect employee to the page where they come from
        redirectInitialPage(navigate, location);
      })
      .catch((error) => {
        // Set error to the error
        dispatch(setAuthError({ error: error.message }));
      })
      .finally(() => {
        // Update loading status
        // dispatch(setLoading({ loading: false }));
      });
  };

  //reset password
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, employee.email).then((result) => {
      alert("Password Reset Successfully! Check your email!!");
    });
  };

  // Observing employee state
  useEffect(() => {
    dispatch(setLoading({ loading: true }));
    const unsubscribe = onAuthStateChanged(auth, (employee) => {
      if (employee) {
        dispatch(
          setEmployee({
            email: employee.email,
            displayName: employee.displayName,
            photoURL: employee.photoURL,
          })
        );
        dispatch(setLoading({ loading: false }));
      } else {
      }
    });
    return () => unsubscribe;
  }, [auth]);

  // Log Out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setEmployee({}));
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // Redirect Initial Page
  const redirectInitialPage = (navigate, location) => {
    const from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
  };

  //return all functions
  return {
    employee,
    authError,
    loading,
    admin,
    registerEmployee,
    loginWithEmailAndPassword,
    handleResetPassword,
    logOut,
  };
};

export default useFirebase;
