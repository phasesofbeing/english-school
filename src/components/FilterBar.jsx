import '../styles/FilterBar.scss';

function FilterBar({ category, setCategory, difficulty, setDifficulty }) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>Категория:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Все</option>
          <option value="adults">Взрослые</option>
          <option value="teens">Подростки</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Сложность:</label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="all">Все</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;