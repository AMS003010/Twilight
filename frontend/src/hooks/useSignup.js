import {useState} from 'react';
import { UseUserContext } from './useUserContext';

export const UseSignUp = () => {
    console.log("UseSignUp")
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = UseUserContext()
    const signup = async (name,email,password,day,month,year,gender) => {
        setIsLoading(true)
        setError(null)
        console.log(" UseSignUp "+email+"     "+password)
        const response = await fetch('/api/user',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name,email,password,day,month,year,gender})
        })
        const json = await response.json()
        console.log(json)
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        } 
        if(response.ok){
            console.log("SIGNUP SUCCESSFUL:")
            console.log(json)
            localStorage.setItem('user',JSON.stringify(json))
            dispatch({ type: 'LOGIN',payload:json})
            setIsLoading(false)
        }
    }
    return {signup,isLoading,error}
}