import CardReference from "./CardReference";

function AskReference() {
    const references=[
        {
            content: "Reference: ", 
            id: "reference"
        },
        {
            content: "Reference 2: ", 
            id: "reference2"
        }
    ]
    return ( 
    <>
        {references.map((reference)=>{
                return(
                    <CardReference
                        content={reference.content}
                        id={reference.id}
                    />
                )
        })}
    </> 
    );
}

export default AskReference;