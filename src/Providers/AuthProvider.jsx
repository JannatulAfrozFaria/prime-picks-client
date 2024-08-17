import { createContext,useEffect,useState } from "react";
import {app} from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth/web-extension";
// import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    // const axiosPublic =  useAxiosPublic();

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const signInWithGitHub =() =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (name,photo) =>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo,
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return()=>{
            return unsubscribe;
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn, signInWithGoogle, signInWithGitHub,
        logOut,
        updateUserProfile
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;