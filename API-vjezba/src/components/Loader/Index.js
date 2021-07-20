import {Spinner} from 'react-bootstrap';

export function Index() { // koristimo kad želimo importati Index.js sa aliasom (ovdje je to Loader) i ne koristimo export default !!!!
    return (
      <div className = "d-flex justify-content-center vh-100 align-items-center">  {/* pozicioniranje preko bootstrapa jer je preko react bootstrapa uvučen css */}
        <Spinner animation="border" />
      </div>
      
    );
  }
  

  