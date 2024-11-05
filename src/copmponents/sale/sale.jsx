import RoundButton from "../button/roundButton";
import { products } from '../../data';
import Iphone from '/iphone.jpg'
import './sale.css'
import Container from "../container/container";
export default function Sale(){
    return(
        <>
            <Container>
                <h2 className="sale__title">Скидки</h2>
                <div className="sale__block">
                    <RoundButton></RoundButton>
    
                        {products.map((product)=><ul className="sale__list"><li>
                        <img src={Iphone} alt="" />
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        <p>{product.price}</p>
                        </li></ul>)}
                    <RoundButton></RoundButton>
                </div>
            </Container>
            
        </>
    )
}