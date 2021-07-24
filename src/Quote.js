import { Link } from "react-router-dom";

const Quote = (props) => {
    return ( 
        <div className="quote-container">
        <div className="quote">
            <p>{props.quote}</p>
        </div>
        <div className="button">
            <Link to={`/${props.author}`}>{props.author}</Link>
            <p> {props.genre}</p>
        </div>
        </div>
     );
}
 
export default Quote;