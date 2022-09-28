import CardAsk from "./CardAsk";

function Ask() {
        // Formulario para entregar comida a domicilio
    const requests =[
        {
            ask: "Name: ", 
            idF: "nameForm",
            type: "text"
        },
        {
            ask: "LastName: ", 
            idF: "lastNameForm",
            type: "text"
        },
        {
            ask: "Email: ", 
            idF: "emailForm",
            type: "text"
        },
        {
            ask: "Direction: ", 
            idF: "directionForm",
            type: "text"
        },
        {
            ask: "Telephone: ", 
            idF: "telephoneForm",
            type: "number"
        },
        {
            ask: "Telephone2: ", 
            idF: "telephone2Form",
            type: "number"
        },
        {
            ask: "Key word: ", 
            idF: "keyWordClaveForm",
            type: "number"
        }
    ];
    return (
        <div>
            <h2>Form of Eatest</h2>
            {requests.map((request)=>{
                    return(
                        <CardAsk
                            ask={request.ask}
                            idF={request.idF}
                            type={request.type}
                        />
                    )
                })
            }

        </div> 
    )
}

export default Ask;