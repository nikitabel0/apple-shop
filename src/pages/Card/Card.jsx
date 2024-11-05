import { useParams } from "react-router-dom";
import Header from "../../copmponents/Header/header";
import Options from "../../copmponents/Options/Options";
import { products } from "../../data";
import { useEffect, useState } from "react";
import CounterButton from "../../copmponents/button/CounterButton.JSX";
import Container from "../../copmponents/container/container";
import './card.css'
import macbook from '/macbook.jpg'
import TransponentButton from "../../copmponents/button/TransparentButton";

export default function Card({}){
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const foundProduct = products.find((p) => p.id === parseInt(id));
        console.log(id)
        setProduct(foundProduct);
        console.log(product)
    },[id] [products]); 
    console.log(product)
 return(
        <>
            
       
            <Header></Header>
            <Container>
                <div className="product__block">
                    <img className="product__img" src={macbook} alt="" />
                 <div className="name__block">
                        <h2>{product ? product.title : "Загрузка..."}</h2>
                        <p>{product? product.description : '....'}</p>
                        <div className="button_block">
                            <TransponentButton>Все характеристики</TransponentButton>
                            <TransponentButton>Обзор</TransponentButton>
                        </div>
                 </div>
                    <Options></Options>
                </div>
            </Container>


        
        </>
       
    )
}