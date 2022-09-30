import "../assets/styles/selectrequest.css"

function SelecRequest(props) {
    return (  
        <>
            <select id={props.id}>
                {props.children}
            </select>
        </>
    );
}

export default SelecRequest;
