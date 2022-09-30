import "../assets/styles/optionrequest.css"
function OptionRequest(props) {
    console.log("Entre")
    return (  
        <>
            <option value={props.value}>{props.value}</option>
        </>
    );
}

export default OptionRequest;