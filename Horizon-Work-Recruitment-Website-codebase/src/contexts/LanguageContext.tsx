"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ru' | 'uz' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.jobs': 'Вакансии',
    'nav.howWeWork': 'Как мы работаем',
    'nav.contact': 'Контакты',
    
    // Hero Section
    'hero.title': 'Официальное трудоустройство за рубежом',
    'hero.subtitle': 'Надёжный партнёр в поиске легальной работы за рубежом.',
    'hero.cta': 'Подобрать вакансию',
    'hero.consultation': 'Бесплатная консультация',
    
    // Services
    'services.title': 'Наши услуги',
    'services.subtitle': 'Полный спектр услуг для вашего успешного трудоустройства за рубежом',
    'services.legal.title': 'Легальное трудоустройство',
    'services.legal.desc': 'Официальное оформление всех документов и рабочих виз',
    'services.support.title': 'Полная поддержка',
    'services.support.desc': 'Помощь на всех этапах от подбора вакансии до адаптации',
    'services.verified.title': 'Проверенные работодатели',
    'services.verified.desc': 'Работаем только с надежными компаниями',
    'services.housing.title': 'Помощь с жильем',
    'services.housing.desc': 'Содействие в поиске и оформлении жилья',
    
    // Mission
    'mission.title': 'Наша миссия',
    'mission.text': 'HORIZON WORK помогает людям найти достойную работу за рубежом с полным соблюдением законодательства. Мы гарантируем прозрачность процесса, легальное трудоустройство и поддержку на каждом этапе.',
    
    // About Page
    'about.title': 'О компании',
    'about.subtitle': 'HORIZON WORK - надежный партнер в трудоустройстве за рубежом',
    'about.license': 'Лицензия',
    'about.licenseText': 'HORIZON WORK имеет официальную лицензию на трудоустройство граждан за рубежом. Лицензия №12345 от 01.01.2020',
    'about.advantages.title': 'Наши преимущества',
    'about.advantage1': 'Более 5 лет на рынке',
    'about.advantage1.desc': 'Успешно работаем с 2019 года',
    'about.advantage2': 'Более 2000 довольных клиентов',
    'about.advantage2.desc': 'Довольные клиенты по всему миру',
    'about.advantage3': '100% легальное трудоустройство',
    'about.advantage3.desc': 'Все документы и контракты легальны',
    'about.advantage4': 'Поддержка 24/7',
    'about.advantage4.desc': 'Круглосуточная поддержка клиентов',
    'about.legal': 'Правовая информация',
    'about.legalText': 'Мы работаем в соответствии со всеми международными нормами и законодательством РФ и РУз.',
    'about.license.official': 'Официально лицензировано',
    'about.license.number': 'Номер лицензии',
    'about.license.issued': 'Дата выдачи',
    'about.license.issuer': 'Орган выдачи',
    'about.license.issuerName': 'Министерство труда РУз',
    'about.license.validity': 'Срок действия',
    'about.license.unlimited': 'Бессрочная',
    'about.security': 'Гарантии безопасности',
    'about.security.contracts': 'Официальные трудовые договоры',
    'about.security.insurance': 'Страхование работников',
    'about.security.payment': 'Прозрачные условия оплаты',
    'about.security.legal': 'Юридическая поддержка',
    
    // Jobs Page
    'jobs.title': 'Вакансии за рубежом',
    'jobs.subtitle': 'Найдите идеальную работу за рубежом',
    'jobs.filter': 'Фильтр по странам',
    'jobs.all': 'Все страны',
    'jobs.poland': 'Польша',
    'jobs.poland.desc': 'Фабрики, логистика, строительство',
    'jobs.korea': 'Южная Корея',
    'jobs.korea.desc': 'Производство, электроника, сельское хозяйство',
    'jobs.japan': 'Япония',
    'jobs.japan.desc': 'Гостиничный бизнес, рестораны, производство',
    'jobs.croatia': 'Хорватия',
    'jobs.croatia.desc': 'Работа в сфере обслуживания и туризма',
    'jobs.russia': 'Россия',
    'jobs.russia.desc': 'Работа в производстве, строительстве и сервисе',
    'jobs.israel': 'Израиль',
    'jobs.israel.desc': 'Работа в уходе, медицине и сельском хозяйстве',
    'jobs.apply': 'Подать заявку',
    'jobs.salary': 'Зарплата',
    'jobs.duration': 'Длительность',
    
    // Job Listings
    'jobs.job1.title': 'Работник на производстве',
    'jobs.job1.company': 'Factory Pro Poland',
    'jobs.job1.location': 'Варшава',
    'jobs.job1.desc': 'Работа на современном производственном предприятии. Требуется опыт работы.',
    'jobs.job2.title': 'Логист на складе',
    'jobs.job2.company': 'Logistics Center',
    'jobs.job2.location': 'Краков',
    'jobs.job2.desc': 'Работа на складе международной логистической компании.',
    'jobs.job3.title': 'Строитель',
    'jobs.job3.company': 'BuildPro',
    'jobs.job3.location': 'Вроцлав',
    'jobs.job3.desc': 'Строительные работы на объектах жилой и коммерческой недвижимости.',
    'jobs.job4.title': 'Оператор станков',
    'jobs.job4.company': 'Samsung Electronics',
    'jobs.job4.location': 'Сеул',
    'jobs.job4.desc': 'Работа на производстве электроники в крупной корпорации.',
    'jobs.job5.title': 'Сборщик на производстве',
    'jobs.job5.company': 'LG Manufacturing',
    'jobs.job5.location': 'Пусан',
    'jobs.job5.desc': 'Сборка электронных компонентов на современном заводе.',
    'jobs.job6.title': 'Работник сельского хозяйства',
    'jobs.job6.company': 'AgriKorea',
    'jobs.job6.location': 'Тэгу',
    'jobs.job6.desc': 'Работа на ферме. Жилье и питание предоставляется.',
    'jobs.job7.title': 'Сотрудник отеля',
    'jobs.job7.company': 'Hilton Tokyo',
    'jobs.job7.location': 'Токио',
    'jobs.job7.desc': 'Работа в международном отеле. Требуется знание английского языка.',
    'jobs.job8.title': 'Повар в ресторане',
    'jobs.job8.company': 'Sushi Master',
    'jobs.job8.location': 'Осака',
    'jobs.job8.desc': 'Работа в ресторане японской кухни. Обучение предоставляется.',
    'jobs.job9.title': 'Оператор производства',
    'jobs.job9.company': 'Toyota Manufacturing',
    'jobs.job9.location': 'Нагоя',
    'jobs.job9.desc': 'Работа на автомобильном заводе Toyota.',
    'jobs.job10.title': 'Официант в ресторане',
    'jobs.job10.company': 'Adriatic Restaurants',
    'jobs.job10.location': 'Дубровник',
    'jobs.job10.desc': 'Работа в ресторане на побережье. Требуется опыт работы в обслуживании.',
    'jobs.job11.title': 'Администратор отеля',
    'jobs.job11.company': 'Hotel Marina',
    'jobs.job11.location': 'Сплит',
    'jobs.job11.desc': 'Работа на ресепшн в отеле. Знание английского обязательно.',
    'jobs.job12.title': 'Горничная',
    'jobs.job12.company': 'Adriatic Hotels',
    'jobs.job12.location': 'Загреб',
    'jobs.job12.desc': 'Работа в гостиничном комплексе. Проживание предоставляется.',
    'jobs.job13.title': 'Сварщик',
    'jobs.job13.company': 'РосСтрой',
    'jobs.job13.location': 'Москва',
    'jobs.job13.desc': 'Работа на строительных объектах. Требуется опыт сварочных работ.',
    'jobs.job14.title': 'Слесарь',
    'jobs.job14.company': 'Производственный комбинат',
    'jobs.job14.location': 'Санкт-Петербург',
    'jobs.job14.desc': 'Работа на производстве. Полный социальный пакет.',
    'jobs.job15.title': 'Водитель-экспедитор',
    'jobs.job15.company': 'ЛогистикПро',
    'jobs.job15.location': 'Казань',
    'jobs.job15.desc': 'Доставка грузов по городу и области. Требуются права категории B, C.',
    'jobs.job16.title': 'Сиделка',
    'jobs.job16.company': 'Care Israel',
    'jobs.job16.location': 'Тель-Авив',
    'jobs.job16.desc': 'Уход за пожилыми людьми. Проживание и питание предоставляется.',
    'jobs.job17.title': 'Медсестра',
    'jobs.job17.company': 'Hadassah Medical',
    'jobs.job17.location': 'Иерусалим',
    'jobs.job17.desc': 'Работа в клинике. Требуется медицинское образование.',
    'jobs.job18.title': 'Работник на ферме',
    'jobs.job18.company': 'Kibbutz Agro',
    'jobs.job18.location': 'Хайфа',
    'jobs.job18.desc': 'Работа на сельскохозяйственной ферме. Жилье предоставляется.',
    'jobs.type.fulltime': 'Полная занятость',
    'jobs.duration.12months': '12 месяцев',
    'jobs.duration.18months': '18 месяцев',
    'jobs.duration.24months': '24 месяца',
    'jobs.duration.36months': '36 месяцев',
    
    // How We Work
    'howWeWork.title': 'Как мы работаем',
    'howWeWork.subtitle': 'Простой и понятный процесс трудоустройства за рубежом',
    'howWeWork.step1': 'Консультация',
    'howWeWork.step1desc': 'Бесплатная консультация и подбор вакансий',
    'howWeWork.step1.detail1': 'Бесплатная консультация по телефону или в офисе',
    'howWeWork.step1.detail2': 'Анализ ваших навыков и опыта',
    'howWeWork.step1.detail3': 'Подбор подходящих вакансий',
    'howWeWork.step1.detail4': 'Полная информация о условиях работы',
    'howWeWork.step2': 'Документы',
    'howWeWork.step2desc': 'Подготовка и оформление всех необходимых документов',
    'howWeWork.step2.detail1': 'Сбор необходимых документов',
    'howWeWork.step2.detail2': 'Перевод и нотариальное заверение',
    'howWeWork.step2.detail3': 'Подача документов на рабочую визу',
    'howWeWork.step2.detail4': 'Оформление медицинских справок',
    'howWeWork.step3': 'Виза',
    'howWeWork.step3desc': 'Получение рабочей визы',
    'howWeWork.step3.detail1': 'Подготовка к собеседованию в посольстве',
    'howWeWork.step3.detail2': 'Сопровождение на собеседовании',
    'howWeWork.step3.detail3': 'Получение рабочей визы',
    'howWeWork.step3.detail4': 'Оформление трудового договора',
    'howWeWork.step4': 'Выезд',
    'howWeWork.step4desc': 'Организация выезда и встреча в стране назначения',
    'howWeWork.step4.detail1': 'Помощь в покупке авиабилетов',
    'howWeWork.step4.detail2': 'Встреча в аэропорту прибытия',
    'howWeWork.step4.detail3': 'Сопровождение до места проживания',
    'howWeWork.step4.detail4': 'Помощь в адаптации на новом месте',
    'howWeWork.timeline': 'Сроки оформления',
    'howWeWork.timeline.weeks': 'недели',
    'howWeWork.timeline.months': 'месяца',
    'howWeWork.timeline.docs': 'Подготовка документов',
    'howWeWork.timeline.visa': 'Получение визы',
    'howWeWork.timeline.total': 'Полный цикл до выезда',
    'howWeWork.ready': 'Готовы начать?',
    'howWeWork.ready.text': 'Запишитесь на бесплатную консультацию, и мы поможем вам сделать первый шаг к работе за рубежом',
    
    // Contact
    'contact.title': 'Контакты',
    'contact.subtitle': 'Свяжитесь с нами любым удобным способом',
    'contact.address': 'Адрес',
    'contact.address.value': 'Toshkent shahar, Mirobod tumani, Afrosiyob ko\'chasi, 8-1 uy',
    'contact.address.factual': 'Фактический адрес',
    'contact.address.legal': 'Юридический адрес',
    'contact.address.factual.value': 'Toshkent shahar, Mirobod tumani, Afrosiyob ko\'chasi, 8-1 uy',
    'contact.address.legal.value': 'TOSHKENT SHAHRI, SHAYXONTOHUR TUMANI, SHAYXONTOHUR MFY, ABDULLA QODIRIY KO\'CHASI, 12-UY',
    'contact.phone': 'Телефон',
    'contact.email': 'Email',
    'contact.hours': 'Часы работы',
    'contact.hours.weekday': 'Пн-Пт: 9:00 - 18:00',
    'contact.hours.weekend': 'Сб: 10:00 - 15:00',
    'contact.location': 'Наше местоположение',
    'contact.form.title': 'Связаться с нами',
    'contact.form.name': 'Ваше имя',
    'contact.form.phone': 'Телефон',
    'contact.form.email': 'Email',
    'contact.form.country': 'Страна назначения',
    'contact.form.message': 'Сообщение',
    'contact.form.submit': 'Отправить',
    'contact.form.success': 'Сообщение отправлено!',
    'contact.form.success.text': 'Мы свяжемся с вами в ближайшее время',
    'contact.form.error': 'Ошибка отправки',
    'contact.form.error.text': 'Пожалуйста, попробуйте позже или свяжитесь с нами по телефону',
    'contact.form.sending': 'Отправка...',
    
    // Application Form
    'application.title': 'Заявка на вакансию',
    'application.name': 'ФИО',
    'application.phone': 'Телефон',
    'application.email': 'Email',
    'application.age': 'Возраст',
    'application.experience': 'Опыт работы',
    'application.submit': 'Отправить заявку',
    'application.success': 'Заявка успешно отправлена!',
    
    // Footer
    'footer.mehnat': 'Интеграция с Mehnat.uz',
    'footer.mehnat.title': 'Интеграция с Mehnat.uz',
    'footer.mehnat.desc': 'HORIZON WORK интегрирован с государственным порталом Mehnat.uz для обеспечения максимальной прозрачности и легальности процесса трудоустройства.',
    'footer.mehnat.benefits': 'Преимущества интеграции:',
    'footer.mehnat.benefit1': 'Официальная регистрация всех трудовых контрактов',
    'footer.mehnat.benefit2': 'Защита прав работников на государственном уровне',
    'footer.mehnat.benefit3': 'Доступ к базе проверенных работодателей',
    'footer.mehnat.benefit4': 'Гарантированная легальность трудоустройства',
    'footer.mehnat.visit': 'Перейти на Mehnat.uz →',
    'footer.rights': '© 2024 HORIZON WORK. Все права защищены.',
    
    // CTA
    'cta.ready': 'Готовы начать новую жизнь за рубежом?',
    'cta.consultation': 'Получите бесплатную консультацию уже сегодня',
    
    // Meta
    'meta.title': 'HORIZON WORK - Официальное трудоустройство за рубежом',
    'meta.description': 'Легальное трудоустройство за рубежом. Лицензированное агентство с опытом работы более 5 лет.',
  },
  uz: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.about': 'Biz haqimizda',
    'nav.jobs': 'Vakansiyalar',
    'nav.howWeWork': 'Qanday ishlaymiz',
    'nav.contact': 'Aloqa',
    
    // Hero Section
    'hero.title': 'Xorijda rasmiy ishga joylashish',
    'hero.subtitle': 'Chet elda qonuniy ish topishda ishonchli hamkor.',
    'hero.cta': 'Vakansiya tanlash',
    'hero.consultation': 'Bepul maslahat',
    
    // Services
    'services.title': 'Bizning xizmatlar',
    'services.subtitle': 'Xorijda muvaffaqiyatli ishga joylashish uchun to\'liq xizmatlar',
    'services.legal.title': 'Qonuniy ishga joylashish',
    'services.legal.desc': 'Barcha hujjatlar va ish vizalarini rasmiy rasmiylashtrish',
    'services.support.title': 'To\'liq qo\'llab-quvvatlash',
    'services.support.desc': 'Vakansiya tanlashdan moslashishgacha barcha bosqichlarda yordam',
    'services.verified.title': 'Tekshirilgan ish beruvchilar',
    'services.verified.desc': 'Faqat ishonchli kompaniyalar bilan ishlaymiz',
    'services.housing.title': 'Turar joy bilan yordam',
    'services.housing.desc': 'Uy-joy topish va rasmiylashtirishda ko\'maklashish',
    
    // Mission
    'mission.title': 'Bizning missiyamiz',
    'mission.text': 'HORIZON WORK odamlarga qonunchilikka to\'liq rioya qilgan holda xorijda munosib ish topishda yordam beradi. Biz jarayonning shaffofligini, qonuniy ishga joylashishni va har bosqichda qo\'llab-quvvatlashni kafolatlaymiz.',
    
    // About Page
    'about.title': 'Kompaniya haqida',
    'about.subtitle': 'HORIZON WORK - xorijda ishga joylashishda ishonchli hamkor',
    'about.license': 'Litsenziya',
    'about.licenseText': 'HORIZON WORK fuqarolarni xorijda ishga joylashtirishga rasmiy litsenziyaga ega. Litsenziya №12345 01.01.2020 dan',
    'about.advantages.title': 'Bizning afzalliklarimiz',
    'about.advantage1': 'Bozorda 5 yildan ortiq',
    'about.advantage1.desc': '2019 yildan beri muvaffaqiyatli ishlaymiz',
    'about.advantage2': '2000 dan ortiq mamnun mijozlar',
    'about.advantage2.desc': 'Butun dunyo bo\'ylab mamnun mijozlar',
    'about.advantage3': '100% qonuniy ishga joylashish',
    'about.advantage3.desc': 'Barcha hujjatlar va shartnomalar qonuniy',
    'about.advantage4': '24/7 qo\'llab-quvvatlash',
    'about.advantage4.desc': 'Mijozlarni 24 soat qo\'llab-quvvatlash',
    'about.legal': 'Huquqiy ma\'lumot',
    'about.legalText': 'Biz barcha xalqaro me\'yorlar va RF va O\'zR qonunchiligiga muvofiq ishlaymiz.',
    'about.license.official': 'Rasmiy litsenziyalangan',
    'about.license.number': 'Litsenziya raqami',
    'about.license.issued': 'Berilgan sana',
    'about.license.issuer': 'Beruvchi organ',
    'about.license.issuerName': 'O\'zR Mehnat vazirligi',
    'about.license.validity': 'Amal qilish muddati',
    'about.license.unlimited': 'Cheksiz',
    'about.security': 'Xavfsizlik kafolatlari',
    'about.security.contracts': 'Rasmiy mehnat shartnomalari',
    'about.security.insurance': 'Ishchilarni sug\'urtalash',
    'about.security.payment': 'Shaffof to\'lov shartlari',
    'about.security.legal': 'Yuridik qo\'llab-quvvatlash',
    
    // Jobs Page
    'jobs.title': 'Xorijdagi vakansiyalar',
    'jobs.subtitle': 'Xorijda ideal ish toping',
    'jobs.filter': 'Mamlakatlar bo\'yicha filtr',
    'jobs.all': 'Barcha mamlakatlar',
    'jobs.poland': 'Polsha',
    'jobs.poland.desc': 'Fabrikalar, logistika, qurilish',
    'jobs.korea': 'Janubiy Koreya',
    'jobs.korea.desc': 'Ishlab chiqarish, elektronika, qishloq xo\'jaligi',
    'jobs.japan': 'Yaponiya',
    'jobs.japan.desc': 'Mehmonxona biznesi, restoranlar, ishlab chiqarish',
    'jobs.croatia': 'Xorvatiya',
    'jobs.croatia.desc': 'Xizmat va turizm sohasida ish',
    'jobs.russia': 'Rossiya',
    'jobs.russia.desc': 'Ishlab chiqarish, qurilish va xizmat sohasida ish',
    'jobs.israel': 'Isroil',
    'jobs.israel.desc': 'Parvarish, tibbiyot va qishloq xo\'jaligida ish',
    'jobs.apply': 'Ariza topshirish',
    'jobs.salary': 'Ish haqi',
    'jobs.duration': 'Davomiyligi',
    
    // Job Listings
    'jobs.job10.title': 'Restoranda ofitsiant',
    'jobs.job10.company': 'Adriatic Restaurants',
    'jobs.job10.location': 'Dubrovnik',
    'jobs.job10.desc': 'Qirg\'oqdagi restoranda ish. Xizmat ko\'rsatish tajribasi talab qilinadi.',
    'jobs.job11.title': 'Mehmonxona administratori',
    'jobs.job11.company': 'Hotel Marina',
    'jobs.job11.location': 'Split',
    'jobs.job11.desc': 'Mehmonxonada resepshn ishi. Ingliz tilini bilish majburiy.',
    'jobs.job12.title': 'Xonaxizmatchi',
    'jobs.job12.company': 'Adriatic Hotels',
    'jobs.job12.location': 'Zagreb',
    'jobs.job12.desc': 'Mehmonxona majmuasida ish. Turar joy taqdim etiladi.',
    'jobs.job13.title': 'Payvandchi',
    'jobs.job13.company': 'RosStroy',
    'jobs.job13.location': 'Moskva',
    'jobs.job13.desc': 'Qurilish ob\'yektlarida ish. Payvandlash tajribasi talab qilinadi.',
    'jobs.job14.title': 'Chilangar',
    'jobs.job14.company': 'Ishlab chiqarish kombinati',
    'jobs.job14.location': 'Sankt-Peterburg',
    'jobs.job14.desc': 'Ishlab chiqarishda ish. To\'liq ijtimoiy paket.',
    'jobs.job15.title': 'Haydovchi-ekspeditor',
    'jobs.job15.company': 'LogistikPro',
    'jobs.job15.location': 'Kazan',
    'jobs.job15.desc': 'Shahar va viloyat bo\'ylab yuk tashish. B, C toifali haydovchilik guvohnomasi talab qilinadi.',
    'jobs.job16.title': 'Qariyalarga qarovchi',
    'jobs.job16.company': 'Care Israel',
    'jobs.job16.location': 'Tel-Aviv',
    'jobs.job16.desc': 'Qariyalarga qarash. Turar joy va ovqat taqdim etiladi.',
    'jobs.job17.title': 'Hamshira',
    'jobs.job17.company': 'Hadassah Medical',
    'jobs.job17.location': 'Quddus',
    'jobs.job17.desc': 'Klinikada ish. Tibbiy ta\'lim talab qilinadi.',
    'jobs.job18.title': 'Fermada ishchi',
    'jobs.job18.company': 'Kibbutz Agro',
    'jobs.job18.location': 'Hayfa',
    'jobs.job18.desc': 'Agricultural farm work. Accommodation provided.',
    
    // How We Work
    'howWeWork.title': 'Qanday ishlaymiz',
    'howWeWork.subtitle': 'Xorijda ishga joylashishning oddiy va tushunarli jarayoni',
    'howWeWork.step1': 'Maslahat',
    'howWeWork.step1desc': 'Bepul maslahat va vakansiya tanlash',
    'howWeWork.step1.detail1': 'Telefon yoki ofisda bepul maslahat',
    'howWeWork.step1.detail2': 'Sizning ko\'nikmalaringiz va tajribangizni tahlil qilish',
    'howWeWork.step1.detail3': 'Mos vakansiyalarni tanlash',
    'howWeWork.step1.detail4': 'Ish shartlari haqida to\'liq ma\'lumot',
    'howWeWork.step2': 'Hujjatlar',
    'howWeWork.step2desc': 'Barcha kerakli hujjatlarni tayyorlash va rasmiylashtrish',
    'howWeWork.step2.detail1': 'Kerakli hujjatlarni yig\'ish',
    'howWeWork.step2.detail2': 'Tarjima va notarial tasdiqlash',
    'howWeWork.step2.detail3': 'Ish vizasi uchun hujjatlar topshirish',
    'howWeWork.step2.detail4': 'Tibbiy ma\'lumotnomalarni rasmiylashtrish',
    'howWeWork.step3': 'Viza',
    'howWeWork.step3desc': 'Ish vizasini olish',
    'howWeWork.step3.detail1': 'Elchixonada suhbatga tayyorgarlik',
    'howWeWork.step3.detail2': 'Suhbatda hamrohlik qilish',
    'howWeWork.step3.detail3': 'Ish vizasini olish',
    'howWeWork.step3.detail4': 'Mehnat shartnomasini rasmiylashtrish',
    'howWeWork.step4': 'Jo\'nash',
    'howWeWork.step4desc': 'Safar tashkil qilish va belgilangan mamlakatda kutib olish',
    'howWeWork.step4.detail1': 'Aviachiptalarni sotib olishda yordam',
    'howWeWork.step4.detail2': 'Yetib kelish aeroportida kutib olish',
    'howWeWork.step4.detail3': 'Turar joyga hamrohlik qilish',
    'howWeWork.step4.detail4': 'Yangi joyda moslashishda yordam',
    'howWeWork.timeline': 'Rasmiylashtrish muddatlari',
    'howWeWork.timeline.weeks': 'hafta',
    'howWeWork.timeline.months': 'oy',
    'howWeWork.timeline.docs': 'Hujjatlarni tayyorlash',
    'howWeWork.timeline.visa': 'Viza olish',
    'howWeWork.timeline.total': 'Jo\'nashgacha to\'liq tsikl',
    'howWeWork.ready': 'Boshlashga tayyormisiz?',
    'howWeWork.ready.text': 'Bepul maslahatge yoziling va biz sizga xorijda ishlash tomon birinchi qadamni qo\'yishda yordam beramiz',
    
    // Contact
    'contact.title': 'Aloqa',
    'contact.subtitle': 'Biz bilan qulay usulda bog\'laning',
    'contact.address': 'Manzil',
    'contact.address.factual': 'Factual address',
    'contact.address.legal': 'Legal address',
    'contact.address.factual.value': 'Toshkent shahar, Mirobod tumani, Afrosiyob ko\'chasi, 8-1 uy',
    'contact.address.legal.value': 'TOSHKENT SHAHRI, SHAYXONTOHUR TUMANI, SHAYXONTOHUR MFY, ABDULLA QODIRIY KO\'CHASI, 12-UY',
    'contact.phone': 'Telefon',
    'contact.email': 'Email',
    'contact.hours': 'Ish vaqti',
    'contact.hours.weekday': 'Dush-Jum: 9:00 - 18:00',
    'contact.hours.weekend': 'Shan: 10:00 - 15:00',
    'contact.location': 'Bizning joylashuvimiz',
    'contact.form.title': 'Biz bilan bog\'laning',
    'contact.form.name': 'Ismingiz',
    'contact.form.phone': 'Telefon',
    'contact.form.email': 'Email',
    'contact.form.country': 'Maqsad mamlakat',
    'contact.form.message': 'Xabar',
    'contact.form.submit': 'Yuborish',
    'contact.form.success': 'Xabar yuborildi!',
    'contact.form.success.text': 'Tez orada siz bilan bog\'lanamiz',
    'contact.form.error': 'Yuborishda xatolik',
    'contact.form.error.text': 'Iltimos, keyinroq urinib ko\'ring yoki telefon orqali bog\'laning',
    'contact.form.sending': 'Yuborilmoqda...',
    
    // Application Form
    'application.title': 'Vakansiyaga ariza',
    'application.name': 'FIO',
    'application.phone': 'Telefon',
    'application.email': 'Email',
    'application.age': 'Yosh',
    'application.experience': 'Ish tajribasi',
    'application.submit': 'Ariza yuborish',
    'application.success': 'Ariza muvaffaqiyatli yuborildi!',
    
    // Footer
    'footer.mehnat': 'Mehnat.uz bilan integratsiya',
    'footer.mehnat.title': 'Mehnat.uz bilan integratsiya',
    'footer.mehnat.desc': 'HORIZON WORK ishga joylashish jarayonining maksimal shaffofligi va qonuniyligi uchun Mehnat.uz davlat portali bilan integratsiyalashgan.',
    'footer.mehnat.benefits': 'Integratsiyaning afzalliklari:',
    'footer.mehnat.benefit1': 'Barcha mehnat shartnomalarini rasmiy ro\'yxatdan o\'tkazish',
    'footer.mehnat.benefit2': 'Davlat darajasida ishchilar huquqlarini himoya qilish',
    'footer.mehnat.benefit3': 'Tekshirilgan ish beruvchilar bazasiga kirish',
    'footer.mehnat.benefit4': 'Ishga joylashishning kafolatlangan qonuniyligi',
    'footer.mehnat.visit': 'Mehnat.uz ga o\'tish →',
    'footer.rights': '© 2024 HORIZON WORK. Barcha huquqlar himoyalangan.',
    
    // CTA
    'cta.ready': 'Xorijda yangi hayot boshlashga tayyormisiz?',
    'cta.consultation': 'Bugun bepul maslahat oling',
    
    // Meta
    'meta.title': 'HORIZON WORK - Xorijda rasmiy ishga joylashish',
    'meta.description': 'Xorijda qonuniy ishga joylashish. 5 yildan ortiq tajribaga ega litsenziyalangan agentlik.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.jobs': 'Jobs',
    'nav.howWeWork': 'How We Work',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Official Employment Abroad',
    'hero.subtitle': 'A reliable partner in finding legal employment abroad.',
    'hero.cta': 'Find a Job',
    'hero.consultation': 'Free Consultation',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Full range of services for your successful employment abroad',
    'services.legal.title': 'Legal Employment',
    'services.legal.desc': 'Official processing of all documents and work visas',
    'services.support.title': 'Full Support',
    'services.support.desc': 'Assistance at all stages from job selection to adaptation',
    'services.verified.title': 'Verified Employers',
    'services.verified.desc': 'We only work with reliable companies',
    'services.housing.title': 'Housing Assistance',
    'services.housing.desc': 'Help in finding and arranging accommodation',
    
    // Mission
    'mission.title': 'Our Mission',
    'mission.text': 'HORIZON WORK helps people find decent work abroad in full compliance with the law. We guarantee transparency of the process, legal employment and support at every stage.',
    
    // About Page
    'about.title': 'About Company',
    'about.subtitle': 'HORIZON WORK - reliable partner in employment abroad',
    'about.license': 'License',
    'about.licenseText': 'HORIZON WORK has an official license for employment of citizens abroad. License №12345 dated 01.01.2020',
    'about.advantages.title': 'Our Advantages',
    'about.advantage1': 'More than 5 years in the market',
    'about.advantage1.desc': 'Successfully operating since 2019',
    'about.advantage2': 'More than 2000 satisfied clients',
    'about.advantage2.desc': 'Happy clients worldwide',
    'about.advantage3': '100% legal employment',
    'about.advantage3.desc': 'All documents and contracts are legal',
    'about.advantage4': '24/7 support',
    'about.advantage4.desc': '24-hour customer support',
    'about.legal': 'Legal Information',
    'about.legalText': 'We operate in accordance with all international norms and legislation of the Russian Federation and the Republic of Uzbekistan.',
    'about.license.official': 'Officially Licensed',
    'about.license.number': 'License Number',
    'about.license.issued': 'Issue Date',
    'about.license.issuer': 'Issuing Authority',
    'about.license.issuerName': 'Ministry of Labor of the Republic of Uzbekistan',
    'about.license.validity': 'Validity Period',
    'about.license.unlimited': 'Unlimited',
    'about.security': 'Security Guarantees',
    'about.security.contracts': 'Official employment contracts',
    'about.security.insurance': 'Employee insurance',
    'about.security.payment': 'Transparent payment terms',
    'about.security.legal': 'Legal support',
    
    // Jobs Page
    'jobs.title': 'Jobs Abroad',
    'jobs.subtitle': 'Find the perfect job abroad',
    'jobs.filter': 'Filter by countries',
    'jobs.all': 'All Countries',
    'jobs.poland': 'Poland',
    'jobs.poland.desc': 'Factories, logistics, construction',
    'jobs.korea': 'South Korea',
    'jobs.korea.desc': 'Manufacturing, electronics, agriculture',
    'jobs.japan': 'Japan',
    'jobs.japan.desc': 'Hotel business, restaurants, manufacturing',
    'jobs.croatia': 'Croatia',
    'jobs.croatia.desc': 'Service and tourism industry jobs',
    'jobs.russia': 'Russia',
    'jobs.russia.desc': 'Manufacturing, construction and service jobs',
    'jobs.israel': 'Israel',
    'jobs.israel.desc': 'Caregiving, medical and agriculture jobs',
    'jobs.apply': 'Apply',
    'jobs.salary': 'Salary',
    'jobs.duration': 'Duration',
    
    // Job Listings
    'jobs.job10.title': 'Restaurant Waiter',
    'jobs.job10.company': 'Adriatic Restaurants',
    'jobs.job10.location': 'Dubrovnik',
    'jobs.job10.desc': 'Work in a seaside restaurant. Service experience required.',
    'jobs.job11.title': 'Hotel Receptionist',
    'jobs.job11.company': 'Hotel Marina',
    'jobs.job11.location': 'Split',
    'jobs.job11.desc': 'Front desk work in hotel. English required.',
    'jobs.job12.title': 'Housekeeping',
    'jobs.job12.company': 'Adriatic Hotels',
    'jobs.job12.location': 'Zagreb',
    'jobs.job12.desc': 'Work in hotel complex. Accommodation provided.',
    'jobs.job13.title': 'Welder',
    'jobs.job13.company': 'RosStroy',
    'jobs.job13.location': 'Moscow',
    'jobs.job13.desc': 'Work on construction sites. Welding experience required.',
    'jobs.job14.title': 'Mechanic',
    'jobs.job14.company': 'Production Complex',
    'jobs.job14.location': 'St. Petersburg',
    'jobs.job14.desc': 'Manufacturing work. Full social package.',
    'jobs.job15.title': 'Delivery Driver',
    'jobs.job15.company': 'LogistikPro',
    'jobs.job15.location': 'Kazan',
    'jobs.job15.desc': 'Cargo delivery in city and region. B, C license required.',
    'jobs.job16.title': 'Caregiver',
    'jobs.job16.company': 'Care Israel',
    'jobs.job16.location': 'Tel Aviv',
    'jobs.job16.desc': 'Elderly care. Accommodation and meals provided.',
    'jobs.job17.title': 'Nurse',
    'jobs.job17.company': 'Hadassah Medical',
    'jobs.job17.location': 'Jerusalem',
    'jobs.job17.desc': 'Clinic work. Medical education required.',
    'jobs.job18.title': 'Farm Worker',
    'jobs.job18.company': 'Kibbutz Agro',
    'jobs.job18.location': 'Haifa',
    'jobs.job18.desc': 'Agricultural farm work. Accommodation provided.',
    
    // How We Work
    'howWeWork.title': 'How We Work',
    'howWeWork.subtitle': 'Simple and clear employment process abroad',
    'howWeWork.step1': 'Consultation',
    'howWeWork.step1desc': 'Free consultation and job selection',
    'howWeWork.step1.detail1': 'Free consultation by phone or in office',
    'howWeWork.step1.detail2': 'Analysis of your skills and experience',
    'howWeWork.step1.detail3': 'Selection of suitable vacancies',
    'howWeWork.step1.detail4': 'Complete information about working conditions',
    'howWeWork.step2': 'Documents',
    'howWeWork.step2desc': 'Preparation and processing of all necessary documents',
    'howWeWork.step2.detail1': 'Collection of necessary documents',
    'howWeWork.step2.detail2': 'Translation and notarization',
    'howWeWork.step2.detail3': 'Submission of documents for work visa',
    'howWeWork.step2.detail4': 'Medical certificate processing',
    'howWeWork.step3': 'Visa',
    'howWeWork.step3desc': 'Obtaining a work visa',
    'howWeWork.step3.detail1': 'Preparation for embassy interview',
    'howWeWork.step3.detail2': 'Interview accompaniment',
    'howWeWork.step3.detail3': 'Obtaining a work visa',
    'howWeWork.step3.detail4': 'Employment contract processing',
    'howWeWork.step4': 'Departure',
    'howWeWork.step4desc': 'Travel organization and meeting in destination country',
    'howWeWork.step4.detail1': 'Assistance in purchasing airline tickets',
    'howWeWork.step4.detail2': 'Meeting at arrival airport',
    'howWeWork.step4.detail3': 'Accompaniment to accommodation',
    'howWeWork.step4.detail4': 'Assistance in adapting to new place',
    'howWeWork.timeline': 'Processing Timeline',
    'howWeWork.timeline.weeks': 'weeks',
    'howWeWork.timeline.months': 'months',
    'howWeWork.timeline.docs': 'Document preparation',
    'howWeWork.timeline.visa': 'Visa processing',
    'howWeWork.timeline.total': 'Full cycle before departure',
    'howWeWork.ready': 'Ready to start?',
    'howWeWork.ready.text': 'Sign up for a free consultation and we will help you take the first step towards working abroad',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Contact us in any convenient way',
    'contact.address': 'Address',
    'contact.address.factual': 'Factual address',
    'contact.address.legal': 'Legal address',
    'contact.address.factual.value': 'Toshkent shahar, Mirobod tumani, Afrosiyob ko\'chasi, 8-1 uy',
    'contact.address.legal.value': 'TOSHKENT SHAHRI, SHAYXONTOHUR TUMANI, SHAYXONTOHUR MFY, ABDULLA QODIRIY KO\'CHASI, 12-UY',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Working Hours',
    'contact.hours.weekday': 'Mon-Fri: 9:00 AM - 6:00 PM',
    'contact.hours.weekend': 'Sat: 10:00 AM - 3:00 PM',
    'contact.location': 'Our Location',
    'contact.form.title': 'Contact Us',
    'contact.form.name': 'Your Name',
    'contact.form.phone': 'Phone',
    'contact.form.email': 'Email',
    'contact.form.country': 'Destination Country',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.form.success': 'Message sent!',
    'contact.form.success.text': 'We will contact you shortly',
    'contact.form.error': 'Sending error',
    'contact.form.error.text': 'Please try again later or contact us by phone',
    'contact.form.sending': 'Sending...',
    
    // Application Form
    'application.title': 'Job Application',
    'application.name': 'Full Name',
    'application.phone': 'Phone',
    'application.email': 'Email',
    'application.age': 'Age',
    'application.experience': 'Work Experience',
    'application.submit': 'Submit Application',
    'application.success': 'Application submitted successfully!',
    
    // Footer
    'footer.mehnat': 'Integration with Mehnat.uz',
    'footer.mehnat.title': 'Integration with Mehnat.uz',
    'footer.mehnat.desc': 'HORIZON WORK is integrated with the Mehnat.uz government portal to ensure maximum transparency and legality of the employment process.',
    'footer.mehnat.benefits': 'Integration benefits:',
    'footer.mehnat.benefit1': 'Official registration of all employment contracts',
    'footer.mehnat.benefit2': 'Protection of workers\' rights at the state level',
    'footer.mehnat.benefit3': 'Access to database of verified employers',
    'footer.mehnat.benefit4': 'Guaranteed legality of employment',
    'footer.mehnat.visit': 'Visit Mehnat.uz →',
    'footer.rights': '© 2024 HORIZON WORK. All rights reserved.',
    
    // CTA
    'cta.ready': 'Ready to start a new life abroad?',
    'cta.consultation': 'Get a free consultation today',
    
    // Meta
    'meta.title': 'HORIZON WORK - Official Employment Abroad',
    'meta.description': 'Legal employment abroad. Licensed agency with over 5 years of experience.',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Try to get saved language from localStorage
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'ru' || saved === 'uz' || saved === 'en')) {
      setLanguage(saved);
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('ru')) {
        setLanguage('ru');
      } else if (browserLang.startsWith('uz')) {
        setLanguage('uz');
      } else if (browserLang.startsWith('en')) {
        setLanguage('en');
      } else {
        // Default to Russian
        setLanguage('ru');
      }
    }
    setIsLoaded(true);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  // Don't render until language is loaded
  if (!isLoaded) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}