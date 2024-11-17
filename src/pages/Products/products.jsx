import { useNavigate } from "react-router-dom";
import Container from "../../copmponents/container/container";
import { products } from "../../data";
import './products.css'
import useInput from "../../hooks/useInput";

export default function Products(){
    const input =useInput()
    const negative = useNavigate()
    const handProductClick = (id) =>{
        negative(`productDetails/${id}`)
    }
    
    return(
        <>
          <Container>
                <input  type="text"{...input}/>
               <ul className="product-list" >
                    {products.filter(product=>product.title.toLocaleLowerCase().includes(input.value.toLocaleLowerCase())).map((product)=>(<li onClick={()=>handProductClick(product.id)} className="product-item">
                            <img   className="product-image" />
                            <div className="product-info">
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-description">{product.description}</p>
                                <p className="product-price">{product.price}</p>
                                <div className="product-actions">
                                    <button className="product-action">+</button>
                                    <button className="product-action">🛒</button>
                                    <button className="product-action">⋯</button>
                                </div>
                            </div>
                        </li>
                        ))}
               </ul>
          </Container>
        </>
    )
}