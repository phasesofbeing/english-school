import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { findApplication } from '../utils/storage';
import { statusText } from '../utils/mockData';

function StatusPage() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [application, setApplication] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = findApplication(email, phone);
    if (found) {
      setApplication(found);
      setError('');
    } else {
      setApplication(null);
      setError('Заявка не найдена. Проверьте введенные данные.');
    }
  };

  return (
    <div className="card">
      <h1 className="page-title"><i className="fas fa-search"></i> Проверка статуса заявки</h1>
      
      <div className="row">
        <div className="card">
          <h2>Поиск заявки</h2>
          <p>Введите email и телефон, которые вы указывали при подаче заявки:</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Телефон *</label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            
            <button type="submit" className="btn btn-block">
              <FaSearch /> Проверить статус
            </button>
          </form>
        </div>
        
        <div className="card">
          <h2>Статусы заявок</h2>
          <div style={{ margin: '1rem 0' }}>
            <p><span className="status-badge status-pending">Pending</span> - Заявка на рассмотрении</p>
            <p><span className="status-badge status-approved">Approved</span> - Заявка одобрена</p>
            <p><span className="status-badge status-rejected">Rejected</span> - Заявка отклонена</p>
            <p><span className="status-badge status-completed">Completed</span> - Курс завершен</p>
          </div>
          
          <p>Обычно рассмотрение заявки занимает 1-2 рабочих дня.</p>
          <p>Если у вас возникли вопросы, свяжитесь с нами по телефону +7 (495) 123-45-67</p>
        </div>
      </div>
      
      {error && <div className="alert alert-error">{error}</div>}
      
      {application && (
        <div className="card" style={{ marginTop: '2rem' }}>
          <h2>Информация о вашей заявке</h2>
          
          <table className="table">
            <tbody>
              <tr><th>ФИО:</th><td>{application.full_name}</td></tr>
              <tr><th>Email:</th><td>{application.email}</td></tr>
              <tr><th>Телефон:</th><td>{application.phone}</td></tr>
              <tr>
                <th>Курс:</th>
                <td>{application.course_title || application.course_level}</td>
              </tr>
              <tr>
                <th>Дата подачи:</th>
                <td>{new Date(application.application_date).toLocaleString('ru-RU')}</td>
              </tr>
              <tr>
                <th>Статус:</th>
                <td>
                  <span className={`status-badge status-${application.status}`}>
                    {statusText[application.status]}
                  </span>
                </td>
              </tr>
              {application.notes && (
                <tr><th>Комментарий:</th><td>{application.notes}</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StatusPage;