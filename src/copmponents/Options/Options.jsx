import React, { useEffect, useState } from 'react';
import './Options.css';
import { products } from '../../data';
import { useParams } from 'react-router-dom';
import CounterButton from '../button/CounterButton.JSX';
export default function Options() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [price, setPrice] = useState(null);
    const [count, setCount] = useState(1);
   


    useEffect(() => {
        const foundProduct = products.find((p) => p.id === parseInt(id));
        if (foundProduct) {
            foundProduct.price = parseFloat(foundProduct.price.replace(/\s/g, '')); 
        }
        setProduct(foundProduct);
    }, [id, products]);

    useEffect(() => {
       
        if (product) {
            setPrice(product.price);
        }
    }, [product]);

    const handleOptionChange = (event) => {
        const option = event.target.id;
        let newPrice = product ? product.price : 0; 
        
        switch (option) {
            case 'esim':
            case 'nano-sim':
                break;
            case 'dual-sim':
                newPrice += 10000;
                break;
            case 'expanded':
                newPrice += 1500;
                break;
            case 'package':
                newPrice += 990;
                break;
            default:
                break;
        }
        setPrice(newPrice*count);
    };

    return (
        <div className='Product-info__block'>
            <div>
                <p></p>
                <p>Артикул: 22698</p>
            </div>
            <h3>{price ? `${price*count} р` : 'помогите'}</h3>
            <div className='blue-line'></div>
            <ul className="options-list">
                <li>
                    <input 
                        type="radio" 
                        name="sim" 
                        id="esim" 
                        defaultChecked 
                        onChange={handleOptionChange} 
                    />
                    <label htmlFor="esim">Esim - 123 990 р</label>
                </li>
                <li>
                    <input 
                        type="radio" 
                        name="sim" 
                        id="nano-sim" 
                        onChange={handleOptionChange} 
                    />
                    <label htmlFor="nano-sim">nano-SIM и eSIM - 123 990 р</label>
                </li>
                <li>
                    <input 
                        type="radio" 
                        name="sim" 
                        id="dual-sim" 
                        onChange={handleOptionChange} 
                    />
                    <label htmlFor="dual-sim">2 nano-SIM - 133 990 р</label>
                </li>
                <li>
                    <input 
                        type="radio" 
                        name="sim" 
                        id="expanded" 
                        onChange={handleOptionChange} 
                    />
                    <label htmlFor="expanded">Расширенный +1500 р</label>
                </li>
                <li>
                    <input 
                        type="radio" 
                        name="sim" 
                        id="package" 
                        onChange={handleOptionChange} 
                    />
                    <label htmlFor="package">Упаковка +990 р</label>
                </li>
            </ul>
            <CounterButton setCount={setCount}  count={count} />

            <div><button>+</button>
            
            

                
            </div>
        </div>
    );
}