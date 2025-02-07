import "./Filters.css"
import { useState, useId } from "react";

export default function Filters({changeFilters}) {

    const [minPrice, setMinPrice] = useState(0);
    const minPriceFilterId= useId();
    const categoryFilterId= useId();

    const handleChangePrice = (event) =>{
        //ALGO ESTA MAL
        setMinPrice(event.target.value);
        changeFilters(prevState => ({...prevState, minPrice: event.target.value}));
    }

    const handleChangeCategory = (event) =>{
        //ALGO ESTA MAL
        changeFilters(prevState => ({...prevState, category: event.target.value}));
    }

  return (
    <section className='filters'>
        <div>
            <label htmlFor={minPriceFilterId}>
                Precio
            </label>
            <input type="range" id={minPriceFilterId} min="0" max="1000" value={minPrice} onChange={handleChangePrice}/>
            <span>{minPrice}</span>
        </div>
        <div>
            <label htmlFor="category">
                Gategoria
            </label>
            <select id={categoryFilterId} onChange={handleChangeCategory}>
                <option value="all">Todas</option>
                <option value="beauty">Belleza</option>
                <option value="fragrances">Fragancias</option>
                <option value="furniture">Mubles</option>
                <option value="groceries">Comida</option>
            </select>
        </div>
      
    </section>
  )
}
