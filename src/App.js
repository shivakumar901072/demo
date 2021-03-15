import React from 'react';
import './App.css';
import Form from './components/Form'
import Fetch from './components/Fetch';
import Counter from './components/Counter'
import Image from './components/Image';


function App() {
  // const [posts,setPosts] = useState([])
  // const [hasError, setHasError] = useState(false)

// useEffect (()=> {

  

// }, []);


  return (
      <div>
        {/* {posts.map(posts => 
        <li key ={posts.id}>{posts.title}</li>
        )} */}
        <Form />
        <Image />
      {/* <Fetch /> */}
      {/* <Counter /> */}
      </div>
  )
}

export default App;
