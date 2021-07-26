import React, {useState} from 'react';
import './styles.css';

export default function CtaCard(){
    const [email, setEmail] = useState('');

    const handleEmail = event =>{setEmail(event.target.value);}

    

    return(
        <section className="ctaSection">
            <div className="cta" id="loadingPlace">
                <div className="" >
                    <h2>Receba nossas Ofertas</h2>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    let loadingPlace = document.getElementById('loadingPlace');
                    const data = {
                        "email": email
                    }
                    localStorage.setItem("compactformData", JSON.stringify(data));
                    setTimeout(() => {
                        loadingPlace.innerHTML = `<p> Enviando... </p>`
                        setTimeout(() => {
                            loadingPlace.innerHTML = `<p> Enviado! </p>`
                        },1000);
                    },2000);
                }} >
                    <fieldset>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" inputMode="email" value={email} autoComplete="email" onChange={handleEmail} placeholder="" />
                    </fieldset>
                    <button type="submit">
                        Receber
                    </button>
                </form>
            </div>
        </section>
    )
}