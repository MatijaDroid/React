const mainTitle = {  //pisanje inline CSS-a
    color: "darkred",
    textDecoration: "underline"
}

function Role() {
    return (
        <h1 className='red-text' style = {mainTitle}>User Role </h1> //preko style ubacimo const u kojoj imamo inline stil koji želimo koristiti
    );
  }
  
  export default Role;