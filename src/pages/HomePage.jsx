import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
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
        <div className="card">
          <h2><i className="fas fa-flag-usa"></i> Почему выбирают нас?</h2>
          <ul>
            <li>Квалифицированные преподаватели с международными сертификатами</li>
            <li>Индивидуальный подход к каждому студенту</li>
            <li>Современные методики обучения</li>
            <li>Гибкий график занятий</li>
            <li>Подготовка к международным экзаменам</li>
          </ul>
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
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="card" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Готовы начать обучение?</h2>
        <p>Запишитесь на пробный урок прямо сейчас!</p>
        <Link to="/apply" className="btn"><FaEdit /> Записаться на курс</Link>
      </div>
    </div>
  );
}

export default HomePage;