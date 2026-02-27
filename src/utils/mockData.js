export const teachers = [
  {
    id: 1,
    name: 'Анна Смирнова',
    qualification: 'CELTA, IELTS Examiner',
    experience_years: 8,
    specialty: 'Общий английский, подготовка к экзаменам',
    photo: '/images/teachers/woman.jpg'
  },
  {
    id: 2,
    name: 'Дмитрий Волков',
    qualification: 'DELTA, MA in Linguistics',
    experience_years: 12,
    specialty: 'Бизнес-английский, Advanced',
    photo: '/images/teachers/man.jpg'
  },
  {
    id: 3,
    name: 'Екатерина Ковалёва',
    qualification: 'TEFL, PGCE',
    experience_years: 6,
    specialty: 'Beginner, дети и подростки',
    photo: '/images/teachers/woman2.jpg'
  },
  {
    id: 4,
    name: 'Мария Петрова',
    qualification: 'TESOL, MA in Education',
    experience_years: 10,
    specialty: 'Подготовка к IELTS/TOEFL',
    photo: '/images/teachers/woman3.jpg'
  }
];

export const courses = [
  { 
    id: 1, 
    level: 'beginner', 
    difficulty: 'beginner', 
    title: 'Beginner (A1-A2)', 
    shortDescription: 'Для тех, кто только начинает изучение английского',
    description: 'Курс для начинающих с нуля. Вы освоите базовую лексику, научитесь строить простые предложения, понимать речь на слух и читать адаптированные тексты. В программе: алфавит, произношение, основные грамматические конструкции, темы "Семья", "Еда", "Путешествия". После курса сможете поддержать простой диалог.',
    category: 'adults' 
  },
  { 
    id: 2, 
    level: 'intermediate', 
    difficulty: 'intermediate', 
    title: 'Intermediate (B1-B2)', 
    shortDescription: 'Для продолжающих изучение',
    description: 'Курс для тех, кто уже имеет базовые знания. Вы расширите словарный запас, научитесь уверенно общаться на повседневные темы, писать письма и эссе. Изучаются более сложные грамматические конструкции, идиомы, фразовые глаголы. Темы: работа, учёба, хобби, культура.',
    category: 'adults' 
  },
  { 
    id: 3, 
    level: 'advanced', 
    difficulty: 'advanced', 
    title: 'Advanced (C1-C2)', 
    shortDescription: 'Для продвинутых студентов',
    description: 'Курс для свободного владения языком. Вы научитесь понимать сложные тексты, выражать мысли точно и бегло, использовать языковые тонкости. В программе: дискуссии, дебаты, анализ аутентичных материалов, стилистика. Подготовка к кембриджским экзаменам.',
    category: 'adults' 
  },
  { 
    id: 4, 
    level: 'intermediate', 
    difficulty: 'intermediate', 
    title: 'Business English', 
    shortDescription: 'Деловой английский',
    description: 'Курс для работы в международной среде. Вы научитесь вести переговоры, писать деловые письма, составлять презентации, общаться с партнёрами. Темы: финансы, маркетинг, управление, командировки. Разбор реальных кейсов.',
    category: 'adults' 
  },
  { 
    id: 5, 
    level: 'advanced', 
    difficulty: 'advanced', 
    title: 'Подготовка к IELTS/TOEFL', 
    shortDescription: 'Экзаменационные курсы',
    description: 'Интенсивная подготовка к международным экзаменам. Отработка всех частей: чтение, аудирование, письмо, говорение. Стратегии выполнения заданий, работа с таймингом, пробные тесты. Индивидуальный план подготовки в зависимости от целевого балла.',
    category: 'adults' 
  },
  { 
    id: 6, 
    level: 'intermediate', 
    difficulty: 'intermediate', 
    title: 'Английский для подростков (10-17 лет)', 
    shortDescription: 'Адаптированная программа для школьников',
    description: 'Курс, учитывающий возрастные особенности. Интерактивные занятия, игровые методики, современные темы (соцсети, музыка, кино). Помощь со школьной программой, подготовка к ОГЭ/ЕГЭ. Развитие разговорных навыков.',
    category: 'teens' 
  },
  { 
    id: 7, 
    level: 'intermediate', 
    difficulty: 'intermediate', 
    title: 'Разговорный клуб', 
    shortDescription: 'Практика разговорной речи с носителями',
    description: 'Еженедельные встречи с носителями языка в небольших группах. Темы варьируются от путешествий до современных технологий. Снимаем языковой барьер, улучшаем произношение, учимся понимать живую речь.',
    category: 'adults' 
  },
  { 
    id: 8, 
    level: 'advanced', 
    difficulty: 'advanced', 
    title: 'Интенсивный курс', 
    shortDescription: 'Ускоренное изучение за 3 месяца',
    description: 'Максимально насыщенная программа для тех, кому нужен быстрый результат. Занятия 5 раз в неделю, большой объём домашних заданий, постоянная языковая практика. Подходит для подготовки к переезду или срочной сдаче экзамена.',
    category: 'adults' 
  }
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