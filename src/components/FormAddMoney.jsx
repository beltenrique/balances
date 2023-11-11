import { useState } from "react";

const FormAddMoney = ({ setCount, setIsValid }) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    const handleForm = e => {
        e.preventDefault();
        if (input === "" || Number(input) < 0) {
            setError(true);
            return;
        }
        setError(false);
        setCount(Number(input));
        setIsValid(true);
    }

    return ( 
        <div className="form-add-money">
            <form onSubmit={ handleForm }>
                <p>Add Initial Balance</p>
                <input type="number" placeholder="$" onChange={e => setInput(e.target.value)} />
                <input type="submit" value="Add" />
            </form>
            { error ? <p className="error">Balance Not Valid</p> : null }
            
        </div>
    );
}
 
export default FormAddMoney;