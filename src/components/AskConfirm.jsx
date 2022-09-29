import CardAsk from "./CardAsk"
import "../assets/styles/askconfirm.css"

function AskConfirm() {
    const requests =[
        {
            content: "Notify your email with a ticket.", 
            id: "ticket",
            type: "checkbox"
        },
        {
            content: "Accept all the terms and conditions of Eatest.", 
            id: "term",
            type: "checkbox"
        }
        ]
    return ( 
        <div className="confirm">
            {requests.map((request)=>{
                return(
                    <CardAsk    
                        content={request.content}
                        id={request.id}
                        type={request.type}
                    />
                )
            })}
        </div>
     );
}

export default AskConfirm;