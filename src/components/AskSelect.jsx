import CardSelect from "./CardSelect";
function AskSelect() {
    const requests=[
        {
            content: "Who do you live with?",
            id: "live_with",
            options: [
                {
                    value: "Alone"
                },
                {
                    value: "With parents"
                },
                {
                    value: "With family"
                }
            ]
        }
    ]
    return ( 
        <>
         {requests.map((request)=>{
                return(
                    <>
                        <CardSelect
                            content={request.content}
                            id={request.id}
                            options={request.options}
                        />
                    </>   
                )
        })}
            
        </>
     );
}

export default AskSelect;