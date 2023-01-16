import React from 'react'

import DetailInfo from "../detailInfo/DetailInfo"

const Info = ({show}) => {
  console.log(show)
  return (
    <>

      <div className="title">
        <h2>Fotoğrafların Özellikleri</h2>
        <p className="underline"></p>
      </div>
      <div>
        {show.map((item)=> {
           
          return  <DetailInfo item={item} />
         

        })}
       
      </div>
    </>
  );
}

export default Info