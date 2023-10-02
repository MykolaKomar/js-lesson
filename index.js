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

// УРОК 17

// ВБУДОВАНІ МОЖЛИВОСТІ ДЛЯ МАСИВІВ
// 1 ЧАСТИНА

// Створення масив з переданого значення

// Вбудована функція яка створює новий масив
// з ітерабельного або подібного до масиву об'єкта

// Array.form(arrayLike)

// console.log(Array.from("Hello World!"));

// Також працює з стрілковою функцією

// console.log(
//   Array.from(
//     { 0: "Hello", 1: "World!", 2: "!!!", length: 3 },
//     (elem, index) => {
//       console.log(elem, index);

//       return elem;
//     }
//   )
// );

// Також можна виносити о'бєкт в якості окремої змінної
// але з звичайною функцією БЕЗ СТРІЛКОВОЇ

// const obj = { 0: "Hello", 1: "World!", 2: "!!!", length: 3, prefix: "():" };

// console.log(
//   Array.from(
//     obj,
//     function (elem, index) {
//       return `${this.prefix}${elem}`;
//     },
//     obj
//   )
// );

// ПЕРЕВІРКА НА МАСИВ
// Це вбудована функція, яка пеервіряє чи є об'єкт масивом

// Array.isArray(value)

// const obj = { 0: "Hello", 1: "World!", 2: "!!!", length: 3, prefix: "():" };

// const arr = Array.from(
//   obj,
//   function (elem, index) {
//     return `${this.prefix}${elem}`;
//   },
//   obj
// );

// console.log(Array.isArray(arr));
// // Виведе true

// НОВИЙ МАСИВ ЗА ЗАДАНИМИ ЗНАЧЕННЯМИ
// Це вбудована функція яка створює новий масив з будь якої
// кількості переданих аргументів

// Array.of(element0, element1, /* ... /* elementN)

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// console.log(Array.of(...arr1, ...arr2));

// ОТРИМАННЯ ЕЛЕМЕНТУ ЗА ІНДЕКСОМ В МАСИВІ
// Це вбудована функція яка повертає елемент масиву
// з вказаним індексом. Якщо індекс виходить за межі
// масиву, повертається undefined

// at(index)

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// console.log(arr1.at(1)); //Виведе 2
// console.log(arr1.at(10)); // Виведе undefined

// ВИДАЛЕННЯ (ДОДАВАННЯ) останнього елементу в масив
// Це вбудована функція яка видаляє (додає) останній
// елемент з масиву і повертає його значення. Цей метод змінює
// вихідний масив скорочуючи (подовжуючи) його довжину на 1

// pop() - видаля один елемент
// push(element0, element1, /* ... /* elementN) - додає один або більше

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// arr1.push(10, 20, 30); // додало до arr1 10, 20, 30
// console.log(arr1);

// console.log(arr1.pop()); // відняло від arr1 30
// console.log(arr1);

// ЗСУВ  ЕЛЕМЕНЕНТІВ МАСИВУ
// Це вбудована функція яка видаляє перший елемент з початку
// масиву і повертає його значення. Це операція також зміщує
// всі наступні елементи масиву на одну позицію вліво

// shift()

//СКАСУВАННЯ ЗСУВУ МАСИВУ
// Це вбудована функція яка додає один або кілька елементів
// на початок масиву і повертає нову довжину масиву

// unshift(element0, element1, /* ... /* elementN)

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// console.log(arr1.shift()); //показує що видаляє 1 з arr1
// console.log(arr1);

// console.log(arr1.unshift(0, 1)); //показує що в arr1 тепер 4 елемента
// console.log(arr1);

// ЧИ ВКЛЮЧАЄ МАСИВ
// це вбудована функція яка перевіряє чи міститься певний елемент
// у масиві і повертає його логічне значення, вказуючи на результат перевірки.
// Він повертає true якщо елемент знайдено і false якщо елемент відсутній

// includes(searchElement, fromIndex)

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// console.log(arr2.includes(5)); //виведе true

// console.log(arr2.includes(10)); //виведе false

// ПОШУК ІНДЕКСУ ЕЛЕМЕНТУ

// Це вбудована функція яка повертає перший індекс
// за яким знаходить елемент у масиві або -1,
// якщо елемент не знайдений

// indexOf(searchElement, fromIndex)

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// console.log(arr2.indexOf(4)); //виведе індекс елемента 0

// ОСТАННІЙ ІНДЕКС ЕЛЕМЕНТА В МАСИВІ
// Це вбудована функція яка шукає вказаний елемент у масиві
// і повертає його індекс в останньому входженні або -1, якщо
// елемент не знайдено

// lastIndexOf (searchElement, fromIndex)

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3, 4, 5, 6];

// console.log(arr2.lastIndexOf(4)); //виведе індекс елемента 3

// ОБ'ЄДНАННЯ МАСИВІВ
// Це вбудована функція яка використовується для об'єднання двох
// або більше масивів. Цей метод не знімює існуючі масив
// а повертає новий масив

// concat(value0, value1 */ ... */, valueN)

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = arr1.concat(...arr2);

// console.log(arr3); //виведе об'єднання arr1 + arr2

// КОПІЮВАННЯ ЕЛЕМЕНТІВ У МАСИВІ

// Це вбудована функція яка копіює частину масиву із
// заданого діапазону і вставляє її до іншої позиції
// у самому масиві, замінюючи інуючі значення. Цей метод
// змінює початковий масив не створюючи нового

// copyWithin(target, start, end)

// let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr1); //виведе arr1

// arr1.copyWithin(2, 6, 8);

// console.log(arr1); //виведе arr1 в яком замінені 2,3 на 6,7

// ЗАПОВНЕННЯ МАСИВУ
// Це вбудована функція яка заповнює всі елементи
// масиву однаковим значенням, починаючи з початкового
// індексу до кінця або до вказаного індексу

// fill(value, start, end)

// let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr1); //виведе arr1

// arr1.fill(2, 6, 9);

// console.log(arr1); //виведе arr1 в яком замінені 6,7,8 на 2,2,2

// РЕВЕРС МАСИВУ
// Це вбудована функція яка змінює порядок елементів
// у масиві розташованих за їх індексами, так щоб
// останній елемент став першим, перед останній - другим і тд.

// .revers()

// let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr1); //виведе arr1

// arr1.reverse();

// console.log(arr1); //виведе arr1 в зворотньому напрямку

// ФІЛЬТРУВАННЯ МАСИВУ
// Це вбудована функція яка створює новий масив, який містить
// всі елементи початкового масиву які відповідають певному,
// умовному тексту. Цей метод використовується для фільтрації
// елементів масиву за заданими критеріями

// filter(callbackFn, thisArg)

// let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr1); //виведе arr1

// const filterArr = arr1.filter((value, index, array) => value % 2 === 0);

// console.log(filterArr); //виведе з arr1 всі числа що діляться на 2 без остатку

// СОРТУВАННЯ МАСИВУ
// Це вбудована функція яка сортує елементи масиву.
// За замовчування у порядку Юнікод-рядків

// .sort(compareFn)

// let arr1 = [20, 1, 2, 10, 3, 4, 30, 40];

// console.log(arr1); //виведе arr1

// const sortFn = (elem1, elem2) => {
//   return elem1 > elem2 ? 1 : -1;
// };

// const sortedArr = arr1.sort(sortFn);

// console.log(sortedArr); //виведе відсортоване arr1

// ПЕРЕВІРКА УМОВИ ДЛЯ КОЖНОГО ЕЛЕМЕНТА МАСИВУ
// Це вбудована функція яка виконує перевірку, чи
// задовольняють всі елементи масиву певний умовний
// предикат.Він перевіряє чи, повертається true для
// кожного елементу масиву під час виконання умови

// .every(callbackFn, thisArg)

// let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr1); //виведе arr1

// console.log(arr1.every((elem, index, array) => elem >= 0)); //true всі елементи відповідають умові

// ПЕРЕВІРКА ХОЧАБ НА ОДИН ЕЛЕМЕНТ
// Це вбудована функція, яка використовується для перевірки,
// чи принаймні один елемент масиву задовольняє вказану  умову,
// задану у вигляді функції

// .some()

// let arr1 = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr1); //виведе arr1

// console.log(arr1.some((elem, index, array) => elem <= 0)); //true хоч один елемент відповідає умові

// Урок 18
// ВБУДОВАНІ МОЖЛИВОСТІ ДЛЯ МИСИВІВ
// 2 ЧАСТИНА

// ПОШУК У МАСИВІ
// Це вбудована функція яка знаходить перший елемент масиву
// який задовольняє надану функцію тестування

// .find(callbackFn, thisArg)

// const userList = [
//   { id: 1, name: "Dima", age: 19 },
//   { id: 54, name: "Ivan", age: 35 },
//   { id: 6412, name: "Anton", age: 41 },
// ];

// let minAge = 30;

// const userBigAge = userList.find(({ age }, index, array) => age >= minAge);

// console.log(userBigAge); // Виведе { id: 54, name: 'Ivan', age: 35 }

// ПОШУК ІНДЕКСУ В МАСИВІ
// Це вбудована функція яка знаходить індекс
// першого елементу масиву який задовольняє надану
// функцію тестування

// .findIndex(callbackFn, thisArg)

// const userList = [
//   { id: 1, name: "Dima", age: 19 },
//   { id: 54, name: "Ivan", age: 35 },
//   { id: 6412, name: "Anton", age: 41 },
// ];

// let minAge = 30;

// const userBigAge = userList.findIndex(({ age }, index, array) => age >= minAge);

// console.log(userBigAge); // Виведе 1, а якщо елемент не найдено виведе -1

// ПОШУК ОСТАННЬОГО ЕЛЕМЕНТУ МАСИВУ
// Це вбудована функція яка знаходить останній елемент масиву,
// Який задовольняє надану функцію тестування
// .findLast(callbackFn, thisArg)

// const userList = [
//   { id: 1, name: "Dima", age: 19 },
//   { id: 54, name: "Ivan", age: 35 },
//   { id: 6412, name: "Anton", age: 41 },
// ];

// let minAge = 30;

// const userBigAge = userList.findLast(({ age }, index, array) => age >= minAge);

// console.log(userBigAge); //   { id: 6412, name: "Anton", age: 41 },

// ПОШУК ОСТАННЬОГО ІНДЕКСУ
// Це вбудована функція яка знаходить індекс останнього елементу
// масиву який задовольняє надану функцію тестування
// .findLastIndexs(callbackFn, thisArg)

// const userList = [
//   { id: 1, name: "Dima", age: 19 },
//   { id: 54, name: "Ivan", age: 35 },
//   { id: 6412, name: "Anton", age: 41 },
// ];

// let minAge = 30;

// const userBigAge = userList.findLastIndex(
//   ({ age }, index, array) => age >= minAge
// );

// console.log(userBigAge); // Виведе 2, а якщо елемент не найдено виведе -1

// КЛЮЧІ МАСИВУ
// Це вбудована функція яка повертає новий об'єкт ітератора,
// який містить ключі для кожного індексу в масиві
// .keys()
// const userList = [
//   { id: 1, name: "Dima", age: 19 },
//   { id: 54, name: "Ivan", age: 35 },
//   { id: 6412, name: "Anton", age: 41 },
// ];

// const iter = userList.keys();

// for (const elem of iter) {
//   console.log(elem); // Виведе 0, 1, 2 - тобто індекси масиву
// }

// ЗНАЧЕННЯ МАСИВУ
// Це вбудована функція яка містить значення для кожного
// індексу в масиві у впорядкованому порядку
// .values()

// const userList = [
//   { id: 1, name: "Dima", age: 19 },
//   { id: 54, name: "Ivan", age: 35 },
//   { id: 6412, name: "Anton", age: 41 },
// ];

// const iter = userList.values();

// for (const elem of iter) {
//   console.log(elem);
//   // Виведе { id: 1, name: 'Dima', age: 19 }
//   // { id: 54, name: 'Ivan', age: 35 }
//   // { id: 6412, name: 'Anton', age: 41 } , тобто значення масиву
// }

// ОБ'ЄДНАННЯ МАСИВУ
// Це вбудована функція, яка використовується для
// об'єднання всіх елементів масиву в один рядок. Він повертає
// рядок утворений шляхом об'єднання елементів масиву за
// допомогою розділювача
// .join(separator)

// const arr = ["Apple", "Hotdog", "Bread", "Milk"];

// console.log(arr.join(", ")); // Виведе: Apple, Hotdog, Bread, Milk

// ВИДАЛЕННЯ ТА ВСТАВКА ЕЛЕМЕНТІВ В МАСИВІ
// Це вбудована функція яка видаляє, додає або замінює елементи
// в масиві.Він може модифікувати початковий масив, зміщувати інші
// елементи відповідно
// .splice(start, deleteCount, item1, item2, itemN)

// const arr = ["Apple", "Hotdog", "Bread", "Milk"];

// const arrSmall = arr.splice(1, 2, "Tea", "Cheese");

// console.log(arrSmall); // Виведе: [ 'Hotdog', 'Bread' ]

// console.log(arr); // Виведе:[ 'Apple', 'Tea', 'Cheese', 'Milk' ]

// КОПІЯ ЧАСТИНИ МАСИВУ
// Це вбудована функція, яка створює новий масив,
// що містить копію певної частини вихідного масиву
// .slice(start, end)

// const arr = ["Apple", "Hotdog", "Bread", "Milk"];

// const arrSmall = arr.slice(1, 3);

// console.log(arrSmall); // Виведе: [ 'Hotdog', 'Bread' ]

// console.log(arr); // Виведе:[ 'Apple', 'Tea', 'Cheese', 'Milk' ]

// ЗВЕДЕННЯ МАСИВУ
// Це вбудована функція, яка використовується для обчислення
// одного значення на підставі елементів масиву

// Цей метод виконує ітерацію зліва на направо (з початку до кінця)
// по кожному елементу масиву і обробляє їх за допомогою функції
// зворотного виклику, накопичуючи результати в одне фінальне
// значення, яке повертається на виході
// reduce(callbackFn, initialValue)

// const userList = [
//   { id: 1, name: "Dima", age: 19, balance: 300 },
//   { id: 54, name: "Ivan", age: 35, balance: 0 },
//   { id: 6412, name: "Anton", age: 41, balance: 10200 },
// ];

// const result = userList.reduce((num, user, userIndex, array) => {
//   console.log(num, user.age);
//   return user.age > num ? user.age : num;
// }, 1);

// const totalBalance = userList.reduce((num, user) => num + user.balance, 0);
// console.log(totalBalance);

// ЗВОРОТНЄ ЗВЕДЕННЯ МАСИВУ
// Це вбудована функція, яка використовується для обчислення
// одного значення на підставі елементів масиву

// Цей метод виконує ітерацією зправа наліво (з кінця до початку)
// по кожному елементу масиву і обробляє їх за допомогою функції
// зворотного виклику, накопичуючи результати в одне фінальне значення
// яке повертається на виході
// reduceRight(callbackFn, initialValue)

// const userList = [
//   { id: 1, name: "Dima", age: 19, balance: 300 },
//   { id: 54, name: "Ivan", age: 35, balance: 0 },
//   { id: 6412, name: "Anton", age: 41, balance: 10200 },
// ];

// const result = userList.reduceRight((num, user, userIndex, array) => {
//   console.log(num, user.age);
//   return user.age > num ? user.age : num;
// }, 1);

// НОВИЙ МАИСВ ДЛЯ КОЖНОГО ЕЛЕМЕНТУ
// Це вбудована функція, яка створює новий масив, який містить
// результати виконання функції зворотнього виклику(callback function)
// для кожного елемента вихідного масиву
// map(callbackFn, thisArg)

// const userList = [
//   { id: 1, name: "Dima", age: 19, balance: 300 },
//   { id: 54, name: "Ivan", age: 35, balance: 0 },
//   { id: 6412, name: "Anton", age: 41, balance: 10200 },
// ];

// const result = userList.map((user, index, array) => {
//   return user.name;
// });

// console.log(result); // Виведе: [ 'Dima', 'Ivan', 'Anton' ]

//...................///.............../////.///////////...../////

// const userList = [
//   { id: 1, name: "Dima", age: 19, balance: 300 },
//   { id: 54, name: "Ivan", age: 35, balance: 0 },
//   { id: 6412, name: "Anton", age: 41, balance: 10200 },
// ];

// const result = userList.map((user, index, array) => {
//   user.balanceLimit = 1000 - user.balance;

//   if (user.balanceLimit < 0) {
//     user.balanceLimit = 0;
//   }
//   return user;
// });

// console.log(result);
// // Виведе:
// // [
// //   { id: 1, name: 'Dima', age: 19, balance: 300, balanceLimit: 700 },
// //   { id: 54, name: 'Ivan', age: 35, balance: 0, balanceLimit: 1000 },
// //   { id: 6412, name: 'Anton', age: 41, balance: 10200, balanceLimit: 0 }
// // ]

// РОЗГОРТАННЯ ВКЛАДЕНИХ МАСИВІВ
// Це вбудована функція яка використовується для вирівнбвання
// (розгортання) вкладених підмасивів в однорідний масив
// .flat(depth)

// const flatArray = [
//   [100, 200],
//   [220, 230],
//   [430, 455],
// ];
// console.log(flatArray.flat()); // Виведе: [ 100, 200, 220, 230, 430, 455 ]

// НОВИЙ РОЗГОРНУТИЙ МАСИВ ДЛЯ КОЖНОГО ЕЛЕМЕНТУ
// Це вбудована функція, яка дозволяє виконувати перетворення
// на кожен елемент масиву та об'єднувати результат у новому масиві
// flatMap(callbackFn, thisArg)

// const flatArray = [
//   [100, 200],
//   [220, 230],
//   [430, 455],
// ];
// console.log(flatArray.flatMap((el) => [...el, el[0] - el[1]]));
// // Виведе:
// // [
// //   100, 200, -100,
// //   220, 230,  -10,
// //   430, 455,  -25
// // ]

// ПЕРЕБРАТИ МАСИВ
// це вбудована функція яка використовується для виконання
// заданої функції один раз для кожного елементу у масиві без
// створення нового масиву
// forEach(callbackFn, thisArg)

// const flatArray = [
//   [
//     [100, 105],
//     [200, 205],
//   ],
//   [
//     [220, 230],
//     [430, 455],
//   ],
// ];
// const result = flatArray.flatMap((el) => {
//   return el.map((it) => {
//     return it[0] - it[1];
//   });
// });

// result.forEach((elem, index, array) => {
//   console.log(elem);
// });
// // Виведе:
// // -5
// // -5
// // -10
// // -25

// Урок 19
// ВБУДОВАНІ МОЖЛИВОСТІ ДЛЯ ОБ'ЄКТІВ

// КОПІЮВАННЯ ВЛАСТИВОСТЕЙ ОБ'ЄКТІВ
// Це вбудована функція яка копією значення
// всіх доступних властивостей переданих
// об'єктів в один головний

// Object.assing(target, sources1, sources1,  ...sourcesN )

// const article = {
//   id: 105423,
//   title: "My arcticle",
//   description: "This is info about artile",
//   catrgoryId: 1423,
//   likeAmount: 442,
// };

// articlePhoto = {
//   photoUrl: "...url",
//   photoId: 100,
//   photoType: "big",
// };

// articleCommentList = {
//   list: [
//     {
//       id: 4323,
//       user: "Ivan",
//       message: "Крутий контент",
//     },
//   ],
// };

// Object.assign(article, articlePhoto, articleCommentList);

// console.log(article);
// // Виведе:
// // {
// //   id: 105423,
// //   title: 'My arcticle',
// //   description: 'This is info about artile',
// //   catrgoryId: 1423,
// //   likeAmount: 442,
// //   photoUrl: '...url',
// //   photoId: 100,
// //   photoType: 'big',
// //   list: [ { id: 4323, user: 'Ivan', message: 'Крутий контент' } ]
// // }

// МАСИВ ВЛАСТИВОСТЕЙ
// Це вбудована функція яка повертає масив з масивами,
// які містять пари ключ-значення для кожної перерахованої
// властивості об'єкта. Порядок властивостей у масиві
// відповідає порядку перебору

// Object.entries(obj)

// const article = {
//   id: 105423,
//   title: "My arcticle",
//   description: "This is info about artile",
//   catrgoryId: 1423,
//   likeAmount: 442,
// };

// articlePhoto = {
//   photoUrl: "...url",
//   photoId: 100,
//   photoType: "big",
// };

// articleCommentList = {
//   list: [
//     {
//       id: 4323,
//       user: "Ivan",
//       message: "Крутий контент",
//     },
//   ],
// };

// Object.assign(article, articlePhoto, articleCommentList);

// console.log(Object.entries(article));
// // Виведе:
// // [
// //   ["id", 105423],
// //   ["title", "My arcticle"],
// //   ["description", "This is info about artile"],
// //   ["catrgoryId", 1423],
// //   ["likeAmount", 442],
// //   ["photoUrl", "...url"],
// //   ["photoId", 100],
// //   ["photoType", "big"],
// //   ["list", [[Object]]],
// // ];

// ОБ'ЄКТ З МАСИВУ ВЛАСТИВОСТЕЙ
// Це вбудована функція,яка створює об'єкт зі списку пар
// ключ-значення. Він приймає масив, який складається з
// масивів у форматі [ключ, значення] і повертає новий об'єкт
// у форматі {ключ, значення}
// Object.fromEntries

// const objArr = [
//   ["id", 100432],
//   ["title", "My product name"],
//   ["price", 1203],
// ];

// console.log(Object.fromEntries(objArr));
// // Виведе { id: 100432, title: 'My product name', price: 1203 }

// ПЕРЕВІРКА ЧИ ІСНУЄ ВЛАСТИВІСЬ ОБ'ЄКТА
// Це вбудована функція, яка перевіря,чи має об'єкт власну
// властивість з вказаним ім'ям
// hasOwnProperty(prop)

// const article = {
//   id: 105423,
//   title: "My arcticle",
//   description: "This is info about artile",
//   catrgoryId: 1423,
//   likeAmount: 442,
// };

// console.log(article.hasOwnProperty("id"));
// // Виведе true

// ПЕРЕВІРКА ВЛАСТИВОСТІ НА ПЕРЕРАХОВАНІСТЬ
// Це вбудована функція, яка перевіряє, чи є
// певна вдастивість перераховуваною в об'єкті за
// допомогою циклу for ... in

// .propertyIsEnumerable(prop)

// const article = {
//   id: 105423,
//   title: "My arcticle",
//   description: "This is info about artile",
//   catrgoryId: 1423,
//   likeAmount: 442,
// };

// console.log(article.propertyIsEnumerable("id"));
// // Виведе true

// ЗАМОРОЗИТИ ОБ'ЄКТ
// Це вбудована функція, яка заморожує об'єкт, що
// перешкоджує зміні його властивостейю Заморожений об'єкт
// не може бути змінений шляхом додавання, видалення
// або зміни властивостей
// Object.freeze(obj)

// const article = {
//   id: 105423,
//   title: "My arcticle",
//   description: "This is info about artile",
//   catrgoryId: 1423,
//   likeAmount: 442,
// };

// Object.freeze(article);

// article.title = "Hello";
// console.log(article);
// // Виведе не замінює  "My arcticle" на "Hello"

// ПЕРЕВІРКА НА ЗАМОРОЗКУ ОБ'ЄКТА
// Це вбудована функція, яка використовується для перевірки,
// чи є об'єкт замороженим (неможливість змінити його властивість)
// Object.isFrozen(obj)

// const article = {
//   id: 105423,
//   title: "My arcticle",
//   description: "This is info about artile",
//   catrgoryId: 1423,
//   likeAmount: 442,
// };

// Object.freeze(article);

// article.title = "Hello";
// console.log(Object.isFrozen(article));
// // Виведе true

// ЗАБОРОНА РОЗШИРЕННЯ ОБ'ЄКТА
// Вбудована функція, яка використовується для заборони
// розширення об'єкта, тобто вона запобігає додаванню
// нових властивостей до об'єкта
// Object.preventExtensions(onj)

// const article = {
//   id: 105423,
//   title: "My arcticle",
//   description: "This is info about artile",
//   catrgoryId: 1423,
//   likeAmount: 442,
// };

// Object.preventExtensions(article);

// article.test = "123456";
// console.log(article.test);
// // Виведе undefined

// ПЕРЕВІРКА НА ЗАБОРОНУ РОЗШИРЕННЯ ОБ'ЄКТА
// Це вбудована функція, яка використовується
// для перевірки, чи можна додавати нові властивості
// до об'єкта
// Object.isExtensible(obj)

// const article = {
//   id: 105423,
//   title: "My arcticle",
//   description: "This is info about artile",
//   catrgoryId: 1423,
//   likeAmount: 442,
// };

// Object.preventExtensions(article);

// article.test = "123456";
// console.log(Object.isExtensible(article));
// // Виведе false

// ЗАПЕЧАТУВАННЯ ОБ'ЄКТА
// Це вбудована функція. яка робить об'єкт доступним лише
// для читання та редагування існуючих властивостей, а
// додавати нові властивості чи видаляти існуючі неможна
// Object.seal(obj)

// const article = {
//   id: 105423,
//   title: "My arcticle",
//   description: "This is info about artile",
//   catrgoryId: 1423,
//   likeAmount: 442,
// };

// Object.seal(article);

// delete article.id;
// console.log(article.id);
// // Виведе 105423

// ПЕРЕВІРКА ЧИ ЗАПЕЧАТАНИЙ ОБ'ЄКТ
// Це вбудована функція, яка перевіряє, чи
// є об'єкт "запечатаним" (sealed), тобто чи дозволяє він тільки
// читання властивостей, але не дозволяє додавання нових властивостей
// або видалення існуючих
// Object.isSealed(obj)

// const article = {
//   id: 105423,
//   title: "My arcticle",
//   description: "This is info about artile",
//   catrgoryId: 1423,
//   likeAmount: 442,
// };

// Object.seal(article);

// delete article.id;
// console.log(Object.isSealed(article));
// // Виведе true

// ОТРИМАННЯ КЛЮЧІВ ОБ'ЄКТА
// Це вбудована функція, яка повертає масив з ключами доступних
// властивостей об'єкта
// Object.keys(obj)

// const article = {
//   id: 105423,
//   title: "My arcticle",
//   description: "This is info about artile",
//   catrgoryId: 1423,
//   likeAmount: 442,
// };

// console.log(Object.keys(article));

// // Виведе [ 'id', 'title', 'description', 'catrgoryId', 'likeAmount' ]

// ЗНАЧЕННЯ ОБ'ЄКТІВ
// Це вбудована функція яка повертає масив значень доступних
// властивостей об'єкта в тому ж порядку, у якому
// вони з'являються в коді

// const article = {
//   id: 105423,
//   title: "My arcticle",
//   description: "This is info about artile",
//   catrgoryId: 1423,
//   likeAmount: 442,
// };

// console.log(Object.values(article));
// // Виведе [ 105423, 'My arcticle', 'This is info about artile', 1423, 442 ]

// Урок 20
// Просунутий тип данних: МНОЖИНА

// Множина -- це вбудований тип даних, який використовується
// для зберігання унікальних значень будь-якого типу данних
// які можуть зустрічатись лише один раз

// -- Масиви надають упорядкований список елементів з
//    можливістю дублювання, з доступом до елементів за
//    допомогою індексів та вбудованиними функціями для
//    маніпулювання клкмкнтами

// -- Множина надає неупорядкований список унікальних
//    елементів з можливістю додавання, видалення та
//    перевірки наявності елементів

//  Створення множини через конструктор
// Для створення через конструктор потрібно
// викликати сам конструктор, що створить пусту множину
// new Set([значення1, ...значенняN])

// Оператор "новий" (new) можна використовувати для того,
// щоб створити нове значення типу даних через конструктор
// new Коструктор()

// const set = new Set(["123", "123", "123", 123, null]);
// console.log(set);

// // Виведе: Set(3) { '123', 123, null }

// \\\\\\\\\\\\\\\\\\\\\\\

// const userIdList = new Set([40250, 789052, 55, 123, null]);
// console.log(userIdList);

// // Виведе: Set(5) { 40250, 789052, 55, 123, null }

// Ключове слово "для" (for) можна використовувати з
// множиною для ітерації (перебору) значень множини
// for (const значення of множина) {...}

// const userIdList = new Set([40250, 789052, 55, 123, null]);

// for (const value of userIdList) {
//   console.log(value);
// }
// // Виведе:
// // 40250
// // 789052
// // 55
// // 123
// // null

// Функція для кожного елементу
// Це вбудована функція, яка використовується
// для виконання заданої функції один раз для кожного
// елемента у об'єкта Set
// forEach(callbackFn, thisArg)

// const userIdList = new Set([40250, 789052, 55, 123, null]);

// userIdList.forEach((value, value2, set) => console.log(value));
// // Виведе:
// // 40250
// // 789052
// // 55
// // 123
// // null

// Розмір множини
// Це вбудована властивість яка повертає кількість
// унікадьних клкментів множині
// .size

// const userIdList = new Set([40250, 789052, 55, 123, null]);

// console.log(userIdList.size); //  Виведе: 5

// Додавання елементу до множини
// Це вбудована функція яка додає новий елемент
// add(value)

// const userIdList = new Set([40250, 789052, 55, 123, null]);

// userIdList.add(40133)

// console.log(userIdList); //  Виведе: Set(6) { 40250, 789052, 55, 123, null, 40133 }
// console.log(userIdList.size); //  Виведе: 6

// Видалення елементів з множини
// Це вбудована функція яка видаляє елемент
// delete(value)

// const userIdList = new Set([40250, 789052, 55, 123, null]);

// userIdList.delete(40133);

// console.log(userIdList); //  Виведе: Set(5) { 40250, 789052, 55, 123, null }
// console.log(userIdList.size); //  Виведе: 5

// Перевірка наявності значення
// Це вбудована функція, яка перевіряє наявність елемента
// .has(value)

// const userIdList = new Set([40250, 789052, 55, 123, null]);

// const has = userIdList.has(40133);

// console.log(userIdList); //  Виведе: Set(5) { 40250, 789052, 55, 123, null }
// console.log(userIdList.size); //  Виведе: 5
// console.log(has); //  false

// Видалення всіх елементів
// Це вбудована функція, яка видаляє всі елементи
// .clear()

// const userIdList = new Set([40250, 789052, 55, 123, null]);

// userIdList.clear();

// console.log(userIdList); //  Виведе: Set(0) {}
// console.log(userIdList.size); //  Виведе: 0

// Ключі кожного елементу
// Це вбудована функція яка повертає спеціальний об'єкт-
// ітератор, що містить ключі для кожного елемента в множині
// у порядку їх встановлення
// .keys()

// const userIdList = new Set([40250, 789052, 55, 123, null]);

// const key = userIdList.keys();
// console.log(key); //  Виведе: [Set Iterator] { 40250, 789052, 55, 123, null }

// Значення кожного елементу
// Це вбудована функція, яка повертає спеціальний об'єкт-
// ітератор, який містить значення унікальних елементів
// в множині в порядку їх встановлення
// values()

// const userIdList = new Set([40250, 789052, 55, 123, null]);

// const value = userIdList.values();
// console.log(value); //  Виведе: [Set Iterator] { 40250, 789052, 55, 123, null }

// Перетворення в інший тип даних
// Це вбудована функція, яка перетворює значення множини
// в спеціальний об'єкт-ітератор, який можна використовувати
// для створення інших типів даних
// .entries()

// const userIdList = new Set([40250, 789052, 55, 123, null]);

// const entrie = userIdList.entries();
// console.log(entrie);
// //  Виведе: [Set Entries] {
// //   [ 40250, 40250 ],
// //   [ 789052, 789052 ],
// //   [ 55, 55 ],
// //   [ 123, 123 ],
// //   [ null, null ]
// // }

// ПРИКЛАДИ РОБОТИ МНОЖИНИ
// №1

// const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
// const set = new Set(arr);

// const arr2 = [...set];

// console.log(arr2);

// №2

// const categoryList = new Set();

// function addCategory(category) {
//   if (categoryList.has(category)) {
//     console.log("Ця категорія вже є");

//     return false;
//   }

//   categoryList.add(category);
//   return true;
// }

// console.log(addCategory("Спорт")); // Виведе:true
// console.log(addCategory("Спорт")); // Виведе: Ця категорія вже є  false

// console.log(addCategory("Їжа")); // Виведе:true

// №2

// const students = [
//   { id: 1, name: "John", course: "Math" },
//   { id: 2, name: "Jane", course: "Science" },
//   { id: 3, name: "Adam", course: "Math" },
//   { id: 4, name: "Eve", course: "English" },
//   { id: 5, name: "Kate", course: "Science" },
// ];

// const courseList = new Set(students.map((student) => student.course));
// console.log(Array.from(courseList)); // Виведе:[ 'Math', 'Science', 'English' ]

// Урок 21
// Просунутий тип даних: СЛОВНИК
// Словник -- це вбудований тип даних, який
// використовується для зберігання значень будь-якого типу,
// даних у колекцію в форматі "ключ:значення"

// ** Об'єкт використовується для представлення структури даних
//    з властивостями, методами та вкладеними об'єктами

// ** Словник використовується, коли необхідно зберігати пари
//    ключ-значення та забезпечувати ефективний доступ до
//    даних з ключем

// Створення словника через конструктор
// Для створення через конструктор потрібно викликати сам
// конструктор, що може створити пустий мловник

// new Map([ ['ключ','значення'] ])

// const dictionari = new Map();
// console.log(dictionari); // Виведе: Map(0) {}

// // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const button = new Map([
//   ["color", "red"],
//   ["size", "32px"],
// ]);
// console.log(button); // Виведе: Map(2) { 'color' => 'red', 'size' => '32px' }

// // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const obj = {
//   color: "red",
//   size: 32 + "px",
// };

// const button2 = new Map(Object.entries(obj));
// console.log(button2); // Виведе: Map(2) { 'color' => 'red', 'size' => '32px' }

// // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const set = new Set(["red", "32px"]);

// const button3 = new Map(set.entries());
// console.log(button3); // Виведе: Map(2) { 'red' => 'red', '32px' => '32px' }

// // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const button = new Map([
//   ["color", "red"],
//   ["size", "32px"],
// ]);

// const set2 = new Set(button);

// console.log(set2); // Виведе: Set(2) { [ 'color', 'red' ], [ 'size', '32px' ] }

// Ключі кожного елементу
// Це вбудована функція, яка повертає спеціальний об'єкт-ітератор,
// що містить ключі для кожного елемента в словнику у порядку їх встановелення
// .keys()

// const button = new Map([
//   ["color", "red"],
//   ["size", "32px"],
// ]);

// const set2 = new Set(button.keys());

// console.log(set2); // Виведе: Set(2) { 'color', 'size' }

// Значення кожного елементу
// Це вбудована функція, яка повертає спеціальний об'єкт-
// ітератор, який містить значення унікальних елементів
// у словнику в порядку їх встановлення
// .values()

// const button = new Map([
//   ["color", "red"],
//   ["size", "32px"],
// ]);

// const set2 = new Set(button.values());

// console.log(set2); // Виведе: Set(2) { 'red', '32px' }

// Ключове слово "для" зі словником
// Ключове слово  "для" (for) можна використовувати зі словником
// для ітерації (перебору) значень словника

// for(const [ключ, значення] of словник) {...}

// const button = new Map([
//   ["color", "red"],
//   ["size", "32px"],
// ]);

// for (const [key, velue] of button) {
//   console.log(key, velue);
//   // Виведе:
//   //color red
//   //size 32px
// }

// Функція для кожного елементу
// Це вбудована функція, яка використовується для виконання
// заданої функції один раз для кожного елементу словника
// у порядку вставки
// forEach(callbackFn, thisArg)

// const button = new Map([
//   ["color", "red"],
//   ["size", "32px"],
// ]);

// button.forEach((value, key, map) => console.log(value, key, map));
// // Виведе:
// // red color Map(2) { 'color' => 'red', 'size' => '32px' }
// // 32px size Map(2) { 'color' => 'red', 'size' => '32px' }

// Розмір словника
// Це вбудована властивість, яка повертає кількість унікальних
// елементів у словнику
// .size

// const button = new Map([
//   ["color", "red"],
//   ["size", "32px"],
// ]);

// console.log(button.size); // Виведе: 2

// Додавання елементу до словника
// Це вбудована функція, яка додає новий елемент
// .set(key, value)

// const button = new Map([
//   ["color", "red"],
//   ["size", "32px"],
// ]);

// button.set("weight", 600);

// console.log(button); // Виведе: Map(3) { 'color' => 'red', 'size' => '32px', 'weight' => 600 }

// Отримання клкмента зі словника
// Це вбудована функція. яка повертає значення елемента
// словника за його ключем
//  .get(key)

// const button = new Map([
//   ["color", "red"],
//   ["size", "32px"],
// ]);

// button.set("weight", 600);

// console.log(button.get("weight")); // Виведе: 600

// Видалення елемента зі словника
// Це вбудована функція, яка видаляє елемент
// .delete(key)

// const button = new Map([
//   ["color", "red"],
//   ["size", "32px"],
// ]);

// button.set("weight", 600);

// console.log(button.delete("weight")); // Виведе: true

// Перевірка наявності значення
// Це вбудована функція, яка перевіряє наявність елемента
// .has(key)

// const button = new Map([
//   ["color", "red"],
//   ["size", "32px"],
// ]);

// button.set("weight", 600);

// console.log(button.has("weight")); // Виведе: true

// Видалення всіх елементів
// Це вбудована функція, яка видаляє всі елементи
// .clear()

// const button = new Map([
//   ["color", "red"],
//   ["size", "32px"],
// ]);

// button.set("weight", 600);

// button.clear();
// console.log(button); // Виведе: Map(0) {}

// Приклади використання СЛОВНИКА
// №1

// const LANG_LIST = {
//   UA: "uk-UA",
//   EA: "ea-US",
// };

// const activeLang = LANG_LIST.EU;

// const product = {
//   price: 100,
//   amount: 3,

//   info: new Map([
//     [
//       LANG_LIST.UA,
//       {
//         title: "Заголовок",
//         info: "Інформація",
//       },
//     ],
//     [
//       LANG_LIST.EU,
//       {
//         title: "Title",
//         info: "info",
//       },
//     ],
//   ]),
// };

// const info = product.info.get(activeLang);

// console.log(info); // Виведе: { title: 'Title', info: 'info' }

// console.log(product.info.has(activeLang)); // Виведе: true

// *************************************************//

// №2

// const user1 = {
//   id: 1323,
//   name: "Ivan",
// };

// const user2 = {
//   id: 4231,
//   name: "Anton",
// };

// const product1 = {
//   id: 5314,
//   title: "Mobile Phone",
// };

// const product2 = {
//   id: 5335,
//   title: "Apple",
// };

// const userProduct = new Map();

// userProduct.set(user1, product1).set(user2, product2);

// console.log(userProduct);
// // Виведе:
// // Map(2) {
// //     { id: 1323, name: 'Ivan' } => { id: 5314, title: 'Mobile Phone' },
// //     { id: 4231, name: 'Anton' } => { id: 5335, title: 'Apple' }
// //   }

// console.log(userProduct.has(user1)); // Виведе:true

// const productClientList = new Map();

// productClientList.set(product1, new Set());

// console.log(productClientList); // Виведе: Map(1) { { id: 5314, title: 'Mobile Phone' } => Set(0) {} }

// Урок 22
// Вбудовані можливості: JSON та URL

// JSON --це вбудований об'єкт, який має вбудовані функції
// для роботи з JSON всередині мови програмування JS

// Перетворення в JSON формат
// це вбудована функуція, яка перетворює значення JavaScript
// на рядок у форматі JSON
// JSON.stringify(value, replacer, space)
//  ** value -- Об'єкт або значення JavaScript, яке буде перетворено на
//     JSON рядок.
//  ** replacer -- Функція або масив, які використовуються для контролю над
//     тим, які значення будуть включені у JSON рядок або як вони
//     будуть змінені.
//  ** space -- Форматування рядка JSON з перенесенням рядків і відступами
//     для кращої зрозумілості. Може бути числом або рядком.

// const data = {
//   id: 1043,
//   login: "user3431",
//   password: "1234561we@",
//   role: "Admin",
// };

// const jsonData = JSON.stringify(data);

// console.log(jsonData); // Виведе: {"id":1043,"login":"user3431","password":"1234561we@","role":"Admin"}

// ||||||||||||||||||||||||||||||||||||||||||||||||

// const data = {
//   id: 1043,
//   login: "user3431",
//   password: "1234561we@",
//   role: "Admin",
// };

// const jsonData = JSON.stringify(
//   data,
//   (key, value) => {
//     if (typeof value === "string") {
//       return value.toUpperCase();
//     }

//     if (typeof value === "number") {
//       return value * 10;
//     }

//     console.log(key, value);
//     return value;
//   },
//   1
// );

// console.log(jsonData);
// // Виведе:
// //  { id: 1043, login: 'user3431', password: '1234561we@', role: 'Admin' }
// // {
// //     "id": 10430,
// //     "login": "USER3431",
// //     "password": "1234561WE@",
// //     "role": "ADMIN"
// // }

// Отримання значення з JSON формату
// Це вбудована функція, яка перетворює рядок у форматі
// JSON в об'єтк або значення в форматі JavaScript
// JSON.parse(text, reviver)

// ** text -- Рядок у форматі JSON який має бути розпарсений
// ** reviver(необов'язковий) -- Функція, яка виконує перетворення
//    з такими аргументами:
//    ** key -- ключ, пов'язаний зі значенням
//    ** velue -- Значення, створене синтаксичним аналізом

// const data = {
//   id: 1043,
//   login: "user3431",
//   password: "1234561we@",
//   role: "Admin",
// };

// const jsonData = JSON.stringify(
//   data,
//   (key, value) => {
//     if (typeof value === "string") {
//       return value.toUpperCase();
//     }

//     if (typeof value === "number") {
//       return value * 10;
//     }
//     return value;
//   },
//   1
// );

// console.log(jsonData);
// // Виведе:
// // {
// //     "id": 10430,
// //     "login": "USER3431",
// //     "password": "1234561WE@",
// //     "role": "ADMIN"
// // }

// const parseData = JSON.parse(jsonData, (key, value) => {
//   if (typeof value === "string") {
//     return value.toLowerCase();
//   }

//   if (typeof value === "number") {
//     return value / 10;
//   }

//   return value;
// });

// console.log(parseData); // Виведе:{ id: 1043, login: 'user3431', password: '1234561we@', role: 'admin' }

// Що таке URL?
// URL - це вбудований об'єкт-сутність, який має вбудовані
// функції для роботи з URL-адресою (Uniform Resource Locator),
// що використовується для ідентифікації та доступу до ресурсів в Інтернеті

// Створення URL через конструктор
// Для створення через конструктор потрібно викликати сам
// конструктор, що може створити URL об'єкт
// new URL (url , base)

//  ** url -- Рядок який представляє URL - адрсу
//  ** base -- Рядок, що визначає базовий URL, якщо першим
//     аргументом була адреса не повна, а лише відносний шлях

// const url1 = new URL("/path", "https://www.example.com");
// console.log(url1);
// //  або

// const url2 = new URL("https://www.example.com/path");
// console.log(url2);

// // Виведе
// // URL {
// //     href: 'https://www.example.com/path',
// //     origin: 'https://www.example.com',
// //     protocol: 'https:',
// //     username: '',
// //     password: '',
// //     host: 'www.example.com',
// //     hostname: 'www.example.com',
// //     port: '',
// //     pathname: '/path',
// //     search: '',
// //     searchParams: URLSearchParams {},
// //     hash: ''
// //   }

// Отримання URL
// Це вбудована властивість, яка містить рядок, який містить URL-адресу
// .href

// const url = new URL("https://www.example.com/path");

// console.log(url.href); // Виведе: https://www.example.com/path

// Протокол URL
// Це вбудована властивість, яка містить протокол,
// що використовується URL-адресі
// .protocol

// const url = new URL("https://www.example.com/path");

// console.log(url.protocol); // Виведе: https:

// Шлях до ресурсу URL
// Це вбудована властивість, яка містить шлях до ресурсу,
// який міститься в URL-адресі
// .pathname

// const url = new URL("https://www.example.com/path");

// console.log(url.pathname); // Виведе: /path

// Отримання початкового URL
// Це вбудована властивість, яка повертає початковий URL
// адресу самого ресурсу без шляху
// .origin

// const url = new URL("https://www.example.com/path");

// console.log(url.origin); // Виведе: https://www.example.com

// Ім'я хосту в URL
// Це вбудована властивість, яка містить інформацію про доменне
// ім'я (хост) в URL - адресі
// host  hostname

// const url = new URL("https://www.example.com:4000/path");

// console.log(url.host); // Виведе: www.example.com:4000
// console.log(url.hostname); // Виведе: www.example.com

// Якір в URL
// Це вбудована властивість, яка містить якір з URL - адресі
// hash

// const url = new URL("https://admin:123456@www.example.com:4000/path#how-to-do");

// console.log(url.hash); // Виведе: www.example.com:4000

// Пароль в URL
// Це вбудована властивість, яка містить пароль з URL - адреси
// .password

// const url = new URL("https://admin:123456@www.example.com:4000/path#how-to-do");

// console.log(url.password); // Виведе: 123456

// Порт в URL
// Це вбудована властивість, яка містить порт з URL - адреси
// .port

// const url = new URL("https://admin:123456@www.example.com:4000/path#how-to-do");

// console.log(url.port); // Виведе: 4000

// Ім'я користувача в URL
// Це вбудована властивість, яка містить ім'я користувача URL - адреси
// .username

// const url = new URL("https://admin:123456@www.example.com:4000/path#how-to-do");

// console.log(url.username); // Виведе: admin

// Параметри в URL
// Це вбудована властивість, яка містить рядок параметрів
// (після символу "?") з URL - адреси
// .search

// const url = new URL(
//   "https://admin:123456@www.example.com:4000/path?param=value#how-to-do"
// );

// console.log(url.search); // Виведе: ?param=value

// Спеціальний об'єкт з параметрами в URL
// Це вбудована влкстивість, яка повертає спеціальний об'єк, який надає
// зручні вбудовані функції для взаємодії з параметрами в URL - адресі
// .searchParams

// const url = new URL(
//   "https://admin:123456@www.example.com:4000/path?param=value#how-to-do"
// );

// console.log(url.searchParams); // Виведе: URLSearchParams { 'param' => 'value' }

// console.log(url.searchParams.has("param")); // Виведе:true

// Урок 23
// Вбудовані можливості: ДАТА

// Дата (Date) -- це вбудований об'єкт-сутність, який представляє
// дату і час, дозволяє отримувати, зберігати та маніпулювати
// значеннями дати та часу в мові програмування JavaScript

// GMT (Greenwich Mean Time) -- є стандарт часу, який використовується як базова
// відлікова точка визначення часових зон у світі

// UTC (Coordinated Universal Time) -- це стандарт часу, який
// використовується для синхронізації часових зон по всьому
// світу, є прямим нащадком Greenwich Mean Time (GMT)

// Створення дати через конструктор

// Для створення через конструктор потрібно викликати сам коструктор
// що може створити об'єкт Date

// new Date (аргумент)

// const date = new Date();

// console.log(date); // Виведе: 2023-09-26T13:50:07.750Z

// Формат ISO (International Organization for Standartization) --
// це стандартизовиний формат для представлення даних

// Формат ISO часто використовується для представлення дат,
// часу, кодів країн, валют, мов та багатьох інших типів даних.
// Це допомагає забезпечити уніфіковану та стандартизовану обробку
// цих даних у різних системах та програмах

// Перетворити дату в рядок в форматі ISO
// Це вбудована функція, яка перетворює дату в ISO
// .toISOString()

// const date = new Date();

// const dateString = date.toISOString();

// console.log(dateString); // Виведе: 2023-09-26T14:08:01.822Z

// console.log(new Date(dateString)); // Виведе: 2023-09-26T14:10:42.646Z

// Отримати дату з рядка в форматі ISO
// Це вбудована функція, яка призначена для аналізування рядків,
// що містять дати, і перетворення їх у відповідні числові значення
// використовуючи ISO формат дати
// Date.parse(dataString)

// const date = new Date();

// const dateString = date.toISOString();

// console.log(dateString); // Виведе: 2023-09-26T14:08:01.822Z

// console.log(Date.parse(dateString));
// // Виведе: 1695737652234
// // Повертає ціле число — кількість мілісекунд, що пройшли
// // з 1 січня 1970 року до поточного моменту.

// Перетворення дати в рядок тексту
// Це вбудовані функції які, повертають рядок, який
// представляє дату та час у вигляді зрозумілому для людини
// .toString()
// .toUTCString()
// .toTimeString()
// .toDateString()

// const date = new Date();

// const dateString = date.toISOString();

// console.log(date.toString()); // Виведе: Tue Sep 26 2023 17:21:51 GMT+0300 (Eastern European Summer Time)

// console.log(date.toUTCString()); // Виведе: Tue, 26 Sep 2023 14:22:46 GMT

// console.log(date.toTimeString()); // Виведе: 17:23:31 GMT+0300 (Eastern European Summer Time)

// console.log(date.toDateString()); // Виведе: Tue Sep 26 2023

// Отримати зсув часового поясу
// Це вбудована функція, яка повертає зсув часового поясу між
// локальним часом та часом UTC (відлік від стандартного часу, що
// використовується у світі)
// .getTimezoneOffset()

// const date = new Date();
// const zone = date.getTimezoneOffset();

// console.log(zone); // Виведе: -180

// const zoneNorm = date.getTimezoneOffset() / -60;

// console.log(zoneNorm); // Виведе: 3

// Створення поточноъ дати
// Це вбудована функція, яка повертає кількість мілісекунд
//  що пройшло з 1 січня 1970 року 00:00:00 UTC до поточного моменту
// Date.now()

// const user = -3; // TimeZone

// function getUserTimeZone(timezone) {
//   let date = Date.now();

//   const myTimezone = new Date().getTimezoneOffset() / -60;

//   //   console.log(myTimezone); // Виведе: 3
//   date -= 1000 * 60 * 60 * myTimezone;

// //   date += 1000 * 60 * 60 * myTimezone;

//   return date;
// }

// console.log(new Date(getUserTimeZone(user)).toString()); // Виведе: Tue Sep 26 2023 14:51:31 GMT+0300 (Eastern European Summer Time)

// console.log(new Date().toUTCString()); // Виведе: Tue, 26 Sep 2023 14:54:44 GMT

// Створення дати через конструктор *     *  * * * * * * *
// Створення дати за UTC
// Date.UTC(year, monthIndex, day, hour, minute, second, milisecond)
// const user = -3; // TimeZone

// function getUserTimeZone(timezone) {
//   let date = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
//   console.log(date.toString()); // Виведе: Mon Jun 26 2023 15:30:00 GMT+0300 (Eastern European Summer Time)
// }
// getUserTimeZone(user);

// Отримати поточний універсальний час
// Це вбудована функція, яка повертає час, що пройшов
// від 1 січня 1970 року UTC до вказаної дати в мілісекундах
// .getTime()

// const user = -3; // TimeZone
// function getUserTimeZone(timezone) {
//   let date = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
//   console.log(date.getTime()); // Виведе: 1687782600000
// }
// getUserTimeZone(user);
// console.log(new Date(1687782600000).toString()); // Виведе: Mon Jun 26 2023 15:30:00 GMT+0300 (Eastern European Summer Time)

// Встановити поточний універсальний час
// Це вбудована функція, яка встановлює значення часу
// для об'єкта дати в універсальному форматі, в якому дата є час,
// що пройшов від 1 січня 1970 року UTC до вказаної дати
// .setTime(timeValue)

// const user = -3; // TimeZone
// function getUserTimeZone(timezone) {
//   let date = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
//   console.log(date.toString()); // Виведе: Mon Jun 26 2023 15:30:00 GMT+0300 (Eastern European Summer Time)
//   console.log(date.toUTCString()); // Виведе: Mon, 26 Jun 2023 12:30:00 GMT

//   const myTimezone = date.getTimezoneOffset() / -60;

//   date.setTime(date.getTime() - 1000 * 60 * 60 * myTimezone);
//   date.setTime(date.getTime() + 1000 * 60 * 60 * timezone);

//   return date;
// }
// const userDate = getUserTimeZone(user);
// console.log(userDate.toString()); // Виведе: Mon Jun 26 2023 09:30:00 GMT+0300 (Eastern European Summer Time)
// console.log(userDate.toUTCString()); // Виведе: Mon, 26 Jun 2023 06:30:00 GMT

// Отримати години
// Це вбудована функції, які повертають години (від 0 до 23)
// .getHours()
// .getUTCHours()

// const user = -3; // TimeZone
// function getUserTimeZone(timezone) {
//   let date = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
//   console.log(date.getHours()); // Виведе: 15
//   console.log(date.getUTCHours()); // Виведе: 12

//   return date;
// }
// const userDate = getUserTimeZone(user);

// Встановити години
// Це вбудовані функції, які встановлюють годину (від 0 до 23) для
// заданого об'єкта дати, змінюючи його значення
// .setHours(hoursValue, minutesValue, secondValue, msValue)
// .setUTSHours(hoursValue, minutesValue, secondValue, msValue)

// const user = -3; // TimeZone
// function getUserTimeZone(timezone) {
//   let date = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
//   console.log(date.getHours()); // Виведе: 15
//   console.log(date.getUTCHours()); // Виведе: 12

//   date.setHours(date.getUTCHours() + timezone);

//   return date;
// }
// const userDate = getUserTimeZone(user);

// console.log(userDate.getHours()); // Виведе: 9
// console.log(userDate.getUTCHours()); // Виведе: 6

// console.log(userDate.toTimeString()); // Виведе: 09:30:00 GMT+0300 (Eastern European Summer Time)

// */-*/-*/-*/-*/-*/-*/-*/-*/-/-*/-*/-*/-*/-*/-*/-*/-*/-*/

// Отримати рік
// Це вбудовані функції, які повертають чотирицифрове число, що
// редставляє рік за вказаною датою
// .getFullYear()
// .getUTCFullYear()

// const date = new Date();

// const dateString = date.toISOString();
// console.log(date.getFullYear()); // Виведе: 2023

// Встановити рік
// Це вбудовані функції, які встановлюють значення року
// для заданої дати в об'єкті Date
// .setFullYear(yearValue, monthValue, dateValue)
// .setUTCАFullYear(yearValue, monthValue, dateValue)

// const date = new Date();

// console.log(date.getFullYear()); // Виведе: 2023

// date.setFullYear(2020);

// console.log(date.getFullYear()); // Виведе: 2020

// Отримати місяць
// Це вбудовані функції, які повертають номер місяця (від 0 до 11)
// .getMonth()
// .getUTCMonth()

// const date = new Date();

// console.log(date.getMonth()); // Виведе: 8

// Встановити місяць
// .setMonth(monthValue, dateValue)
// .setUTCMonth(monthValue, dateValue)

// const date = new Date();

// console.log(date.getMonth()); // Виведе: 8
// date.setMonth(10);

// console.log(date.getMonth()); // Виведе: 10

// Отримати день місяця
// Це вбудована функції, які повертають день місяця
// (від 1 до 31) для заданої дати
// .getDate()
// .getUTCdate()

// const date = new Date();

// console.log(date.getDate()); // Виведе: 26

// Встановити день місяця
// Це вбудована функції, які встановлюють день місяця
// для певної дати
// .setDate(dateValue)
// .setUTCDate(dateValue)

// const date = new Date();

// console.log(date.getDate()); // Виведе: 26
// date.setDate(10);

// console.log(date.getDate()); // Виведе: 10

// Отримати день тижня
// Це функція, яка повертає числове значення,
// що відповідають дню тижня (0-6) для заданої дати
// .getDay()
// .getUTCDay()

// const date = new Date();

// console.log(date.getDay()); // Виведе: 2

// Отримати хвилини
// Це функції які поверають хвилини від 0 до 59
// .getMinutes()
// .getUTCMitutes()

// const date = new Date();

// console.log(date.getMinutes()); // Виведе: 11

// Встановити хвилини
// Це функції які встановлюють значення хвилини
// .setMinutes(minutesValue, secondValue, msValue)
// .setUTCMitutes(minutesValue, secondValue, msValue)

// const date = new Date();

// console.log(date.getMinutes()); // Виведе: 13

// date.setMinutes(59);

// console.log(date.getMinutes()); // Виведе: 59

// Отримати секунди
// Це функції які поверають секунди від 0 до 59
// .getSeconds()
// .getUTCSeconds()

// const date = new Date();

// console.log(date.getSeconds()); // Виведе: 49

// Встановити секунди
// Це функції які встановлюють значення секунди
// .setSeconds( secondValue, msValue)
// .setUTCSeconds(secondValue, msValue)

// const date = new Date();

// console.log(date.getSeconds()); // Виведе: 1

// date.setSeconds(59);

// console.log(date.getSeconds()); // Виведе: 59

// Урок 24

// Вбудовані можливості: МАТЕМАТИКА

// Математика (Math) - це вбудований об'єкт, який
// містить математичні функції та значення для виконання
// математичних операцій в JavaScript

// Число Пі
// Це вбудоване значення, яке містить число Пі
// Math.PI

// console.log(Math.PI); // Виведе: 3.141592653589793

// Максимальне та мінімальне значення
// Це вбудовані функції які приймають будь яку
// кількість числових аргументів і повертає найбільше або
// найменше значення
// Math.max(value0, value1, ...valueN)
// Math.min(value0, value1, ...valueN)

// const a = 5;
// const b = 10;
// const c = -5;

// const arr = [20, 30, 40];

// console.log(Math.max(a, b, c, ...arr)); // Виведе: 40
// console.log(Math.min(a, b, c, ...arr)); // Виведе: -5

// Знак числа
// Це вбудована функція, яка повертає знак в аргументі
// Math.sign(x)

// const a = 5;
// const b = 0;
// const c = -5;

// const arr = [20, 30, 40];

// console.log(Math.sign(a)); // Виведе: 1
// console.log(Math.sign(c)); // Виведе: -1
// console.log(Math.sign(b)); // Виведе: 0

// Піднесення до степеня
// Це вбудована функція, яка використовується для підсилення
// числа до певного степеня
// Math.pow(base, exponent)

//  ** base -- число яке потрібно піднести до степеня
//  ** exponent -- Число яке вказує на ступінь до якого підноситься base

// const a = 5;
// const b = 0;
// const c = -5;

// const arr = [20, 30, 40];

// console.log(Math.pow(a, 2)); // Виведе: 25

// Квадратний корінь
// Це вбудована функція, яка використовується для
// обчислення квадратного кореня числа
// Math.sqrt(x)

// const a = 25;
// const b = 0;
// const c = -5;

// console.log(Math.sqrt(a)); // Виведе: 5

// Округлення числа
// Це вбудовані функції, які округляють передане число
// Math.floor(x) -- Округляють х до цілого числа, яке менше за х
// Math.ceil(x) -- Округляє х до цілого, яке більше за х
// Math.round(x) -- Округляє число х до найближчого цілого числа
// Math.trunc(x) -- відкидає для х всі його десяткові числа

// const x = 25.123456789;
// const x1 = 25.523456789;

// console.log(Math.floor(x)); // Виведе: 25
// console.log(Math.ceil(x)); // Виведе: 26
// console.log(Math.round(x)); // Виведе: 25
// console.log(Math.round(x1)); // Виведе: 26
// console.log(Math.trunc(x)); // Виведе: 25

// Випадкове число
// Це вбудована функцыя, яка повертаэ випадкове десяткове
// число выд 0 (включно) до 1 (виключно)
// Math.random()

// console.log(Math.random()); // Виведе: 0.2905830138224037 Кожен раз нове

// const random = Math.trunc(Math.random() * 10);

// console.log(random); // Виведе: 6 Кожен раз нове

// Округлення числа до точних значень
// Це функція яка виконує округлення звичайного числа
// з плаваючою точкою з формату double (8 байтів) до float (4 байтів)
// Math.fround(x)

// console.log(0.1 + 0.2 === 0.3); // Виведе: false
// console.log(Math.fround(0.1 + 0.2) === Math.fround(0.3)); // Виведе: true
// console.log(Math.fround(0.1 + 0.2) )

// Урок 25

// Вбудовані можливості: КОНСОЛЬ
// Консоль (console) -- це вбудований об'єкт, який надає доступ
// до консолі браузера або термінала, дозволяє виконувати
// операції з налагодження коду та виведення інформації

// Вивід повідомлень
// Це вбудована функції, які виводять в консоль повідомлення

// console.error() -- Відображення критичних помилок
// {
//   let a = 5;
//   a = 10;
//   console.error("Помилка, а змінна повинна бути 5"); //Виведе: Помилка, а змінна повинна бути 5
// }
// console.expection() -- Виведення непередбачених помилок
// console.info() -- Відображення корисних повідомлень
// console.warn() -- Виведення попереджень про петенційні проблеми
// console.log() -- Запис повідомлень для відстеження роботи програми
// console.debug() -- Виведення додаткових деталей для налагодження

// Групування
// це вбудвана функція, яка дозволяє групувати повідомлення
// в консолі разом, щоб створити більш організований вивід
// .group(label) -- звичайна група
// .groupCollapsed(label) -- згорнута група
// .groupEnd(label)

// console.group("Group 1");
// console.log("test");
// console.warn("test");
// console.group("Group 2");
// console.debug("test");
// console.groupEnd;

// Виведе:
// Group 1
//   test
//   test
//   Group 2
//     test

// Вимірювання часу
// Це вбудована функція, яка дозволяє вимірювати
// час виконання певного фрагменту коду
// .time(label)
// .timeLog(label)
// .timeEnd(label)

// const counterLabel = "Timer";

// console.time(counterLabel);

// console.group("Group 1");
// console.log("test");
// console.warn("test");
// console.group("Group 2");
// console.timeLog(counterLabel);
// // Виведе: Timer: 7.242ms

// console.debug("test");
// console.groupEnd;

// console.timeEnd(counterLabel);
// // Виведе: Timer: 8.024ms

// Вимірювання кількості виконання
// Це вбудована функції, які дозволяють вимірювати
// кількість виконання певного фрагменту коду
// .count(label)
// .countReset(label) -- оновити лічільник

// const counterLabel = "Timer";

// console.time(counterLabel);
// console.count(counterLabel);

// console.timeLog(counterLabel);
// console.count(counterLabel);

// console.timeEnd(counterLabel);
// console.countReset(counterLabel);

// Відстеження викликів
// Це вбудована функція, яка показує
// шлях виконання коду (стек викликів) до того місця,
// де була викликана функція
// .trace(value1, value2, ...valueN)

// const test1 = () => console.trace("Hello");

// const test2 = () => test1();

// const test3 = () => test2();

// test3();

// Таблиця консолі
// Це вбудована функція, яка використовується для
// відображення таблиці з даними у консолі
// .table(data, columns)

// const data = [
//   { name: "John", age: 25, city: "New York" },
//   { name: "Alice", age: 30, city: "London" },
// ];

// console.table(data);
// console.table(data, ["name", "age"]);

// Перевірка умови
// Це вбудована функція, яка використовується для перевірки
// умови та виведення повідомлення, якщо умова не виконується
// .assert(assertion, ...value1, value2,...valueN)

// const a = 5;
// const b = 10;

// const result = a > b;

// console.assert(result, "Info");

// Очищення вмісту
// Це вбудована функція, яка використовується для
// очищення вмісту консолі
// .clear()

// const a = 5;
// const b = 10;

// const result = a > b;

// console.assert(result, "Info");
// console.clear();

// Стилізація тексту
// Можна використовувати конструкцію %c
// на початку рядка тексту, який потрібно стилізувати, а
// другим аргументом рядок тексту з CSS кодом

// console.log("%c Hello World", "color: yellow; background-color: blue");

// Урок 27
// Регулярні вирази
// можна писати через https://regex101.com/r/IfT04i/1

// Регулярні вирази -- це шаблон для пошуку і зіставлення
// текстових рядків. Він використовує спеціальний синтаксис, що
// дозволяє описувати різні правила пошуку

// Регулярні вирази використовуються для здійснення
// операцій пошуку, заміни, валідації даних тощо

// Одиничний символ
// Крапка являє собою символ, який використовується для пошуку будь якого символу
// в рядку, окрім перенесення
//  .

// Режим глобального збігу
// Означає, що пошук буде продовжуватись після першого
// збігу. Замість зупинки після знайдення першого збігу, регулярний вираз продовжить пошук
// у всьому тексті та знайде всі збіги
// /g

// Режим багаторядкового збігу
// Дозволяє розглядати початкові та кінцеві твердження (^ i $)
// як роботу над кількома рядками. Це означає, що збіг буде
// відбуватись для початку або кінця кожного окремого рядка,
// а не лише для початку або кінця всього рядка виведення
// /m

// Екранування
// Зворотній слеш "\" використовується для екранування
// символів в регулярних виразах

// Це означає, що якщо ви хочете використати символ, який зазвичай має
// спеціальне значення , як звичайний літерал, ви можете поставити перед ним
// зворотний слеш
//  \

// Початок рядка
// символ "^" в регулярних виразах використовується для зазначення
// початку рядка. Він вказує, що шукана частина, що збігає, повинна
// знаходитись в самому початку рядка
// ^

// Кінець рядка
// Вираз "$" у регулярних виразах JavaScript вказує на кінець рядка.
// Він шукає відповідність тільки в тих місцях, де рядок закінчується
//  $

// Збіг символів
// Вираз [xyz] використовується для знаходження будь якого
// символу, який збігається з будь яким із символів, перерахованих в квадратних
// дужках. Наприклад [xyz] буде збігатись з будь яким символом "x", "y" або "z".
// Використання квадратних дужок дозволяє набір можливих символів, з якими відбуватиметься
// порівняння
//  []

// Будь-яка цифра
// Вираз "\d" використовується для знаходження будь-якої цифри в текстовому рядку
//  \d

// Вираз для пошуку нецифрових символів
// Вираз "\D" використовується в JS для пошуку будь-якого симоволу, який не є цифрою

// Це означає, що він буде знайдений в тексті, якщо зустрінеться будь-який символ
// який не є цифрою від 0 до 9
//  \D

// Пробіл
// В регулярних виразах JS "\s" являє собою управляючий символ, що позначає будь-який
// пробільний символ. Пробільний символ містить пробіл, символ табуляції, символ нового
// рядка, та інші подібні символи
//  \s

// Все крім пробілів
// Означає будь який символ, який не є пробілом. Цей вираз шукає
// будь який символ, крім пробілу, в рядку
// \S

// Буква
// Використовується для знаходження будь-якої літери
// (великої чи малої) або цифри в тексті

// Він зручно використовується, коли потрібно перевірити наявність
// алфавітних символів або цифр в рядку
// \w

// Все крім букв
// Використовується для знаходження будь-якого
// неалфавітного символа в рядку

// Він шукає символи, які н належать до множини [A-Za-z0-9_]

// За допомогою цього виразу можна виявити пробіли, пунктуаційні знаки
// спеціальні символи тощо
// \W

// Границі слова
// Границі слова, яка вказує на місце, де починається або
// закінчується слово  в рядку тексту
// \b

// Точка, яка не є границею слова
// Вказує на точку, яка не є границею слова
// Вона відповідає будь-якій позиції рядка, де перед і після
// поточної позиції знаходиться символ тієїж категорії (або
// обидва символи відсутні)
// \В

// Повторення символу
// Використання для знаходження послідовності символів
// х, яка повторюється точно n разів
// x{n}

// Повторення символів, мінімальну кількість разів
// Означає, що символ або підрядок "х" повинен повторюватися
// принаймні "n" разів

// Це дозволяє вказати мінімальну кількість повторень,
// при якій вираз вважатиметься збігом
// x{n,}

// Гнучка кількість повторень
// Використовується в JS для виявлення послідовності символів "х"
// яка повторюється від "n" до "m" разів. Він встановлює межі, кількості
// повторень символу або шаблону, що дозволяє виразу бути гнучким та
//  адаптовуватись до різних ситуацій
// x{n,m}

// Символ може зустрітися 0 або більше разів
// Означає, що попередній символ "х" може зустрічатися нуль
// або більше разів. Іншими словами, він збігається з будь-якою
// послідовністю символів, яка складається з одного або
// .декількох символів "х". Цей вираз дозволяє знайти
// відповідність для патерну, в якому "х" повторюється довільну
// кількість разів або навіть не зустрічається взагалі
// x*

// Символ може зустрічатися 1 або більше разів
// Використовується для пошуку повторень символу "х" в тексті
// Він знайде всі входження послідовності "х" у тексті, які
// повторюються один або більше разів підряд
// x+

// Символ може зустрічатися 0 або 1 разів
// Відповідає за знаходження нуль або однієї копії символу або
// шаблону "х" в текстовому рядку
// Цей вираз вказує на те що символ або шаблон "х" може
// бути присутнім або відситнім в тексті
// x?

// Збіг або x або з y
// Використовується для знайдення збіг з однією з двох
// альтернатив x або y
// Це означає, що якщо в тексті зустрічається "x" або "y", вираз
// будк відповідати цьому збігу
// x|y

// Позитивний попередній перегляд
// Являє собою розглядання (positive lookahead) і використання для
// знаходжкння входження "х" за яким слідує "y", але "y" не включається в результат
// В цьому випадку "x" i "y" можуть бути будь-якими символами або виразами
// x(?=y)

// Виключення
// Використовується для пошуку входжень "х", які не передають послідовність "У"
// Це негативне умовне виключення (negative lookahead), де вираз "y" виступає, як
// умова яку "x" не повинен відповідати
// x(?!y)

// Позитивний вигляд позаду
// Використовується для пошуку позициї, де попередній елемент
// перед поточною позицією є у, і він повинен бути захоплений, але не
// повинен бути виключений у відповідність виразу
// Цей вира є прикладом позитивного вигляду позаду
// (positive lookbehind) в регулярни виразах
// (?<=y)x

// Перевірка, чи попереду символа "x" відсутній символ "y"
// Використовуєтсья для знаходження символу "x", якщо перед ним стоїть "y"
// (?<!y)x

// Групування без збереження
// Групування без збереження (?:x) у регулярних виразах в JS дозволяє групувати певні
// частини виразу, але не зберігати їх для подальшого використання.
// Це корисно, коли потрібно застосувати оператори або квантифікатори до
// певної частини виразу, але не потрібно отримувати результат ціє групи
//  (?:x)

// Перенесення рядка
// В регулярних вираз Js "\n" являє собою упраляючий символ, зо позначає будь-який символ
// перенесення тексту на новий рядок
// \n

// ВИРАЗИ які найчастійше використовуються
