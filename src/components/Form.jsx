import Ask from "./Ask";
import Confirm from "./Confirm";
import Reference from "./References";
import Select from "./Select";
import "../assets/styles/form.css"

function Form() {
    return ( 

        <div className="form">
            <Ask></Ask>
            <Reference></Reference>
            <Select></Select>
            <Confirm></Confirm>
        </div>
     );
}

export default Form;