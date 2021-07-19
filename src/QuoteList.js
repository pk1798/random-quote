import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const QuoteList = () => {

    const { name } = useParams()
    const [quotes, setQuotes] = useState([]);


    useEffect(()=>{
        fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${name}`)
        .then(res=> {
          return res.json();
        })
        .then(data => {
            setQuotes(data.data)
        })
      },[])

    return ( 
        <>
        <h2>{name}</h2>
        <div className="quotes-container">
            {quotes.map(quote=> <h3>{quote.quoteText}</h3>)}
        </div>
        </>
     );
}
 
export default QuoteList;