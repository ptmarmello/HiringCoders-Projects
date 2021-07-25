import React from 'react';
import data from '../../data/products.json'
import { ProductCard } from '../Cards'
import './styles.css';

export default function Products(props){
    
    // const [produtos, setProdutos] = React.useState([]);
    return(
        // aqui talvez tenha que ser uma grid
        <>
            <h2>Alguns Produtos</h2>
            <section className="products" >
                <ul>
                    {data.map( product => {
                        return(
                            <ProductCard id={product.id}>
                                <img alt={product.product} src={product.image} />

                                    <h2>{product.product}</h2>
                                <div>
                                    <p>{product.price}</p>
                                    <button onClick={() => {
                                        const data = {
                                            id: product.id,
                                            product: product.product
                                        }
                                
                                        if(props.produtos == null || props.produtos === undefined){
                                            props.changes(data);
                                            localStorage.setItem(`cart-products-${props.produtos.length}`,JSON.stringify(...props.produtos));
                                        }
                                        else{
                                            props.changes([...props.produtos, data])
                                            localStorage.setItem(`cart-products-${props.produtos.length}`,JSON.stringify(props.produtos));
                                            localStorage.removeItem(`cart-products-${props.produtos.length-1}`);
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