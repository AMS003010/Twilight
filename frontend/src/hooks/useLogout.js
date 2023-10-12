import {useUserContext} from './useUserContext'

export const UseLogout = () => {
    const {dispatch} = useUserContext()
    const logout = () => {
        localStorage.removeItem('user')
        dispatch({type: 'LOGOUT'})
    }
    return {logout}
}