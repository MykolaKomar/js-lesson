// const personAge = "ten";
// const dogAge = "ten";

// console.log(personAge == dogAge);

// const userRole = 1;
// const adminRole = 2;
// const productPrice = 500;

// const ivanRole = userRole;
// const ivanBalance = 400;

// const result = ivanRole === adminRole || ivanBalance >= productPrice;

// console.log(result);

// const name = 0 || console.log("Test");

// console.log(name);

//=====

// let productTitle = null;

// productTitle ||= "Назва товару";

// console.log("productTitle", productTitle);

// let a = 3;
// let b = 7;

// console.log(a, a.toString(2));
// console.log(b, b.toString(2));

// let c = a | b;

// console.log(c, c.toString(2));

// let a = 0b1000;
// let b = 0b1100;

// let c = a | b;

// console.log(c.toString(2));

// const canRead = false;
// const canWrite = true;
// const canDelete = false;
// const canEdit = true;

// let userRole = 0b0101;

// let adminRole = 0b1111;

// let user2Role = 0b0101;

// let isAdmine = userRole === adminRole;

// let isSameRole = userRole & user2Role;

// console.log(isAdmine.toString(2));
// console.log(isSameRole === userRole);

// Урок №9
// ЦИКЛИ!!!!!!!!!!!!!!

// let count = 0;
// let isFast = true;

// while (count < 5) {
//     console.log ('Hello world!', count)

//     if (isFast && count >= 3) {
//         count = 5;
//     } else {
//         count++;
//     }
// }

//  ЗНИЖКА ДЛЯ ТОВАРІВ

// const PRODUCT_AMOUNT = 6;
// const DISCOUNT_ADDITIONAL = 2;

// let discountAmount = 0;
// let productCount = 0;

// while (
//   productCount < PRODUCT_AMOUNT &&
//   DISCOUNT_ADDITIONAL <= 10 &&
//   discountAmount <= 10
// ) {
//   productCount++;

//   if (productCount <= 0) {
//     break;
//   }
//   if (productCount <= 3) {
//     discountAmount += 1;
//   } else if (productCount > 3 && productCount <= 5) {
//     discountAmount += 1.5;
//   } else if (productCount > 5 && productCount <= 8) {
//     discountAmount += 2;
//   } else if (productCount > 8) {
//     discountAmount += 2.5;
//   }

//   if (DISCOUNT_ADDITIONAL) {
//     discountAmount += DISCOUNT_ADDITIONAL;
//   }

//   console.log(productCount, discountAmount);
// }
// if (discountAmount > 10) {
//   discountAmount = 10;
// }

// console.log("Знижка:", discountAmount, "%");

// console.log("Знижка для товарів:", productCount);

// console.log("Товарів які немають знижки:", PRODUCT_AMOUNT - productCount);

// Скільки машин треба щоб перевезти весь товар

// let container = 5;
// let storage = 20;

// let car = 3;

// do {
//   car++;

//   storage -= container;

//   console.log(car, storage);
// } while (car < 3);

// if (car > 3) {
//   console.log("You need new car");
// }

//  ВЕЛОТРЕНАЖЕР

// let start = 40;
// let goal = 100;

// let step = 0;
// let set = 8;
// let rest = 10;

// do {
//   if (step === 0) {
//     console.log("Початок тренування");
//   }
//   start++;
//   step++;

//   if (step === goal || start == goal) {
//     console.log("Кінець тренування");
//     break;
//   }

//   if (step % rest === 0) {
//     console.log(`Зробіть перерву`);
//     continue;
//   }

//   if (step % set === 0) {
//     console.log(`Ви зробили ${step / set} сет(ів)`);
//   }

//   if (step === goal / 2) {
//     console.log(`Ви зробили половину тренування`);
//   }

//   console.log("Поточний прогрес", step);
// } while (step < goal && start < goal);

// FOR

// let q = 0;

// main: for (let i = 1, j = 5; i <= j; i++) {
//   console.log("test", i, j);

//   if (i === 3) {
//     j++;
//   }

//   for (;;) {
//     console.log("Q", q);
//
//     q++;

//     if (q >= i) {
//       break main;
//     }
//   }
// }

// МІТКИ

// let age = 25;
// let hasEXP = true;
// let hasEdu = false;

// let JS = true;
// let HTML = true;

// form: {
//   if (age >= 18) {
//     if (hasEXP) {
//       if (JS) {
//         console.log("Ви підходите!");
//       }

//       if (HTML) {
//         console.log("Ви підходите!");
//       }
//     }
//     if (hasEdu) {
//       console.log("Ви підходите!");
//     }
//   }

//   if (age < 18) {
//     console.log("Ви не підходити. Маленький вік!");
//   }
// }

// ТАБЛИЦЯ МНОЖЕННЯ

// table: for (let i = 1; i < 10; i++) {
//   if (i === 1) {
//     continue table;
//   }

//   console.log(`Число ${i} =======================`);
//   for (let j = 1; j < 10; j++) {
//     if (j === 1) {
//       continue;
//     }
//     let result = i * j;
//     if (i === 9) {
//       break table;
//     }
//     console.log(`${i} * ${j} = ${result}`);
//   }
// }

// Урок №10
//  ФУНКЦІЯ   !!!!!!!!
//  ФУНКЦІЯ   !!!!!
//  ФУНКЦІЯ   !!!

// Варіант №1

// function calcSpace(amount, unit) {
//   return `${amount * 4}${unit}`;
// }

// console.log(calcSpace(5, "px"));

// Варіант №2

// function calcSpace(amount, unit) {
//   if (unit !== undefined) {
//     unit = "px";
//   }
//   return `${amount * 4}${unit}`;
// }

// console.log(calcSpace(5, 0));

// Варіант №3

// function calcSpace(amount, unit = "px") {
//   return `${amount * 4}${unit}`;
// }

// console.log(calcSpace(5));

//  Плеєр

// function playTrackById(trackId) {
//   /// отримати файл піснп і її запустити
// }

// function stopTrackById(trackId) {
//   /// отримати файл пісні і поставити її на паузу
// }

// function play(trackName, trackId) {
//   console.log(`Запускаємо ${trackName}`);

//   playTrackById(trackId);
// }

// function end(oldTrackName, newTrackName) {
//   console.log(`Завершили  грати ${oldTrackName}`);
//   console.log(`Наступний трек ${newTrackName}`);
// }

// function pausePlay(currentTrackName) {
//   console.log(`Treck ${currentTrackName} на паузі`);

//   reloadDataTrack();

//   play();
// }

// // РЕКУРСІЯ   !!?!?!?!?!?!

// function reloadDataTrack(amount) {
//   if (amount <= 0) {
//     console.log("Дані оновленні вказану кількість разів");
//   } else {
//     console.log("Повторне оновлення");
//     // Певний код для оновлення данних
//     reloadDataTrack(amount - 1);
//   }
// }

// reloadDataTrack(5);

// function pauseStopByTrack(trackName, trackId) {
//   let originTrackName = trackName;
//   let originTrackID = trackId;
//   return function pauseStop() {
//     stopTrackById(originTrackID);
//     console.log(`Treck ${originTrackName} на паузі`);
//   };
// }

// const pauseStop123 = pauseStopByTrack("IT - Hello World");

// pauseStop123();

// const pauseStop456 = pauseStopByTrack("IT - console log");

// pauseStop456();

// ///  /// /// /// / / / // / / // / / / //

// const runCommand = function (command, errorFn) {
//   const result = command();

//   if (!result) {
//     return errorFn();
//   }
// };

// runCommand(
//   function () {
//     console.log("Запуск Команди");

//     return 1 - 1;
//   },
//   function () {
//     console.log("Помилка");
//   }
// );

// Стрілкова ФУНККЦІЯ  () => {}

// runCommand(
//   () => {
//     console.log("Запуск Команди");

//     return 1 - 1;
//   },
//   () => console.log("Помилка")
// );

//  ПРОБЛЕМИ var

// var test = 0;

// const testFunc = () => {
//   if (true) {
//     var test = 10;
//   }
//   return test;
// };

// console.log(testFunc());

// Каррірована ФУНКЦІЯ

// function stopTrackById(trackId) {
//   /// отримати файл пісні і поставити її на паузу
// }

// function pauseStopByTrack(trackName, trackId) {
//   return () => {
//     stopTrackById(trackId);
//     console.log(`Treck ${trackName} на паузі`);
//   };
// }

// const pauseStop456 = pauseStopByTrack("IT - console log", 10);

// pauseStop456();

//  МЕМОІЗАЦІЯ .....

// function stopTrackById(trackId) {
//   /// отримати файл пісні і поставити її на паузу

//   console.log(`отримати файл пісні з Id ${trackId} і поставити її на паузу`);
// }

// function pauseStopByTrack(trackName, trackId) {
//   let isPause = null;

//   return () => {
//     if (isPause == true) {
//       return;
//     }
//     stopTrackById(trackId);
//     console.log(`Treck ${trackName} на паузі`);
//     isPause = true;
//   };
// }

// const pauseStop456 = pauseStopByTrack("IT - console log", 10);

// pauseStop456();
// pauseStop456();
// pauseStop456();

// const memoCalcSpace = (oldAmount = null, oldUnit = null, oldResult = null) => {
//   return (amount, unit = "px") => {
//     if (oldAmount === amount && unit === oldUnit) {
//       console.log("Memo");
//       return oldResult;
//     }

//     const result = `${amount * 4}${unit}`;

//     oldResult = result;
//     oldAmount = amount;
//     oldUnit = unit;

//     return oldResult;
//   };
// };

// const calcSpace = memoCalcSpace();

// console.log(calcSpace(4));
// console.log(calcSpace(4));

// КОМПОЗИЦІЯ ФУНКЦІЙ
// function play(trackName, trackId) {
//   console.log(`Запускаємо ${trackName}`);

//   playTrackById(trackId);
// }

// function end(oldTrackName, newTrackName) {
//   console.log(`Завершили  грати ${oldTrackName}`);
//   console.log(`Наступний трек ${newTrackName}`);
// }

// const restartTrack = (trackName, trackId) => {
//   return play(end());
// };

//// Урок №11
// ВБУДОВАНІ ГЛОБАЛЬНІ ФУНКЦІЇ

// eval() - це JS функція яка використовується для виконання коду,
//  який був переданий текстом в аргумент

// const code = "(5+5) % 5 === 0";

// console.log(eval(code));

//

// isFinite () - функція що перевіряє чи значення аргумента
// є СКІНЧЕННИМ числом

// function calcScreenRation(w, h) {
//   return w / h;
// }

// console.log(calcScreenRation(1920, 1080));

// function calcScreenRation(w, h) {
//   let result = w / h;
//   return isFinite(result) ? result : null;
// }

// console.log(calcScreenRation(1920, "123"));

//

// isNaN() - це функція яка перевіряє чи передане значення аргумента
//  є НЕ числом "NaN"

// function calcScreenRation(w, h) {
//   let result = w / h;

//   if (isNaN(result)) {
//     return "ERROR";
//   } else if (!isFinite(result)) {
//     return "is Infinity";
//   } else {
//     return result;
//   }
// }

// console.log(calcScreenRation(1920, 0));

//

// parseIn () пертворює значення аргумента на ціле число
// в потрібній системі чисел

// const num = parseInt("10");

// console.log(10 + num);

// function calcScreenRation(w, h) {
//   w = parseInt(w);
//   h = parseInt(h);

//   let result = w / h;

//   if (isNaN(result)) {
//     return "ERROR";
//   } else if (!isFinite(result)) {
//     return "is Infinity";
//   } else {
//     return result;
//   }
// }

// console.log(calcScreenRation("1920px", "1000px"));

//

// parseFloat() - Пертворює значення аргумента на десяткове число
// з плаваючою точкою

// const num = parseFloat("100.555");

// console.log(num);

//

// encodeURIComponent() - це функція яка використовується для кодування рядків
// у формат URI

// encodeURI() - це функція яка використовується для кодування
// повного посилання у формат URL

// const domain = "it-brains.com.ua";

// function redirectToPath(path) {
//   const link = encodeURI(`https://${domain}/${path}`);
//   // Робимо перехід на сторінку

//   console.log(link);
// }

// redirectToPath("product/Мікрофон рожевий/info");

//

// decodeURIComonent() - функція використовується для декодування рядків
//  з формату URI у звичайний текст

// decodeURI() - функція яка використовується для декодування посилання
//  у формат URL у звичайний текст

// const domain = "it-brains.com.ua";

// function redirectToPath(path) {
//   const link = encodeURI(`https://${domain}/${path}`);
// Робимо перехід на сторінку

//   console.log(link);

//   return link;
// }

// const URI =
//   "https://it-brains.com.ua/product/%D0%9C%D1%96%D0%BA%D1%80%D0%BE%D1%84%D0%BE%D0%BD%20%D1%80%D0%BE%D0%B6%D0%B5%D0%B2%D0%B8%D0%B9/info";

// function getUrl(urlInURI) {
//   urlInURI = decodeURI(urlInURI);
//   console.log(urlInURI);

//   return urlInURI;
// }

// const path = "product/Мікрофон рожевий/info";

// const link = `https://${domain}/${path}`;

// const link1 = redirectToPath(path); // URI
// const link2 = getUrl(link1); // decode URI

// console.log(link === link2);

// Урок №12
// Вбудовані можливості для числових типів
// ВБУДОВАНИЙ КОНСТРУКТОР - спец функція, яка вже створена в мові JS
// та призначена для створення типу данних або сутності

// const a = Number(10);
// const b = 10;

// console.log(a === b);

// Number.EPSILON -- вбудоване значення яке представляє найменшу
// можливу різницю між двома числами

// const a = 0.1;
// const b = 0.2;
// const c = 0.3;

// const d = a + b;

// console.log(d - c < Number.EPSILON);

// МІНІМАЛЬНЕ (МАКСИМАЛЬНЕ) БЕЗПЕЧНЕ ЦІЛЕ ЧИСЛО -- це вбудоване значення
// яке може бути безпечно та точно представлене та оброблене
// у цій мові
// Number.MIN_SAFE_INTEGER
// Number.MAX_SAFE_INTEGER

// const a = 0.1;
// const b = 0.2;
// const c = 0.3;

// const d = a + b;

// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);

// МАКСИМАЛЬНЕ (МІНІМАЛЬНЕ) МОЖЛИВЕ ЧИСЛО --- це вбудоване значення
// яке представляє найбільше (найменше) можливе числове значення
// яке можна представити в JS мові
// Number.MAX_VALUE
// Number.MIN_VALUE

// const a = 0.1;
// const b = 0.2;
// const c = 0.3;

// const d = a + b;

// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);

// ПЕРЕВІРКА НА ЦІЛЕ ЧИСЛО -- це вбудована функція яка перевіряє чи є значення
// цілим числом
// ВИВОДИТЬ --- true - якщо число ЦІЛЕ
// ВИВОДИТЬ --- FALSE - якщо число ДОРОБОВЕ, NAN, РЯДОК NULL, UNDEFINED
// Number.isInteger(value)

// const a = 0.1;
// const b = 0.2;
// const c = 0.3;

// const d = a + b;

// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);

// function reviewNumber(num) {
//   if (Number.isNaN(num)) {
//     return console.log("Is Not a Number", num);
//   }
//   if (!num && num !== 0) {
//     return console.log("Bad number", num);
//   }
//   if (!Number.isInteger(num)) {
//     return console.log("Дробове число", num);
//   }
//   return console.log(num);
// }
// reviewNumber(10.5);

// ПЕРЕВІРКА НА БЕЗПЕЧНЕ ЦІЛЕ ЧИСЛО -- це вбудована функція яка перевіряє чи є
// задане значення безпечним цілим числом
// ВИВОДИТЬ --- true - якщо число є БЕЗПЕЧНИМ ЦІЛИМ
// ВИВОДИТЬ --- FALSE - якщо число більше за MAX_SAFE_INTEGER або менше за
// MIN_SAFE_INTEGER, є не дробовим, нечисловим значенням NaN, рядком або NULL, undefined
// Number.isSafeInteger(value)

// function reviewNumber(num) {
//   if (Number.isNaN(num)) {
//     return console.log("Is Not a Number", num);
//   }
//   if (!num && num !== 0) {
//     return console.log("Bad number", num);
//   }
//   if (!Number.isInteger(num)) {
//     return console.log("Дробове число", num);
//   }

//   if (!Number.isSafeInteger(num)) {
//     return console.log("Небезпечне число", num);
//   }
//   return console.log(num);
// }
// reviewNumber(Number.MAX_SAFE_INTEGER + 1);

// Урок №12
// ВБУДОВАНІ МОЖЛИВОСТІ ДЛЯ ЧИСЛОВИХ ТИПІВ

// в середині кожного значення типа числа є можливість звернутися до
// вбудованих функцій та значень які виконують операцію над конкретними значеннями
// через яке було звернення

// ОБРІЗАННЯ ДЕСЯТКОВИХ ЧИСЕЛ -- це вбудована функція яка використовується для
// форматування числа з фіксованою кількістю десяткових знаків
// .toFixed()
// value - визн. к-ть десяткових знаків, які будуть виведені

// const a1 = 1.00001;
// const a2 = parseInt("1000", 2)

// const a3 = a1.toFixed(2);

// console.log(a3)

// ОБРІЗАННЯ ЧИСЛА -- це вбудована функція яка використовується для представлення
// числа з вказаною довжиною
// .toPrecision()

// const a1 = 11234.56789;
// const a2 = 11234.56789;

// const a3 = parseFloat(a1.toPrecision(6));
// const a4 = parseFloat(a2.toPrecision(4));

// console.log(a3, a4)

// ЧИСЛО В ЕКСПОНЕНЦІЙНІЙ ФОРМІ -- це вбуд. функція яка повертає рядок що представляє
// число у вигляді експоненційної форми
// .toExponential()

// const a1 = 999999999994567;
// const a2 = 999999999994567;

// const a3 = a1.toExponential();
// const a4 = a2.toExponential(2);

// console.log(a3, a4);

// const a1 = 94567;
// const a2 = a1.toExponential();
// const a3 = parseFloat(a2);

// console.log(a1 === a3);

// ПЕРЕТВОРЕННЯ ЧИСЛА В РЯДОК -- це вбудована функція яка використовується
// для перетворення числа в рядок тексту
// .toString
// redix --- Визначає систему числення в якій буде представлене число
// Значення має бути в 2 до 36. За замовчуванням використовується 10.

// const a1 = 94567;
// const a2 = a1.toExponential();
// const a3 = parseFloat(a2);
// const a4 = a3.toString();

// console.log(a4);

// Урок №13
// ВБУДОВАНІ МОЖЛИВЛСТІ ДЛЯ РЯДКОВИХ ТИПІВ!!!!

// ДОВЖИНА РЯДКА -- вбудоване значення яке вказує на
// довжину рядка
//  .lenght

// const a = "HelloWorld";

// console.log(a.length);

// СТВОРЕННЯ РЯДКА ЧЕРЕЗ КОДОВЕ ЗНАЧЕННЯ -- вбудована
// функція яка використовується для створення рядків
// з заданими кодовими точками чи кодовим значенням
//  String.fromCharCode() // String.fromCodePoint()

// console.log(String.fromCodePoint(128516));

// КОД СИМВОЛА РЯДКА ЗА ІНДЕКСОМ -- Це вбудована функція
// яка знаходить код символа в рядку за порядковим номером(індексом)
// .charCodeAt()   //   .codePointAt()

// const b = "Ȇ";
// console.log(b.codePointAt(0));

// console.log(String.fromCodePoint(319));

// СТВОРЕННЯ СИРОГО РЯДКА -- вбудована функція яка
// використовується для створення сирих рядків, в яких не
// буде оброблюватись спеціальні символи
//  String.raw`text`   !!!!! саме зворотні дужки

// console.log(String.raw`www.test.com\home\catalog\categoty\new`);

// ОБ'ЄДНАННЯ РЯДКІВ -- це вбудована функція яка використвується
// для об'єднання двох або більше рядків
//  .concat(str1, str2, ...strN)

// const a = "HelloWorld";
// const b = "Ȇ";

// console.log(a.concat(" ", b, " ", "!"));

// ПЕРЕВІРКА НА НАЯВНІСТЬ РЯДКА -- це вбудована функція яка перевіряє
// чи міститься певний рядок в іншому рядку
// .includes(str)

// const a = "HelloWorld";

// console.log(a.includes("lo"));

// ПОШУК ІНДЕКСУ РЯДКА -- це вбудована функція яка знаходить
// порядковий номер(індекс) рядка у початковому рядку
// .indexOf(str)

// const a = "HelloWorld";

// console.log(a.indexOf("r", 6));
// console.log(a.indexOf("q", 6));

// ПОШУК ІНДЕКСУ ОСТАННЬОГО РЯДКА -- це вбудована функція яка
// знаходить порядковий номер(індекс) ОСТАННЬОГО рядка у початковому рядку
// .lastIndexOf(str)

// const a = "HelloWorld";

// console.log(a.lastIndexOf("o"));
// console.log(a.lastIndexOf("q"));

// ПЕРЕВІРКА НА ПОЧАТОК (КІНЕЦЬ) РЯДКА -- це вбудована функція
// яка перевіряє чи починається (закінчуєсять) початковий рядок
// вказаним рядком
// .startsWith(str)  //  .endsWith(str)

// const a = "HelloWorld";

// console.log(a.startsWith("He"));
// console.log(a.startsWith("ld"));

// console.log(a.endsWith("He"));
// console.log(a.endsWith("ld"));

// СИМВОЛ РЯДКА ЗА ІНДЕКСОМ -- вбудована функція яка знаходить
// символ в рядку за порядковим номером (індексом)

// .at()  // .charAt()

// const a = "HelloWorld";

// console.log(a.at(0));

// console.log(a.at(1));

// ДОДАТИ В ПОЧАТОК (КІНЕЦЬ) РЯДКА -- це вбудована функція
// яка додає в ПОЧАТОК (КІНЕЦь) рядка переданий символ
// або текс в аргументі

// .padStart  // .padEnd(amount, str)
// amount - кількість символів нового рядка
// str - символ або текст повинен бути заповнений

// const c = "HelloWorld";

// console.log(c.padStart(15, "Start"));
// console.log(c.padEnd(15, "End"));

// ПОВТОРИТИ РЯДОК -- це вбудована функція яка повторює рядок
// задану кількість разів
// .repeat(amount)

// const c = "HelloWorld";

// console.log(c.repeat(4));

// ВИРІЗАТИ РЯДОК -- вбудована функція яка вирізає текст з рядка
//  .slice(start, end) // .substring(start, end)

// const c = "HelloWorld";

// console.log(c.slice(5));
// console.log(c.slice(5, 8));
// console.log(c.slice(-5));

// ЗМІНА РЕГІСТРУ РЯДКА -- функції які змінють регістр рядка
// (в маленький або в великий)
// .toLowerCase() -- перетворює все на маленькі літери
//  .toUpperCase() -- перетворює все на великі літери

// const c = "HelloWorld";

// console.log(c.toLowerCase());
// console.log(c.toUpperCase());

// ВИДАЛЕННЯ ПРОГАЛИН З РЯДКА -- функції які видаляють прогалини
// (пробіли, табуляції, символи нового рядка) з рядка або
// з його початку чи кінця

//  .trim()
// .trimStart()
// .trimEnd()

// const c = "     HelloWorld     ";

// console.log(c);
// console.log(c.trim());
// console.log(c.trimStart());
// console.log(c.trimEnd());

// Урок №14
// ПРОСУНУТИЙ ТИП ДАННИХ: МАСИВ

// Масив - це вбудований тип данних, який використовується для зберігання
// та упорядкування декількох значень будь якого типу даних
// у вигляді індиксованої колекції

// Кожне значення знаходиться в окремій комірці, яка має свій
// порядковий номер(індекс). у JS індекс починається з нуля 0

// Для створення масиву потрібно черз кому прописати значення,
//  та обгорнути їх квадратними дужками

// [ значення1, значення2]
//  let list =[1, 53, 65];

// const a = 1;
// const b = 2;
// const c = 3;

// let list = [function Name() {}, 100, "Text", null, 1 + 2, a, b, c];

// console.log(list);

// СТВОРЕННЯ МАСИВУ ЧЕРЕЗ КОНСТРУКТОР

// Для створення масиву через конструктор потрібно викликати
// сам коструктор і передати кількість комірок масиву як аргумент,
// які потім потрібно самостійно заповнити значеннями

// Array ( кількість комірок )
// let list = Array(5)

// const testArr = Array(5);
// console.log(testArr);

// Запис значеня в комірку масиву --
// Для запису в комірку потрібно звернутися до комірки
// через індекс та оператором присвоєння передати значення

// назва масиву [індекс] = значення

// const testArr = Array(5);
// testArr[0] = "Start";
// testArr[1] = "2";
// testArr[4] = "Finish";
// console.log(testArr);

// Довжина масиву -- це вбудована функція, яка
// вказує на довжину масиву

// .lenght

// const testArr =[];
// testArr[0] = "Start";
// testArr[1] = "2";
// testArr[2] = "3";
// testArr[testArr.length] = "Finish";
// console.log(testArr);

// Ключове слово "ВИДАЛИТИ" (delete) -- ключове слово
// яке видаляє певну комірку з масиву

// Для написання використовуйте delete значення
// let list = [50, 60];
// delete list[0];
// console.log(list);

// const testArr =[];
// testArr[0] = "Start";
// testArr[1] = "2";
// testArr[2] = "3";
// testArr[testArr.length] = "Finish";

// delete testArr[0]
// console.log(testArr);

// ВКЛАДЕНІ МАСИВИ
// Ми можемо покласти в значення комірки масиву - інший масив

// let list [[1, 2, 3,], ["a", "b", "c"]]

// Для звернення до значення вкладеного масиву потрібно
// звернутися спочатку до індексу вкладеного масиву,
// а потім до смаого значення

// Назва масиву [індекс вкладеного масиву] [ індекс значення]

// const big = [[[1], [2, 3, 4, 5], [3]], [[2]], [[3]]];

// console.log(big[0][1][2]);

// Ключове слово "ДЛЯ" (for) -- можна використовувати з
// масивами для ітерації (перебору) значень комірок масиву
//  for (const комірка/індекс of/in масив){...}

// - комірка -- це тимчасова змінна, в якій при кожній ітерації буде
//  з'являтися значення кожної комірки масиву

//  - масив -- на місце потрібно вказати масив, який буде перебиратись

// const location = [
//   [100, 200],
//   [105, 205],
//   [110, 190],
// ];

// for (const point of location) {
//   //   console.log(point);

//   for (const coord of point) console.log(coord);
// }

// const location = [
//   [100, 200],
//   [105, 205],
//   [110, 190],
// ];

// for (const pointIndex in location) {
//   console.log(location[pointIndex]);

//   for (const coordIndex in location[pointIndex]) {
//     console.log(location[pointIndex][coordIndex]);
//   }
// }

// ТАКИЙ САМИЙ ЦИКЛ

// for (let i = 0; i < location.length; i++) {
//   console.log(location[i]);

//   for (let j = 0; j < location[i].length; j++) {
//     console.log(location[i][j]);
//   }
// }

// Оператор порівняння
//  В JS порівнюючи два однакових масиви завжди буде false

// const l1 = [];
// const l2 = [];

// console.log(l1 === l2);

// Щоб прирівняти два масиви потрібно їх перетіорити в рядко
//  За допопмогою .toString або функції конструктора String(масив)

// const l1 = [];
// const l2 = [];

// console.log(l1.toString() === l2.toString());

// ПОСИЛАННЯ НА МАСИВ --
// При присвоєнні одного масиву іншій змінні, відбувається
// передача посилання, а не створення копії масиву

// const l1 = [1, 3, 2];
// const l2 = [1, 2, 3];

// const l3 = l1;
// console.log(l1, l3);

// delete l1[0];
// console.log(l1, l3);

// ДЕСТРУКТУРИЗАЦІЯ -- це процес розбиття масиву на окремі
// змінні, щоб можна було легко отримати доступ до елементів

// [ значення1 , значення2 ] = масив

// const location = [
//   [100, 200],
//   [105, 205],
//   [110, 190],
// ];

// const [loc1, , loc3] = location;

// console.log(loc1, loc3);

// \\\\\\\\\\\\\\\      \\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const l1 = [1, 3, 2];
// const l2 = [1, 2, 3];

// const [...l3] = l1;
// console.log(l1, l3);

// delete l1[0];
// console.log(l1, l3);

// function printFullname(name, surname, lastname) {
//   return `${name} ${surname} ${lastname}`;
// }

// console.log(printFullname("Ivan", "Ivanenko", "Ivanov"));

// Це ж саме

// function printFullname(...arg) {
//   console.log(arg);
//   return arg.toString()
// //   return `${name} ${surname} ${lastname}`;
// }

// console.log(printFullname("Ivan", "Ivanenko", "Ivanov"));

// \\\\\\\\\\\\\\\\\\

// function sumAllNum(...nums) {
//   let sum = 0;
//   for (const n of nums) {
//     sum += n;
//   }
//   return [sum, nums.length];
// }
// const [sum, numsLenght] = sumAllNum(
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16
// );
// console.log(sum, numsLenght);

// \\\\\\\\\\\\\\\\\\

// function printFullname([name, surname, lastname, ...arg]) {
//   return `${name} ${surname} ${lastname} ${
//     arg.length ? `(${arg.toString()})` : ""
//   }`;
// }
// console.log(printFullname(["Ivan", "Ivanenko", "Ivanov", "Admin"]));

// Урок 15

// ПРОСУНУТИЙ ТИП ДАННИХ: ОБ'ЄКТ

// Об'єкт -- це вбудований тип дпнних який використовується для
// зберігання будь якого типу данних у колекцію в форматі
// "ключ : значення"

// Кожне значення знаходиься в окремій комірці, яка має
// свою назву (ключ)

// Властивість -- це пара "ключ : значення", де
// ключ - це рядок ("ім'я властивості"), а значення
// може бути будь яким типом

// Створення об'єкта
// для створення об'єкта потрібно написти потрібні властивості
// через кому та обгорнути їх фігурними дужками

// { ключ: значення , ["ключ"]:20}

// const a = {
//   amount: 100,
//   ["text"]: "HelloWorld",
// };

// console.log(a.text);

// const a = {
//   amount: 100,
//   ["text"]: "HelloWorld",
// };

// console.log(a.text);

//  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const name = "key";

// const a = {
//   amount: 100,
//   [name]: "HelloWorld",
// };

// console.log(a[name]);

// Створення о'єкта за допомогою конструктора
// Для створення о'бєкта через конструктор потрібно викликати
// сам конструктор, що створить пустий об'єкт

// Object ( )

// const b = Object();

// console.log(b);

// Ключове слово "ВИДАЛИТИ" (delete) -- це ключове слово
//  яке видаляє певну властивість о'єкта

// Для написання використовуйте delete значення

// const name = "key";

// const a = {
//   amount: 100,
//   [name]: "HelloWorld",
// };

// delete a.amount;

// console.log(a);

//  ВКЛАДЕНИЙ О'ЄКТ

// const key = "123141414";

// const a = {
//   amount: 100,
//   [key]: "HelloWorld",
//   info: {
//     name: "Ivan",
//     age: 35,
//   },
// };

// console.log(a.info.name);

// Ключове слово "ДЛЯ" (for) можна використовувати з об'єктами
// для ітерації (перебору) о назвах (ключах) кожної властивості

// for ( const КЛЮЧ in об'єкт) {...}

// -ключ -- це тимчасова змінна в якій при кожній ітерації буде
// з'являтись назва (ключ) кожної властивості

//  - о'бєкт -- на міце потрібно вказати о'бєкт який буде перебиратись

// const person = {
//   name: "Іван",
//   age: 25,
//   occupation: "Розробник програмного забезпечення",

//   address: {
//     city: "Київ",
//     street: "Вулиця Шевченка",
//     houseNumber: 10,
//   },
// };

// for (const key in person) {
//   const item = person[key];

//   if (typeof item === "object") {
//     for (const key2 in item) {
//       console.log(item[key2]);
//     }
//   } else {
//     console.log(item);
//   }
// }

// Якщо в нас два однакових о'бєкта

// const a = { test: 1 };
// const b = { test: 1 };

// console.log(a === b);
//  буде false

// const a = { test: 1 };
// const b = a;

// console.log(a === b);
//  буде true

// Деструктуризація з о'бєктами

// const person = {
//   name: "Іван",
//   age: 25,
//   occupation: "Розробник програмного забезпечення",

//   address: {
//     city: "Київ",
//     street: "Вулиця Шевченка",
//     houseNumber: 10,
//   },
// };

// const {
//   age,
//   name,
//   address: { city, street },
// } = person;

// console.log(age, name, city, street);

// Покласти решту в іншу змінну

// const person = {
//   name: "Іван",
//   age: 25,
//   occupation: "Розробник програмного забезпечення",

//   address: {
//     city: "Київ",
//     street: "Вулиця Шевченка",
//     houseNumber: 10,
//   },
// };

// const {
//   age,
//   name,
//   address: { city, street },
//   ...rest
// } = person;

// console.log(age, name, city, street);
// console.log(rest);

//  РОБОТА З ФУНКЦІяМИ

// const person = {
//   name: "Іван",
//   age: 25,
//   occupation: "Розробник програмного забезпечення",

//   address: {
//     city: "Київ",
//     street: "Вулиця Шевченка",
//     houseNumber: 10,
//   },
// };

// function getAddress({
//   address: { city, street, houseNumber, zipcode = 1000 },
// }) {
//   return `Ваша адреса: ${city} ${street} ${houseNumber} ${zipcode}`;
// }

// const test = getAddress(person);
// console.log(test);

// Оператор "в" (in) -- можна використовувати для того,
// щоб перевірити наявність певної властивості в об'єкті

//  "ключ" in "об'єкт"

// const person = {
//   name: "Іван",
//   age: 25,
//   occupation: "Розробник програмного забезпечення",

//   address: {
//     city: "Київ",
//     street: "Вулиця Шевченка",
//     houseNumber: 10,
//   },
// };

// console.log("name" in person);

// Ключове слово "це" (this) -- дозволяє звернутися до
// об'єкта всередині властивостей самого об'єкта

// const person = {
//   name: "Іван",
//   age: 25,
//   occupation: "Розробник програмного забезпечення",

//   address: {
//     city: "Київ",
//     street: "Вулиця Шевченка",
//     houseNumber: 10,
//   },

//   getAddress: function () {
//     return this.address;
//   },
// };

// console.log(person.getAddress());

// Що таке ЛІТЕРАЛ??

// Літерал -- це способи створення значень певного
// типу без використання функцій конструкторів,
// що дозволяють зручно та безпосередньо
// задавати значення в коді програми

// В JS будь-який тип данних "під капотом" є об'єктом
// який має вбудовані функції та значення, а також визначає
// як треба поводитись певному типу

// const b = "Test";

// console.log(b);

// /////////////

// Number.prototype.toOwnString = function () {
//   console.log(this);

//   return `Число: ${this}`;
// };

// const b = 1;
// const c = b.toOwnString();

// console.log(c);

// Урок 16
// ПРОСУНУТИЙ ТИП ДАННИХ --- СИМВОЛ!!!

// Символ (Symbol) -- вбудований тип данних,
// який використовується для створення унікального ідентифікатора
// для ключа властивості об'єкта

// Це використовується для створення властивостей
// об'єктів з незалежними ключами, які не
// конфліктують з іншими ключами

// const phoneBook = {
//   olga: "+380977576933",
// };

// // ...

// function addToPhoneBook(phone, id) {
//   phoneBook[id] = phone;
// }

// addToPhoneBook("+380977576933", "olga");

// // ...

// addToPhoneBook("+380977576933", "olga");

// console.log(phoneBook);

// БУДУ ВИВОДИТИСЬ ТІЛЬКИ ДРУГИЙ РАЗ

// Конструктор символу

// Symbol() -- це вбудований конструктор, який
// створює унікальний ідентифікатор для ключа властивості об'єкта

// Symbol(value)

// const phoneBook = {
//   0: 1,
//   olga: "+380977576933",
// };

// // ...

// function addToPhoneBook(phone, id) {
//   const key = Symbol(id + phoneBook[0]);

//   phoneBook[key] = phone;

//   phoneBook[0]++;
// }

// addToPhoneBook("+380977576933", "olga");

// // ...

// addToPhoneBook("+380977576933", "olga");

// console.log(phoneBook);

// Властивість опису
// .description -- це вбудоване значення яке
// повертає той аргумент (опис символу), який
// був переданий в коструктор

// const phoneBook = {
//   0: 1,
//   olga: "+380977576933",
// };

// // ...

// function addToPhoneBook(phone, id) {
//   const key = Symbol(id + phoneBook[0]);

//   phoneBook[key] = phone;

//   return key;
// }

// const olga1Id = addToPhoneBook("+380977576933", "olgaasdsdasdasd");

// // ...

// const olga2Id = addToPhoneBook("+380977576933", "qqwqweqweqwewe");

// console.log(phoneBook);

// console.log(phoneBook[olga1Id]);
// // Властивість опису
// console.log(olga1Id.description);

// Неунікальний символ
// Symbol.for() -- це вбудована функція яка створює
// неунікальний ідентифікатор для ключа властивості об'єкта

// Symbol.for(key)

// const a = Symbol("1");

// const b = Symbol("1");

// console.log(a === b);
// Виведе false

// Переводимо в рядок
// console.log(String(a) === String(b));
// Виведе true

// const a = Symbol.for("1");

// const b = Symbol.for("1");

// console.log(a === b);
// Виведе true

// Ключове слово "для" з символом

// for -- не можна використовувати для ітерування
// безпосередньо по символах (Symbol) або їх
// властивостей

// Проводити ітерації можна по властивостях об'єктів,
// які мають рядкові ключі а не символи

// При ітерації об'єкта властивості з символами будуть
// ігноруватись
// const user = {
//   name: "Olga",
//   id: 3512056,
//   bookId: null,
// };

// const phoneBook = {
//   me: "+380677576933",
//   name: "Phone book",
// };

// function addToPhoneBook(phone, user) {
//   const symId = Symbol.for(user.id);

//   phoneBook[symId] = phone;

//   user.bookId = symId;
// }

// addToPhoneBook("+380677576933", user);

// const symId = user.bookId;

// // console.log(Semobl.keyFor(symId));

// for (const key in phoneBook) {
//   console.log(key);
// }

// console.log(phoneBook);

// Символьний ітератор

// Symbol.iterator

// Це вбудована властивість, яка дозволяє визначити
// ітератор для об'єкта

// Використання Symbol.iterator дозволя'є
// об'єкту бути ітерованим тобто дозволяє йому
// бути перебираним за допомогою циклу for...of

// Ітератор -- це об'єкт який має метод next()
//  що повертає наступний елемент послідовності

// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     this.current = this.from;

//     return this;
//   },
//   next() {
//     return this.current <= this.to
//       ? { done: false, value: this.current++ }
//       : { done: true };
//   },
// };

// // for (let num of range) {
// //   console.log(num);
// // }

// const iterator = range[Symbol.iterator]();

// do {
//   console.log(iterator.current);
//   result = iterator.next();
// } while (!result.done);
