import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import { saveApplication } from '../utils/storage';
import { courses } from '../utils/mockData';


function ApplyPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const courseId = queryParams.get('courseId');

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    course_level: '',
    course_title: '',
    preferred_time: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);

  const levelOptions = [...new Set(courses.map(c => c.level))];

  useEffect(() => {
    if (courseId) {
      const course = courses.find(c => c.id === parseInt(courseId));
      if (course) {
        setFormData(prev => ({
          ...prev,
          course_level: course.level,
          course_title: course.title
        }));
      }
    }
  }, [courseId]);

  const filteredCourses = courses.filter(c => c.level === formData.course_level);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatPhone = (value) => {
    let digits = value.replace(/\D/g, '');
    if (digits.length > 0) {
      if (digits[0] === '7' || digits[0] === '8') digits = digits.substring(1);
      let formatted = '+7';
      if (digits.length > 0) formatted += ' (' + digits.substring(0, 3);
      if (digits.length >= 4) formatted += ') ' + digits.substring(3, 6);
      if (digits.length >= 7) formatted += '-' + digits.substring(6, 8);
      if (digits.length >= 9) formatted += '-' + digits.substring(8, 10);
      return formatted;
    }
    return '';
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const validate = () => {
    const newErrors = {};
    if (formData.full_name.trim().length < 2) {
      newErrors.full_name = 'Введите корректное ФИО';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 11) {
      newErrors.phone = 'Введите корректный номер телефона';
    }
    if (!formData.course_level) {
      newErrors.course_level = 'Выберите уровень курса';
    }
    if (!formData.course_title) {
      newErrors.course_title = 'Выберите конкретный курс';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    saveApplication(formData);
    setMessage({ type: 'success', text: 'Заявка успешно отправлена! Мы свяжемся с вами в течение 24 часов.' });
    setFormData({
      full_name: '',
      email: '',
      phone: '',
      course_level: '',
      course_title: '',
      preferred_time: '',
      notes: ''
    });
    setTimeout(() => navigate('/status'), 2000);
  };

  return (
    <div className="card">
      <h1 className="page-title"><i className="fas fa-edit"></i> Запись на курс английского</h1>
      
      {message && (
        <div className={`alert alert-${message.type}`}>{message.text}</div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="card">
            <h2>Личная информация</h2>
            
            <div className="form-group">
              <label htmlFor="full_name">ФИО *</label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                className={`form-control ${errors.full_name ? 'error' : ''}`}
                value={formData.full_name}
                onChange={handleChange}
                required
              />
              {errors.full_name && <div className="error-message"><i className="fas fa-exclamation-circle"></i> {errors.full_name}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control ${errors.email ? 'error' : ''}`}
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <div className="error-message"><i className="fas fa-exclamation-circle"></i> {errors.email}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Телефон *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`form-control ${errors.phone ? 'error' : ''}`}
                value={formData.phone}
                onChange={handlePhoneChange}
                required
              />
              {errors.phone && <div className="error-message"><i className="fas fa-exclamation-circle"></i> {errors.phone}</div>}
            </div>
          </div>
          
          <div className="card">
            <h2>Информация о курсе</h2>
            
            <div className="form-group">
              <label htmlFor="course_level">Уровень английского *</label>
              <select
                id="course_level"
                name="course_level"
                className={`form-control ${errors.course_level ? 'error' : ''}`}
                value={formData.course_level}
                onChange={handleChange}
                required
              >
                <option value="">Выберите уровень</option>
                {levelOptions.map(level => (
                  <option key={level} value={level}>
                    {level === 'beginner' && 'Beginner (A1-A2)'}
                    {level === 'intermediate' && 'Intermediate (B1-B2)'}
                    {level === 'advanced' && 'Advanced (C1-C2)'}
                  </option>
                ))}
              </select>
              {errors.course_level && <div className="error-message"><i className="fas fa-exclamation-circle"></i> {errors.course_level}</div>}
            </div>

            {formData.course_level && (
              <div className="form-group">
                <label htmlFor="course_title">Конкретный курс *</label>
                <select
                  id="course_title"
                  name="course_title"
                  className={`form-control ${errors.course_title ? 'error' : ''}`}
                  value={formData.course_title}
                  onChange={handleChange}
                  required
                >
                  <option value="">Выберите курс</option>
                  {filteredCourses.map(course => (
                    <option key={course.id} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </select>
                {errors.course_title && <div className="error-message"><i className="fas fa-exclamation-circle"></i> {errors.course_title}</div>}
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="preferred_time">Предпочтительное время занятий</label>
              <select
                id="preferred_time"
                name="preferred_time"
                className="form-control"
                value={formData.preferred_time}
                onChange={handleChange}
              >
                <option value="">Любое время</option>
                <option value="утро">Утро (9:00-12:00)</option>
                <option value="день">День (13:00-16:00)</option>
                <option value="вечер">Вечер (18:00-21:00)</option>
                <option value="выходные">Выходные дни</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="notes">Дополнительные пожелания</label>
              <textarea
                id="notes"
                name="notes"
                className="form-control"
                rows="4"
                value={formData.notes}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
        
        <div className="form-group" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button type="submit" className="btn btn-block">
            <FaPaperPlane /> Отправить заявку
          </button>
          <p style={{ marginTop: '1rem', color: '#666', fontSize: '0.9rem' }}>
            * Поля, обязательные для заполнения
          </p>
        </div>
      </form>
    </div>
  );
}

export default ApplyPage;