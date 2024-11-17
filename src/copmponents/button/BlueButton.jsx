import './button.css'
export default function BlueButton({children,onClick,style}){
    return <button style={style}  onClick={onClick} className='button-blue'>{children}</button>
    
}