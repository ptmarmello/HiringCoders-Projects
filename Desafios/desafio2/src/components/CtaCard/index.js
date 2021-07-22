import React, {useState} from 'react';
import './styles.css';

export default function CtaCard(){
    const [email, setEmail] = useState('');

    const handleEmail = event =>{setEmail(event.target.value);}

    function handleSubmit(e){
        e.preventDefault();
        const data = {
            "email":email
        }
        localStorage.setItem(JSON.stringify(data));
    }

    return(
        <section className="ctaSection">
            <div className="cta">
                <div className="" >
                    <h2>oloco</h2>
                </div>
                <form onSubmit={handleSubmit} >
                    <fieldset>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" inputMode="email" value={email} autoComplete="email" onChange={handleEmail} placeholder="" />
                    </fieldset>
                    <button type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    )
}