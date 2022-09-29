import "../assets/styles/inputrequest.css"

function RequestInput(props) {
    return ( 
        <>
            <input type={props.type} id={props.id}></input>
        </>
     );
}

export default RequestInput;