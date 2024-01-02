function getMonthFormatted(dataAmericana: string): string {
  const parts: string[] = dataAmericana.split("/");
  const month: number = parseInt(parts[1], 10);

  const months: string[] = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ",
  ];

  return months[month - 1];
}

function getYearFormatted(dataAmericana: string): string {
  const parts: string[] = dataAmericana.split("/");
  const year: number = parseInt(parts[2], 10);

  return year.toString();
}

export { getMonthFormatted, getYearFormatted };
