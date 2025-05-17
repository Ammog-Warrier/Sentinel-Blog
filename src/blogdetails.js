import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Blogdetails = () => {
    const {id}= useParams();
    console.log(id);
    const {data:blog,err,pending}=useFetch('http://localhost:8001/blogs/'+id);

    const history=useHistory();
    const handleclick=()=>{
        fetch('http://localhost:8001/blogs/'+blog.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');

       
        })

    }




    return ( 
        <div className="blog-details">
            {pending && <div>Loading...</div>}
            {err&&<div>{err}</div>}
            {blog &&(
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div >{blog.body}</div>
                    <button onClick={handleclick}>Delete</button>


                </article>
            )}
            
        </div>
     );
}
 
export default Blogdetails;