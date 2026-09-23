"use strict";

// Практическая работа №3
// Тема: функции и циклы.
// Заполните только участки TODO.
// Названия функций, параметры и module.exports не изменяйте.

// 1. Сумма диапазона
// Вернуть сумму всех целых чисел от from до to включительно.
// Гарантируется, что from <= to.
function sumRange(from, to) {
  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += i;
  }
  return sum;
}

// 2. Возведение в степень
// Вернуть base в степени exponent.
// exponent — целое неотрицательное число.
// В этой задаче нельзя использовать ** и Math.pow().
function power(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

// 3. Факториал
// Вернуть n! для целого n >= 0.
// 0! и 1! равны 1.
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 4. Количество чётных чисел
// Вернуть количество чётных целых чисел в диапазоне [from, to].
// Гарантируется, что from <= to.
function countEven(from, to) {
  let count = 0;
  for (let i = from; i <= to; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }
  return count;
}

// 5. Первое число, кратное делителю
// Найти первое целое число в диапазоне [from, to], которое делится на divisor без остатка.
// Если такого числа нет, вернуть null.
// divisor не равен 0. Используйте цикл и break.
function findFirstDivisible(from, to, divisor) {
  for (let i = from; i <= to; i++) {
    if (i % divisor === 0) {
      return i;
    }
  }
  return null;
}

// 6. Строка таблицы умножения
// Вернуть строку из первых count произведений числа number,
// разделённых одним пробелом.
// Пример: multiplicationLine(3, 5) -> "3 6 9 12 15"
function multiplicationLine(number, count) {
  const parts = [];
  for (let i = 1; i <= count; i++) {
    parts.push(number * i);
  }
  return parts.join(" ");
}

module.exports = {
  sumRange,
  power,
  factorial,
  countEven,
  findFirstDivisible,
  multiplicationLine,
};
