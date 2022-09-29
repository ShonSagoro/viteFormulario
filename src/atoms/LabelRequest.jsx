import "../assets/styles/labelrequest.css"

function Label(props) {
    return ( 
        <>
            <label for={props.id}>{props.content}</label>
        </>
     );
}

export default Label;