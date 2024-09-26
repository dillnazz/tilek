import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
function Home() {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
          <h2>Добро пожаловать в</h2>
          <h1 className='text-center fw-semibold'>Ынтымак</h1>
          <p style={{ textAlign: 'center' }}>Лучшие решения для вашей фермы! Мы предлагаем широкий ассортимент высококачественной сельскохозяйственной техники, которая поможет вам повысить эффективность и производительность. Наши продукты — это надежность, инновации и долговечность, разработанные с учётом нужд современных фермеров. Присоединяйтесь к нам и обеспечьте вашему хозяйству успешное и устойчивое будущее!</p>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Link to="/courses">
              <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Наши продукты</button>
                    </Link>
                    <Link to="/contact">
              <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Связаться с нами</button>
                    </Link>
                </div>
            </div>
        </header>

        <div className="py-5">
            <ChooseSection />
        </div>

        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
              <h2 className='text-capitalize'>
                2024 — Начало нового сезона продаж</h2>
              <p>Мы рады объявить о запуске новых поступлений техники! Откройте для себя самые современные решения для вашего агробизнеса и получите высококачественную поддержку на каждом этапе.</p>
                        <Link to="/courses">
                <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Узнать больше</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
              <img style={{width:"500px", height:"500px"}} src="https://www.agroinvestor.ru/upload/iblock/a0d/a0d7db07dceb5f49bc6640601babfd8e.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="py-5">
            <FaqAccordion />
        </div>

        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <Link to="/blog">
            <button type='button' className='btn btn-danger btn-lg mt-5'>Читать больше блогов</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home;