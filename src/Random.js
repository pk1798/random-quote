import { useEffect, useState } from 'react';
import shortid from 'shortid';
import Quote from './Quote';

const Random = () => {

    
  const [quote, setQuote] = useState('Loading random quote...');
  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState('')
  const [isSending, setIsSending] = useState(false)

  useEffect(()=>{
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then(res=> {
      return res.json();
    })
    .then(data => {
      setQuote(data.data[0].quoteText)
      setAuthor(data.data[0].quoteAuthor)
      setGenre(data.data[0].quoteGenre)
    })
  },[isSending])

  const handleGenerate = () => {
      setIsSending(!isSending)
  }

    return ( 
            <>
                <button onClick={handleGenerate}>Generate</button> 
                <div className="container">
                        {quote && <Quote quote={quote} key={shortid.generate()} author={author} genre={genre}/>}
                </div>
            </>
     );
}
 
export default Random;