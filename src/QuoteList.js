import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import shortid from "shortid";

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
      },[name])

    return ( 
        <div className="quotes-conatiner">
            <h2>{name}</h2>
            <div className="quotes-container">
                {quotes.map(quote=> <p key={shortid.generate()}>{quote.quoteText}</p>)}
            </div>
        </div>
        
     );
}
 
export default QuoteList;