import React, { useEffect } from "react";
import moment from 'moment';

function Calendar() {
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = moment();
//       const startOfDay = moment().startOf('day').add(9, 'hours'); // начало дня в 9 утра
//       const endOfDay = moment().startOf('day').add(11, 'hours'); // конец дня в 6 вечера
//       if (now.isAfter(startOfDay) && now.isBefore(endOfDay)) {
//         // код для обработки статуса объекта
//         console.log('Объект в рабочем состоянии!');
//       } else {
//         console.log('Объект не работает!');
//       }
//     }, 1000); // проверка каждую секунду
//     return () => clearInterval(interval);
//   }, []);
    
  return <div>Мониторинг статуса объекта</div>;
}

export { Calendar };