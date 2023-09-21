import { useState } from "react";
import BmiForm from "../components/BmiForm";
import BmiResult from "../components/BmiResult";

export default function BmiCalculator(){

    let [result, setResult] = useState(-1);

    return (
        <>
            <BmiForm setResult={setResult} />
            <BmiResult result={result} />
        </>
    );
}
