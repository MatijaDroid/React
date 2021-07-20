import {Table} from 'react-bootstrap';

function Tecaj({items}) { // MORAŠ MAPIRATI ITEMS
    return (
      < Table striped hover >
          <thead>
              <tr>
                  <th>Valuta</th>
                  <th>Jedinica</th>
                  <th>Kupovni</th>
                  <th>Prodajni</th>
              </tr>
          </thead>
          <tbody>
              {items.map(item =>( /*mapiranje podataka koje smo dobili iz API-a */
                  <tr key={item["Šifra valute"]}>
                    <td>{item["Valuta"]}</td>  {/*dohvaćanje pojedinačnog podatka kako je upisan u API-ju HNB-a*/}
                    <td>{item["Jedinica"]}</td> {/*dohvaćanje pojedinačnog podatka kako je upisan u API-ju HNB-a*/}
                    <td>{item["Kupovni za devize"]}</td> {/*dohvaćanje pojedinačnog podatka kako je upisan u API-ju HNB-a*/}
                    <td>{item["Prodajni za devize"]}</td> {/*dohvaćanje pojedinačnog podatka kako je upisan u API-ju HNB-a*/}
                  </tr>
              ))}
          </tbody>
      </Table>
    );
  }
  
  export default Tecaj;