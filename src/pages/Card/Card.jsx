import { useParams } from "react-router-dom";
import Header from "../../copmponents/Header/header";
import Options from "../../copmponents/Options/Options";
import { products } from "../../data";
import { useEffect, useState } from "react";

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
            <div className="Card__block">
                <img src="" alt="" />
                <img src="" alt="" />
                <h2>{product ? product.title : "Загрузка..."}</h2>
                <p>«Натуральный титан» | Natural Titanium</p>
                <Options></Options>
            </div>


        
        </>
       
    )
}