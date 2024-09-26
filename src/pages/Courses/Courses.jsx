import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';
import MusicCourseImg from '../../utils/images/music-course.jpg';
import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
    img:"https://asia24.media/upload/iblock/93f/8n7envj690tyh1gd8y3sfkjpar842gs8.jpg",
        // img: [ArtCourseImg],
        title: 'Манас таануу',
        description: 'Турусбекова Төркүнбү'
    },
    {
        id: 2,
      img:"https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/languages-signpost.jpg?itok=krMV75kb",
        // img: [BusinessCourseImg],
      title: 'Языковые курсы',
      description: 'Кыргызский язык, Французский язык, Английский язык, Китайский язык, Корейский язык'
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
      title: 'Информатика',
      description: 'Коңуров Санжар'
    },
    {
        id: 4,
        img: [EducationCourseImg],
      title: 'Гигиена',
      description: 'Акималиева Сайкал'
    },
    {
        id: 5,
      img:'https://holstpro.com.ua/image/data/BLOG/Art_terapiya_holstpro.jpg',
      title: 'Арт- терапия',
    },
    {
        id: 6,
      img:"https://www.uopeople.edu/wp-content/uploads/bb-plugin/cache/Why-Is-Geography-Important-Theres-More-Than-You-Think-landscape-e6d5bf4133efd1f47af56264540926b6-n5mwvo4a7kez.jpg",
      title: 'География',
      description: 'Таирова Мира'
    },
    {
        id: 7,
      img:'Музыкальный курс',
        img: [MusicCourseImg],
        title: 'Танцы, Хор, Комуз',
      description: 'Камбарбекова Нурай, Бейшекеев Эдил, Таалайбек кызы Мырзайым'
    },
    {
        id: 8,
        img: [SportCourseImg],
      title: 'Футбол,Тхэквондо',
      description: 'Жунушов Досумбек, Большаков Василий Иванович'
    },
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>Наши курсы</h1>
          <p className='text-center w-75 mb-5'>Наши курсы разнообразны и адаптированы под разные интересы и уровни подготовки, чтобы каждый ученик мог найти что-то по душе и развивать свои таланты.</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;