import React from 'react';
import { CardGrid, MainCard } from '../components/Cards';
import MainFooter from '../components/Footer';
import SectionDivider from '../components/SectionDivider';

export default function Home(){
    return(
        <main>
            <SectionDivider image={abd}>

            </SectionDivider>
            <SectionDivider image={abd}>
                <CardGrid div1={adc} div2={abc} div3={abc} />
                {/* aqui seria melhor se fosse typescript */}
            </SectionDivider>
            <MainFooter>
                <MainCard />
            </MainFooter>
        </main>
    )
}