import { useRef } from "react";

export default function BmiForm({ setResult }) {
    const weightInput = useRef();
    const heightInput = useRef();


    function calculateBMI(e) {
        e.preventDefault();

        const weight = weightInput.current.value;
        const height = heightInput.current.value;

        const bmi = weight / (height * height);

        setResult(bmi);
    }

    function clearForm(e) {
        e.preventDefault();
        weightInput.current.value = null;
        heightInput.current.value = null;
        setResult(-1);
    }

    return (
        <form onSubmit={calculateBMI}>
            <div className="form-group">
                <label htmlFor="weight">Weight (Kg)</label>
                <input ref={weightInput}
                    className="form-control"
                    id="weight"
                    type="number"
                    min={1}
                    required
                    step={".01"} />
            </div>
            <div className="form-group">
                <label htmlFor="height">height (m)</label>
                <input ref={heightInput}
                    className="form-control"
                    id="height" type="number"
                    min={1}
                    required
                    step={".01"} />
            </div>
            <div className="form-group">
                <button className="btn btn-primary">Calculate</button>
                <button className="btn btn-secondary" onClick={clearForm}>Clear Form</button>
            </div>
        </form>
    )
}
