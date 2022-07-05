import React,{useState} from "react";
const AuthContext = React.createContext(); // this is react default state that provides (providers and consumer).

const AuthProvider = (props)=>{
const [CurrentUser , setCurrentUser] =useState({});
const [IsLoggedIn, setIsLoggedIn] = useState(false);

return(
<AuthContext.Provider value={{
CurrentUser:CurrentUser,
setCurrentUser:setCurrentUser,
IsLoggedIn:IsLoggedIn,
setIsLoggedIn:setIsLoggedIn
}}>
    {props.children}
</AuthContext.Provider>
);
}


export {AuthContext,AuthProvider}; 
//note :
// 2 variable export kkorar somoy export defaul kora jabe na 
 // here props.children refers at App.js navigation container.