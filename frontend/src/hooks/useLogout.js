import {useUserContext} from './useUserContext'

export const useLogout = () => {
    const {dispatch} = useUserContext()
    const logout = () => {
        localStorage.removeItem('user')
        dispatch({type: 'LOGOUT'})
    }
    return {logout}
}