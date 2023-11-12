export type CalendarHeaderProps = {
  currentMonth: Date;
  prevMonth: () => void;
  nextMonth: () => void;
  nowMonth: () => void;
};
