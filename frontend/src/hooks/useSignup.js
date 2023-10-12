import {useState} from 'react';
import { useUserContext } from './useUserContext';

export const useSignUp = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useUserContext()
    const signup = async (email,password) => {
        setIsLoading(true)
        setError(null)
        const response = await fetch('/api/user',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,password})
        })
        const json = await response.json()
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