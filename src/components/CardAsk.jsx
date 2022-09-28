function CardAsk(props) {
    return (
        <div>
            <label>{props.ask}</label>
            <input type={props.type} id={props.idF}></input>
        </div>
    
    );
}

export default CardAsk;