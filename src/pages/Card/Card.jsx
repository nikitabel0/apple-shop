import Header from "../../copmponents/Header/header";
import Options from "../../copmponents/Options/Options";
import { products } from "../../data";
import Products from "../Products/products";

export default function Card(){
    return(
        <>
        <Products></Products>
        <Header></Header>
        <div className="Card__block">
            <img src="" alt="" />
            <img src="" alt="" />
            <h2>price: 123123 </h2>
            <p>«Натуральный титан» | Natural Titanium</p>
            <Options></Options>
        </div>
    </>
    )
}