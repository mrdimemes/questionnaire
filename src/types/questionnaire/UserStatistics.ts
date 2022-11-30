export type UserStatistics = {
  userId: number,
  totalAnswers: number,
  weekAnswers: number,
  monthAnswers: number,
  yearAnswers: number,
  lastAnswers: {
    questionnaireId: number,
    uploadDate: string,
  }[],
};