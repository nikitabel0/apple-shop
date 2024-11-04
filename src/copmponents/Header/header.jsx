import Container from "../container/container";
import './header.css'
import { list } from "../../data";
import Button from "../button/button";
import basket from '/basket.svg'
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function Header(){
    const[modal,setModal]=useState(false)
  

    return(
        <header className="header">
        <Container>
            <div style={{paddingTop:'10px'}}className="header-grid__block">
                <ul className="header__list">
                    {list.map(el=>(
                        <li style={{color: 'white', fontSize:"18px"}} >{el.title}</li>
                        ))}
                </ul>

                <div style={{display:'flex',
                 flexWrap:'wrap',
                    justifyContent:'space-between',
                    alignItems:"center",
                    color:'white'
                }}>
                    <p>Помощь</p>
                    <img src={ basket } alt="" />
                    <Button onClick={()=>setModal(true)}>Войти</Button>
                </div>
            </div>
            <Modal open={modal}>
                <h1>ты пидор</h1>
                <Button onClick={()=>setModal(false)}></Button>

            </Modal>
        </Container>
            </header>

       
    )
}