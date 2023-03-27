import React from 'react'
import Sercarusel from '../sertfikat_photo/Sertfikat_carusel'

import "./sertfikat.scss"

const Sertfikat = () => {
  return (
    <section className='ser'>
      <div className="container">
        <h2>Качество продукции подтверждают <span>сертификаты</span> </h2>
        <div className='imgp'>
          <Sercarusel></Sercarusel>
        </div>
      </div>
    </section>
  )
}

export default Sertfikat