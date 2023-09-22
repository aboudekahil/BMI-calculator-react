export default function BmiResult({result}){
    if(result < 0) return <h1></h1>;

    let resultValue = `Result: ${result.toFixed(2)} | `;

    if(result < 18.5){
        resultValue += "Under weight";
    }else if(result <= 24.999){
        resultValue += "Normal weight";
    }else if(result <= 29.999){
        resultValue += "Over weight";
    }else{
        resultValue += "Obese";
    }

    return <h1>{resultValue}</h1>
}
