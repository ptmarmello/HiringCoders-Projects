import React from 'react';
import { ProductCard } from '../../components/Cards';
import Categories from '../../components/Categories';
import CtaCard from '../../components/CtaCard';
import Footer from '../../components/Footer';
import GreatSection from '../../components/GreatSection';
import Navbar from '../../components/Navbar';
import Products from '../../components/Products';
import './styles.css';


export default function Home(){
    const [produtos, setProdutos] = React.useState([]);
    // const storage = localStorage.getItem(`cart-products`);

    // console.log("Valores",value)


    return(
        <>
            {/* Navbar
                -> logo
                -> Menu (produtos, coleções, contato)
                -> signup
                -> bag
            */}
            <GreatSection bgType="greatsectionBg">
                <Navbar value={produtos} changes={setProdutos} />
                <div className="greatDiv">
                    <h1>Precisando de uma roupitcha nova?</h1>
                    <h2>Você veio ao lugar certo!</h2>
                    <button onClick={() => {
                        const dest = document.getElementById("prds").offsetTop;
                        // console.log("destino",dest)
                        window.scrollTo(0, dest - 15);
                    }} >Ver Promoções!</button>
                </div>
            </GreatSection>
            
            <Categories />
            {/* Display de categorias
                -> Masculino
                -> Feminino
                -> acessórios
            */}
            
            <Products produtos={produtos} changes={setProdutos} id={"prds"}/>
            {/* Display de Produtos 
                products from data.map()
                cards
                -> Imagem
                -> nome
                -> preço
                -> icone para add ao carrinho
            */}
            <>
                {/* SecondSection
                    -> Vantagem 1
                    -> Vantagem 2
                    -> Vantagem 3
                */}
                <h2 style={{marginTop:'4vh'}}>Vantagens</h2>
                <div className="advantageDiv">
                    <ul>
                        <ProductCard id={1} key={1}>
                            <img alt="icone_1" src="https://via.placeholder.com/300" />
                            <p>Descrição da vantagem</p>
                        </ProductCard>
                        <ProductCard id={2} key={2}>
                            <img alt="icone_2" src="https://via.placeholder.com/300" />
                            <p>Descrição da vantagem</p>
                        </ProductCard>
                        <ProductCard id={3} key={3}>
                            <img alt="icone_3" src="https://via.placeholder.com/300" />
                            <p>Descrição da vantagem</p>
                        </ProductCard>
                    </ul>
                </div>
            </>
            
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