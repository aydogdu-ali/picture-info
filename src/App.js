import { useState, useEffect } from "react";
import Loading from "./components/loading/Loading";
import Info from "./components/info/Info";
import "./App.css";

function App() {
  // önce stateleri tanımlıyorum.
  // sayfa açılırken kullanıcıya gösterilecek mesaj
  const [loading, setLoading] = useState(true);
  // API den gelen  veriyi tutacak stateyi tanımlıyorum
  const [show, setShow] = useState([]);

  // FETCH  yöntemi ile veri çekimiAPI'den veri çekmek için fonksiyonu tanımlıyorum.
  // const getImage = () => {
  //   const url = `https://pixabay.com/api/?key=31725179-e9547203f59a4095ebc0c6c08&per_page=6&lang=tr`;
  //  setLoading(true);
  //  try {
  //   fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => setShow(data.hits));
  // setLoading(false);
  //   setShow(show)

  // } catch (error) {
  //   console.log(error);

  // }

  // asyn-await yönteimi ile veri çekimi
  const getImage = async () => {
    const url = `https://pixabay.com/api/?key=31725179-e9547203f59a4095ebc0c6c08&per_page=6&lang=tr`;
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const show = await data.hits;
      setLoading(false);
      setShow(show);
    } catch (error) {
      console.log(error);
    }
  };

  // Api'yi render dan sonra 1 kere çağırmak için
  //useEffect içinde kullanıyorum.
  useEffect(() => {
    getImage();
  }, []);

  console.log(show);

  // fotografları sayfadan kaldıracak fonksiyonu yazıyorum.
  const removeFoto = (id) => {
    const newFoto = show.filter((show) => show.id !== id);
    setShow(newFoto);
  };

  // veri yüklenirken ekranda gösterilecek componenti çağırıyorum
  if (loading) {
    return (
      <div className="load">
        <Loading />
      </div>
    );
  }

  // Tüm fotograflar kaldırıldığınca sayfayı tekrar yükleyen koşulu yazdım.
  if (show.length === 0) {
    return (
      <div className="göster">
       
        <h2>Tüm ürünlerimizi kaldırdınız? </h2>
        <p>Tekrar bakmak istersiniz tıklayın </p>
        <button className="btn-göster" onClick={getImage}>
          Bakmak İstiyorum
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      {/*datayı ve filtreleme fonksiyonunu props olarak gönderdim*/}
      <Info show={show} setShow={setShow} removeFoto ={removeFoto}/>
    </div>
  );
}

export default App;
