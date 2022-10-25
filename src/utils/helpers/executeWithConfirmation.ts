const executeWithConfirmation = (alarmText: string, action: () => void) => {
  const confirmation = window.confirm(alarmText);
  if (confirmation) action();
};

export default executeWithConfirmation;