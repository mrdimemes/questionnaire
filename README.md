# О проекте 

Это приложение с опросниками и анкетами, разработанное с целью получения 
дополнительного практического опыта работы с используемыми технологиями и 
последующего размещения в портфолио. Все (или почти все) представленные 
опросники и/или тэги являются однотипными заполнителями, позволяющими оценить 
функционал приложения, но не несущими в себе никакой смысловой нагрузки.

Приложение имеет клиент-серверную архитектуру. Взаимодействие клиента и 
сервера построено на основе REST API. Дизайн разрабатывался «на лету», 
не выстраивался в соответствии с каким-либо шаблоном.

# Предусмотрен следующий функционал:

- Регистрация и авторизация на основе JWT-токенов (подтверждение электронной 
почты не требуется из соображений репрезентативности);
- Прохождение опросов в гостевом и авторизованном режимах;
- Добавление, редактирование и удаление опросов из под учетной записи с 
правами администратора;
- Добавление и удаление тегов из под учетной записи с правами администратора;
- Поиск и сортировка по списку опросов и тегов;
- Выгрузка ответов на опросы из под учетной записи администратора;
- Пагинация списков опросов и тегов;
- Кастомная валидация форм;
- Сохранение статистики прохождения опросов, доступ к персональной статистике 
для авторизованных пользователей;
- Переключение между светлой и тёмной темами, сохранение выбранной темы 
в local storage.


# Front-end стэк
- React;
- TypeScript;
- Redux;
- Axios;
- Sass;
- Testing Library;

# Back-end стэк

- NodeJS;
- TypeScript;
- Express;
- MySQL;

# Исходный код

Исходный код доступен в открытых GitHub репозиториях и может свободно 
использоваться как для коммерческих, так и для некомерческих нужд.

- [Front-end](https://github.com/mrdimemes/questionnaire-client)
- [Back-end](https://github.com/mrdimemes/questionnaire-server)

# Контакты

- [Почта](mailto:shagurovda@gmail.com)
- [GitHub](https://github.com/mrdimemes)
