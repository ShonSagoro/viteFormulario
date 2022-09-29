import "../assets/styles/form.css"
import Ask from "./Ask";
import AskReference from "./AskReference";
import AskConfirm from "./AskConfirm";
import ButtonSubmitRequest from "../atoms/ButtonSubmitRequest";
// import AskSelect from "./AskSelect";


function Form() {
    return ( 
        <div className="form">
            <Ask></Ask>
            <AskReference></AskReference>
            {/* <AskSelect></AskSelect> */}
            <AskConfirm></AskConfirm>
            <ButtonSubmitRequest></ButtonSubmitRequest>
        </div>
     );
}

export default Form;