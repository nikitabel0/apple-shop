import { createPortal } from 'react-dom'
import './modal.css'
import { useRef, useEffect} from 'react'

export default function Modal({children, open}){
    const dialog = useRef()

    useEffect(()=>{
        if(open){
            dialog.current.showModal()
        }else{
            dialog.current.close()
        }
    },[open])
 
    return createPortal(
        <dialog ref={dialog}>{children} 
        <input type="text" />
        
        </dialog>,
        document.getElementById('modal')
      )
}