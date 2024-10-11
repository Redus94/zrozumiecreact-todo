export const getSubheading = (numberOfTask) => {
  switch (true) {
    case numberOfTask > 4:
      return `${numberOfTask} zadań`;
    case numberOfTask > 1:
      return `${numberOfTask} zadania`;
    case numberOfTask === 1:
      return "1 zadanie";
    case numberOfTask === 0:
    default:
      "Brak zadań";
  }
};
