export default function Navbar(props){

    const myProds = props.product;
    return(
        <nav>
            Essa é a navbar

            <side>
                Meus produtos:{myProds.length}
            </side>
        </nav>
    )
}