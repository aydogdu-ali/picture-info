import React, { useState } from 'react'




const DetailInfo = ({item}) => {
  const [detail ,setDetail] = useState(false)
  const { id, tags, likes, webformatURL,type, comments} = item
 
  return (
    <div className="fotograf">
      <section key={id}>
        <img src={webformatURL} alt={type} />
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
          <button className="btn-kaldır">Kaldır</button>
        </div>
      </section>
    </div>
  );
}

export default DetailInfo