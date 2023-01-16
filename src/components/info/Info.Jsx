import React from 'react'

import DetailInfo from "../detailInfo/DetailInfo"

const Info = ({show ,removeFoto}) => {
  console.log(show)
  return (
    <>

      <div className="title">
        <h2>Fotoğrafların Özellikleri</h2>
        <p className="underline"></p>
      </div>
      <div>
        {show.map((item)=> {
           
          return  <DetailInfo  key = {item.id} item={item}  removeFoto={removeFoto}/>
         

        })}
       
      </div>
    </>
  );
}

export default Info