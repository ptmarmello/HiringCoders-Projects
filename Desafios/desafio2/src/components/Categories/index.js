import { CategoryCard } from "../Cards";
import './styles.css';

export default function Categories(){
    return(
        <div className="catGrid" >
            <CategoryCard title="Feminino" />
            <CategoryCard title="Masculino" />
            <CategoryCard title="Acessorios" />
        </div>
    )
}