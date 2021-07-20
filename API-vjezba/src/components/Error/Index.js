import {Alert} from 'react-bootstrap';

export function Index(error) { // koristimo kad želimo importati Index.js sa aliasom (ovdje je to Loader) i ne koristimo export default !!!!
    return (
      <div className = "d-flex justify-content-center">  {/* pozicioniranje preko bootstrapa jer je preko react bootstrapa uvučen css */}
        <div className="w-50">
            <Alert variant="danger">
                Došlo je do pogreške! <br/>
                Greška: {error.message}
            </Alert>
        </div>
      </div>
      
    );
  }
  