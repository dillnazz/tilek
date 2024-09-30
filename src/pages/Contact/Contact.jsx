import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import LondonLocationImg from '../../utils/images/London-location.jpg';
import ManchesterLocationImg from '../../utils/images/Manchester-location.jpg';
import LiverpoolLocationImg from '../../utils/images/Liverpool-location.jpg';

function Contact() {
  return (
    <div className='contact-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>Связаться</h1>
          <p className='text-center w-75 mb-5'>Мы всегда готовы ответить на ваши вопросы и предоставить необходимую помощь. Если у вас есть предложения, комментарии или хотите обсудить возможное сотрудничество, не стесняйтесь обращаться к нам.

</p>
            </div>
        </header>
      <div className='container my-5 d-flex justify-content-center'>
        <Form id='contact-form'>
          <Form.Group className='mb-3'>
            <Form.Label>Директор</Form.Label>
            <p className="form-control" style={{ backgroundColor: "#f8f9fa", border: "1px solid #ced4da" }}>
              Анарбеков Тилек
            </p>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
            <p className="form-control" style={{ backgroundColor: "#f8f9fa", border: "1px solid #ced4da" }}>
              anarbekov.03@mail.ru
            </p>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Телефон номер</Form.Label>
            <p className="form-control" style={{ backgroundColor: "#f8f9fa", border: "1px solid #ced4da" }}>
              +996 507 724 212
            </p>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Адрес</Form.Label>
            <p className="form-control" style={{ backgroundColor: "#f8f9fa", border: "1px solid #ced4da" }}>
              г.Бишкек, ул. Киевская 62, ТЦ "Евразия"
            </p>
          </Form.Group>
        </Form>
      </div>

        <div className='bg-dark text-light p-5'>
        </div>
    </div>
  )
}

export default Contact;