import { NavLink } from 'react-router-dom';
import { FaGraduationCap, FaHome, FaEdit, FaSearch, FaChalkboardTeacher, FaCalendarAlt, FaBookOpen } from 'react-icons/fa';
import '../../styles/Header.scss';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <NavLink to="/" className="logo">
            <FaGraduationCap /> English School
          </NavLink>
          <nav>
            <ul>
              <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}><FaHome /> Главная</NavLink></li>
              <li><NavLink to="/courses" className={({ isActive }) => isActive ? 'active' : ''}><FaBookOpen /> Курсы</NavLink></li>
              <li><NavLink to="/apply" className={({ isActive }) => isActive ? 'active' : ''}><FaEdit /> Запись на курс</NavLink></li>
              <li><NavLink to="/status" className={({ isActive }) => isActive ? 'active' : ''}><FaSearch /> Статус заявки</NavLink></li>
              <li><NavLink to="/teachers" className={({ isActive }) => isActive ? 'active' : ''}><FaChalkboardTeacher /> Преподаватели</NavLink></li>
              <li><NavLink to="/schedule" className={({ isActive }) => isActive ? 'active' : ''}><FaCalendarAlt /> Расписание</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;