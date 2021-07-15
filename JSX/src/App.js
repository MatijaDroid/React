function App() {
  const prvi = "Ovo je prvi string."; //varijable moraju biti unutar bloka
  const drugi = "Ovo je drugi string.";

  const nekiString = (val1, val2) => {
    return `${val1} ${val2}`; //backtick ` altGR + 7 za template literale
  };

  const rezultat = prvi.length > drugi.length; // riješenje

  // const duljinaStringa = (val1, val2) => {  // moje riješenje sa funkcijom
  //   let x = val1.length;
  //   let y = val2.length;
  //   if (x > y){
  //     return `Prvi string je dulji!`;
  //   }
  //   else{
  //     return `Drugi string je dulji!`;
  //   }

  // };

  return (
    <div>
      JSX vježba.
        <div> Lorem Ipsum bla bla bla.</div>
        <div> Ovo je vrijednost varijable 1:  "{prvi}"</div>
        <div>{ nekiString(prvi,drugi) }</div>
        {/* <div>{ duljinaStringa(prvi,drugi) }</div>  moje riješenje sa funkcijom*/}
        {(rezultat) && <p>Prvi je veći</p>}
        {!(rezultat) && <p>Drugi je veći</p>}
    </div>  //u reactu mora postojati parent element
  );
}

export default App;
