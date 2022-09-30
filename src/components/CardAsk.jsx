import Label from "../atoms/LabelRequest"
import Input from "../atoms/InputRequest"

function CardAsk(props) {
    return ( 
        <div>
            <Label
                id={props.id}
                content={props.content}
            />
            <Input
                type={props.type}
                id={props.id}
            />

        </div>
     );
}

export default CardAsk;