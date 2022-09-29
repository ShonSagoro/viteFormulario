import OptionRequest from "../atoms/OptionRequest";
import SelecRequest from "../atoms/SelectRequest";

function AskSelect() {
    const options=["Alone","My partner","Family"]
    return ( 
        <>
            <SelecRequest>
                {options.forEach(option => {
                    return(
                        <OptionRequest
                            value={option}
                        />
                    )
                })}
            </SelecRequest>
            
        </>
     );
}

export default AskSelect;