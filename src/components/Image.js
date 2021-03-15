import React,{useState} from 'react';
import axios from 'axios';

function Image() {
  const[images,setImages] = useState([]);


const handleClick =(e) => {
  e.preventDefault();
  axios.get('https://source.unsplash.com/user/erondu/100x100')
  .then(res => {
    console.log(res)
    setImages([...images,res.config.url])
    // console.log(images)
  
  })
  .catch(err => {
    console.log(err)
  
  })

}
  return (

    <div className="App">
      <div>
      <button onClick={handleClick}> Add</button>
      </div>
      <div className="image">

     {images.map((image,idx) => {
       return (
      <img src ={image} key={idx}/>
       )
     })}
     </div>
     </div>
  );
}

export default Image;
