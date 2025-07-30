// ====================================
// ========== 1-masala: countdown =====
// ====================================
// Raqamdan 0 gacha sanab chiqadigan funksiya yozing.
// Input: countdown(5)
// Output: 5 4 3 2 1 0

//function countdown(n) {
// 1. n 0 dan katta boâ€˜lguncha while loop ishlating
// 2. Har safar n ni consolda chiqaring
// 3. n ni bittaga kamaytiring
//}

//function countdown(n) {
//while (n >= 0) {
//console.log(n);
//n--;
//}
//}

// ====================================
// ========== 2-masala: printEven =====
// ====================================
// Arraydagi juft sonlarni chiqaring
// Input: [1, 2, 3, 4]
// Output: 2 4

//function printEven(arr) {
// 1. i = 0 dan boshlang
// 2. while orqali arr.length gacha yur
// 3. Agar arr[i] juft boâ€˜lsa, chiqaring
// 4. i ni oshirib boring
//}

//function printEven(arr) {
//let i = 0;
//while (i < arr.length) {
//if (arr[i] % 2 === 0) {
//console.log(arr[i]);
//}
//i++;
//}
//}

// ====================================
// ========== 3-masala: countA ========
// ====================================
// Matnda nechta 'a' harfi borligini toping
// Input: "salom" -> Output: 1

//function countA(str) {
// 1. i = 0, count = 0
// 2. har bir harfni tekshiring: str[i] === 'a'
// 3. agar shunday boâ€˜lsa, count++
// 4. i ni oshiring
// 5. Yakunida count ni chiqaring
//}

//function countA(str) {
//let i = 0;
//let count = 0;
//while (i < str.length) {
// if (str[i] === "a") {
//  count++;
//}
//i++;
//}
//console.log(count);
//}

// ====================================
// ========== 4-masala: sumArray =====
// ====================================
// Arraydagi sonlar yig'indisini toping
// Input: [3, 2, 1] -> Output: 6

//function sumArray(arr) {
// 1. i = 0, sum = 0
// 2. while orqali har bir elementni sum ga qoâ€˜shing
// 3. i ni oshirib boring
// 4. Yakunida sum ni chiqaring
//}

//function sumArray(arr) {
//let i = 0;
//let sum = 0;
//while (i < arr.length) {
//sum += arr[i];
//i++;
//}
//console.log(sum);
//}

//function reverseText(str) {
// 1. i = str.length - 1
// 2. boâ€˜sh string yarating: reversed = ""
// 3. i 0 dan katta ekan, reversed ga str[i] qoâ€˜shing
// 4. i ni kamaytiring
// 5. Yakunida reversed ni chiqaring
//}

//function reverseText(str) {
//let i = str.length - 1;
//let reversed = "";
//while (i >= 0) {
//reversed += str[i];
//i--;
//}
//console.log(reversed);
//}

// ====================================
// ========== 6-masala: printNegative
// ====================================
// Arraydagi manfiy sonlarni chiqaring
// Input: [-1, 2, -3] -> Output: -1, -3

//function printNegative(arr) {
// 1. i = 0
// 2. while orqali yurib chiqing
// 3. agar arr[i] < 0 boâ€˜lsa, chiqaring
//}

//function printNegative(arr) {
// let i = 0;
//while (i < arr.length) {
//if (arr[i] < 0) {
//console.log(arr[i]);
//}
//i++;
//}
//}

// ====================================
// ========== 7-masala: countChars ====
// ====================================
// Matndagi belgilar sonini aniqlang
// Input: "hello" -> Output: 5

//function countChars(str) {
//let i = 0;
//let count = 0;
//while (i < str.length) {
//count++;
//i++;
//}
//console.log(count);
//}

// ====================================
// ========== 8-masala: printOdds =====

//function countChars(str) {
// 1. i = 0, count = 0
// 2. har bir belgini tekshirib chiqing
// 3. count ni oshirib boring
// 4. Yakunida count ni chiqaring
//}

// ====================================
// ========== 8-masala: printOdds =====
// ====================================
// 0 dan n gacha toq sonlarni chiqaring
// Input: 5 -> Output: 1, 3, 5

//function printOdds(n) {
// 1. i = 0
// 2. while orqali i <= n boâ€˜lguncha yur
// 3. agar i toq boâ€˜lsa, chiqaring
// 4. i ni oshiring
//}
//function printOdds(n) {
//let i = 0;
//while (i <= n) {
//if (i % 2 === 1) {
//console.log(i);
//}
//i++;
//}
//}

// ====================================
// ========== 9-masala: findMax =======
// ====================================
// Eng katta elementni toping
// Input: [1, 9, 3] -> Output: 9

//function findMax(arr) {
// 1. i = 0, max = arr[0]
// 2. har bir elementni max bilan solishtiring
// 3. agar katta boâ€˜lsa, max ni yangilang
// 4. Yakunida max ni chiqaring
//}

//function findMax(arr) {
//  let i = 0;
//  let max = arr[0];
//  while (i < arr.length) {
//    if (arr[i] > max) {
//      max = arr[i];
//    }
//    i++;
//  }
//}
// }
//console.log(max);
//}

// ====================================
// ========== 10-masala: countO =======
// ====================================
// Nechta 'o' harfi borligini toping
// Input: "hello world" -> Output: 2

//function countO(str) {
//  let i = 0;
//  let count = 0;
//  while (i < str.length) {
//    if (str[i] === "o") {
//      count++;
//    }
//    i++;
//  }
//  console.log(count);
//}

// ====================================
// ========== 11-masala: countZeros ==
// ====================================

//function countO(str) {
// 1. i = 0, count = 0
// 2. str[i] === 'o' boâ€˜lsa, count++
// 3. Yakunida count ni chiqaring
//}

//function countZeros(arr) {
//let i = 0;
//let count = 0;
//while (i < arr.length) {
//if (arr[i] === 0) {
//count++;
//}
//   i++;
// }
// console.log(count);
//}

// ====================================
// ========== 11-masala: countZeros ==
// ====================================
// Arraydagi 0 lar sonini chiqaring
// Input: [0, 1, 0] -> Output: 2

//function countZeros(arr) {
// 1. i = 0, count = 0
// 2. arr[i] === 0 boâ€˜lsa, count++
// 3. Yakunida count ni chiqaring
//}

//function countZeros(arr) {
//  let i = 0;
//  let count = 0;
//  while (i < arr.length) {
//    if (arr[i] === 0) {
//      count++;
//    }
//    i++;
//  }
//  console.log(count);
//}

// ====================================
// ========== 12-masala: sumPositive ==
// ====================================
// Musbat sonlar yig'indisini toping

//function sumPositive(arr) {
//let i = 0;
//let sum = 0;
//while (i < arr.length) {
//if (arr[i] > 0) {
//sum += arr[i];
//}
//  i++;
//}
//console.log(sum);
//}

// ====================================
// ========== 13-masala: printLowercase
// Input: [-1, 2, 3] -> Output: 5

//function sumPositive(arr) {
// 1. i = 0, sum = 0
// 2. agar arr[i] > 0 boâ€˜lsa, sum += arr[i]
// 3. Yakunida sum ni chiqaring
//}

//function printLowercase(str) {
//let i = 0;
//while (i < str.length) {
//if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
//console.log(str[i]);
//}
//i++;
//}
//}

// 1. i = 0
// 2. charCodeAt bilan harfni tekshiring (97â€“122)
// 3. agar kichik boâ€˜lsa, chiqaring
//}

//function printOddIndexes(arr) {
//let i = 0;
//while (i < arr.length) {
//if (i % 2 === 1) {
//console.log(arr[i]);
//}
//i++;
// }
//}

// ====================================
// ========== 15-masala: replaceE =====
// Input: ['a','b','c','d'] -> Output: b, d

//function printOddIndexes(arr) {
// 1. i = 0
// 2. agar i % 2 === 1 boâ€˜lsa, chiqaring
// 3. i ni oshiring
//}

//function printOddIndexes(arr) {
// let i = 0;
//while (i < arr.length) {
//if (i % 2 === 1) {
// console.log(arr[i]);
//}
//i++;
//}
//}

// ====================================
// ========== 15-masala: replaceE =====
// ====================================
// "e" harflarini "3" ga almashtiring
// Input: "hello" -> Output: h3llo

//function replaceE(str) {
// 1. i = 0, result = ""
// 2. agar str[i] === 'e' boâ€˜lsa, result += '3'
// 3. aks holda, result += str[i]
// 4. Yakunida result ni chiqaring
//}

//function replaceE(str) {
// let i = 0;
//let result = "";
//while (i < str.length) {
//if (str[i] === "e") {
//result += "3";
//} else {
//result += str[i];
//}
//i++;
//}
//console.log(result);
//}
