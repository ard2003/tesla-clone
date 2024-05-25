"use client";
import React, { createContext, useContext, useState } from "react";

const AppContext=createContext<any>(undefined)

export function AppWrapper({children}:{
    children:React.ReactNode;
    
}){
    let [isHover,setIsHover]=useState<boolean>(false)

    return(
        <AppContext.Provider value={[
            isHover,
            setIsHover
        ]}>{children}</AppContext.Provider>
    )
}export function useAppContext(){
    return useContext(AppContext)}