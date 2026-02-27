import { Link } from 'react-router-dom';
import { courses } from '../utils/mockData';
import '../styles/CoursesPage.scss';

function CoursesPage() {
  return (
    <div className="card">
      <h1 className="page-title">Все курсы</h1>
      <div className="courses-grid">
        {courses.map(course => (
          <Link to={`/apply?courseId=${course.id}`} key={course.id} className="course-card-link">
            <div className="course-card">
              <h3>{course.title}</h3>
              <p className="course-short-description">{course.shortDescription}</p>
              <p className="course-full-description">{course.description}</p>
              <div className="course-meta">
                <span className={`badge difficulty-${course.difficulty}`}>
                  {course.difficulty === 'beginner' ? 'Начальный' : course.difficulty === 'intermediate' ? 'Средний' : 'Продвинутый'}
                </span>
                <span className={`badge category-${course.category}`}>
                  {course.category === 'adults' ? 'Для взрослых' : 'Для подростков'}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;