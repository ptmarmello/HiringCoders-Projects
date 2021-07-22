import './styles.css';

export default function GreatSection(props){
    return(
        <section className={`greatsection ${props.bgType}`}>
            {props.children}
            {/* dividir entre a que tem bg e a que não tem */}
        </section>
    )
}