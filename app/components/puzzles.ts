export const puzzles = [
    {
        code: `const x = 5;\nconst y = 10;\nconsole.log(x + y);`,
        question: "What will be the output of the following code?",
        options: ["15", "5", "10"],
        correctAnswer: "15",
        explanation: "The code adds two numbers, x (5) and y (10), so the result is 15.",
        level: "Easy"
      },
      {
        code: `const a = 3;\nconst b = 4;\nconsole.log(a * b);`,
        question: "What will be the output of the following code?",
        options: ["12", "7", "1"],
        correctAnswer: "12",
        explanation: "The code multiplies two numbers, a (3) and b (4), so the result is 12.",
        level: "Easy"
      },
      {
        code: `function greet(name) {\n  return "Hello, " + name;\n}\nconsole.log(greet("Alice"));`,
        question: "What will be the output of the following code?",
        options: ["Hello, Alice", "Hello Alice", "Hi, Alice"],
        correctAnswer: "Hello, Alice",
        explanation: "The function greet concatenates 'Hello, ' with the given name.",
        level: "Medium"
      },
      {
        code: `const numbers = [1, 2, 3, 4];\nconsole.log(numbers.map(x => x * 2));`,
        question: "What will be the output of the following code?",
        options: ["[2, 4, 6, 8]", "[1, 2, 3, 4]", "[4, 8, 12, 16]"],
        correctAnswer: "[2, 4, 6, 8]",
        explanation: "The map function multiplies each element of the array by 2.",
        level: "Medium"
      },
      {
        code: `const isEven = (num) => num % 2 === 0;\nconsole.log(isEven(5));`,
        question: "What will be the output of the following code?",
        options: ["false", "true", "undefined"],
        correctAnswer: "false",
        explanation: "5 is an odd number, so the function returns false.",
        level: "Medium"
      },
      {
        code: `const fib = (n) => {\n  if (n <= 1) return n;\n  return fib(n - 1) + fib(n - 2);\n};\nconsole.log(fib(5));`,
        question: "What will be the output of the following code?",
        options: ["5", "8", "15"],
        correctAnswer: "5",
        explanation: "This is a recursive function to calculate the nth Fibonacci number. For n = 5, the result is 5.",
        level: "Hard"
      },
      {
          code: `const arr = [1, 2, 3, 4];\nconsole.log(arr.reduce((acc, curr) => acc + curr, 0));`,
          question: "What will be the output of the following code?",
          options: ["10", "15", "5"],
          correctAnswer: "10",
          explanation: "The reduce function sums all elements in the array. 1 + 2 + 3 + 4 = 10.",
          level: "Easy"
        },
        {
          code: `const name = "John";\nconst greeting = \`Hello, \${name}!\`;\nconsole.log(greeting);`,
          question: "What will be the output of the following code?",
          options: ["Hello, John!", "Hello John!", "undefined"],
          correctAnswer: "Hello, John!",
          explanation: "Template literals allow embedding expressions inside a string with the \${} syntax.",
          level: "Easy"
        },
        {
          code: `const sum = (a, b) => a + b;\nconsole.log(sum(5, 3));`,
          question: "What will be the output of the following code?",
          options: ["5", "8", "Error"],
          correctAnswer: "8",
          explanation: "The sum function adds 5 and 3, so the result is 8.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4];\nconsole.log(arr.filter(x => x % 2 === 0));`,
          question: "What will be the output of the following code?",
          options: ["[2, 4]", "[1, 3]", "[1, 2, 3, 4]"],
          correctAnswer: "[2, 4]",
          explanation: "The filter function returns an array of elements that pass the given test (even numbers).",
          level: "Medium"
        },
        {
          code: `const person = { name: 'Alice', age: 25 };\nconsole.log(person.name);`,
          question: "What will be the output of the following code?",
          options: ["Alice", "25", "undefined"],
          correctAnswer: "Alice",
          explanation: "The code accesses the 'name' property of the person object, which is 'Alice'.",
          level: "Medium"
        },
        {
          code: `const numbers = [1, 2, 3];\nnumbers.push(4);\nconsole.log(numbers);`,
          question: "What will be the output of the following code?",
          options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4, 3, 2, 1]"],
          correctAnswer: "[1, 2, 3, 4]",
          explanation: "The push method adds an element (4) to the end of the array.",
          level: "Medium"
        },
        {
          code: `const obj = {a: 1, b: 2};\nconst copy = {...obj};\nconsole.log(copy);`,
          question: "What will be the output of the following code?",
          options: ["{a: 1, b: 2}", "{a: 1, b: undefined}", "undefined"],
          correctAnswer: "{a: 1, b: 2}",
          explanation: "The spread syntax creates a shallow copy of the object.",
          level: "Medium"
        },
        {
          code: `const x = 10;\nif (x === 10) {\n  let y = 20;\n}\nconsole.log(y);`,
          question: "What will be the output of the following code?",
          options: ["20", "undefined", "ReferenceError"],
          correctAnswer: "ReferenceError",
          explanation: "The variable 'y' is block-scoped (inside the if statement) and is not accessible outside of it.",
          level: "Hard"
        },
        {
          code: `const arr = [1, 2, 3, 4];\nconsole.log(arr.slice(1, 3));`,
          question: "What will be the output of the following code?",
          options: ["[1, 2]", "[2, 3]", "[1, 2, 3]"],
          correctAnswer: "[2, 3]",
          explanation: "The slice method extracts a portion of the array, starting at index 1 and ending before index 3.",
          level: "Hard"
        },
        {
          code: `function factorial(n) {\n  if (n === 0) return 1;\n  return n * factorial(n - 1);\n}\nconsole.log(factorial(5));`,
          question: "What will be the output of the following code?",
          options: ["120", "5", "Error"],
          correctAnswer: "120",
          explanation: "This is a recursive function to calculate the factorial of a number. factorial(5) = 5 * 4 * 3 * 2 * 1 = 120.",
          level: "Hard"
        },
        {
          code: `const num = 7;\nconst result = num % 2 === 0 ? 'Even' : 'Odd';\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["Even", "Odd", "Error"],
          correctAnswer: "Odd",
          explanation: "The ternary operator checks if the number is divisible by 2. Since 7 is odd, it returns 'Odd'.",
          level: "Easy"
        },
        {
          code: `const str = "hello";\nconst result = str.toUpperCase();\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["hello", "HELLO", "Hello"],
          correctAnswer: "HELLO",
          explanation: "The toUpperCase method converts all characters in the string to uppercase.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4];\nconst doubled = arr.map(x => x * 2);\nconsole.log(doubled);`,
          question: "What will be the output of the following code?",
          options: ["[1, 2, 3, 4]", "[2, 4, 6, 8]", "[1, 4, 9, 16]"],
          correctAnswer: "[2, 4, 6, 8]",
          explanation: "The map method creates a new array by applying a function to each element. The elements are multiplied by 2.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4, 5];\nconst sliced = arr.slice(2, 4);\nconsole.log(sliced);`,
          question: "What will be the output of the following code?",
          options: ["[3, 4]", "[2, 3]", "[1, 2, 3, 4]"],
          correctAnswer: "[3, 4]",
          explanation: "The slice method extracts a portion of the array starting from index 2 and ending before index 4.",
          level: "Medium"
        },
        {
          code: `const obj = {a: 1, b: 2};\nconst newObj = { ...obj, c: 3 };\nconsole.log(newObj);`,
          question: "What will be the output of the following code?",
          options: ["{a: 1, b: 2}", "{a: 1, b: 2, c: 3}", "{a: 1, c: 3}"],
          correctAnswer: "{a: 1, b: 2, c: 3}",
          explanation: "The spread operator creates a shallow copy of the object and adds a new property 'c'.",
          level: "Medium"
        },
        {
          code: `const x = 5;\nconst y = 10;\nconsole.log(x === y);`,
          question: "What will be the output of the following code?",
          options: ["true", "false", "undefined"],
          correctAnswer: "false",
          explanation: "The strict equality operator (===) checks if x is equal to y. Since 5 is not equal to 10, the result is false.",
          level: "Medium"
        },
        {
          code: `const arr = [1, 2, 3, 4];\narr.pop();\nconsole.log(arr);`,
          question: "What will be the output of the following code?",
          options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[2, 3, 4]"],
          correctAnswer: "[1, 2, 3]",
          explanation: "The pop method removes the last element from the array, modifying it.",
          level: "Medium"
        },
        {
          code: `function isPalindrome(str) {\n  const reversed = str.split('').reverse().join('');\n  return str === reversed;\n}\nconsole.log(isPalindrome('racecar'));`,
          question: "What will be the output of the following code?",
          options: ["true", "false", "undefined"],
          correctAnswer: "true",
          explanation: "The function checks if the string is the same when reversed. 'racecar' is a palindrome.",
          level: "Medium"
        },
        {
          code: `const arr = [1, 2, 3, 4, 5];\nconst newArr = arr.slice(1, 3).concat([6, 7]);\nconsole.log(newArr);`,
          question: "What will be the output of the following code?",
          options: ["[2, 3, 6, 7]", "[1, 2, 3, 4, 5, 6, 7]", "[6, 7]"],
          correctAnswer: "[2, 3, 6, 7]",
          explanation: "The slice method extracts the elements [2, 3] from the array, and the concat method appends [6, 7] to it.",
          level: "Medium"
        },
        {
          code: `const x = 10;\nconst y = '10';\nconsole.log(x == y);`,
          question: "What will be the output of the following code?",
          options: ["true", "false", "undefined"],
          correctAnswer: "true",
          explanation: "The == operator performs type coercion, so '10' is treated as a number and becomes equal to 10.",
          level: "Medium"
        },
        {
          code: `const arr = [5, 10, 15, 20];\nconsole.log(arr.find(x => x > 10));`,
          question: "What will be the output of the following code?",
          options: ["15", "10", "undefined"],
          correctAnswer: "15",
          explanation: "The find method returns the first element that satisfies the condition, which is 15.",
          level: "Hard"
        },
        {
          code: `let a = 10;\nlet b = 20;\n[a, b] = [b, a];\nconsole.log(a, b);`,
          question: "What will be the output of the following code?",
          options: ["10 20", "20 10", "undefined undefined"],
          correctAnswer: "20 10",
          explanation: "This is an example of destructuring assignment, where the values of 'a' and 'b' are swapped.",
          level: "Easy"
        },
        {
          code: `const person = { name: 'John', age: 30 };\nconst { name, age } = person;\nconsole.log(name, age);`,
          question: "What will be the output of the following code?",
          options: ["John 30", "undefined undefined", "name age"],
          correctAnswer: "John 30",
          explanation: "Destructuring is used to extract values from the object 'person' into individual variables.",
          level: "Easy"
        },
        {
          code: `let count = 0;\nfor (let i = 0; i < 3; i++) {\n  count += i;\n}\nconsole.log(count);`,
          question: "What will be the output of the following code?",
          options: ["3", "6", "0"],
          correctAnswer: "3",
          explanation: "The loop iterates three times, adding the value of 'i' (0, 1, 2) to 'count', resulting in 3.",
          level: "Easy"
        },
        {
          code: `const numbers = [1, 2, 3, 4];\nconst squares = numbers.map(num => num * num);\nconsole.log(squares);`,
          question: "What will be the output of the following code?",
          options: ["[1, 2, 3, 4]", "[1, 4, 9, 16]", "[2, 4, 6, 8]"],
          correctAnswer: "[1, 4, 9, 16]",
          explanation: "The map method applies the function (num * num) to each element in the array, creating a new array of squares.",
          level: "Easy"
        },
        {
          code: `let a = 5;\nlet b = 2;\nlet result = a / b;\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["2", "2.5", "3"],
          correctAnswer: "2.5",
          explanation: "The division operator '/' returns a floating point result when dividing 5 by 2.",
          level: "Easy"
        },
        {
          code: `const numbers = [10, 20, 30, 40, 50];\nconst sum = numbers.reduce((acc, num) => acc + num, 0);\nconsole.log(sum);`,
          question: "What will be the output of the following code?",
          options: ["150", "100", "50"],
          correctAnswer: "150",
          explanation: "The reduce method sums all the elements of the array, starting from an initial value of 0.",
          level: "Medium"
        },
        {
          code: `const nums = [1, 2, 3, 4];\nconst newNums = nums.filter(num => num % 2 === 0);\nconsole.log(newNums);`,
          question: "What will be the output of the following code?",
          options: ["[1, 3]", "[2, 4]", "[1, 2, 3, 4]"],
          correctAnswer: "[2, 4]",
          explanation: "The filter method returns a new array containing only the even numbers.",
          level: "Medium"
        },
        {
          code: `function multiply(a, b = 1) {\n  return a * b;\n}\nconsole.log(multiply(5));`,
          question: "What will be the output of the following code?",
          options: ["5", "10", "Error"],
          correctAnswer: "5",
          explanation: "The function multiply uses a default value of 1 for 'b' if no second argument is passed, so the result is 5 * 1.",
          level: "Medium"
        },
        {
          code: `let x = '10';\nlet y = '5';\nlet sum = +x + +y;\nconsole.log(sum);`,
          question: "What will be the output of the following code?",
          options: ["15", "105", "NaN"],
          correctAnswer: "15",
          explanation: "The '+' operator before x and y coerces the strings into numbers, so the result is 10 + 5.",
          level: "Medium"
        },
        {
          code: `const person = { name: 'Alice', greet: function() { return 'Hello ' + this.name; } };\nconsole.log(person.greet());`,
          question: "What will be the output of the following code?",
          options: ["Hello Alice", "Hello", "undefined"],
          correctAnswer: "Hello Alice",
          explanation: "The method greet uses 'this' to refer to the object 'person' and access its 'name' property.",
          level: "Medium"
        },
        {
          code: `const arr = [1, 2, 3, 4, 5];\narr.splice(2, 1, 6, 7);\nconsole.log(arr);`,
          question: "What will be the output of the following code?",
          options: ["[1, 2, 6, 7, 4, 5]", "[1, 2, 3, 6, 7, 4, 5]", "[6, 7, 4, 5]"],
          correctAnswer: "[1, 2, 6, 7, 4, 5]",
          explanation: "The splice method removes one element at index 2 and inserts 6 and 7 in its place.",
          level: "Medium"
        },
        {
          code: `const obj = { name: 'John', age: 30 };\nconst keys = Object.keys(obj);\nconsole.log(keys);`,
          question: "What will be the output of the following code?",
          options: ["['name', 'age']", "['John', '30']", "['John', 30]"],
          correctAnswer: "['name', 'age']",
          explanation: "The Object.keys() method returns an array of the object's property names.",
          level: "Medium"
        },
        {
          code: `function reverseArray(arr) {\n  return arr.reverse();\n}\nconsole.log(reverseArray([1, 2, 3]));`,
          question: "What will be the output of the following code?",
          options: ["[3, 2, 1]", "[1, 2, 3]", "Error"],
          correctAnswer: "[3, 2, 1]",
          explanation: "The reverse() method reverses the elements of the array in place, returning the reversed array.",
          level: "Hard"
        },
        {
          code: `const nums = [1, 2, 3, 4];\nconst total = nums.reduceRight((acc, num) => acc + num, 0);\nconsole.log(total);`,
          question: "What will be the output of the following code?",
          options: ["10", "6", "4"],
          correctAnswer: "10",
          explanation: "The reduceRight method iterates the array from right to left and sums the elements.",
          level: "Hard"
        },
        {
          code: `const arr = [1, 2, 3, 4];\nconst mapped = arr.flatMap(x => [x, x * 2]);\nconsole.log(mapped);`,
          question: "What will be the output of the following code?",
          options: ["[1, 2, 2, 4, 3, 6, 4, 8]", "[1, 2, 3, 4]", "[1, 2, 3, 4, 8]"],
          correctAnswer: "[1, 2, 2, 4, 3, 6, 4, 8]",
          explanation: "The flatMap method applies a function to each element and flattens the result into a new array.",
          level: "Hard"
        },
        {
          code: `let arr = [1, 2, 3, 4];\narr.push(5);\nconsole.log(arr);`,
          question: "What will be the output of the following code?",
          options: ["[1, 2, 3, 4, 5]", "[5, 4, 3, 2, 1]", "[1, 2, 3, 4]"],
          correctAnswer: "[1, 2, 3, 4, 5]",
          explanation: "The push() method adds an element to the end of the array.",
          level: "Easy"
        },
        {
          code: `const greeting = 'Hello';\nconst name = 'Alice';\nconst message = \`\${greeting}, \${name}!\`;\nconsole.log(message);`,
          question: "What will be the output of the following code?",
          options: ["Hello Alice!", "Hello, name!", "undefined"],
          correctAnswer: "Hello, Alice!",
          explanation: "Template literals allow you to embed expressions inside string literals using backticks and \${}.",
          level: "Easy"
        },
        {
          code: `function add(a, b) {\n  return a + b;\n}\nconsole.log(add(3, 4));`,
          question: "What will be the output of the following code?",
          options: ["34", "7", "undefined"],
          correctAnswer: "7",
          explanation: "The add() function takes two parameters and returns their sum.",
          level: "Easy"
        },
        {
          code: `const numbers = [10, 20, 30, 40];\nconst result = numbers.reduce((acc, num) => acc + num, 0);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["60", "40", "30"],
          correctAnswer: "100",
          explanation: "The reduce method sums all the elements in the array, starting with an initial value of 0.",
          level: "Medium"
        },
        {
          code: `let arr = ['a', 'b', 'c'];\narr.splice(1, 1, 'x', 'y');\nconsole.log(arr);`,
          question: "What will be the output of the following code?",
          options: ["['a', 'b', 'c']", "['a', 'x', 'y', 'c']", "['a', 'x', 'y']"],
          correctAnswer: "['a', 'x', 'y', 'c']",
          explanation: "The splice() method removes one element at index 1 and inserts 'x' and 'y'.",
          level: "Medium"
        },
        {
          code: `const person = { name: 'Bob', age: 25 };\nconst { name: personName, age: personAge } = person;\nconsole.log(personName, personAge);`,
          question: "What will be the output of the following code?",
          options: ["Bob 25", "name age", "undefined undefined"],
          correctAnswer: "Bob 25",
          explanation: "Object destructuring allows you to extract values from an object into individual variables with optional renaming.",
          level: "Medium"
        },
        {
          code: `let count = 0;\nwhile (count < 3) {\n  count++;\n}\nconsole.log(count);`,
          question: "What will be the output of the following code?",
          options: ["0", "3", "2"],
          correctAnswer: "3",
          explanation: "The while loop increments 'count' until it reaches 3.",
          level: "Medium"
        },
        {
          code: `const nums = [1, 2, 3, 4];\nconst squares = nums.map(num => num * num);\nconsole.log(squares);`,
          question: "What will be the output of the following code?",
          options: ["[1, 4, 9, 16]", "[1, 2, 3, 4]", "[2, 4, 6, 8]"],
          correctAnswer: "[1, 4, 9, 16]",
          explanation: "The map method applies the function 'num * num' to each element in the array, creating a new array of squares.",
          level: "Medium"
        },
        {
          code: `const nums = [1, 2, 3, 4, 5];\nconst filtered = nums.filter(num => num % 2 === 0);\nconsole.log(filtered);`,
          question: "What will be the output of the following code?",
          options: ["[2, 4]", "[1, 3, 5]", "[1, 2, 3, 4, 5]"],
          correctAnswer: "[2, 4]",
          explanation: "The filter method creates a new array containing only the even numbers.",
          level: "Medium"
        },
        {
          code: `let x = 1;\nlet y = 2;\n[x, y] = [y, x];\nconsole.log(x, y);`,
          question: "What will be the output of the following code?",
          options: ["1 2", "2 1", "undefined undefined"],
          correctAnswer: "2 1",
          explanation: "Destructuring assignment swaps the values of 'x' and 'y'.",
          level: "Medium"
        },
        {
          code: `function sum(a, b = 5) {\n  return a + b;\n}\nconsole.log(sum(3));`,
          question: "What will be the output of the following code?",
          options: ["8", "3", "5"],
          correctAnswer: "8",
          explanation: "The default value for 'b' is 5, so the function returns 3 + 5.",
          level: "Medium"
        },
        {
          code: `const numbers = [10, 20, 30, 40, 50];\nconst first = numbers.shift();\nconsole.log(first, numbers);`,
          question: "What will be the output of the following code?",
          options: ["10 [20, 30, 40, 50]", "10 [10, 20, 30, 40, 50]", "undefined []"],
          correctAnswer: "10 [20, 30, 40, 50]",
          explanation: "The shift() method removes the first element from the array and returns it.",
          level: "Medium"
        },
        {
          code: `const nums = [1, 2, 3, 4];\nconst total = nums.reduce((acc, num) => acc * num, 1);\nconsole.log(total);`,
          question: "What will be the output of the following code?",
          options: ["24", "10", "15"],
          correctAnswer: "24",
          explanation: "The reduce method multiplies all elements in the array, starting with an initial value of 1.",
          level: "Medium"
        },
        {
          code: `let str = "12345";\nlet result = str.split('').reverse().join('');\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["54321", "12345", "undefined"],
          correctAnswer: "54321",
          explanation: "The split() method converts the string into an array of characters, reverse() reverses the array, and join() merges the elements back into a string.",
          level: "Hard"
        },
        {
          code: `const nums = [1, 2, 3, 4];\nconst total = nums.map(num => num * 2).reduce((acc, num) => acc + num, 0);\nconsole.log(total);`,
          question: "What will be the output of the following code?",
          options: ["20", "10", "24"],
          correctAnswer: "20",
          explanation: "First, the map() method doubles each element of the array, and then the reduce() method sums all the doubled values.",
          level: "Hard"
        },
        {
          code: `const nums = [1, 2, 3, 4, 5];\nconst result = nums.filter(num => num > 3).map(num => num * 2);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[8, 10]", "[6, 8, 10]", "[4, 6, 8, 10]"],
          correctAnswer: "[8, 10]",
          explanation: "The filter method selects numbers greater than 3, and the map method doubles them.",
          level: "Hard"
        },
        {
          code: `const arr = [1, 2, 3, 4];\nconst newArr = [...arr, 5];\nconsole.log(newArr);`,
          question: "What will be the output of the following code?",
          options: ["[1, 2, 3, 4, 5]", "[5, 1, 2, 3, 4]", "[1, 2, 3, 4, 4]"],
          correctAnswer: "[1, 2, 3, 4, 5]",
          explanation: "The spread operator (...) is used to copy the elements of an array and append new values.",
          level: "Medium"
        },
        {
          code: `let obj = {a: 1, b: 2, c: 3};\ndelete obj.b;\nconsole.log(obj);`,
          question: "What will be the output of the following code?",
          options: ["{a: 1, b: 2, c: 3}", "{a: 1, c: 3}", "{b: 2}"],
          correctAnswer: "{a: 1, c: 3}",
          explanation: "The delete operator removes a property from an object.",
          level: "Medium"
        },
        {
          code: `let x = [10, 20, 30];\nlet y = x;\ny.push(40);\nconsole.log(x);`,
          question: "What will be the output of the following code?",
          options: ["[10, 20, 30]", "[10, 20, 30, 40]", "[40]"],
          correctAnswer: "[10, 20, 30, 40]",
          explanation: "Arrays are reference types, so both 'x' and 'y' refer to the same array in memory.",
          level: "Medium"
        },
        {
          code: `const nums = [1, 2, 3, 4];\nnums[2] = 10;\nconsole.log(nums);`,
          question: "What will be the output of the following code?",
          options: ["[1, 2, 3, 4]", "[1, 2, 10, 4]", "[1, 2, 3, 10]"],
          correctAnswer: "[1, 2, 10, 4]",
          explanation: "You are modifying the value at index 2 in the array.",
          level: "Medium"
        },
        {
          code: `const arr = [1, 2, 3, 4];\nconst [first, second, ...rest] = arr;\nconsole.log(rest);`,
          question: "What will be the output of the following code?",
          options: ["[3, 4]", "[1, 2, 3, 4]", "[1, 2]"],
          correctAnswer: "[3, 4]",
          explanation: "This is an example of array destructuring, where the remaining elements are collected in the 'rest' array.",
          level: "Medium"
        },
        {
          code: `const str = "Hello, world!";\nconsole.log(str.includes('world'));`,
          question: "What will be the output of the following code?",
          options: ["true", "false", "undefined"],
          correctAnswer: "true",
          explanation: "The includes() method checks if a string contains a specified substring.",
          level: "Easy"
        },
        {
          code: `function multiply(a, b = 1) {\n  return a * b;\n}\nconsole.log(multiply(5));`,
          question: "What will be the output of the following code?",
          options: ["5", "undefined", "10"],
          correctAnswer: "5",
          explanation: "The function uses a default parameter, so when b is not provided, it defaults to 1.",
          level: "Easy"
        },
        {
          code: `const obj = { name: 'John', age: 30 };\nconst { name, ...rest } = obj;\nconsole.log(rest);`,
          question: "What will be the output of the following code?",
          options: ["{ name: 'John' }", "{ age: 30 }", "{ age: 30, name: 'John' }"],
          correctAnswer: "{ age: 30 }",
          explanation: "The rest parameter collects the remaining properties of the object after destructuring.",
          level: "Medium"
        },
        {
          code: `const arr = [5, 10, 15, 20];\nconst result = arr.reduce((acc, current) => acc + current, 0);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["50", "45", "25"],
          correctAnswer: "50",
          explanation: "The reduce() method sums all the elements in the array.",
          level: "Medium"
        },
        {
          code: `const arr = [10, 20, 30];\nconst [first, ...rest] = arr;\nconsole.log(first, rest);`,
          question: "What will be the output of the following code?",
          options: ["10 [20, 30]", "10 [30]", "20 [10, 30]"],
          correctAnswer: "10 [20, 30]",
          explanation: "The first element is assigned to 'first' and the remaining elements are collected in the 'rest' array.",
          level: "Medium"
        },
        {
          code: `const nums = [3, 5, 7, 9];\nconst multiplied = nums.map(n => n * 2);\nconsole.log(multiplied);`,
          question: "What will be the output of the following code?",
          options: ["[6, 10, 14, 18]", "[3, 5, 7, 9]", "[1, 2, 3, 4]"],
          correctAnswer: "[6, 10, 14, 18]",
          explanation: "The map() method creates a new array by multiplying each element by 2.",
          level: "Easy"
        },
        {
          code: `let count = 0;\nfor (let i = 0; i < 5; i++) {\n  count++;\n}\nconsole.log(count);`,
          question: "What will be the output of the following code?",
          options: ["5", "4", "0"],
          correctAnswer: "5",
          explanation: "The for loop runs 5 times, incrementing 'count' each time.",
          level: "Easy"
        },
        {
          code: `const str = "JavaScript";\nconsole.log(str.charAt(4));`,
          question: "What will be the output of the following code?",
          options: ["S", "J", "A"],
          correctAnswer: "S",
          explanation: "The charAt() method returns the character at the specified index (4 in this case).",
          level: "Easy"
        },
        {
          code: `const obj = { a: 1, b: 2 };\nconst newObj = { ...obj, c: 3 };\nconsole.log(newObj);`,
          question: "What will be the output of the following code?",
          options: ["{a: 1, b: 2, c: 3}", "{a: 1, c: 3}", "{b: 2, c: 3}"],
          correctAnswer: "{a: 1, b: 2, c: 3}",
          explanation: "The spread operator creates a shallow copy of the object and adds the new property 'c'.",
          level: "Medium"
        },
        {
          code: `const arr = [1, 2, 3, 4];\nconst doubled = arr.map(num => num * 2).filter(num => num > 5);\nconsole.log(doubled);`,
          question: "What will be the output of the following code?",
          options: ["[6, 8]", "[2, 4, 6, 8]", "[1, 2, 3, 4]"],
          correctAnswer: "[6, 8]",
          explanation: "The map() method doubles the numbers, and then the filter() method selects only those greater than 5.",
          level: "Hard"
        },
        {
          code: `let arr = [1, 2, 3, 4];\nlet newArr = arr.map(num => num * num).filter(num => num < 10);\nconsole.log(newArr);`,
          question: "What will be the output of the following code?",
          options: ["[1, 4, 9]", "[4, 9, 16]", "[16, 9]"],
          correctAnswer: "[1, 4, 9]",
          explanation: "The map() method squares the numbers, and then the filter() method selects those less than 10.",
          level: "Hard"
        },
        {
          code: `const str = "hello world";\nconst result = str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["Hello World", "hello World", "Hello world"],
          correctAnswer: "Hello World",
          explanation: "The code splits the string by spaces, capitalizes the first letter of each word, and joins them back together.",
          level: "Hard"
        },
        {
          code: `const arr = [1, 2, 3, 4];\nconst result = arr.slice(1, 3);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[1, 2]", "[2, 3]", "[3, 4]"],
          correctAnswer: "[2, 3]",
          explanation: "The slice() method returns a shallow copy of a portion of an array from the start index to the end index (not inclusive).",
          level: "Medium"
        },
        {
          code: `const obj = { name: 'Alice', age: 25 };\nconst { name, age, address = 'Unknown' } = obj;\nconsole.log(address);`,
          question: "What will be the output of the following code?",
          options: ["'Unknown'", "'Alice'", "'25'"],
          correctAnswer: "'Unknown'",
          explanation: "When destructuring an object, the default value 'Unknown' is used when the property does not exist.",
          level: "Medium"
        },
        {
          code: `const nums = [5, 10, 15, 20];\nconst result = nums.find(num => num > 10);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["5", "15", "20"],
          correctAnswer: "15",
          explanation: "The find() method returns the first element in the array that satisfies the provided testing function.",
          level: "Medium"
        },
        {
          code: `const str = "1234";\nconst result = str.split('').reverse().join('');\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["4321", "1234", "2413"],
          correctAnswer: "4321",
          explanation: "The split() method splits the string into an array of characters, reverse() reverses the array, and join() combines them back into a string.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3];\narr[3] = 4;\narr.push(5);\nconsole.log(arr);`,
          question: "What will be the output of the following code?",
          options: ["[1, 2, 3, 4, 5]", "[1, 2, 3, 5]", "[1, 2, 3, 4]"],
          correctAnswer: "[1, 2, 3, 4, 5]",
          explanation: "You are adding '4' directly to the array using the index and then using push() to add '5'.",
          level: "Easy"
        },
        {
          code: `const arr = [10, 20, 30, 40];\nconst result = arr.some(num => num > 25);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["true", "false", "undefined"],
          correctAnswer: "true",
          explanation: "The some() method checks if at least one element in the array passes the provided test.",
          level: "Easy"
        },
        {
          code: `let arr = [1, 2, 3, 4];\nlet newArr = [...arr];\nnewArr[0] = 10;\nconsole.log(arr);`,
          question: "What will be the output of the following code?",
          options: ["[1, 2, 3, 4]", "[10, 2, 3, 4]", "[1, 2, 3, 4, 10]"],
          correctAnswer: "[1, 2, 3, 4]",
          explanation: "The spread operator creates a shallow copy of the array, so modifying newArr does not affect arr.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4];\narr.splice(2, 1);\nconsole.log(arr);`,
          question: "What will be the output of the following code?",
          options: ["[1, 2, 3]", "[1, 2, 4]", "[2, 3, 4]"],
          correctAnswer: "[1, 2, 4]",
          explanation: "The splice() method removes 1 element at index 2.",
          level: "Medium"
        },
        {
          code: `const person = { name: 'John', age: 30 };\nconst newPerson = { ...person, age: 31 };\nconsole.log(newPerson);`,
          question: "What will be the output of the following code?",
          options: ["{name: 'John', age: 30}", "{name: 'John', age: 31}", "{name: 'John'}"],
          correctAnswer: "{name: 'John', age: 31}",
          explanation: "The spread operator copies all properties of 'person', and the age property is updated in 'newPerson'.",
          level: "Medium"
        },
        {
          code: `const str = "This is a test";\nconst result = str.split(" ").map(word => word.toUpperCase()).join(" ");\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["THIS IS A TEST", "This Is A Test", "THIS IS A test"],
          correctAnswer: "THIS IS A TEST",
          explanation: "The split() method splits the string, map() converts each word to uppercase, and join() combines them back into a string.",
          level: "Medium"
        },
        {
          code: `let x = 10;\nlet y = x++ + ++x;\nconsole.log(y);`,
          question: "What will be the output of the following code?",
          options: ["21", "20", "22"],
          correctAnswer: "21",
          explanation: "The post-increment operator (x++) increments x after using it, while the pre-increment operator (++x) increments x before using it.",
          level: "Hard"
        },
        {
          code: `const arr = [5, 10, 15, 20];\nconst result = arr.filter(num => num % 2 === 0).map(num => num * 2);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[20, 40]", "[10, 20, 30, 40]", "[10, 20]"],
          correctAnswer: "[20, 40]",
          explanation: "The filter() method selects the even numbers, and then the map() method doubles each of them.",
          level: "Hard"
        },
        {
          code: `const nums = [1, 2, 3, 4, 5];\nconst result = nums.reduce((acc, current, index) => acc + current * index, 0);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options:[ "40", "30", "50"],
          correctAnswer: "40",
          explanation: "The reduce() method applies a function to each element in the array, multiplying the current number by its index and summing the result.",
          level: "Hard"
        },
        {
          code: `const arr = [1, 2, 3];\nconst newArr = [...arr, ...[4, 5]];\nconsole.log(newArr);`,
          question: "What will be the output of the following code?",
          options: ["[1, 2, 3, 4, 5]", "[1, 2, 3, [4, 5]]", "[4, 5, 1, 2, 3]"],
          correctAnswer: "[1, 2, 3, 4, 5]",
          explanation: "The spread operator is used to merge the two arrays into one.",
          level: "Medium"
        },
        {
          code: `const str = "abcde";\nconst result = [...str].reverse().join('');\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["edcba", "abcde", "eabcd"],
          correctAnswer: "edcba",
          explanation: "The spread operator converts the string into an array, reverse() reverses it, and join() combines the array back into a string.",
          level: "Medium"
        },
        {
          code: `let obj = { a: 1, b: 2, c: 3 };\nfor (let key in obj) {\n  console.log(key + ": " + obj[key]);\n}`,
          question: "What will be the output of the following code?",
          options: ["a: 1, b: 2, c: 3", "a: 1, b: 2, c: 3, undefined", "undefined"],
          correctAnswer: "a: 1, b: 2, c: 3",
          explanation: "The for...in loop iterates over the object's properties and logs their names and values.",
          level: "Easy"
        },
        {
          code: `const arr = [2, 4, 6, 8];\nconst result = arr.reduce((acc, num) => acc * num, 1);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["24", "48", "64"],
          correctAnswer: "384",
          explanation: "The reduce() method accumulates the product of all numbers in the array starting with 1.",
          level: "Medium"
        },
        {
          code: `const str = "JavaScript is awesome";\nconst result = str.split(' ').reverse().join(' ');\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["'awesome is JavaScript'", "'JavaScript awesome is'", "'is awesome JavaScript'"],
          correctAnswer: "'awesome is JavaScript'",
          explanation: "The split() method splits the string by spaces, reverse() reverses the array of words, and join() combines them back into a string.",
          level: "Medium"
        },
        {
          code: `const arr = [3, 7, 2, 5, 8];\nconst result = arr.find(num => num > 6);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["7", "8", "5"],
          correctAnswer: "7",
          explanation: "The find() method returns the first element that satisfies the condition (greater than 6).",
          level: "Easy"
        },
        {
          code: `let a = 5;\nlet b = ++a;\nconsole.log(b);`,
          question: "What will be the output of the following code?",
          options: ["5", "6", "7"],
          correctAnswer: "6",
          explanation: "The pre-increment operator increases the value of 'a' before assigning it to 'b'.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4];\nconst result = arr.map(num => num * 3).filter(num => num > 5);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[6, 9, 12]", "[3, 6, 9, 12]", "[9, 12]"],
          correctAnswer: "[6, 9, 12]",
          explanation: "The map() method multiplies each number by 3, and filter() keeps only the values greater than 5.",
          level: "Medium"
        },
        {
          code: `const str = "hello world";\nconst result = str.replace("world", "JavaScript");\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["'hello world'", "'hello JavaScript'", "'world hello'"],
          correctAnswer: "'hello JavaScript'",
          explanation: "The replace() method replaces the first occurrence of 'world' with 'JavaScript'.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4];\narr.unshift(0);\nconsole.log(arr);`,
          question: "What will be the output of the following code?",
          options: ["[0, 1, 2, 3, 4]", "[1, 2, 3, 4, 0]", "[1, 2, 3, 4]"],
          correctAnswer: "[0, 1, 2, 3, 4]",
          explanation: "The unshift() method adds the element 0 at the beginning of the array.",
          level: "Easy"
        },
        {
          code: `const obj = { name: 'Bob', age: 30 };\nconst result = Object.keys(obj);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["['name', 'age']", "['Bob', '30']", "['name', '30']"],
          correctAnswer: "['name', 'age']",
          explanation: "The Object.keys() method returns an array of the object's property names.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4, 5];\nconst result = arr.slice(2, 4);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[3, 4]", "[2, 3, 4]", "[4, 5]"],
          correctAnswer: "[3, 4]",
          explanation: "The slice() method extracts a portion of the array from index 2 to 4 (4 is not included).",
          level: "Medium"
        },
        {
          code: `const num = 12;\nconst result = num.toString(2);\nconsole.log(result);`,
          question: ["What will be the output of the following code?"],
          options: ["12", "1100", "1011"],
          correctAnswer: "1100",
          explanation: "The toString() method converts the number into a string representation of its binary form.",
          level: "Hard"
        },
        {
          code: `const obj1 = { name: 'Alice' };\nconst obj2 = { age: 25 };\nconst mergedObj = { ...obj1, ...obj2 };\nconsole.log(mergedObj);`,
          question: "What will be the output of the following code?",
          options: ["{name: 'Alice', age: 25}", "{name: 'Alice'}", "{age: 25}"],
          correctAnswer: "{name: 'Alice', age: 25}",
          explanation: "The spread operator combines the properties of both objects into a new object.",
          level: "Medium"
        },
        {
          code: `const nums = [2, 4, 6, 8, 10];\nconst result = nums.every(num => num % 2 === 0);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["true", "false", "undefined"],
          correctAnswer: "true",
          explanation: "The every() method checks if all elements in the array satisfy the condition (being even).",
          level: "Easy"
        },
        {
          code: `const arr = [5, 10, 15, 20];\narr.pop();\nconsole.log(arr);`,
          question: "What will be the output of the following code?",
          options: ["[5, 10, 15]", "[10, 15, 20]", "[5, 10, 15, 20]"],
          correctAnswer: "[5, 10, 15]",
          explanation: "The pop() method removes the last element of the array.",
          level: "Easy"
        },
        {
          code: `const str = "JavaScript is fun";\nconst result = str.slice(0, 10);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["'JavaScript'", "'Java'", "'JavaScript is'"],
          correctAnswer: "'JavaScript'",
          explanation: "The slice() method extracts a part of the string from the 0th index to the 10th index (not including 10).",
          level: "Medium"
        },
        {
          code: `const nums = [2, 3, 5, 7];\nconst result = nums.map(num => num * num);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[4, 9, 25, 49]", "[2, 3, 5, 7]", "[4, 6, 8, 10]"],
          correctAnswer: "[4, 9, 25, 49]",
          explanation: "The map() method squares each number in the array.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4, 5];\nconst result = arr.slice(1, -1);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[2, 3, 4]", "[1, 2, 3, 4]", "[2, 3, 4, 5]"],
          correctAnswer: "[2, 3, 4]",
          explanation: "The slice() method extracts the portion of the array from index 1 to the second-to-last element.",
          level: "Medium"
        },
        {
          code: `const str = "hello world";\nconst result = str.replace(/world/g, 'JavaScript');\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["'hello JavaScript'", "'hello world'", "'hello world JavaScript'"],
          correctAnswer: "'hello JavaScript'",
          explanation: "The regular expression with the 'g' flag replaces all occurrences of 'world' with 'JavaScript'.",
          level: "Medium"
        },
        {
          code: `const arr = [10, 20, 30, 40, 50];\nconst result = arr.slice(2, 4);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[30, 40]", "[20, 30, 40]", "[10, 20, 30]"],
          correctAnswer: "[30, 40]",
          explanation: "The slice() method extracts a portion of the array starting from index 2 to index 4 (not including index 4).",
          level: "Medium"
        },
        {
          code: `const arr = [1, 2, 3, 4];\nconst result = arr.some(num => num > 3);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["true", "false", "undefined"],
          correctAnswer: "true",
          explanation: "The some() method checks if at least one element in the array satisfies the condition (greater than 3).",
          level: "Easy"
        },
        {
          code: `const str = "javascript is awesome";\nconst result = str.charAt(5);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["a", "v", "s"],
          correctAnswer: "v",
          explanation: "The charAt() method returns the character at the specified index (5) in the string.",
          level: "Easy"
        },
        {
          code: `const arr = [3, 6, 9, 12];\nconst result = arr.reduce((acc, num) => acc - num, 0);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["-6", "-9", "-30"],
          correctAnswer: "-30",
          explanation: "The reduce() method subtracts each number from the accumulator, starting with 0.",
          level: "Medium"
        },
        {
          code: `const arr = [1, 2, 3, 4];\nconst result = arr.filter(num => num % 2 === 0);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[1, 3]", "[2, 4]", "[1, 2, 3, 4]"],
          correctAnswer: "[2, 4]",
          explanation: "The filter() method returns an array containing only the even numbers from the original array.",
          level: "Easy"
        },
        {
          code: `let num = 7;\nnum = num % 3;\nconsole.log(num);`,
          question: "What will be the output of the following code?",
          options: ["1", "2", "3"],
          correctAnswer: "1",
          explanation: "The modulus operator (%) returns the remainder when dividing 7 by 3, which is 1.",
          level: "Easy"
        },
        {
          code: `const arr = [2, 4, 6, 8, 10];\nconst result = arr.filter(num => num % 2 === 0).map(num => num / 2);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[1, 2, 3, 4, 5]", "[1, 2, 3, 4]", "[2, 4, 6, 8, 10]"],
          correctAnswer: "[1, 2, 3, 4, 5]",
          explanation: "The filter() method keeps even numbers, and the map() method divides each number by 2.",
          level: "Medium"
        },
        {
          code: `const str = "JavaScript";\nconst result = str.toUpperCase().split('').reverse().join('');\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["TPIRCSEVAJ", "JAVASCRIPT", "jscript"],
          correctAnswer: "TPIRCSEVAJ",
          explanation: "The toUpperCase() method converts the string to uppercase, split() converts it into an array of characters, reverse() reverses the array, and join() combines it back into a string.",
          level: "Medium"
        },
        {
          code: `const arr = [5, 10, 15, 20];\nconst result = arr.includes(15);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["true", "false", "undefined"],
          correctAnswer: "true",
          explanation: "The includes() method checks if the array contains the specified element (15).",
          level: "Easy"
        },
        {
          code: `const str = "hello world";\nconst result = str.indexOf('world');\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["0", "6", "11"],
          correctAnswer: "6",
          explanation: "The indexOf() method returns the index of the first occurrence of the specified string ('world') in the original string ('hello world').",
          level: "Easy"
        },
        {
          code: `const arr = [2, 4, 6, 8];\nconst result = arr.reduce((acc, num) => acc + num, 0);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["10", "12", "20"],
          correctAnswer: "20",
          explanation: "The reduce() method adds all numbers in the array together, starting with 0.",
          level: "Easy"
        },
        {
          code: `const obj = { x: 10, y: 20, z: 30 };\nconst { x, y } = obj;\nconsole.log(x, y);`,
          question: "What will be the output of the following code?",
          options: ["10, 20", "20, 30", "10, 30"],
          correctAnswer: "10, 20",
          explanation: "The destructuring assignment extracts the values of 'x' and 'y' from the object and logs them.",
          level: "Medium"
        },
        {
          code: `const arr = [1, 2, 3, 4, 5];\nconst result = arr.pop();\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["1", "5", "4"],
          correctAnswer: "5",
          explanation: "The pop() method removes and returns the last element from the array.",
          level: "Easy"
        },
        {
          code: `const obj = { a: 1, b: 2, c: 3 };\nconst keys = Object.keys(obj);\nconsole.log(keys);`,
          question: "What will be the output of the following code?",
          options: ["['a', 'b', 'c']", "['1', '2', '3']", "['a', '1', 'b']"],
          correctAnswer: "['a', 'b', 'c']",
          explanation: "The Object.keys() method returns an array of the keys (properties) of the object.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4];\nconst result = arr.concat([5, 6, 7]);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[1, 2, 3, 4, 5, 6, 7]", "[1, 2, 3, 4]", "[5, 6, 7]"],
          correctAnswer: "[1, 2, 3, 4, 5, 6, 7]",
          explanation: "The concat() method combines the original array with another array.",
          level: "Easy"
        },
        {
          code: `const arr = [10, 20, 30, 40];\nconst result = arr.map(num => num + 5);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[15, 25, 35, 45]", "[5, 15, 25, 35]", "[10, 20, 30, 40]"],
          correctAnswer: "[15, 25, 35, 45]",
          explanation: "The map() method adds 5 to each number in the array.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4, 5];\nconst result = arr.reverse();\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[5, 4, 3, 2, 1]", "[1, 2, 3, 4, 5]", "[2, 3, 4, 5, 1]"],
          correctAnswer: "[5, 4, 3, 2, 1]",
          explanation: "The reverse() method reverses the order of elements in the array.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4, 5];\nconst result = arr.shift();\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["1", "5", "4"],
          correctAnswer: "1",
          explanation: "The shift() method removes the first element from the array and returns it.",
          level: "Easy"
        },
        {
          code: `const str = "Hello World!";\nconst result = str.substring(0, 5);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["Hello", "World", "Hello World!"],
          correctAnswer: "Hello",
          explanation: "The substring() method extracts characters from index 0 to index 5 (not including index 5).",
          level: "Easy"
        },
        {
          code: `const obj = { name: "John", age: 30 };\nconst result = Object.entries(obj);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[['name', 'John'], ['age', 30]]", "[['John', 'name'], [30, 'age']]", "[['name', 'age'], ['John', 30]]"],
          correctAnswer: "[['name', 'John'], ['age', 30]]",
          explanation: "The Object.entries() method returns an array of key-value pairs from the object.",
          level: "Medium"
        },
        {
          code: `const arr = [1, 2, 3, 4, 5];\nconst result = arr.slice(1, 3);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[2, 3]", "[1, 2, 3]", "[3, 4, 5]"],
          correctAnswer: "[2, 3]",
          explanation: "The slice() method extracts a section of the array starting from index 1 and ending before index 3.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4];\nconst result = arr.includes(3);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["true", "false", "undefined"],
          correctAnswer: "true",
          explanation: "The includes() method checks if the specified element (3) is present in the array.",
          level: "Easy"
        },
        {
          code: `const arr = [10, 20, 30, 40];\nconst result = arr.indexOf(30);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["2", "1", "3"],
          correctAnswer: "2",
          explanation: "The indexOf() method returns the index of the first occurrence of the specified element (30).",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3];\nconst result = arr.find(num => num > 2);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["2", "3", "undefined"],
          correctAnswer: "3",
          explanation: "The find() method returns the first element that satisfies the condition (greater than 2).",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4];\nconst result = arr.concat([5, 6, 7]);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[1, 2, 3, 4, 5, 6, 7]", "[1, 2, 3, 4]", "[5, 6, 7]"],
          correctAnswer: "[1, 2, 3, 4, 5, 6, 7]",
          explanation: "The concat() method combines the original array with another array.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4, 5];\nconst result = arr.map(num => num * 2);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[2, 4, 6, 8, 10]", "[1, 2, 3, 4, 5]", "[1, 4, 9, 16, 25]"],
          correctAnswer: "[2, 4, 6, 8, 10]",
          explanation: "The map() method multiplies each number in the array by 2.",
          level: "Easy"
        },
        {
          code: `const str = "Javascript";\nconst result = str.toLowerCase();\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["JAVASCRIPT", "javascript", "JavaScript"],
          correctAnswer: "javascript",
          explanation: "The toLowerCase() method converts all the characters in the string to lowercase.",
          level: "Easy"
        },
        {
          code: `const arr = [5, 10, 15, 20];\nconst result = arr.reduce((acc, num) => acc + num, 0);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["10", "20", "50"],
          correctAnswer: "50",
          explanation: "The reduce() method adds all the numbers in the array together, starting from 0.",
          level: "Easy"
        },
        {
          code: `const str = "I love coding!";\nconst result = str.replace('love', 'enjoy');\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["I enjoy coding!", "I love coding!", "I coding love!"],
          correctAnswer: "I enjoy coding!",
          explanation: "The replace() method replaces 'love' with 'enjoy' in the string.",
          level: "Medium"
        },
        {
          code: `const obj = { name: "Alice", age: 25 };\nconst result = JSON.stringify(obj);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ['{"name":"Alice","age":25}', '{"name":"Alice"}', '{"age":25}'],
          correctAnswer: '{"name":"Alice","age":25}',
          explanation: "The JSON.stringify() method converts the object to a JSON string.",
          level: "Easy"
        },
        {
          code: `const str = "12345";\nconst result = Number(str);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["12345", "NaN", "undefined"],
          correctAnswer: "12345",
          explanation: "The Number() function converts the string '12345' to the number 12345.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4, 5];\nconst result = arr.pop();\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["1", "5", "4"],
          correctAnswer: "5",
          explanation: "The pop() method removes the last element from the array and returns it.",
          level: "Easy"
        },
        {
          code: `const str = "hello";\nconst result = str.charAt(2);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["h", "e", "l"],
          correctAnswer: "l",
          explanation: "The charAt() method returns the character at the specified index (2).",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3];\nconst result = arr.reduce((acc, num) => acc * num, 1);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["6", "3", "0"],
          correctAnswer: "6",
          explanation: "The reduce() method multiplies all the numbers together, starting from 1.",
          level: "Medium"
        },
        {
          code: `const arr = [1, 2, 3, 4, 5];\nconst result = arr.find(num => num > 3);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["4", "5", "3"],
          correctAnswer: "4",
          explanation: "The find() method returns the first element greater than 3.",
          level: "Easy"
        },
        {
          code: `const str = "123abc456";\nconst result = str.match(/\d+/g);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[['123'], ['456']]", "[['123abc456']]", "['123', '456']"],
          correctAnswer: "['123', '456']",
          explanation: "The match() method returns an array of all matches for the regular expression (all digits).",
          level: "Medium"
        },
        {
          code: `const obj = { x: 10, y: 20, z: 30 };\nconst result = Object.keys(obj);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["['x', 'y', 'z']", "['x', 'z', 'y']", "['10', '20', '30']"],
          correctAnswer: "['x', 'y', 'z']",
          explanation: "The Object.keys() method returns an array of the keys in the object.",
          level: "Medium"
        },
        {
          code: `const arr = [10, 20, 30, 40];\nconst result = arr.slice(1, -1);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[20, 30, 40]", "[20, 30]", "[10, 20, 30]"],
          correctAnswer: "[20, 30]",
          explanation: "The slice() method extracts a section from index 1 to index -1 (excluding the last element).",
          level: "Medium"
        },
        {
          code: `const arr = [1, 2, 3, 4, 5];\nconst result = arr.map(num => num ** 2);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[1, 4, 9, 16, 25]", "[2, 4, 6, 8, 10]", "[1, 2, 3, 4, 5]"],
          correctAnswer: "[1, 4, 9, 16, 25]",
          explanation: "The map() method squares each number in the array.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3];\nconst result = arr.includes(2);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["true", "false", "undefined"],
          correctAnswer: "true",
          explanation: "The includes() method checks if the specified element (2) is present in the array.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4, 5];\nconst result = arr.splice(2, 1);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[3]", "[1]", "[4]"],
          correctAnswer: "[3]",
          explanation: "The splice() method removes 1 element starting from index 2 and returns that element.",
          level: "Medium"
        },
        {
          code: `const str = "HELLO";\nconst result = str.toLowerCase();\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["hello", "HELLO", "Hello"],
          correctAnswer: "hello",
          explanation: "The toLowerCase() method converts all characters in the string to lowercase.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3];\nconst result = arr.concat(4, [5, 6]);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[1, 2, 3, 4, 5, 6]", "[1, 2, 3, 4]", "[4, 5, 6, 1, 2, 3]"],
          correctAnswer: "[1, 2, 3, 4, 5, 6]",
          explanation: "The concat() method combines the original array with 4 and the array [5, 6].",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4, 5];\nconst result = arr.filter(num => num % 2 === 0);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[2, 4]", "[1, 3, 5]", "[1, 2, 3, 4, 5]"],
          correctAnswer: "[2, 4]",
          explanation: "The filter() method returns an array containing only the even numbers.",
          level: "Easy"
        },
        {
          code: `const str = "coding";\nconst result = str.slice(1, 4);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["cod", "odi", "din"],
          correctAnswer: "odi",
          explanation: "The slice() method extracts characters from index 1 to index 4 (excluding index 4).",
          level: "Easy"
        },
        {
          code: `const num = 3.14;\nconst result = Math.round(num);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["3", "4", "3.14"],
          correctAnswer: "3",
          explanation: "The Math.round() method rounds the number to the nearest integer.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4, 5];\nconst result = arr.join('-');\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["1-2-3-4-5", "12345", "1,2,3,4,5"],
          correctAnswer: "1-2-3-4-5",
          explanation: "The join() method joins all elements of the array into a string, separated by the specified separator (in this case, '-')",
          level: "Easy"
        },
        {
          code: `const str = "hello world";\nconst result = str.indexOf("o");\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["4", "7", "1"],
          correctAnswer: "4",
          explanation: "The indexOf() method returns the index of the first occurrence of the specified substring ('o').",
          level: "Easy"
        },
        {
          code: `const arr = [5, 3, 8, 1];\nconst result = arr.sort((a, b) => a - b);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[1, 3, 5, 8]", "[5, 3, 8, 1]", "[8, 5, 3, 1]"],
          correctAnswer: "[1, 3, 5, 8]",
          explanation: "The sort() method sorts the array in ascending order (using a comparison function).",
          level: "Medium"
        },
        {
          code: `const obj = { x: 10, y: 20, z: 30 };\nconst result = Object.values(obj);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[10, 20, 30]", "[x, y, z]", "[{x: 10}, {y: 20}, {z: 30}]"],
          correctAnswer: "[10, 20, 30]",
          explanation: "The Object.values() method returns an array of the object's values.",
          level: "Medium"
        },
        {
          code: `const arr = [2, 4, 6, 8];\nconst result = arr.map(num => num ** 2);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[4, 16, 36, 64]", "[1, 4, 9, 16]", "[2, 8, 18, 32]"],
          correctAnswer: "[4, 16, 36, 64]",
          explanation: "The map() method squares each element in the array.",
          level: "Easy"
        },
        {
          code: `const str = "abcdef";\nconst result = str.slice(2, 5);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["cde", "abc", "def"],
          correctAnswer: "cde",
          explanation: "The slice() method extracts characters from index 2 to index 5 (excluding index 5).",
          level: "Easy"
        },
        {
          code: `const arr = [5, 10, 15, 20];\nconst result = arr.reduce((acc, num) => acc + num, 0);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["50", "30", "20"],
          correctAnswer: "50",
          explanation: "The reduce() method adds all the numbers together, starting from 0.",
          level: "Medium"
        },
        {
          code: `const arr = [10, 20, 30, 40, 50];\nconst result = arr.slice(1, -1);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[20, 30, 40]", "[10, 20, 30]", "[20, 30, 40, 50]"],
          correctAnswer: "[20, 30, 40]",
          explanation: "The slice() method extracts a section of the array, from index 1 to index -1 (excluding the last element).",
          level: "Medium"
        },
        {
          code: `const arr = [1, 2, 3, 4, 5];\nconst result = arr.filter(num => num % 2 !== 0);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[1, 3, 5]", "[2, 4]", "[1, 2, 3]"],
          correctAnswer: "[1, 3, 5]",
          explanation: "The filter() method filters out the even numbers, leaving the odd ones.",
          level: "Easy"
        },
        {
          code: `const str = "123456789";\nconst result = str.substring(3, 6);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["456", "345", "678"],
          correctAnswer: "456",
          explanation: "The substring() method extracts characters from index 3 to index 6 (excluding index 6).",
          level: "Medium"
        },
        {
          code: `const arr = [1, 2, 3];\nconst result = arr.unshift(0);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["4", "3", "1"],
          correctAnswer: "4",
          explanation: "The unshift() method adds an element (0) to the beginning of the array and returns the new length of the array.",
          level: "Easy"
        },
        {
          code: `const num = 9;\nconst result = Math.sqrt(num);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["3", "9", "81"],
          correctAnswer: "3",
          explanation: "The Math.sqrt() method returns the square root of the given number.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4, 5];\nconst result = arr.splice(2, 2, 6, 7);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[3, 4]", "[2, 3, 4]", "[6, 7]"],
          correctAnswer: "[3, 4]",
          explanation: "The splice() method removes 2 elements starting from index 2 and adds 6 and 7 to the array.",
          level: "Medium"
        },
        {
          code: `const obj = { a: 1, b: 2, c: 3 };\nconst result = Object.keys(obj).length;\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["3", "2", "1"],
          correctAnswer: "3",
          explanation: "The Object.keys() method returns an array of the object's keys, and the length property gives the number of keys.",
          level: "Easy"
        },
        {
          code: `const arr = [10, 20, 30, 40];\nconst result = arr.reverse();\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["[40, 30, 20, 10]", "[10, 20, 30, 40]", "[30, 20, 10, 40]"],
          correctAnswer: "[40, 30, 20, 10]",
          explanation: "The reverse() method reverses the order of the elements in the array.",
          level: "Easy"
        },
        {
          code: `const arr = [1, 2, 3, 4, 5];\nconst result = arr.includes(3);\nconsole.log(result);`,
          question: "What will be the output of the following code?",
          options: ["true", "false", "undefined"],
          correctAnswer: "true",
          explanation: "The includes() method checks if the specified element (3) is present in the array.",
          level: "Easy"
        },      
        
        
  ];