import React from 'react'
import "./header.scss"
import logo from "../../assets/images/logo.png"
import list from "../../assets/images/list.svg"

const Header = () => {
  return (
   <>
   <header>
    <section className="container">
      <nav className='nav'>
        <div className='logo'><img src={logo} alt="logo" /></div>
        <div className='section'>
          <ul>
            <li><a href="#">Продукция</a></li>
            <li><a href="#">Сертификаты</a></li>
            <li><a href="#">Наша команда</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Вакансии</a></li>
            <li><a href="#">Контакты</a></li>

            

          </ul>
          </div>
        <div className='languages'>
          <a className='active' href="#">RU</a>|
          <a href="#">EN</a>

        </div>
<img className='list' src={list} alt="" />
      </nav>
    </section>
   </header>
   </>
  )
}

export default Header