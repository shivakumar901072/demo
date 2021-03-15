import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
      <form>
        <label className="location" >Location Name</label>
        <label className="lat"  >Latittude</label>
        <label className="lon"  >Location Name</label><br/>
      <input className="inputLoc" type="text" placeholder="Location" ></input>
      
      <input className="inputLat" type="Number" placeholder="Lat"></input>
      
      <input className="inputLo" type="Number" placeholder="Lon"></input>
      <button  type="submit" className="btn">Submit</button>
      </form>
      </section>
    </div>
  );
}

export default App;
