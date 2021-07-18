import React from 'react';

function CardTemplate(props){
    return(
        <div className="CardTemplate">
            {props.children}
        </div>
    )
}


function MainCard(){
    function HandleSubmit(e){
        e.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let loadingPlace = document.getElementById('loadingPlace');

        let formData = {
            name: name,
            email: email
        }

        // console.log(formData);
        localStorage.setItem('compact-form-Data', JSON.stringify(formData));

        setTimeout(() => {
            loadingPlace.innerHTML = `<p> Enviando... </p>`
            setTimeout(() => {
                loadingPlace.innerHTML = `<p> Enviado! </p>`
            },1000);
        },2000);

    }

    return(
        <CardTemplate>
            <div id="loadingPlace" className="loadingPlace">
                <form id="form" onSubmit={HandleSubmit}>
                    <h2>Receba Ofertas Exclusivas!!</h2>
                    <input type="text" id="name" placeholder="Insira seu Nome" />
                    <input type="email" id="email" placeholder="Insira seu Email" />
                    <button type="submit">
                        Receber novidades
                    </button>
                </form>
            </div>
        </CardTemplate>
    )
}


function CardGrid(props){
    return(
        <div className="cardGrid">
            {/* Colocar aqui uma grid para 3 "conteudos" */}
            <div>
                <img alt="Imagem1" src={props.div1} />
                <h3>Praesent sed elementum leo</h3>
                <p>Sed placerat quam.</p>
            </div>
            <div>
                <img alt="imagem2" src={props.div2} />
                <h3>Fusce laoreet leo ut</h3>
                <p>orci volutpat, at vulputate nulla commodo.</p>
            </div>
            <div>
                <img alt="imagem3" src={props.div3} />
                <h3>Curabitur bibendum fermentum</h3>
                <p>Proin id ultricies nunc. Etiam id justo vitae dolor</p>
            </div>
        </div>
    )
}


export {CardTemplate, CardGrid, MainCard};