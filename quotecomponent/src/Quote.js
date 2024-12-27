import React,{useState} from "react";
const Quote=()=>{
const [quote, setQuote] = useState("Click the button to generate a quote");
const quotes = [
   "In the heart of our nation beats the valor of the Indian Army, where every soldier stands as a sentinel of freedom and a guardian of peace.",
     "With unwavering resolve and indomitable spirit, the Indian Army transforms sacrifice into strength, embodying the true essence of patriotism.",
     "The Indian Army: where courage meets commitment, and honor is forged in the fires of duty, safeguarding the dreams of a billion hearts.",
     "In the ranks of the Indian Army, each soldier is a beacon of hope, illuminating the path of resilience and fortitude for generations to come.",
    "The legacy of the Indian Army is written in the sacrifices made, a testament to the unyielding spirit that defends our sovereignty and nurtures our unity.",
];
 
const generateQuote=()=>{
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
}

    return(
        <div>
            <p>{quote}</p>
            <button onClick={generateQuote}>generate Quote </button>
        </div>
    )
}
export default Quote;