import React,{useState} from "react";
const HeaderContext = React.createContext(); // this is react default state that provides (providers and consumer).

const HeaderProvider = (props)=>{
const [HeaderText , setHeaderText] =useState({});
 
return(
<HeaderContext.Provider value={{
HeaderText:HeaderText,
setHeaderText:setHeaderText,
 
}}>
    {props.children}
</HeaderContext.Provider>
);
}


export {HeaderProvider , HeaderContext}; 
//note :
// 2 variable export korar somoy export defaul kora jabe na 
 // here props.children refers at App.js navigation container.