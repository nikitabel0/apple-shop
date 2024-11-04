import { useState } from 'react';
import './Options.css'
export default function Options() {
    const basePrice = 126990
    const[price,serPrice]=useState(basePrice)
    const handleOptionChange = (event)=>{
        const option = event.target.id

        switch(option){
            case 'esim':
            case 'nano-sim'
        }
    }

    return (
     <div className='Product-info__block'>
            <div>
                <p>148990</p>
                <p>Артикул22698</p>
            </div>
            <h3>{price}</h3>
            <div className='blue-line'></div>
            <ul className="options-list">
                <li>
                    <input type="radio" name="sim" id="esim" defaultChecked />
                    <label htmlFor="esim">Esim - 123 990 р</label>
                </li>
                <li>
                    <input type="radio" name="sim" id="nano-sim" />
                    <label htmlFor="nano-sim">nano-SIM и eSIM - 123 990 р</label>
                </li>
                <li>
                    <input type="radio" name="sim" id="dual-sim" />
                    <label htmlFor="dual-sim">2 nano-SIM - 133 990 р</label>
                </li>
                <li>
                    <input type="radio" name="sim" id="expanded" />
                    <label htmlFor="expanded">Расширенный +1500 р</label>
                </li>
                <li>
                    <input type="radio" name="sim" id="package" />
                    <label htmlFor="package">Упаковка +990 р</label>
                </li>
            </ul>
     </div>
    );
}