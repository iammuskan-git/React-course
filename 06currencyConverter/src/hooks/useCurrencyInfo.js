import { useEffect, useState } from "react";

function useCurrencyInfo(currency){

    useEffect(() => {    // useEffect hooks
        // useState hooks
        const [data, setData] = useState({})


        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/
        latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        
        console.log(data);
        
    },  [currency])

    return data
}


export default useCurrencyInfo;