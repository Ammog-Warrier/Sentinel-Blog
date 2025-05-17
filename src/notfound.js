import {Link} from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This page was not found</p>
            <Link to="/">Go back to home</Link>
        </div>
     );
}




 
export default NotFound;