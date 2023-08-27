const getTime = (datetime: any) => {
  const dt = new Date(datetime);
  const datetimeString = dt.toISOString();
  const timeString: string = datetimeString.substr(11, 8);
  return timeString;
}

function getDate(datetime: any): string {
  const date: Date = new Date(datetime);
  const day: string = date.getDate().toString().padStart(2, '0');
  const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
  const year: string = date.getFullYear().toString();
  return `${day}-${month}-${year}`;
}

const getDay = (today: Date) => {
  const daysOfWeek: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // const today: Date = new Date();
  const dayOfWeek: number = today.getDay();
  const stringDay = daysOfWeek[dayOfWeek];
  let temp = "Weekday";
  if (dayOfWeek == 0 || dayOfWeek == 6) temp = "Weekend";
  const res = [stringDay, temp];
  return res;
}

function calculateAge(dateOfBirth: any): { years: number; months: number } {
  const dob = new Date(dateOfBirth);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();

  if (today.getDate() < dob.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months = 12 + months;
  }

  return { years, months };
}

function getRandomItems(arr: any[], excludedNumbers: number[]): any {
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * 50); 
  } while (excludedNumbers.includes(randomNumber));

  const res = [arr[randomNumber], randomNumber]

  return res;
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export { getTime, getDate, getDay, calculateAge, sleep, getRandomItems }