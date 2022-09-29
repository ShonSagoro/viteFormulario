import Label from "../atoms/LabelRequest"
import Reference from "../atoms/ReferenceRequest"

function CardReference(props) {
    return (    
        <div id={props.id+"div"}>
        <Label
            id={props.id}
            content={props.content}
        />
        <Reference
            id={props.id}
        />

    </div>
    );
}

export default CardReference;