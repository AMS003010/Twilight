import {useState} from 'react'
import {useUserContext} from './useUserContext'

export const useLogin = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useUserContext()
    const login = async (email,password) => {
        setIsLoading(true)
        setError(null)
        const response = await fetch('/api/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,password})
        })
        const json = response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            console.log("LOGIN SUCCESSFUL:")
            console.log(json)
            localStorage.setItem('user',JSON.stringify(json))
            dispatch({type:'LOGIN',payload:json})
            setIsLoading(false)
        }
    }
    return {login,isLoading,error}
}