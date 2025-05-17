
import BlogList from "./bloglist";
import useFetch from "./useFetch";
const Home = () => {
   const {data:blogs,pending,err}=useFetch('http://localhost:8001/blogs');
    

    
    return ( 
        <div className="home">
            {err && <div>{err}</div>}
            {blogs && <BlogList blogs ={blogs} title="All Blogs" />}
            {pending && <div>Loading.......</div>}
            
            
        </div>
    )
}
     

 
export default Home;