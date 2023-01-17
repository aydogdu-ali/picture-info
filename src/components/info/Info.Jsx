import React from 'react'

import DetailInfo from "../detailInfo/DetailInfo"

// props olarak gelen veri ve fonksonu yakaladım ve alt componente tekrar gönderdim.
// ContexApı ya da redux  gibi 3. parti yazılımlar kullanılmıyorsa ya da reactta veri akışı aşağıdan yukarı olduğunu unutmayalım.
// Örneklerimde iç içie component yapısını kendim ve kodu inceleyenlerin anlaması için çok sık kullanıyorum.
const Info = ({ show, removeFoto  }) => {
  console.log(show);
  return (
    <>
      <div className="title">
        <h2>Ürünlerimizin Özellikleri</h2>
        <p className="underline"></p>
      </div>
      <div>
        {show.map((item) => {
          return (
            <DetailInfo key={item.id} item={item} removeFoto={removeFoto} />
          );
        })}
      </div>
    </>
  );
};

export default Info