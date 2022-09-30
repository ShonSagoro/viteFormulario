import CardAsk from "./CardAsk"

function Ask() {
    const requests =[
        {
            content: "Name: ", 
            id: "nameForm",
            type: "text"
        },
        {
            content: "LastName: ", 
            id: "lastNameForm",
            type: "text"
        },
        {
            content: "Email: ", 
            id: "emailForm",
            type: "email"
        },
        {
            content: "Direction: ", 
            id: "directionForm",
            type: "text"
        },
        {
            content: "Telephone: ", 
            id: "telephoneForm",
            type: "number"
        },
        {
            content: "Telephone2: ", 
            id: "telephone2Form",
            type: "number"
        },
        {
            content: "Key word: ", 
            id: "keyWordForm",
            type: "number"
        },
        {
            content: "Password: ", 
            id: "passwordForm",
            type: "password"
        },
        {
            content: "Confirm password: ", 
            id: "confirmpasswordForm",
            type: "password"
        }
    ];
    return ( 
        <>
        <h2>Register Eatest</h2>
        {requests.map((request)=>{
            return(
                <CardAsk    
                    content={request.content}
                    id={request.id}
                    type={request.type}
                />
            )
        })}
        
        </>
     
    );
}

export default Ask;