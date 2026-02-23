import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import '../../styles/Footer.scss';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="/">Главная</Link>
            <Link to="/apply">Запись на курс</Link>
            <Link to="/teachers">Преподаватели</Link>
            <Link to="/schedule">Расписание</Link>
          </div>
          <div className="contact-info">
            <p><FaPhone /> 8 (800) 555-35-35</p>
            <p><FaEnvelope /> info@englishschool.ru</p>
          </div>
          <div className="copyright">
            &copy; {year} English School. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;