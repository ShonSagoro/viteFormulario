import OptionRequest from "../atoms/OptionRequest";

function CardOption(props) {
    console.log("Entre idiota")
    return (
        <>
            <OptionRequest
                    value={props.value}
            />
        </>
    );
}

export default CardOption;