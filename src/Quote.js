import { Link } from "react-router-dom";

const Quote = (props) => {
    return ( 
        <div className="container">
            <h1>{props.quote}</h1>
            <Link to={`/${props.author}`}>{props.author}</Link>
            <p> {props.genre}</p>
        </div>
     );
}
 
export default Quote;