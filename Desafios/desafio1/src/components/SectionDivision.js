import React from 'react';

export default function SectionDivision(props){
    return(
        <section className={`${props.passClass}`}>
            {props.children}
        </section>
    )
}