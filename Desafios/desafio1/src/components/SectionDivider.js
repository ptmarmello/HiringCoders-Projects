import React from 'react';

export default function SectionDivider(props){
    return(
        <section style={{backgroundImage:`${props.image}`}}>
            {props.children}
        </section>
    )
}