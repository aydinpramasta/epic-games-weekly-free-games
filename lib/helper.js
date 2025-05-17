export function getCurrentWeekDatesStartingThursday() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Sun) - 6 (Sat)

  // Adjust to get Thursday as the start of the week
  const offset = (dayOfWeek + 7 - 4) % 7;

  // Get the start of the custom week (Thursday)
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - offset);

  // Generate all 7 days from Thursday to Wednesday
  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);

    const formattedDate = date.toISOString().split("T")[0];

    weekDates.push(formattedDate);
  }

  return weekDates;
}
