// import React from 'react';
// import {AuthContextType,UserType} from '@/types';
// import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
// import { doc, getDoc, setDoc } from 'firebase/firestore';
// import { auth, firestore } from '../auth/firebase';
// import { useState,createContext } from 'react';

// const AuthContext=createContext<AuthContextType |null>(null);

// export const AuthProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
//     const [user,setUser] =useState<UserType>(null);
//     const login=async(email: string,
//         password: string)=>{
//   try{
//   await signInWithEmailAndPassword(auth, email, password);
//   return{success:true};
//   }
//   catch(error:any)
//         {
//             let msg=error.message;
//             return {success:false,msg};
//         }

//  }

//   const register=async(email: string,
//         password: string,name:string)=>{
//   try{
//  let response= await createUserWithEmailAndPassword(auth, email, password);
//  await setDoc(doc(firestore,"users",response?.user?.uid),{
//     name,
//     email,
//     uid:response?.user?.uid,
//  })
//   return{success:true};
//   }
//   catch(error:any)
//         {
//             let msg=error.message;
//             return {success:false,msg};
//         }

//  }
// const UpdateUserData=async(uid:string){
//    try{

// const docRef=doc(firestore,"users",uid);
// const docSnap=await getDoc(docRef);
// if(doscSnap.exists()){
//     const data=doscSnap.data();
//     const userType:userType={
//         uid:data?.uid,
//         name:data?.name||null,
//         email:data?.email||null,
//         image:data.image||null
//     };
//     setUser({...userData});
// }
//   }
//   catch(error:any)
//         {
//             let msg=error.message;
//             return {success:false,msg};
//             console.log(error);
//         }

// }
// const contextValue:AuthContextType={
//     user,
//     setUser,
//     login,
//     register,
//     UpdateUserData
// }
// return(
//     <AuthContext.Provider value={contextValue}>
//         {children}
//     </AuthContext.Provider>
// );
// }

// export const useAuth=():AuthContextType=>{
// const context=useContext(AuthContext);
// if(!context){
//     throw new Error("useAuth must be used within an AuthProvider");
// }}

// import React, { useState, createContext, useContext } from 'react';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { doc, getDoc, setDoc } from 'firebase/firestore';
// import { auth, firestore } from '../auth/firebase';

// // Define types (you'll need to create these in a separate file or include them here)
// // Assuming the types based on your usage:

// export interface UserType {
//     uid: string | null;
//     name: string | null;
//     email: string | null;
//     image: string | null;
// }

// export interface AuthContextType {
//     user: UserType | null;
//     setUser: (user: UserType | null) => void;
//     login: (email: string, password: string) => Promise<{success: boolean; msg?: string}>;
//     register: (email: string, password: string, name: string) => Promise<{success: boolean; msg?: string}>;
//     UpdateUserData: (uid: string) => Promise<{success: boolean; msg?: string} | void>;
// }

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     const login = async (email, password) => {
//         try {
//             await signInWithEmailAndPassword(auth, email, password);
//             return { success: true };
//         } catch (error) {
//             let msg = error.message;
//             return { success: false, msg };
//         }
//     };

//     const register = async (email, password, name) => {
//         try {
//             let response = await createUserWithEmailAndPassword(auth, email, password);
//             await setDoc(doc(firestore, "users", response?.user?.uid), {
//                 name,
//                 email,
//                 uid: response?.user?.uid,
//             });
//             return { success: true };
//         } catch (error) {
//             let msg = error.message;
//             return { success: false, msg };
//         }
//     };

//     const UpdateUserData = async (uid) => {
//         try {
//             const docRef = doc(firestore, "users", uid);
//             const docSnap = await getDoc(docRef); // Fixed: was "doscSnap"

//             if (docSnap.exists()) { // Fixed: was "doscSnap"
//                 const data = docSnap.data(); // Fixed: was "doscSnap"
//                 const userData = { // Fixed: was "userType" and wrong variable name
//                     uid: data?.uid,
//                     name: data?.name || null,
//                     email: data?.email || null,
//                     image: data?.image || null // Fixed: was "data.image" (inconsistent optional chaining)
//                 };
//                 setUser(userData); // Fixed: was "{...userData}" and wrong variable name
//                 return { success: true }; // Added return for consistency
//             } else {
//                 return { success: false, msg: "User document not found" };
//             }
//         } catch (error) {
//             console.log(error); // Moved console.log before return
//             let msg = error.message;
//             return { success: false, msg };
//         }
//     };

//     const contextValue = {
//         user,
//         setUser,
//         login,
//         register,
//         UpdateUserData,
//     };

//     return (
//         <AuthContext.Provider value={contextValue}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context; // Added missing return statement
// };

import React, {useState, createContext, useContext} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {doc, getDoc, setDoc} from 'firebase/firestore';
import {auth, firestore} from '../auth/firebaseConfig';

// Create context
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return {success: true};
    } catch (error) {
      const msg = error.message || 'Login failed';
      return {success: false, msg};
    }
  };

  const register = async (email, password, name) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      // Check if user was created successfully
      if (response?.user?.uid) {
        await setDoc(doc(firestore, 'users', response.user.uid), {
          name,
          email,
          uid: response.user.uid,
          image: null, // Add default image field
        });
        return {success: true};
      } else {
        return {success: false, msg: 'Failed to create user'};
      }
    } catch (error) {
      const msg = error.message || 'Registration failed';
      return {success: false, msg};
    }
  };

  const UpdateUserData = async uid => {
    try {
      if (!uid) {
        return {success: false, msg: 'UID is required'};
      }

      const docRef = doc(firestore, 'users', uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const userData = {
          uid: data?.uid || uid,
          name: data?.name || null,
          email: data?.email || null,
          image: data?.image || null,
        };
        setUser(userData);
        return {success: true};
      } else {
        return {success: false, msg: 'User document not found'};
      }
    } catch (error) {
      console.error('UpdateUserData error:', error);
      const msg = error.message || 'Failed to update user data';
      return {success: false, msg};
    }
  };

  const contextValue = {
    user,
    setUser,
    login,
    register,
    UpdateUserData,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
