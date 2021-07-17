import React from 'react';

function CardTemplate(){
    return(
        <>
            <div>
                CardTemplate
            </div>
        </>
    )
}


function MainCard(){
    return(
        <CardTemplate>
            <form>
                <input type="text" />
                <input type="email" />
                <button type="submit" />
            </form>
            
        </CardTemplate>
    )
}


function CardGrid(props){
    return(
        <>
            {/* Colocar aqui uma grid para 3 "conteudos" */}
            <div>
                <img alt="" src={props.div1} />
                <h1>Blabla 1</h1>
                <p>lelelellel</p>
            </div>
            <div>
            <   img alt="" src={props.div2} />
                <h1>Blabla 1</h1>
                <p>lelelellel</p>
            </div>
            <div>
                <img alt="" src={props.div3} />
                <h1>Blabla 1</h1>
                <p>lelelellel</p>
            </div>
        </>
    )
}


export {CardTemplate, CardGrid, MainCard};