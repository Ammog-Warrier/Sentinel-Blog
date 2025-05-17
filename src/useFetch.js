import { useState,useEffect } from "react";


const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [pending,setpending] = useState(true);
    const [err,seterr]= useState(null);
      
    useEffect(()=>{
        const abortCont= new AbortController();

        setTimeout(()=>{
            fetch(url,{signal:abortCont.signal})
                .then(res=>{
                    if(!res.ok){
                        throw Error('Not able to fetch resources for this particular fetch');
                        
                    }
                    return res.json();

                })
                .then(data=>{
                    setdata(data);
                    setpending(false);
                    seterr(null);
                })
                .catch((err)=>{
                    if(err.name==='AbortError'){
                        console.log("Fetch Aborted");
                    }
                    else{
                        setpending(false);
                        seterr(err.message);
                    }
                    
                })
      
        },400);

        return ()=> abortCont.abort();
        
    },[url,setdata,seterr,setpending]);
    return {data,pending,err};
}
 
export default useFetch;