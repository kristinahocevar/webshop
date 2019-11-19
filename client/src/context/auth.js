import React, {createContext, useReducer} from 'react';
import jwtDecode from 'jwt-decode'

    const initialState = {user: null};

    if(sessionStorage.getItem("jwtToken")){
        const decodedToken = jwtDecode(sessionStorage.getItem("jwtToken"));

        if (decodedToken.exp * 1000 < Date.now()){
            jwtDecode(sessionStorage.removeItem("jwtToken"))

        }
        else {
            initialState.user = jwtDecode(sessionStorage.getItem("jwtToken", "sessionUsername"));
     }
   }


    
    const AuthContext = createContext({user: initialState, login: (userData)=>{}, logout:()=>{}})
    console.log(initialState)
    


function authReducer(state, action){
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                user: action.payload
            }
            case "REGISTER":
            return {
                ...state,
                user: action.payload
            }
            case "LOGOUT":
                return {
                    ...state,
                    user: null
                }
            default:
                return state;
    }
};

function AuthProvider (props){
    const [state, dispatch] = useReducer(authReducer, {initialState});

    

    function login (userData){
        sessionStorage.setItem("jwtToken", userData.token)
        sessionStorage.setItem("sessionUsername", userData.username)
        dispatch({type: "LOGIN", payload: userData})
    }

    function register (userData){
        sessionStorage.setItem("jwtToken", userData.token)
        sessionStorage.setItem("sessionUsername", userData.username)
        dispatch({type: "LOGIN", payload: userData})
    } 

    
    function logout(){
        sessionStorage.removeItem("jwtToken");
        sessionStorage.removeItem("sessionUsername")
        dispatch({type: "LOGOUT"});
    }

    
    return (<AuthContext.Provider value = {{user: state.user, login, logout, register}} {...props}>{props.children}</AuthContext.Provider>)
 
}


export { AuthContext, AuthProvider};
