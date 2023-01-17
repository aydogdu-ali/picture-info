import React, { useState } from 'react'



// gelen veri ve fonksiyonu karşıladım.
const DetailInfo = ({item, removeFoto}) => {
  const [detail ,setDetail] = useState(false)
  //gelen verinin içeriğini destructuring yöntemi ile açtım. DOM'da göstereceğim bilgileri alıyoruz. Size kalmış
 const { id, tags, likes, webformatURL,type, comments} = item

  
 
  return (
    <div className="fotograf">
      <section key={id}>
        <img src={webformatURL} alt={type} />
        {/*detay ile ilgili koşullu ifade ternary öperatörü kullanımı*/}
        <button className="btn" onClick={() => setDetail(!detail)}>
          {detail ? "Detay Gizle" : " Detayı Göster "}
        </button>

        {detail ? (
          <footer className="display">
            <div className="foto-info">
              <h4> Kategorisi : {tags.split(",")[2]}</h4>
              <h4 className="picture-price">Fiyatı: 3,{likes}₺</h4>
              <h4> Satılan Adet {comments}</h4>
            </div>
          </footer>
        ) : (
          ""
        )}
        <div className="btn-sil">
          {/*silme fonksiyonu*/}
          <button className="btn-kaldır" onClick={()=>(removeFoto(id))}>Kaldır</button>
        </div>
      </section>
    </div>
  );
}

export default DetailInfo