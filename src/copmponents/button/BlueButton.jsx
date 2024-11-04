import './button.css'
export default function BlueButton({children,onClick,className}){
    return <button  onClick={onClick} className='button-blue'>{children}</button>
    
}