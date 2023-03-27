import Card from "../card/Card";
import Header from "../header/Header";
import Lengroup from "../Lengroup/Lengroup";
import Main from "../main_sec/Main";
import Product from "../produkt/Product";
import Sertfikat from "../sertifikat/sertfikat";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>

      <main>
        <Main></Main>
        <Lengroup></Lengroup>
        <Sertfikat></Sertfikat>
        <Product></Product>
      </main>
    </>
  );
}

export default App;
