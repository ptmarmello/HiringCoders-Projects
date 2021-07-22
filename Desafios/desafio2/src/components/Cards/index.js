
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
            {props.title}
        </CardTemplate>
    )
}

export function ProductCard(props){
    // refatorar aqui fora para abrir o produto e fazer tudo aqui logo
    return(
        <CardTemplate>
            <li key={props.id}>
                {props.children}
            </li>
        </CardTemplate>
    )
}