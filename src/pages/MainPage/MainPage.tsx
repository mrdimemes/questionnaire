import { useEffect } from "react";
import { useAppDispatch } from "src/redux/hooks";
import { PageWrapper } from "../PageWrapper";
import { NavigationPage, setActivePage } from "src/redux/slices/browseSlice";
import styles from "./MainPage.module.sass";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const frontendSourceLink = "https://github.com/mrdimemes/questionnaire-client";
  const backendSourceLink = "https://github.com/mrdimemes/questionnaire-server";
  const email = "shagurovda@gmail.com";
  const github = "https://github.com/mrdimemes";

  useEffect(() => {
    dispatch(setActivePage(NavigationPage.Main))
  }, [dispatch]);

  return (
    <PageWrapper>
      <h1>О проекте</h1>

      <section className={styles.section}>
        <p className={styles.aboutText}>Это приложение с опросниками и анкетами, разработанное с целью получения дополнительного практического опыта работы с используемыми технологиями и последующего размещения в портфолио. Все (или почти все) представленные опросники и/или тэги являются однотипными заполнителями, позволяющими оценить функционал приложения, но не несущими в себе никакой смысловой нагрузки.</p>
        <p className={styles.aboutText}>Приложение имеет клиент-серверную архитектуру. Взаимодействие клиента и сервера построено на основе REST API. Дизайн разрабатывался «на лету», не выстраивался в соответствии с каким-либо шаблоном. </p>
        <p className={styles.aboutText}><strong>На данный момент проект не завершен и активно дорабатывается.</strong></p>
      </section>

      <section className={styles.section}>
        <h2>Предусмотрен следующий функционал:</h2>
        <ul>
          <li className={styles.listItem}>Регистрация и авторизация на основе JWT-токенов (подтверждение электронной почты не требуется из соображений репрезентативности)</li>
          <li className={styles.listItem}>Прохождение опросов в гостевом и авторизованном режимах</li>
          <li className={styles.listItem}>Добавление, редактирование и удаление опросов и тэгов из под учетной записи с правами администратора</li>
          <li className={styles.listItem}>Поиск и сортировка по списку опросов и тегов</li>
          <li className={styles.listItem}>Пагинация</li>
          <li className={styles.listItem}>Валидация форм</li>
          <li className={styles.listItem}>Сохранение статистики прохождения опросов, доступ к персональной статистике для авторизованных пользователей</li>
          <li className={styles.listItem}>Переключение между светлой и тёмной темами, сохранение выбранной темы в local storage</li>
        </ul>
      </section>



      <div className={styles.columns}>
        <section className={styles.section}>
          <h2>Front-end стэк</h2>
          <ul>
            <li className={styles.listItem}>React</li>
            <li className={styles.listItem}>TypeScript</li>
            <li className={styles.listItem}>Redux</li>
            <li className={styles.listItem}>Axios</li>
            <li className={styles.listItem}>Sass</li>
            <li className={styles.listItem}>Testing Library</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Back-end стэк</h2>
          <ul>
            <li className={styles.listItem}>NodeJS</li>
            <li className={styles.listItem}>TypeScript</li>
            <li className={styles.listItem}>Express</li>
            <li className={styles.listItem}>MySQL</li>
          </ul>
        </section>
      </div>

      <section className={styles.section}>
        <h2>Исходный код</h2>
        <p className={styles.aboutText}>Исходный код доступен в открытых GitHub репозиториях и может свободно использоваться как для коммерческих, так и для некомерческих нужд.</p>
        <div className={styles.bar}>
          <a href={frontendSourceLink}>Front-end</a>
          <a href={backendSourceLink}>Back-end</a>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Контакты</h2>
        <div className={styles.bar}>
          <a href={"mailto:" + email}>Почта</a>
          <a href={github}>GitHub</a>
        </div>
      </section>

    </PageWrapper>
  )
}

export default MainPage;