import { useNavigate } from "react-router-dom";
import Container from "../../copmponents/container/container";
import { products } from "../../data";
import './products.css'

export default function Products(){
    const negative = useNavigate()
    const handProductClick = (id) =>{
        negative(`productDetails/${id}`)
    }
    
    return(
        <>
          <Container>
               <ul className="product-list" >
                    {products.map((product)=>(<li onClick={()=>handProductClick(product.id)} className="product-item">
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