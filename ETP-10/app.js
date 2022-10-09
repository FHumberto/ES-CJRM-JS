const present = new Date();

console.log(present);

console.log('getFullYear: ' + present.getFullYear());
console.log('getMonth: ' + present.getMonth());
console.log('getDate: ' + present.getDate());
console.log('getDay: ' + present.getDay());
console.log('getHours: ' + present.getHours());
console.log('getMinutes: ' + present.getMinutes());
console.log('getSeconds: ' + present.getSeconds());


console.log('timestamp: ', + present.getTime());

console.log('CONVERSÃO: \n');
console.log('toDateString: ' + present.toDateString());
console.log('toDateString: ' + present.toTimeString());
console.log('toDateString: ' + present.toLocaleString());

console.log('\nUSANDO LIBS DE DATA (DateFNs)');
console.log(dateFns);

console.log(dateFns.isToday(present));



console.log(dateFns.format(present, "MMMM"));
console.log(dateFns.format(present, "YY"));
console.log(dateFns.format(present, "dddd"));
console.log(dateFns.format(present, "Do"));
console.log(dateFns.format(present, "DD/MM/YYYY"));

console.log('COMPARANDO DATAS:');

const past = new Date('April 7 2022 17:00:00');
console.log(dateFns.distanceInWords(present, past, { addSuffix: true }));