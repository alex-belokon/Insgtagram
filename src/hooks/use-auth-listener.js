import { tSImportEqualsDeclaration } from '@babel/types';
import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase'

export defaul function useAuthListener(){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const { firebase } = useContext(FirebaseContext);

    useEffect(() =>{
        const listener = firebase.auth().onAuthStateChanges((authUser)) => {
            if (suthUser) {
                localStorage.setItem('authUSer', JSON.stringify(authUSer));
                setUser(authUser);
            } else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        }
    }, []);
    return [user]
}
