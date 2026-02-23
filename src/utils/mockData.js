export const teachers = [
  {
    id: 1,
    name: 'Анна Смирнова',
    qualification: 'CELTA, IELTS Examiner',
    experience_years: 8,
    specialty: 'Общий английский, подготовка к экзаменам'
  },
  {
    id: 2,
    name: 'Дмитрий Волков',
    qualification: 'DELTA, MA in Linguistics',
    experience_years: 12,
    specialty: 'Бизнес-английский, Advanced'
  },
  {
    id: 3,
    name: 'Екатерина Ковалёва',
    qualification: 'TEFL, PGCE',
    experience_years: 6,
    specialty: 'Beginner, дети и подростки'
  },
  {
    id: 4,
    name: 'Мария Петрова',
    qualification: 'TESOL, MA in Education',
    experience_years: 10,
    specialty: 'Подготовка к IELTS/TOEFL'
  }
];

export const courses = [
  { id: 1, level: 'beginner', difficulty: 'beginner', title: 'Beginner (A1-A2)', description: 'Для тех, кто только начинает изучение английского', category: 'adults' },
  { id: 2, level: 'intermediate', difficulty: 'intermediate', title: 'Intermediate (B1-B2)', description: 'Для продолжающих изучение', category: 'adults' },
  { id: 3, level: 'advanced', difficulty: 'advanced', title: 'Advanced (C1-C2)', description: 'Для продвинутых студентов', category: 'adults' },
  { id: 4, level: 'intermediate', difficulty: 'intermediate', title: 'Business English', description: 'Деловой английский', category: 'adults' },
  { id: 5, level: 'advanced', difficulty: 'advanced', title: 'Подготовка к IELTS/TOEFL', description: 'Экзаменационные курсы', category: 'adults' },
  { id: 6, level: 'intermediate', difficulty: 'intermediate', title: 'Английский для подростков (10-17 лет)', description: 'Адаптированная программа для школьников', category: 'teens' },
  { id: 7, level: 'intermediate', difficulty: 'intermediate', title: 'Разговорный клуб', description: 'Практика разговорной речи с носителями', category: 'adults' },
  { id: 8, level: 'advanced', difficulty: 'advanced', title: 'Интенсивный курс', description: 'Ускоренное изучение за 3 месяца', category: 'adults' }
];

export const schedule = [
  { level: 'Beginner', days: 'Пн, Ср, Пт', time: '10:00-11:30', teacher: 'Анна Смирнова', category: 'adults' },
  { level: 'Beginner', days: 'Вт, Чт', time: '19:00-20:30', teacher: 'Екатерина Ковалёва', category: 'teens' },
  { level: 'Intermediate', days: 'Пн, Ср', time: '18:00-19:30', teacher: 'Дмитрий Волков', category: 'adults' },
  { level: 'Intermediate', days: 'Вт, Чт', time: '10:00-11:30', teacher: 'Анна Смирнова', category: 'adults' },
  { level: 'Advanced', days: 'Пн, Чт', time: '19:00-21:00', teacher: 'Дмитрий Волков', category: 'adults' },
  { level: 'Business English', days: 'Ср, Пт', time: '18:30-20:00', teacher: 'Анна Смирнова', category: 'adults' },
  { level: 'IELTS Prep', days: 'Сб', time: '12:00-15:00', teacher: 'Дмитрий Волков', category: 'adults' },
  { level: 'Подростки', days: 'Ср, Пт', time: '16:00-17:30', teacher: 'Екатерина Ковалёва', category: 'teens' }
];

export const levelsMap = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced'
};

export const statusText = {
  pending: 'На рассмотрении',
  approved: 'Одобрена',
  rejected: 'Отклонена',
  completed: 'Завершена'
};