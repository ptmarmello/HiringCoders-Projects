
function CardTemplate(props){
    return(
        <div>
            {props.children}
        </div>
    )
}

export function CategoryCard(props){
    return(
        <CardTemplate>
            <img src={props.image} alt={props.title}/>
            <h4>{props.title}</h4>
        </CardTemplate>
    )
}

export function ProductCard(props){
    // refatorar aqui fora para abrir o produto e fazer tudo aqui logo
    return(
        <CardTemplate as="button">
            <li key={props.id}>
                {props.children}
            </li>
        </CardTemplate>
    )
}