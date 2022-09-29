import "../assets/styles/optionrequest.css"
function OptionRequest(props) {
    return (  
        <>
            <option value={props.value}>{props.value}</option>
        </>
    );
}

export default OptionRequest;