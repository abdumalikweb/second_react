import React from 'react'
import "./product.scss"
import productimg from "../../assets/images/product.png"

function Product() {
  return (
   <section className='section4'>
    <div className="container">
      <h2>
        Наша <span>продукция</span> 

        <div className="items">
<button>Ламинатные тубы</button>
<button>Экструзионные тубы</button>
<button>Другая упаковка</button>
        </div>
        <div className='product_img'>
          <div>
            <img src={productimg} alt="" />
          </div>
           <div>
            <img src={productimg} alt="" />
          </div>
           <div>
            <img src={productimg} alt="" />
          </div>
           <div>
            <img src={productimg} alt="" />
          </div>
           <div>
            <img src={productimg} alt="" />
          </div>
        </div>

      </h2>
    </div>
   </section>
  )
}

export default Product