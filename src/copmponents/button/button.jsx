import './button.css'

export default function Button({children,onClick,style}){
    return <button style={style} onClick={onClick} className='button'>{children}</button>
    
}
