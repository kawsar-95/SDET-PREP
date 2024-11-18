// 1. String reverse
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// 2. Array reverse
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// 3. Reverse words
function reverseWords(str) {
  let words = [];
  let word = '';
  for (let char of str) {
    if (char === ' ') {
      words.push(word);
      word = '';
    } else {
      word += char;
    }
  }
  words.push(word);

  let reversed = '';
  for (let i = words.length - 1; i >= 0; i--) {
    reversed += words[i] + (i > 0 ? ' ' : '');
  }
  return reversed;
}

// 4. Prime number
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 5. String palindrome
function isPalindrome(str) {
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

// 6. Number palindrome
function isNumberPalindrome(num) {
  let reversed = 0, original = num;
  while (num > 0) {
    reversed = reversed * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  return original === reversed;
}

// 7. Max/min number from an array
function maxMinArray(arr) {
  let max = arr[0], min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return { max, min };
}

// 8. Find the second min/max number from an array
function secondMaxMinArray(arr) {
  let max = -Infinity, secondMax = -Infinity;
  let min = Infinity, secondMin = Infinity;
  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num !== max) {
      secondMax = num;
    }
    if (num < min) {
      secondMin = min;
      min = num;
    } else if (num < secondMin && num !== min) {
      secondMin = num;
    }
  }
  return { secondMax, secondMin };
}

// 11. Swap values of two variables without direct reassignment and without creating any extra variables
function swap(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}

// 12. Two-string anagram
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  let count = {};
  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}

// 13. Remove duplicates from a string
function removeDuplicates(str) {
  let result = '';
  let seen = {};
  for (let char of str) {
    if (!seen[char]) {
      result += char;
      seen[char] = true;
    }
  }
  return result;
}

// 14. Count letters (Map)
function countLetters(str) {
  let map = {};
  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }
  return map;
}

// 15. FizzBuzz
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
}

// 16. Even or Odd
function evenOrOdd(num) {
  console.log(num % 2 === 0 ? 'Even' : 'Odd');
}

// 17. Sum of two
function findPairWithSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// 18. The Fibonacci
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n);
}

// 19. Balanced String
function isBalancedString(str) {
  const stack = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  for (let char of str) {
    if (map[char]) {
      stack.push(map[char]);
    } else if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

// 20. Sort array without built-in sort methods
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}