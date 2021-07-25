import { CategoryCard } from "../Cards";
import './styles.css';

export default function Categories(){
    return(
        <>
            <h2>Categorias</h2>
            <div className="catGrid" >
                <CategoryCard title="Feminino" image={`https://via.placeholder.com/300`} />
                <CategoryCard title="Masculino" image={`https://via.placeholder.com/300`} />
                <CategoryCard title="Acessorios" image={`https://via.placeholder.com/300`} />
            </div>
        </>
    )
}