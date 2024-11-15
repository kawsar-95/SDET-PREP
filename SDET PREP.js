

function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}
console.log(isPalindrome("madam"))
console.log(isPalindrome("djdsdd"))


// reverse a string without any js methos
function reverseString(str) {
  let reversed = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
  }
  return reversed
}
console.log(reverseString("madam"))

// fibonacci series without any js method
function fibonacci(n) {
  let fib = [0, 1]
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2])
  }
  return fib
}
console.log(fibonacci(10))

//factorial of a number without any js method
function factorial(n) {
  let fact = 1
  for (let i = 1; i <= n; i++) {
    fact *= i
  }
  return fact
}
console.log(factorial(5))

// find the largest number in an array without any js method
function largestNumber(arr) {
  let largest = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]
    }
  }
  return largest
}
console.log(largestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

//prime number  without any js method 
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
console.log(isPrime(7))
// count vowels and consonants in a string without any js method
function countVowelsConsonants(str) {
  let vowels = 0
  let consonants = 0
  const vowel = 'aeiou'
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    let isVowel = false
    for (let j = 0; j < vowel.length; j++) {
      if (char === vowel[j]) {
        isVowel = true
        break
      }
    }
    if (isVowel) {
      vowels++
    } else {
      consonants++
    }
  }
  return { vowels, consonants }
}
console.log(countVowelsConsonants("javascript"))

//sort an array without any js method
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
console.log(sortArray([3, 1, 2, 5, 4, 6, 7, 8, 9, 10]))

//merge two arrays without any js method
function mergeArrays(arr1, arr2) {
  let merged = []
  for (let i = 0; i < arr1.length; i++) {
    merged.push(arr1[i])
  }
  for (let i = 0; i < arr2.length; i++) {
    merged.push(arr2[i])
  }
  return merged
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]))
// find the second largest number in an array without any js method
function secondLargestNumber(arr) {
  let largest = -Infinity
  let secondLargest = -Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest
      largest = arr[i]
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i]
    }
  }
  return secondLargest
}
console.log(secondLargestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// remove duplicate values from an array without any js method
function removeDuplicates(arr) {
  let unique = []
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i])
    }
  }
  return unique
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]))