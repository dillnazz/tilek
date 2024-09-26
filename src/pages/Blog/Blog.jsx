import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from "../../utils/images/bb1.png";
import Blog2Img from '../../utils/images/new2.jpg';
import Blog3Img from '../../utils/images/news3.jpg';
import Blog4Img from '../../utils/images/news4.jpeg';
import Blog5Img from '../../utils/images/news5.jpeg';
import Blog6Img from '../../utils/images/news6.webp';
import Blog7Img from '../../utils/images/news7.jpg';
import Blog8Img from '../../utils/images/news8.jpg';
import Blog9Img from '../../utils/images/news9.jpg';

const blogs = [
  {
    id: 1,
    img: [Blog1Img],
    // title: 'Blog 1',
    name: "Трактор XZ- 500",
    model: "XZ - 500",
    year: "2023",
    price: "4, 500,000 KGS"
  },
  {
    id: 2,
    img: [Blog2Img],
    name: 'Комбайн John Deere',
    model: 'John Deere S670',
    description: 'Современный комбайн для эффективного сбора урожая.',
    year: '2021',
    price: '2,500,000'
  },
  {
    id: 3,
    img: [Blog3Img],
    name: 'Плуг ККП-3',
    model: 'ККП-3',
    description: 'Надежный плуг для глубокого рыхления почвы.',
    year: '2019',
    price: '300,000'
  },
  {
    id: 4,
    img: [Blog4Img],
    name: 'Культиватор КТ-12',
    model: 'КТ-12',
    description: 'Культиватор для предпосевной обработки почвы.',
    year: '2018',
    price: '450,000'
  },
  {
    id: 5,
    img: [Blog5Img],
    name: 'Борона БД-5',
    model: 'БД-5',
    description: 'Гидравлическая борона для измельчения и рыхления.',
    year: '2017',
    price: '550,000'
  },
  {
    id: 6,
    img: [Blog6Img],
    name: 'Сеялка СЗ-3.6',
    model: 'СЗ-3.6',
    description: 'Универсальная сеялка для зерновых культур.',
    year: '2020',
    price: '600,000'

  },
  {
    id: 7,
    img: [Blog7Img],
    name: 'Опрыскиватель ОП-2000',
    model: 'ОП-2000',
    description: 'Опрыскиватель для обработки растений и посевов.',
    year: '2021',
    price: '700,000'
  },
  {
    id: 8,
    img: [Blog8Img],
    name: 'Косилка роторная КРН-2.1',
    model: 'КРН-2.1',
    description: 'Мощная роторная косилка для скашивания трав.',
    year: '2019',
    price: '350,000'
  },
  {
    id: 9,
    img: [Blog9Img],
    name: 'Пресс-подборщик ПРФ-180',
    model: 'ПРФ-180',
    description: 'Пресс-подборщик для создания рулонов сена.',
    year: '2019',
    price: '950,000'
  },
];

function Blog() {
  return (
    <div className='blog-page'>
      <header className='height-75'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>Горячие новости от "Ынтымак"!</h1>
          <p className='text-center w-75 mb-5'>Наши новые поступления продолжают впечатлять! В этом месяце мы рады поделиться замечательными новостями о новых моделях техники и инновационных решениях, которые помогут вам достичь успеха в агробизнесе.</p>
        </div>
      </header>

      <div className='bg-body-tertiary py-5'>
        <div className="container">
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className='col-md-6 col-lg-4'>
                <Link to="/blog" className='text-decoration-none'>
                  <Card className='h-100 shadow scale-hover-effect border-0'>
                    <Card.Img className='imgCard' variant="top" src={blog.img} />
                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                      <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                      <Card.Text className='text-center'>Название:{blog.name}</Card.Text>
                      <Card.Text className='text-center'>Модель: {blog.model}</Card.Text>
                      <Card.Text className='text-center'>Год выпуска:{blog.year}</Card.Text>
                      <Card.Text className='text-center'>Цена:{blog.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;