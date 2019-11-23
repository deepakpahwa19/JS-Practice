const atob = require('atob');
const arr = ["ap-odi1mjexmtkx", "ap-mzu4njc1ndq1", "payroll-NzUzNDUzNDA2", "qbes-MzY0MTk1NDQz", "qbplus-ODA4MjcwMTc2", "qbplus-NzUzNDUzNDA2", "qbplus-Nzc2MTgzOTY0", "payroll-MzQzODA1MzYw", "payroll-NzE4NDMzNTk=", "payroll-NTMwOTI3MjI0", "payroll-NDQ5MTMyODc3", "qbes-NjAyODY4Mzc5", "payroll-MTM3ODUwMTgx"]
// for (const item of arr) {
//     const arrSplit = item.split('-');
//     const CAN = atob(arrSplit[1]);
//     console.log(`${arrSplit[0]} - ${CAN}`);
// }


// let s = '07:05:45PM';
// // s = s.substring(0,s.length -2);
// // const convertedTime = s.split(':');
// // console.log(convertedTime.join(':'));

// function timeConversion(s) {
//     const amOrPm = s.slice(s.length - 2);
//     const str = s.substring(0, s.length - 2);
//     const convertedTime = str.split(':');
//     if (amOrPm === 'AM' && convertedTime[0] === '12') {
//         convertedTime[0] = '00';
//     } else if (amOrPm === 'PM') {
//         if (convertedTime[0] !== '12') {
//             convertedTime[0] = parseInt(convertedTime[0]) + 12;
//         }
//     }
//     console.log(convertedTime.join(':'));
// }

// timeConversion('07:05:45PM');
// timeConversion('12:00:45PM');
// timeConversion('12:05:45AM');
// timeConversion('07:05:45AM');