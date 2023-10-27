
import React, {useState,useEffect} from "react"

function RandomCatImage() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response =>response.json() ) 
     
      .then(data => {
        // The API returns array of objects, we r taken the first item's `url` property
        setImageUrl(data[0].url);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);  

  if (loading) {
    return <center style={{padding:100}}>Loading...</center>
  }; 
    //  if (loading){
    //     // console.log("load")
    //     return ( 
         
    //     <center style={{padding:100}}>
 
    //         <div class="spinner-border m-5" role="status">
    //           <span class="visually-hidden">Loading...</span>
    //         </div> 
    //     </center> 
    //     )

          
    //  } 
    


  if (error) {
    return <center>Error: {error}</center> 
   
  };

  return (
    <>
    <center style={{padding:100 }}>
      <h1>Random Cat Image</h1>
      <img src={imageUrl} style={{width:300,height:300}} alt="Random Cat" />
    </center> 
    
    

    </>
  );
}

export default RandomCatImage;
