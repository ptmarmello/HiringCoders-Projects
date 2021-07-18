import React from 'react';

export default function MainFooter(props){
    return(
        <footer>
            <hr/>
            {props.children}
        </footer>
    )
}