import "../assets/styles/confirm.css"

function Confirm() {
    return ( 
        <>
            <div className="checkConfirm">
                <label for="ticket">Notify your email with a ticket</label>
                <input type="checkbox" id="ticket"></input>
            </div>
           
            <p>Eatest is a company that takes its time preparing its dishes, do you agree to wait a maximum of 30 minutes to receive your order once you leave the premises?</p>
            <div className="checkConfirm">
                <label for="agree">I agree</label>
                <input type="checkbox" id="agree"></input>
            </div>

            <input type="submit" value="submit"></input>
        </>
    );
}

export default Confirm;