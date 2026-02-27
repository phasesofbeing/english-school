import { useState } from 'react';
import { Link } from 'react-router-dom';
import FilterBar from '../components/FilterBar';
import CourseCard from '../components/CourseCard';
import { courses } from '../utils/mockData';
import '../styles/HomePage.scss';

function HomePage() {
  const [category, setCategory] = useState('all');
  const [difficulty, setDifficulty] = useState('all');

  const filteredCourses = courses.filter(course => {
    if (category !== 'all' && course.category !== category) return false;
    if (difficulty !== 'all' && course.difficulty !== difficulty) return false;
    return true;
  });

  return (
    <div className="card">
      <h1 className="page-title">Добро пожаловать в English School!</h1>
      
      <div className="row">
        <div className="card left-column">
          <h2><i className="fas fa-flag-usa"></i> Почему выбирают нас?</h2>
          <ul className="benefits-list">
            <li>Квалифицированные преподаватели с международными сертификатами</li>
            <li>Индивидуальный подход к каждому студенту</li>
            <li>Современные методики обучения</li>
            <li>Гибкий график занятий</li>
            <li>Подготовка к международным экзаменам</li>
            <li>Бесплатный пробный урок</li>
            <li>Доступ к онлайн-платформе 24/7</li>
            <li>Система скидок и бонусов для постоянных студентов</li>
          </ul>
          
          <div className="section">
            <h3>Наша методика</h3>
            <p>Мы используем коммуникативный подход, который позволяет начать говорить на английском уже с первого занятия. Основной упор делается на разговорную практику, аудирование и снятие языкового барьера. Все материалы аутентичны и адаптированы под уровень студента.</p>
          </div>
          
          <div className="section">
            <h3>Форматы обучения</h3>
            <ul className="formats-list">
              <li><strong>Индивидуальные занятия</strong> — персональная программа, гибкий график</li>
              <li><strong>Групповые занятия</strong> — мини-группы до 6 человек, активное общение</li>
              <li><strong>Онлайн-обучение</strong> — занятия через Zoom с интерактивными материалами</li>
            </ul>
          </div>

          <div className="section">
            <h3>Часто задаваемые вопросы</h3>
            <div className="faq-item">
              <p className="faq-question"><strong>Какой уровень английского нужен для начала?</strong></p>
              <p className="faq-answer">Мы принимаем студентов с любым уровнем — от Beginner до Advanced. Перед началом проводим бесплатное тестирование и подбираем подходящую группу.</p>
            </div>
            <div className="faq-item">
              <p className="faq-question"><strong>Сколько длится один курс?</strong></p>
              <p className="faq-answer">Стандартный курс рассчитан на 3–4 месяца занятий 2 раза в неделю. Возможны интенсивные программы.</p>
            </div>
            <div className="faq-item">
              <p className="faq-question"><strong>Можно ли вернуть деньги, если не подошло?</strong></p>
              <p className="faq-answer">Да, мы гарантируем возврат средств после первого занятия, если вы поймёте, что курс вам не подходит.</p>
            </div>
          </div>

          <div className="section">
            <h3>Акции и специальные предложения</h3>
            <ul className="promo-list">
              <li>Скидка 10% при оплате полного семестра</li>
              <li>Приведи друга — получи скидку 15% на следующий месяц</li>
              <li>Бесплатный пробный урок для новых студентов</li>
            </ul>
          </div>

          <div className="section">
            <h3>Отзывы наших студентов</h3>
            <div className="testimonial">
              <p>"Занимаюсь в школе уже полгода, уровень английского вырос с Beginner до Intermediate. Преподаватели отличные, всегда помогают и поддерживают!"</p>
              <p className="testimonial-author">— Анна, студентка курса Intermediate</p>
            </div>
            <div className="testimonial">
              <p>"Отличная школа! Очень удобный формат онлайн-занятий, все материалы доступны в личном кабинете. За 3 месяца подготовки сдал IELTS на 7.0 (из 9 возможных)"</p>
              <p className="testimonial-author">— Дмитрий, выпускник курса IELTS</p>
            </div>
          </div>
          
          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">лет на рынке</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">выпускников</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">преподавателя</span>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h2><i className="fas fa-book-open"></i> Наши курсы</h2>
          <FilterBar
            category={category}
            setCategory={setCategory}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
          <div className="courses-list">
            {filteredCourses.map(course => (
              <Link to={`/apply?courseId=${course.id}`} key={course.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CourseCard course={course} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <div className="card" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Готовы начать обучение?</h2>
        <p>Запишитесь на пробный урок прямо сейчас!</p>
        <Link to="/apply" className="btn"><i className="fas fa-edit"></i> Записаться на курс</Link>
      </div>
    </div>
  );
}

export default HomePage;