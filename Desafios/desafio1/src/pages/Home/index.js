import React from 'react';
import { CardGrid, MainCard } from '../../components/Cards';
import MainFooter from '../../components/Footer';
import SectionDivision from '../../components/SectionDivision';

import image1 from '../../assets/images/imagem1.jpg';
import image2 from '../../assets/images/imagem2.jpg';
// import image3 from '../assets/images/imagem3.jpg';
import image4 from '../../assets/images/imagem4.jpg';

export default function Home(){
    return(
        <>
            <main>
                <SectionDivision passClass={'MainSection'}>
                    <div className="MainDiv">
                        <div>
                            <h1 style={{fontSize:'40px'}}>Aproveite nossas <span style={{color:'rgb(230, 139, 66)'}}>Super Ofertas</span> de <span style={{color:'rgb(230, 139, 66)'}}>Black Friday</span> </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </SectionDivision>
                <SectionDivision passClass={'SecondarySection'} >
                    <CardGrid div1={image1} div2={image2} div3={image4} />
                    {/* aqui seria melhor se fosse typescript */}
                </SectionDivision>
                <SectionDivision passClass={'ThirdSection'}>
                    <MainCard />
                </SectionDivision>
                <MainFooter>
                    <p>Todos os direitos Reservados - Pedro Thiago Marmello @HiringCoders</p>
                </MainFooter>
            </main>
        </>
    )
}