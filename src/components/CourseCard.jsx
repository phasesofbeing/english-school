import '../styles/CourseCard.scss';

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="course-meta">
        <span className={`badge difficulty-${course.difficulty}`}>
          {course.difficulty === 'beginner' ? 'Начальный' : course.difficulty === 'intermediate' ? 'Средний' : 'Продвинутый'}
        </span>
        <span className={`badge category-${course.category}`}>
          {course.category === 'adults' ? 'Для взрослых' : 'Для подростков'}
        </span>
      </div>
    </div>
  );
}

export default CourseCard;