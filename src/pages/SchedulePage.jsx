import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarCheck, FaUserFriends, FaLaptopHouse } from 'react-icons/fa';
import FilterBar from '../components/FilterBar';
import { schedule } from '../utils/mockData';

function SchedulePage() {
  const [category, setCategory] = useState('all');
  const [difficulty, setDifficulty] = useState('all');

  const filteredSchedule = schedule.filter(item => {
    if (category !== 'all' && item.category !== category) return false;
    if (difficulty !== 'all') {
      const levelLower = item.level.toLowerCase();
      if (difficulty === 'beginner' && !levelLower.includes('beginner')) return false;
      if (difficulty === 'intermediate' && !levelLower.includes('intermediate') && !levelLower.includes('business')) return false;
      if (difficulty === 'advanced' && !levelLower.includes('advanced') && !levelLower.includes('ielts')) return false;
    }
    return true;
  });

  return (
    <div className="card">
      <h1 className="page-title"><i className="fas fa-calendar-alt"></i> Расписание занятий</h1>
      
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h2>Групповые занятия</h2>
        <p>Занятия проходят в группах 4-8 человек. Длительность занятия: 90 минут.</p>
        
        <FilterBar
          category={category}
          setCategory={setCategory}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
        
        <table className="table">
          <thead>
            <tr>
              <th>Уровень</th>
              <th>Дни недели</th>
              <th>Время</th>
              <th>Преподаватель</th>
            </tr>
          </thead>
          <tbody>
            {filteredSchedule.map((item, index) => (
              <tr key={index}>
                <td>{item.level}</td>
                <td>{item.days}</td>
                <td>{item.time}</td>
                <td>{item.teacher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="row">
        <div className="card">
          <h2><FaUserFriends /> Индивидуальные занятия</h2>
          <p>График индивидуальных занятий согласовывается персонально с преподавателем.</p>
          <ul>
            <li>Гибкое расписание</li>
            <li>Индивидуальная программа</li>
            <li>Фокус на ваших целях</li>
            <li>Возможность онлайн-обучения</li>
          </ul>
          <Link to="/apply" className="btn" style={{ marginTop: '1rem' }}>
            <FaCalendarCheck /> Записаться на индивидуальное занятие
          </Link>
        </div>
        
        <div className="card">
          <h2><FaLaptopHouse /> Онлайн-занятия</h2>
          <p>Все курсы доступны в онлайн-формате через Zoom.</p>
          <ul>
            <li>Та же программа, что и офлайн</li>
            <li>Записи занятий доступны</li>
            <li>Интерактивные материалы</li>
            <li>Общение с группой в чате</li>
          </ul>
          <p><strong>Технические требования:</strong></p>
          <p>Стабильный интернет, наушники с микрофоном, веб-камера.</p>
        </div>
      </div>
    </div>
  );
}

export default SchedulePage;