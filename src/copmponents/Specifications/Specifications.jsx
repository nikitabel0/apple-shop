import { useState } from "react";
import BlueButton from "../button/BlueButton";
import Button from "../button/button";

export default function Specifications(){
    const[type,SetType]=useState('specifications')
    function HandClick(type){
            SetType(type)
        
    }
    return(
        <>
            <Button onClick={()=>HandClick('specifications')}></Button>
            <BlueButton onClick={()=>HandClick('review')}></BlueButton>
            <div>
                
            </div>
        </>
    )
}