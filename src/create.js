import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const[title,settitle]=useState('');
    const[body,setbody]=useState('');
    const[author,setauthor]=useState('');
    const[ispending,setispending]=useState(false);
    const history=useHistory();

    const handlesubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};//Json srvers automatically add an id when we use a POST request

        setispending(true);
        fetch('http://localhost:8001/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)

        }).then(()=>{
            console.log("New Blog Added");
            setispending(false);
            history.push('/');

        })

    }
    
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handlesubmit}>
                <label >Blog Title</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e)=>settitle(e.target.value)}
                />
                <label >Blog Body</label>
                <textarea 
                 required
                 value={body}
                 onChange={(e)=>setbody(e.target.value)}>
                   
                </textarea>
                <label >Blog Author</label>
                <select value={author}
                onChange={(e)=>setauthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!ispending&&<button>Add a Blog</button>}
                {ispending&&<button disabled>Adding a Blog.......</button>}

            </form>
        </div>
      );
}
 
export default Create;