import CardOption from "./CardOption"
import Label from "../atoms/LabelRequest"
import "../assets/styles/selectrequest.css"

function CardSelect(props) {
    const options=props.options;
    console.log(options)
    return ( 
        <>
            <Label
                id={props.id}
                content={props.content}
            />
            <select id={props.id}>
                {options.map((option)=>{
                        return(
                            <>
                                <CardOption
                                    value={option.value}
                                />       
                            </>  
                        )       
                })}    
            </select>
            
        </>
     );
}

export default CardSelect;