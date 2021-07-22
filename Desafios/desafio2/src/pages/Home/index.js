import Categories from '../../components/Categories';
import CtaCard from '../../components/CtaCard';
import Footer from '../../components/Footer';
import GreatSection from '../../components/GreatSection';
import Navbar from '../../components/Navbar';
import Products from '../../components/Products';
// import './styles.css';

export default function Home(){
    return(
        <>
            {/* Navbar
                -> logo
                -> Menu (produtos, coleções, contato)
                -> signup
                -> bag
            */}
            <GreatSection bgType="greatsectionBg">
                <Navbar />
                <div>
                    <h1>Precisando de uma roupitcha nova?</h1>
                    <h2>Você veio ao lugar certo!</h2>
                    <button>Ver Promoções!</button>
                </div>
            </GreatSection>
            
            <Categories />
            {/* Display de categorias
                -> Masculino
                -> Feminino
                -> acessórios
            */}
            
            <Products/>
            {/* Display de Produtos 
                products from data.map()
                cards
                -> Imagem
                -> nome
                -> preço
                -> icone para add ao carrinho
            */}
            <GreatSection>
                {/* SecondSection
                    -> Vantagem 1
                    -> Vantagem 2
                    -> Vantagem 3
                */}
                second section
            </GreatSection>
            
            <CtaCard />
            {/* Cadastre-se
                -> pegar o email
            */}

            <Footer />
            {/* Footer 
                -> Cartões aceitos
                -> sitemap
                -> direitos reservados
                -> Feito por Pedro Thiago
            */}
        </>
    )
}