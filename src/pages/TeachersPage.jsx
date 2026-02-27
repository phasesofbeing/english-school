import { teachers } from '../utils/mockData';
import '../styles/TeachersPage.scss';

function TeachersPage() {
  return (
    <div className="card">
      <h1 className="page-title"><i className="fas fa-chalkboard-teacher"></i> Наши преподаватели</h1>
      
      <p style={{ marginBottom: '2rem' }}>Все наши преподаватели имеют международные сертификаты и многолетний опыт работы.</p>
      
      <div className="row">
        {teachers.map(teacher => (
          <div key={teacher.id} className="card teacher-card">
            <div className="teacher-photo">
              <img src={teacher.photo} alt={teacher.name} />
            </div>
            <h3>{teacher.name}</h3>
            <p><strong>Квалификация:</strong> {teacher.qualification}</p>
            <p><strong>Опыт:</strong> {teacher.experience_years} лет</p>
            <p><strong>Специализация:</strong> {teacher.specialty}</p>
          </div>
        ))}
      </div>
      
      <div className="card" style={{ marginTop: '2rem' }}>
        <h2>Методика обучения</h2>
        <p>Мы используем коммуникативную методику обучения, которая позволяет начать говорить на английском уже с первого занятия.</p>
        <ul style={{ marginLeft: '20px', marginTop: '15px' }}>
          <li>Интерактивные занятия</li>
          <li>Погружение в языковую среду</li>
          <li>Аутентичные материалы</li>
          <li>Регулярная практика speaking</li>
          <li>Персонализированный подход</li>
        </ul>
      </div>
    </div>
  );
}

export default TeachersPage;