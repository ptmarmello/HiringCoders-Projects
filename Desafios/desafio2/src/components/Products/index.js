import data from '../../data/products.json'
import { ProductCard } from '../Cards'
import './styles.css';

export default function Products(){
    return(
        // aqui talvez tenha que ser uma grid
        <section className="products" >
            <ul>
                {data.map( product => {
                    return(
                        <ProductCard id={product.id}>
                            <img alt={product.product} src={product.image} />

                            <div>
                                <h2>{product.product}</h2>
                                <p>{product.price}</p>
                            </div>
                        </ProductCard>
                    )}
                )}
            </ul>
        </section>
    )
}