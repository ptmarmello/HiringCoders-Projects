import React from 'react';
import data from '../../data/products.json'
import { ProductCard } from '../Cards'
import './styles.css';

export default function Products(props){
    
    // const [produtos, setProdutos] = React.useState([]);
    return(
        // aqui talvez tenha que ser uma grid
        < >
            <h2 id={props.id}>Nossos Produtos</h2>
            <section className="products">
                <ul>
                    {data.map( product => {
                        return(
                            <ProductCard id={product.id}>
                                <img alt={product.product} src={product.image} />

                                    <h2>{product.product}</h2>
                                <div className="priceTag">
                                    <p>{product.price}</p>
                                    <button onClick={() => {
                                        const data = {
                                            id: product.id,
                                            product: product.product
                                        }
                                
                                        if(props.produtos == null || props.produtos === undefined){
                                            props.changes(data);
                                            localStorage.setItem(`cart-products`,JSON.stringify(...props.produtos));
                                        }
                                        else{
                                            props.changes([...props.produtos, data])
                                            localStorage.removeItem(`cart-products`);
                                            localStorage.setItem(`cart-products`,JSON.stringify(props.produtos));
                                        }
                                        
                                    }}>
                                        add
                                    </button>
                                </div>
                            </ProductCard>
                        )}
                    )}
                </ul>
            </section>
        </>
    )
}