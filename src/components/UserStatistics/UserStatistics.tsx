import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import { QuestionnaireService } from "src/services";
import { Loadable } from "src/components";

import styles from "./UserStatistics.module.sass";

import type { UserStatisticsProps } from "./types";


const UserStatistics = ({ userId }: UserStatisticsProps) => {
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [weekAnswers, setWeekAnswers] = useState(0);
  const [monthAnswers, setMonthAnswers] = useState(0);
  const [yearAnswers, setYearAnswers] = useState(0);
  const [lastAnswers, setLastAnswers] = useState<{
    questionnaireId: number,
    uploadDate: string,
  }[]>([]);

  const loadStatistics = useCallback(async () => {
    const statistics = await QuestionnaireService.getStatistics(userId);
    setTotalAnswers(statistics.totalAnswers);
    setWeekAnswers(statistics.weekAnswers);
    setMonthAnswers(statistics.monthAnswers);
    setYearAnswers(statistics.yearAnswers);
    setLastAnswers(statistics.lastAnswers);
  }, [userId]);

  return (
    <Loadable load={loadStatistics}>
      <>
        <div className={styles.section}>
          <h3 className={styles.sectionHeader}>
            Всего пройдено опросов: {totalAnswers}
          </h3>
          <p>За прошедшую неделю: {weekAnswers}</p>
          <p>За прошедший месяц: {monthAnswers}</p>
          <p>За прошедший год: {yearAnswers}</p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionHeader}>
            Последние пройденные опросы
          </h3>
          {
            lastAnswers.map(answer => {
              return <div className={styles.questionnaire}>
                <Link
                  to={"/questionnaire-clientquestionnaire/" +
                    answer.questionnaireId}
                >
                  {answer.questionnaireId}
                </Link>
                <span>{answer.uploadDate}</span>
              </div>;
            })
          }
        </div>
      </>
    </Loadable>
  );
};

export default UserStatistics;