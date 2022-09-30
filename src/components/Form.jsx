import "../assets/styles/form.css"
import Ask from "./Ask";
import AskReference from "./AskReference";
import AskConfirm from "./AskConfirm";
import ButtonSubmitRequest from "../atoms/ButtonSubmitRequest";
import AskSelect from "./AskSelect";
import photo from "../assets/img/61cf08ced42c2478868f61236bfb0201.jpg"



function Form() {
    return ( 
        <>
        <div className="content">
            <div className="img">
                <img src={photo}></img>
            </div>
            <div className="form">
                <Ask></Ask>
                <AskReference></AskReference>
                <AskSelect></AskSelect>
                <AskConfirm></AskConfirm>
                <ButtonSubmitRequest></ButtonSubmitRequest>
            </div>
        </div>
        
        </>
     );
}

export default Form;