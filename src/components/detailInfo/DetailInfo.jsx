import React from 'react'




const DetailInfo = ({item}) => {
  const { id, tags, likes, webformatURL,type, comments} = item
 
  return (
    <div>
      <section key={id}>
        <img src={webformatURL} alt={type} />
        <footer>
          <div className="picture-info">
            <h4> Kategorisi : {tags.split(",")[2]}</h4>
            <h4 className="picture-price">Fiyatı: 3,{likes}₺</h4>
            <h4> Satılan Adet {comments}</h4>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default DetailInfo