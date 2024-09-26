import React, { useEffect, useState } from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/coo.webp';
import ChooseSection from '../../components/ChooseSection/ChooseSection';

const About = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch('https://665e72ea1e9017dc16f00c97.mockapi.io/students')
      .then(response => response.json())
      .then(data => {
        const updatedPersons = data.map(person => ({
          id: person.id,
          img: person.avatar
        }));
        setPersons(updatedPersons);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const equipment = [
    {
      id: 1,
      img: 'https://mtz.ru/images/stories/virtuemart/product/4_22_109-_80_1_40.png',
      name: 'Трактор МТЗ',
      description: 'Мощный трактор для работы на больших площадях.',
      year: '2020',
      price: '1,200,000'
    },
    {
      id: 2,
      img: 'https://www.technodom.com/wp-content/uploads/2020/01/s760_hero_.jpg',
      name: 'Комбайн John Deere',
      description: 'Современный комбайн для эффективного сбора урожая.',
      year: '2021',
      price: '2,500,000'
    },
    {
      id: 3,
      img: 'https://img.agrobase.ru/agro/images/Machinery/285.jpg',
      name: 'Плуг ККП-3',
      description: 'Надежный плуг для глубокого рыхления почвы.',
      year: '2019',
      price: '300,000'
    }
    // Добавьте больше техники по необходимости
  ];


  return (
    <div className='about-page'>
      <header className='height-75'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>О нас</h1>
          <p className='text-center w-75 mb-5'>Самая лучшая школа для ваших детей! Наша школа предоставляет качественное образование и заботливую среду, где каждый ребенок может раскрыть свой потенциал. Мы гордимся нашими достижениями и стремимся к успеху каждого ученика. Присоединяйтесь к нам и подарите вашему ребенку лучшее будущее!</p>
        </div>
      </header>

      <div className='container my-5'>
        <div className="row">
          <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
            <h2 className='mb-4 mb-lg-5'>О нас</h2>
            <p>Добро пожаловать в "Ынтымак" — ваш надежный партнер в области сельскохозяйственной техники. Мы специализируемся на продаже высококачественного оборудования, которое помогает фермерам и агробизнесу достигать максимальных результатов. Наша цель — обеспечить вас современными решениями, которые повысят эффективность вашего производства. Мы ценим каждого клиента и стремимся предоставить индивидуальный подход, помогая вам реализовать ваши амбиции.</p>
            <Link to="/contact">
              <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Связаться</button>
            </Link>
          </div>
          <div className='col-lg-6 d-flex justify-content-center'>
            <img src={AboutUsSectionImg} className='img-fluid h-300px w-75' alt="" />
          </div>
        </div>
      </div>

      <div className='bg-dark text-light py-5'>
        <ChooseSection />
      </div>

      <div className='bg-body-tertiary py-5'>
        <div className="container">
          <h2 className='text-center mb-5'>Наша сельскохозяйственная техника</h2>
          <div className='row g-4'>
            {equipment.map((item) => (
              <div key={item.id} className='col-md-4'>
                <div className="card">
                  <img
                    style={{ height: "300px", width: "100%" }}
                    src={item.img}
                    className='card-img-top'
                    alt={item.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text"><strong>Год:</strong> {item.year}</p>
                    <p className="card-text"><strong>Цена:</strong> {item.price} сом</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}

export default About;