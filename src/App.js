
import { useState, useEffect } from "react";
import Loading from "./components/loading/Loading"
import Info from "./components/info/Info"
import "./App.css";



function App() {
  // önce stateleri tanımlıyorum.
  // sayfa açılırken kullanıcıya gösterilecek mesaj
  // const [loading, setLoading] = useState(true);
 // API den gelen  veriyi tutacak state
  const [show, setShow] = useState([]);

  //API'den veri çekmek için fonksiyonu tanımlıyorum.
 
 
  
  const getImage = () => {
    const url = `https://pixabay.com/api/?key=31725179-e9547203f59a4095ebc0c6c08&per_page=6&lang=tr`;

   
    try {
      fetch(url)
      .then((res) => res.json())
      .then((data) => setShow(data.hits));
    
    } catch (error) {
      console.log(error);
     
    }
  }

  // Api'yi render dan sonra 1 kere çağırmak için
  //useEffect içinde kullanıyorum.
useEffect(()=>{
  getImage()
},[])
      
 
console.log(show)

// veri yüklenirken ekranda gösterilecek componenti çağırıyorum


  return (
    <div className="App">
     
      <Info show={show} />
    </div>
  );
}

export default App;
