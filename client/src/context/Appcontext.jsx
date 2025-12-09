import { createContext,useState} from "react";

export const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [user, setuser] = useState(null)
    const [showLogin, setshowLogin] = useState(false)
    


    const backendUrl = import.meta.env.VITE_BACKEND_URL
    
    const value={
        user,setuser,showLogin,setshowLogin, backendUrl
    }

    return(
        <AppContext.Provider value={value}>
           {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider