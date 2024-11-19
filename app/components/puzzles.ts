export const puzzles = [
  // Python Puzzles
  {
    language: "Python",
    level: 1,
    question: "What will the following Python code print?",
    code: `x = [1, 2, 3, 4]
           print(x[1])`,
    options: [
      "1",
      "2",
      "4"
    ],
    correctAnswer: "2",
    explanation: "Python lists are 0-indexed, so `x[1]` refers to the second element, which is `2`."
  },
  {
    language: "JavaScript",
    level: 1,
    question: "What will the following JavaScript code print?",
    code: `let x = [1, 2, 3, 4];
           console.log(x[1]);`,
    options: [
      "1",
      "2",
      "4"
    ],
    correctAnswer: "2",
    explanation: "JavaScript arrays are 0-indexed, so `x[1]` refers to the second element, which is `2`."
  },
  {
    language: "C++",
    level: 1,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  int main() {
      vector<int> x = {1, 2, 3, 4};
      cout << x[1] << endl;
      return 0;
  }`,
    options: [
      "1",
      "2",
      "4"
    ],
    correctAnswer: "2",
    explanation: "In C++, vectors are 0-indexed, so `x[1]` refers to the second element, which is `2`."
  },{
    language: "Python",
    level: 2,
    question: "What will the following Python code print?",
    code: `x = [1, 2, 3]
             x.append(4)
             print(len(x))`,
    options: [
        "3",
        "4",
        "Error"
    ],
    correctAnswer: "4",
    explanation: "`x.append(4)` adds an element to the list, increasing its length from 3 to 4. `len(x)` then returns the updated length."
  },
  {
    language: "JavaScript",
    level: 2,
    question: "What will the following JavaScript code log?",
    code: `let x = [1, 2, 3];
           x.push(4);
           console.log(x.length);`,
    options: [
        "3",
        "4",
        "Error"
    ],
    correctAnswer: "4",
    explanation: "`x.push(4)` adds an element to the end of the array, increasing its length from 3 to 4. `x.length` reflects the new length."
  },{
    language: "C++",
    level: 2,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  int main() {
      vector<int> x = {1, 2, 3};
      x.push_back(4);
      cout << x.size() << endl;
      return 0;
  }`,
    options: [
        "3",
        "4",
        "Error"
    ],
    correctAnswer: "4",
    explanation: "`x.push_back(4)` adds an element to the vector, increasing its size from 3 to 4. `x.size()` returns the updated size."
  },{
    language: "Python",
    level: 3,
    question: "What will the following Python code print?",
    code: `x = [1, 2, 3, 4]
             total = 0
             for num in x:
                 total += num
             print(total)`,
    options: [
        "10",
        "24",
        "Error"
    ],
    correctAnswer: "10",
    explanation: "The `for` loop iterates over each element in the list `x` and adds it to `total`. The sum of [1, 2, 3, 4] is 10."
  },{
    language: "JavaScript",
    level: 3,
    question: "What will the following JavaScript code log?",
    code: `let x = [1, 2, 3, 4];
           let total = 0;
           for (let num of x) {
               total += num;
           }
           console.log(total);`,
    options: [
        "10",
        "24",
        "Error"
    ],
    correctAnswer: "10",
    explanation: "The `for...of` loop iterates over each element in the array `x` and adds it to `total`. The sum of [1, 2, 3, 4] is 10."
  },{
    language: "C++",
    level: 3,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  int main() {
      vector<int> x = {1, 2, 3, 4};
      int total = 0;
      for (int num : x) {
          total += num;
      }
      cout << total << endl;
      return 0;
  }`,
    options: [
        "10",
        "24",
        "Error"
    ],
    correctAnswer: "10",
    explanation: "The range-based `for` loop iterates over each element in the vector `x` and adds it to `total`. The sum of {1, 2, 3, 4} is 10."
  },
  {
    language: "Python",
    level: 4,
    question: "What will the following Python code print?",
    code: `x = [1, 2, 3, 4, 5]
             total = 0
             for num in x:
                 if num % 2 == 0:
                     total += num
             print(total)`,
    options: [
        "6",
        "9",
        "15"
    ],
    correctAnswer: "6",
    explanation: "The `if` condition checks if the number is even (`num % 2 == 0`). Only 2 and 4 are even, so their sum is 6."
  },
  {
    language: "JavaScript",
    level: 4,
    question: "What will the following JavaScript code log?",
    code: `let x = [1, 2, 3, 4, 5];
           let total = 0;
           for (let num of x) {
               if (num % 2 === 0) {
                   total += num;
               }
           }
           console.log(total);`,
    options: [
        "6",
        "9",
        "15"
    ],
    correctAnswer: "6",
    explanation: "The `if` condition checks if the number is even (`num % 2 === 0`). Only 2 and 4 are even, so their sum is 6."
  },
  {
    language: "C++",
    level: 4,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  int main() {
      vector<int> x = {1, 2, 3, 4, 5};
      int total = 0;
      for (int num : x) {
          if (num % 2 == 0) {
              total += num;
          }
      }
      cout << total << endl;
      return 0;
  }`,
    options: [
        "6",
        "9",
        "15"
    ],
    correctAnswer: "6",
    explanation: "The `if` condition checks if the number is even (`num % 2 == 0`). Only 2 and 4 are even, so their sum is 6."
  },
  {
    language: "Python",
    level: 5,
    question: "What will the following Python code print?",
    code: `def multiply_by_two(numbers):
                 result = []
                 for num in numbers:
                     result.append(num * 2)
                 return result
  
             x = [1, 2, 3]
             print(multiply_by_two(x))`,
    options: [
        "[2, 4, 6]",
        "[1, 2, 3]",
        "Error"
    ],
    correctAnswer: "[2, 4, 6]",
    explanation: "The function `multiply_by_two` multiplies each number in the list by 2 and stores the results in `result`. It returns the list `[2, 4, 6]`."
  },
  {
    language: "JavaScript",
    level: 5,
    question: "What will the following JavaScript code log?",
    code: `function multiplyByTwo(numbers) {
               let result = [];
               for (let num of numbers) {
                   result.push(num * 2);
               }
               return result;
           }
  
           let x = [1, 2, 3];
           console.log(multiplyByTwo(x));`,
    options: [
        "[2, 4, 6]",
        "[1, 2, 3]",
        "Error"
    ],
    correctAnswer: "[2, 4, 6]",
    explanation: "The function `multiplyByTwo` multiplies each number in the array by 2 and stores the results in `result`. It returns the array `[2, 4, 6]`."
  },
  {
    language: "C++",
    level: 5,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  vector<int> multiplyByTwo(vector<int> numbers) {
      vector<int> result;
      for (int num : numbers) {
          result.push_back(num * 2);
      }
      return result;
  }
  
  int main() {
      vector<int> x = {1, 2, 3};
      vector<int> result = multiplyByTwo(x);
      for (int num : result) {
          cout << num << " ";
      }
      cout << endl;
      return 0;
  }`,
    options: [
        "2 4 6 ",
        "1 2 3 ",
        "Error"
    ],
    correctAnswer: "2 4 6 ",
    explanation: "The function `multiplyByTwo` multiplies each number in the vector by 2 and stores the results in `result`. The main function prints the vector `2 4 6`."
  },
  {
    language: "Python",
    level: 6,
    question: "What will the following Python code print?",
    code: `def factorial(n):
                 if n == 0 or n == 1:
                     return 1
                 return n * factorial(n - 1)
  
             print(factorial(5))`,
    options: [
        "120",
        "24",
        "Error"
    ],
    correctAnswer: "120",
    explanation: "The function calculates the factorial of a number using recursion. `factorial(5)` is `5 * 4 * 3 * 2 * 1 = 120`."
  },
  {
    language: "JavaScript",
    level: 6,
    question: "What will the following JavaScript code log?",
    code: `function factorial(n) {
               if (n === 0 || n === 1) {
                   return 1;
               }
               return n * factorial(n - 1);
           }
  
           console.log(factorial(5));`,
    options: [
        "120",
        "24",
        "Error"
    ],
    correctAnswer: "120",
    explanation: "The function calculates the factorial of a number using recursion. `factorial(5)` is `5 * 4 * 3 * 2 * 1 = 120`."
  },
  {
    language: "C++",
    level: 6,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  using namespace std;
  
  int factorial(int n) {
      if (n == 0 || n == 1) {
          return 1;
      }
      return n * factorial(n - 1);
  }
  
  int main() {
      cout << factorial(5) << endl;
      return 0;
  }`,
    options: [
        "120",
        "24",
        "Error"
    ],
    correctAnswer: "120",
    explanation: "The function calculates the factorial of a number using recursion. `factorial(5)` is `5 * 4 * 3 * 2 * 1 = 120`."
  },{
    language: "Python",
    level: 7,
    question: "What will the following Python code print?",
    code: `data = {'a': 1, 'b': 2, 'c': 3}
             total = 0
             for key, value in data.items():
                 total += value
             print(total)`,
    options: [
        "6",
        "3",
        "Error"
    ],
    correctAnswer: "6",
    explanation: "The `data.items()` method returns pairs of keys and values. The loop iterates over each key-value pair, adding the values to `total`. The sum of 1, 2, and 3 is 6."
  },{
    language: "JavaScript",
    level: 7,
    question: "What will the following JavaScript code log?",
    code: `let data = {a: 1, b: 2, c: 3};
           let total = 0;
           for (let key in data) {
               total += data[key];
           }
           console.log(total);`,
    options: [
        "6",
        "3",
        "Error"
    ],
    correctAnswer: "6",
    explanation: "The `for...in` loop iterates over the keys of the `data` object, and `data[key]` accesses the values. The sum of 1, 2, and 3 is 6."
  },{
    language: "C++",
    level: 7,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <map>
  using namespace std;
  
  int main() {
      map<char, int> data = {{'a', 1}, {'b', 2}, {'c', 3}};
      int total = 0;
      for (auto const& [key, value] : data) {
          total += value;
      }
      cout << total << endl;
      return 0;
  }`,
    options: [
        "6",
        "3",
        "Error"
    ],
    correctAnswer: "6",
    explanation: "The `std::map` stores key-value pairs, and the loop uses structured bindings to access keys and values. The sum of the values 1, 2, and 3 is 6."
  },{
    language: "Python",
    level: 8,
    question: "What will the following Python code print?",
    code: `def count_vowels(s):
                 vowels = "aeiou"
                 count = 0
                 for char in s:
                     if char in vowels:
                         count += 1
                 return count
  
             print(count_vowels("hello world"))`,
    options: [
        "5",
        "3",
        "7"
    ],
    correctAnswer: "3",
    explanation: "The function `count_vowels` iterates over the string and checks if each character is in the set of vowels. In 'hello world', the vowels are 'e', 'o', and 'o', so the count is 3."
  },{
    language: "JavaScript",
    level: 8,
    question: "What will the following JavaScript code log?",
    code: `function countVowels(s) {
               let vowels = "aeiou";
               let count = 0;
               for (let char of s) {
                   if (vowels.includes(char)) {
                       count++;
                   }
               }
               return count;
           }
  
           console.log(countVowels("hello world"));`,
    options: [
        "7",
        "3",
        "5"
    ],
    correctAnswer: "3",
    explanation: "The function `countVowels` iterates over the string and checks if each character is in the set of vowels using `.includes()`. In 'hello world', the vowels are 'e', 'o', and 'o', so the count is 3."
  },
  {
    language: "C++",
    level: 8,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <string>
  using namespace std;
  
  int countVowels(const string& s) {
      string vowels = "aeiou";
      int count = 0;
      for (char c : s) {
          if (vowels.find(c) != string::npos) {
              count++;
          }
      }
      return count;
  }
  
  int main() {
      cout << countVowels("hello world") << endl;
      return 0;
  }`,
    options: [
        "7",
        "3",
        "5"
    ],
    correctAnswer: "3",
    explanation: "The function `countVowels` iterates over the string and checks if each character is in the set of vowels using `find`. In 'hello world', the vowels are 'e', 'o', and 'o', so the count is 3."
  },
  {
    language: "Python",
    level: 9,
    question: "What will the following Python code print?",
    code: `numbers = [1, 2, 3, 4, 5]
             result = [x**2 for x in numbers if x % 2 == 0]
             print(sum(result))`,
    options: [
        "20",
        "10",
        "4"
    ],
    correctAnswer: "20",
    explanation: "The list comprehension `[x**2 for x in numbers if x % 2 == 0]` squares only the even numbers (2 and 4), resulting in `[4, 16]`. The `sum` of these values is `4 + 16 = 20`."
  },{
    language: "JavaScript",
    level: 9,
    question: "What will the following JavaScript code log?",
    code: `let numbers = [1, 2, 3, 4, 5];
           let result = numbers.filter(x => x % 2 === 0).map(x => x ** 2);
           console.log(result.reduce((a, b) => a + b, 0));`,
    options: [
        "20",
        "10",
        "4"
    ],
    correctAnswer: "20",
    explanation: "The `filter` method selects even numbers `[2, 4]`, then `map` squares them to `[4, 16]`. The `reduce` method calculates their sum: `4 + 16 = 20`."
  },
  {
    language: "C++",
    level: 9,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  #include <numeric>
  using namespace std;
  
  int main() {
      vector<int> numbers = {1, 2, 3, 4, 5};
      vector<int> result;
  
      for (int x : numbers) {
          if (x % 2 == 0) {
              result.push_back(x * x);
          }
      }
  
      int sum = accumulate(result.begin(), result.end(), 0);
      cout << sum << endl;
      return 0;
  }`,
    options: [
        "10",
        "20",
        "4"
    ],
    correctAnswer: "20",
    explanation: "The loop filters even numbers `[2, 4]` and squares them to `[4, 16]`. The `accumulate` function calculates the sum: `4 + 16 = 20`."
  },{
    language: "Python",
    level: 10,
    question: "What will the following Python code print?",
    code: `def fibonacci(n):
                 a, b = 0, 1
                 for _ in range(n):
                     a, b = b, a + b
                 return a
  
             print(fibonacci(7))`,
    options: [
        "13",
        "21",
        "8"
    ],
    correctAnswer: "13",
    explanation: "The function implements the Fibonacci sequence. For `n = 7`, the sequence is: 0, 1, 1, 2, 3, 5, 8, 13. The 7th Fibonacci number is 13."
  },{
    language: "JavaScript",
    level: 10,
    question: "What will the following JavaScript code log?",
    code: `function fibonacci(n) {
               let a = 0, b = 1;
               for (let i = 0; i < n; i++) {
                   [a, b] = [b, a + b];
               }
               return a;
           }
  
           console.log(fibonacci(7));`,
    options: [
        "13",
        "21",
        "8"
    ],
    correctAnswer: "13",
    explanation: "The function implements the Fibonacci sequence. For `n = 7`, the sequence is: 0, 1, 1, 2, 3, 5, 8, 13. The 7th Fibonacci number is 13."
  },{
    language: "C++",
    level: 10,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  using namespace std;
  
  int fibonacci(int n) {
      int a = 0, b = 1;
      for (int i = 0; i < n; i++) {
          int temp = a;
          a = b;
          b = temp + b;
      }
      return a;
  }
  
  int main() {
      cout << fibonacci(7) << endl;
      return 0;
  }`,
    options: [
        "13",
        "21",
        "8"
    ],
    correctAnswer: "13",
    explanation: "The function implements the Fibonacci sequence. For `n = 7`, the sequence is: 0, 1, 1, 2, 3, 5, 8, 13. The 7th Fibonacci number is 13."
  },{
    language: "Python",
    level: 11,
    question: "What will the following Python code print?",
    code: `def factorial(n):
                 if n == 0:
                     return 1
                 else:
                     return n * factorial(n - 1)
  
             print(factorial(5))`,
    options: [
        "60",
        "24",
        "120"
    ],
    correctAnswer: "120",
    explanation: "The function `factorial` recursively multiplies `n` by the factorial of `n-1`. For `n = 5`, the computation is: 5 * 4 * 3 * 2 * 1 = 120."
  },{
    language: "JavaScript",
    level: 11,
    question: "What will the following JavaScript code log?",
    code: `function factorial(n) {
               if (n === 0) return 1;
               return n * factorial(n - 1);
           }
  
           console.log(factorial(5));`,
    options: [
        "60",
        "24",
        "120"
    ],
    correctAnswer: "120",
    explanation: "The `factorial` function recursively multiplies `n` by the factorial of `n-1`. For `n = 5`, the computation is: 5 * 4 * 3 * 2 * 1 = 120."
  },{
    language: "C++",
    level: 11,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  using namespace std;
  
  int factorial(int n) {
      if (n == 0) return 1;
      return n * factorial(n - 1);
  }
  
  int main() {
      cout << factorial(5) << endl;
      return 0;
  }`,
    options: [
        "60",
        "24",
        "120"
    ],
    correctAnswer: "120",
    explanation: "The `factorial` function recursively multiplies `n` by the factorial of `n-1`. For `n = 5`, the computation is: 5 * 4 * 3 * 2 * 1 = 120."
  },
  {
    language: "Python",
    level: 12,
    question: "What will the following Python code print?",
    code: `def find_duplicates(nums):
                 seen = set()
                 duplicates = set()
                 for num in nums:
                     if num in seen:
                         duplicates.add(num)
                     else:
                         seen.add(num)
                 return list(duplicates)
  
             print(find_duplicates([1, 2, 3, 2, 4, 5, 3]))`,
    options: [
      "[3, 2]",
      "[2, 3]",
        "[1, 2]"
    ],
    correctAnswer: "[2, 3]",
    explanation: "The function `find_duplicates` uses two sets, one to track seen numbers and another to track duplicates. In the list `[1, 2, 3, 2, 4, 5, 3]`, the duplicates are `2` and `3`."
  },
  {
    language: "JavaScript",
    level: 12,
    question: "What will the following JavaScript code log?",
    code: `function findDuplicates(nums) {
               let seen = new Set();
               let duplicates = new Set();
               for (let num of nums) {
                   if (seen.has(num)) {
                       duplicates.add(num);
                   } else {
                       seen.add(num);
                   }
               }
               return [...duplicates];
           }
  
           console.log(findDuplicates([1, 2, 3, 2, 4, 5, 3]));`,
    options: [
      "[3, 2]",
      "[1, 2]",
      "[2, 3]"
    ],
    correctAnswer: "[2, 3]",
    explanation: "The `findDuplicates` function uses two sets, one to track seen numbers and another to track duplicates. In the array `[1, 2, 3, 2, 4, 5, 3]`, the duplicates are `2` and `3`."
  },{
    language: "C++",
    level: 12,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  #include <unordered_set>
  using namespace std;
  
  vector<int> findDuplicates(const vector<int>& nums) {
      unordered_set<int> seen;
      unordered_set<int> duplicates;
      for (int num : nums) {
          if (seen.find(num) != seen.end()) {
              duplicates.insert(num);
          } else {
              seen.insert(num);
          }
      }
      vector<int> result(duplicates.begin(), duplicates.end());
      return result;
  }
  
  int main() {
      vector<int> nums = {1, 2, 3, 2, 4, 5, 3};
      vector<int> result = findDuplicates(nums);
      for (int num : result) {
          cout << num << " ";
      }
      cout << endl;
      return 0;
  }`,
    options: [
        "[3, 2]",
        "[1, 2]",
        "[2, 3]"
    ],
    correctAnswer: "[2, 3]",
    explanation: "The `findDuplicates` function uses two sets: one for seen numbers and another for duplicates. In the vector `{1, 2, 3, 2, 4, 5, 3}`, the duplicates are `2` and `3`."
  },
  {
    language: "Python",
    level: 13,
    question: "What will the following Python code print?",
    code: `def merge_sort(arr):
                 if len(arr) <= 1:
                     return arr
                 mid = len(arr) // 2
                 left = merge_sort(arr[:mid])
                 right = merge_sort(arr[mid:])
                 return merge(left, right)
  
             def merge(left, right):
                 result = []
                 i = j = 0
                 while i < len(left) and j < len(right):
                     if left[i] < right[j]:
                         result.append(left[i])
                         i += 1
                     else:
                         result.append(right[j])
                         j += 1
                 result.extend(left[i:])
                 result.extend(right[j:])
                 return result
  
             print(merge_sort([5, 2, 9, 1, 5, 6]))`,
    options: [
        "[1, 2, 5, 5, 6, 9]",
        "[1, 2, 5, 6, 9]",
        "[5, 2, 9, 1, 5, 6]"
    ],
    correctAnswer: "[1, 2, 5, 5, 6, 9]",
    explanation: "The function `merge_sort` implements the merge sort algorithm, which divides the array into smaller subarrays and then merges them in sorted order. The sorted result is `[1, 2, 5, 5, 6, 9]`."
  },
  {
    language: "JavaScript",
    level: 13,
    question: "What will the following JavaScript code log?",
    code: `function mergeSort(arr) {
               if (arr.length <= 1) return arr;
               const mid = Math.floor(arr.length / 2);
               const left = mergeSort(arr.slice(0, mid));
               const right = mergeSort(arr.slice(mid));
               return merge(left, right);
           }
  
           function merge(left, right) {
               let result = [];
               let i = 0, j = 0;
               while (i < left.length && j < right.length) {
                   if (left[i] < right[j]) {
                       result.push(left[i]);
                       i++;
                   } else {
                       result.push(right[j]);
                       j++;
                   }
               }
               return result.concat(left.slice(i), right.slice(j));
           }
  
           console.log(mergeSort([5, 2, 9, 1, 5, 6]));`,
    options: [
        "[1, 2, 5, 5, 6, 9]",
        "[1, 2, 5, 6, 9]",
        "[5, 2, 9, 1, 5, 6]"
    ],
    correctAnswer: "[1, 2, 5, 5, 6, 9]",
    explanation: "The `mergeSort` function implements the merge sort algorithm, which divides the array into smaller subarrays and merges them in sorted order. The sorted array is `[1, 2, 5, 5, 6, 9]`."
  },
  {
    language: "C++",
    level: 13,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  vector<int> mergeSort(const vector<int>& arr) {
      if (arr.size() <= 1) return arr;
      int mid = arr.size() / 2;
      vector<int> left(arr.begin(), arr.begin() + mid);
      vector<int> right(arr.begin() + mid, arr.end());
      return merge(mergeSort(left), mergeSort(right));
  }
  
  vector<int> merge(const vector<int>& left, const vector<int>& right) {
      vector<int> result;
      int i = 0, j = 0;
      while (i < left.size() && j < right.size()) {
          if (left[i] < right[j]) {
              result.push_back(left[i]);
              i++;
          } else {
              result.push_back(right[j]);
              j++;
          }
      }
      result.insert(result.end(), left.begin() + i, left.end());
      result.insert(result.end(), right.begin() + j, right.end());
      return result;
  }
  
  int main() {
      vector<int> nums = {5, 2, 9, 1, 5, 6};
      vector<int> sorted = mergeSort(nums);
      for (int num : sorted) {
          cout << num << " ";
      }
      cout << endl;
      return 0;
  }`,
    options: [
        "[1, 2, 5, 5, 6, 9]",
        "[1, 2, 5, 6, 9]",
        "[5, 2, 9, 1, 5, 6]"
    ],
    correctAnswer: "[1, 2, 5, 5, 6, 9]",
    explanation: "The `mergeSort` function implements the merge sort algorithm, which splits the vector into sub-vectors and then merges them back in sorted order. The result is `[1, 2, 5, 5, 6, 9]`."
  },
  {
    language: "Python",
    level: 14,
    question: "What will the following Python code print?",
    code: `def fibonacci(n, memo={}):
                 if n <= 1:
                     return n
                 if n not in memo:
                     memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
                 return memo[n]
  
             print(fibonacci(10))`,
    options: [
      "89",
      "55",
        "144"
    ],
    correctAnswer: "55",
    explanation: "This code uses memoization to calculate the 10th Fibonacci number efficiently. The result is 55 because Fibonacci numbers start with 0 and 1, and the 10th number in the sequence is 55."
  },{
    language: "JavaScript",
    level: 14,
    question: "What will the following JavaScript code log?",
    code: `function fibonacci(n, memo = {}) {
               if (n <= 1) return n;
               if (!(n in memo)) {
                   memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
               }
               return memo[n];
           }
  
           console.log(fibonacci(10));`,
    options: [
      "89",
      "144",
      "55"
    ],
    correctAnswer: "55",
    explanation: "This code uses memoization to calculate the 10th Fibonacci number efficiently. The result is 55 because Fibonacci numbers start with 0 and 1, and the 10th number in the sequence is 55."
  },
  {
    language: "C++",
    level: 14,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <unordered_map>
  using namespace std;
  
  int fibonacci(int n, unordered_map<int, int>& memo) {
      if (n <= 1) return n;
      if (memo.find(n) == memo.end()) {
          memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
      }
      return memo[n];
  }
  
  int main() {
      unordered_map<int, int> memo;
      cout << fibonacci(10, memo) << endl;
      return 0;
  }`,
    options: [
      "89",
      "144",
      "55"
    ],
    correctAnswer: "55",
    explanation: "This code uses memoization to efficiently calculate the 10th Fibonacci number. The result is 55, as Fibonacci numbers start with 0 and 1, and the 10th number in the sequence is 55."
  },
  {
    language: "Python",
    level: 15,
    question: "What will the following Python code print?",
    code: `def longest_increasing_subsequence(arr):
                 if not arr:
                     return []
                 dp = [1] * len(arr)
                 prev = [-1] * len(arr)
                 for i in range(1, len(arr)):
                     for j in range(i):
                         if arr[i] > arr[j] and dp[i] < dp[j] + 1:
                             dp[i] = dp[j] + 1
                             prev[i] = j
                 max_length = max(dp)
                 index = dp.index(max_length)
                 lis = []
                 while index != -1:
                     lis.append(arr[index])
                     index = prev[index]
                 return lis[::-1]
  
             print(longest_increasing_subsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]))`,
    options: [
        "[10, 22, 33, 50, 60, 80]",
        "[10, 22, 33, 41, 60]",
        "[9, 33, 50, 60]"
    ],
    correctAnswer: "[10, 22, 33, 50, 60, 80]",
    explanation: "This code calculates the longest increasing subsequence (LIS) of an array. The longest subsequence in the input `[10, 22, 9, 33, 21, 50, 41, 60, 80]` is `[10, 22, 33, 50, 60, 80]`."
  },{
    language: "JavaScript",
    level: 15,
    question: "What will the following JavaScript code log?",
    code: `function longestIncreasingSubsequence(arr) {
               if (arr.length === 0) return [];
               let dp = new Array(arr.length).fill(1);
               let prev = new Array(arr.length).fill(-1);
               for (let i = 1; i < arr.length; i++) {
                   for (let j = 0; j < i; j++) {
                       if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
                           dp[i] = dp[j] + 1;
                           prev[i] = j;
                       }
                   }
               }
               const maxLength = Math.max(...dp);
               let index = dp.indexOf(maxLength);
               let lis = [];
               while (index !== -1) {
                   lis.push(arr[index]);
                   index = prev[index];
               }
               return lis.reverse();
           }
  
           console.log(longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]));`,
    options: [
        "[10, 22, 33, 50, 60, 80]",
        "[10, 22, 33, 41, 60]",
        "[9, 33, 50, 60]"
    ],
    correctAnswer: "[10, 22, 33, 50, 60, 80]",
    explanation: "This code calculates the longest increasing subsequence (LIS) of an array. The longest subsequence in the input `[10, 22, 9, 33, 21, 50, 41, 60, 80]` is `[10, 22, 33, 50, 60, 80]`."
  },
  {
    language: "C++",
    level: 15,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  #include <algorithm>
  using namespace std;
  
  vector<int> longestIncreasingSubsequence(const vector<int>& arr) {
      if (arr.empty()) return {};
      vector<int> dp(arr.size(), 1);
      vector<int> prev(arr.size(), -1);
      for (int i = 1; i < arr.size(); i++) {
          for (int j = 0; j < i; j++) {
              if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
                  dp[i] = dp[j] + 1;
                  prev[i] = j;
              }
          }
      }
      int maxLength = *max_element(dp.begin(), dp.end());
      int index = find(dp.begin(), dp.end(), maxLength) - dp.begin();
      vector<int> lis;
      while (index != -1) {
          lis.push_back(arr[index]);
          index = prev[index];
      }
      reverse(lis.begin(), lis.end());
      return lis;
  }
  
  int main() {
      vector<int> arr = {10, 22, 9, 33, 21, 50, 41, 60, 80};
      vector<int> lis = longestIncreasingSubsequence(arr);
      for (int num : lis) {
          cout << num << " ";
      }
      cout << endl;
      return 0;
  }`,
    options: [
        "[10, 22, 33, 50, 60, 80]",
        "[10, 22, 33, 41, 60]",
        "[9, 33, 50, 60]"
    ],
    correctAnswer: "[10, 22, 33, 50, 60, 80]",
    explanation: "This code calculates the longest increasing subsequence (LIS) of an array. The longest subsequence in the input `[10, 22, 9, 33, 21, 50, 41, 60, 80]` is `[10, 22, 33, 50, 60, 80]`."
  },
  {
    language: "Python",
    level: 16,
    question: "What will the following Python code print?",
    code: `class TreeNode:
                 def __init__(self, value=0, left=None, right=None):
                     self.value = value
                     self.left = left
                     self.right = right
  
             def inorder_traversal(root):
                 if root is None:
                     return []
                 return inorder_traversal(root.left) + [root.value] + inorder_traversal(root.right)
  
             root = TreeNode(10)
             root.left = TreeNode(5)
             root.right = TreeNode(15)
             root.left.left = TreeNode(3)
             root.left.right = TreeNode(7)
             root.right.left = TreeNode(12)
             root.right.right = TreeNode(18)
  
             print(inorder_traversal(root))`,
    options: [
        "[3, 5, 7, 10, 12, 15, 18]",
        "[10, 5, 3, 7, 15, 12, 18]",
        "[3, 5, 10, 7, 15, 18, 12]"
    ],
    correctAnswer: "[3, 5, 7, 10, 12, 15, 18]",
    explanation: "This code performs an inorder traversal of a binary search tree. In inorder traversal, the nodes are visited in ascending order, resulting in `[3, 5, 7, 10, 12, 15, 18]`."
  },{
    language: "JavaScript",
    level: 16,
    question: "What will the following JavaScript code log?",
    code: `class TreeNode {
               constructor(value = 0, left = null, right = null) {
                   this.value = value;
                   this.left = left;
                   this.right = right;
               }
           }
  
           function inorderTraversal(root) {
               if (root === null) return [];
               return [...inorderTraversal(root.left), root.value, ...inorderTraversal(root.right)];
           }
  
           const root = new TreeNode(10);
           root.left = new TreeNode(5);
           root.right = new TreeNode(15);
           root.left.left = new TreeNode(3);
           root.left.right = new TreeNode(7);
           root.right.left = new TreeNode(12);
           root.right.right = new TreeNode(18);
  
           console.log(inorderTraversal(root));`,
    options: [
        "[3, 5, 7, 10, 12, 15, 18]",
        "[10, 5, 3, 7, 15, 12, 18]",
        "[3, 5, 10, 7, 15, 18, 12]"
    ],
    correctAnswer: "[3, 5, 7, 10, 12, 15, 18]",
    explanation: "This code performs an inorder traversal of a binary search tree. In inorder traversal, the nodes are visited in ascending order, resulting in `[3, 5, 7, 10, 12, 15, 18]`."
  },{
    language: "C++",
    level: 16,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  class TreeNode {
  public:
      int value;
      TreeNode* left;
      TreeNode* right;
      TreeNode(int x) : value(x), left(NULL), right(NULL) {}
  };
  
  vector<int> inorderTraversal(TreeNode* root) {
      if (root == NULL) return {};
      vector<int> result;
      vector<int> left = inorderTraversal(root->left);
      result.insert(result.end(), left.begin(), left.end());
      result.push_back(root->value);
      vector<int> right = inorderTraversal(root->right);
      result.insert(result.end(), right.begin(), right.end());
      return result;
  }
  
  int main() {
      TreeNode* root = new TreeNode(10);
      root->left = new TreeNode(5);
      root->right = new TreeNode(15);
      root->left->left = new TreeNode(3);
      root->left->right = new TreeNode(7);
      root->right->left = new TreeNode(12);
      root->right->right = new TreeNode(18);
  
      vector<int> result = inorderTraversal(root);
      for (int val : result) {
          cout << val << " ";
      }
      cout << endl;
      return 0;
  }`,
    options: [
        "[3, 5, 7, 10, 12, 15, 18]",
        "[10, 5, 3, 7, 15, 12, 18]",
        "[3, 5, 10, 7, 15, 18, 12]"
    ],
    correctAnswer: "[3, 5, 7, 10, 12, 15, 18]",
    explanation: "This code performs an inorder traversal of a binary search tree. In inorder traversal, the nodes are visited in ascending order, resulting in `[3, 5, 7, 10, 12, 15, 18]`."
  },
  {
    language: "Python",
    level: 17,
    question: "What will the following Python code print?",
    code: `def reverse_string(s):
               if len(s) == 0:
                   return s
               return reverse_string(s[1:]) + s[0]
  
           print(reverse_string('recursion'))`,
    options: [
        "recursion",
        "noisrucer",
        "error"
    ],
    correctAnswer: "noisrucer",
    explanation: "The function uses recursion to reverse the string. It takes the first character off the string and appends it to the reverse of the rest of the string, which results in 'noisrucer'."
  },
  
  {
    language: "JavaScript",
    level: 17,
    question: "What will the following JavaScript code log?",
    code: `function reverseString(s) {
                if (s.length === 0) {
                    return s;
                }
                return reverseString(s.substring(1)) + s.charAt(0);
            }
  
            console.log(reverseString('recursion'));`,
    options: [
        "recursion",
        "noisrucer",
        "error"
    ],
    correctAnswer: "noisrucer",
    explanation: "This function uses recursion to reverse the string. It removes the first character and appends it to the reversed substring, ultimately resulting in 'noisrucer'."
  },
  {
    language: "C++",
    level: 17,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <string>
  using namespace std;
  
  string reverseString(string s) {
      if (s.empty()) {
          return s;
      }
      return reverseString(s.substr(1)) + s[0];
  }
  
  int main() {
      cout << reverseString("recursion") << endl;
      return 0;
  }`,
    options: [
        "recursion",
        "noisrucer",
        "error"
    ],
    correctAnswer: "noisrucer",
    explanation: "This C++ function works similarly to the Python and JavaScript versions. It reverses the string recursively, resulting in 'noisrucer'."
  },
  {
    language: "Python",
    level: 18,
    question: "What will the following Python code print?",
    code: `def fibonacci(n):
               if n <= 1:
                   return n
               return fibonacci(n-1) + fibonacci(n-2)
  
           print(fibonacci(5))`,
    options: [
        "5",
        "8",
        "3"
    ],
    correctAnswer: "5",
    explanation: "This code computes the nth Fibonacci number using recursion. fibonacci(5) equals 5."
  },
  {
    language: "JavaScript",
    level: 18,
    question: "What will the following JavaScript code log?",
    code: `function fibonacci(n) {
                if (n <= 1) {
                    return n;
                }
                return fibonacci(n-1) + fibonacci(n-2);
            }
  
            console.log(fibonacci(5));`,
    options: [
        "5",
        "8",
        "3"
    ],
    correctAnswer: "5",
    explanation: "This function computes the nth Fibonacci number recursively. fibonacci(5) results in 5."
  },
  {
    language: "C++",
    level: 18,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  using namespace std;
  
  int fibonacci(int n) {
      if (n <= 1) {
          return n;
      }
      return fibonacci(n-1) + fibonacci(n-2);
  }
  
  int main() {
      cout << fibonacci(5) << endl;
      return 0;
  }`,
    options: [
        "5",
        "8",
        "3"
    ],
    correctAnswer: "5",
    explanation: "This C++ function calculates the nth Fibonacci number using recursion. fibonacci(5) equals 5."
  },
  {
    language: "Python",
    level: 19,
    question: "What will the following Python code print?",
    code: `class Node:
               def __init__(self, value):
                   self.value = value
                   self.next = None
  
           def print_linked_list(head):
               current = head
               while current:
                   print(current.value, end=' ')
                   current = current.next
  
           head = Node(1)
           second = Node(2)
           third = Node(3)
           head.next = second
           second.next = third
  
           print_linked_list(head)`,
    options: [
        "1 2 3",
        "1 3 2",
        "3 2 1"
    ],
    correctAnswer: "1 2 3",
    explanation: "The code creates a linked list with nodes 1 -> 2 -> 3. The print function iterates through the list and prints the values in order."
  },
  {
    language: "JavaScript",
    level: 19,
    question: "What will the following JavaScript code log?",
    code: `class Node {
                constructor(value) {
                    this.value = value;
                    this.next = null;
                }
            }
  
            function printLinkedList(head) {
                let current = head;
                while (current) {
                    console.log(current.value);
                    current = current.next;
                }
            }
  
            const head = new Node(1);
            const second = new Node(2);
            const third = new Node(3);
            head.next = second;
            second.next = third;
  
            printLinkedList(head);`,
    options: [
        "1 2 3",
        "1 3 2",
        "3 2 1"
    ],
    correctAnswer: "1 2 3",
    explanation: "The code creates a linked list with nodes 1 -> 2 -> 3 and prints the values in the correct order."
  },
  {
    language: "C++",
    level: 19,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  using namespace std;
  
  class Node {
  public:
      int value;
      Node* next;
      Node(int x) : value(x), next(nullptr) {}
  };
  
  void printLinkedList(Node* head) {
      Node* current = head;
      while (current) {
          cout << current->value << " ";
          current = current->next;
      }
  }
  
  int main() {
      Node* head = new Node(1);
      Node* second = new Node(2);
      Node* third = new Node(3);
      head->next = second;
      second->next = third;
  
      printLinkedList(head);
      return 0;
  }`,
    options: [
        "1 2 3",
        "1 3 2",
        "3 2 1"
    ],
    correctAnswer: "1 2 3",
    explanation: "The program creates a linked list with nodes 1 -> 2 -> 3. The print function traverses the list and prints the values in the correct order."
  },
  {
    language: "Python",
    level: 20,
    question: "What will the following Python code print?",
    code: `class Stack:
               def __init__(self):
                   self.stack = []
  
               def push(self, value):
                   self.stack.append(value)
  
               def pop(self):
                   return self.stack.pop()
  
               def peek(self):
                   return self.stack[-1] if self.stack else None
  
           s = Stack()
           s.push(1)
           s.push(2)
           s.push(3)
           print(s.pop())
           print(s.peek())`,
    options: [
        "3 2",
        "3 1",
        "1 2"
    ],
    correctAnswer: "3 2",
    explanation: "The stack operates in a LIFO manner. After pushing 1, 2, and 3, the `pop()` removes the last pushed value, 3, and `peek()` shows the next value, 2."
  },
  {
    language: "JavaScript",
    level: 20,
    question: "What will the following JavaScript code log?",
    code: `class Stack {
                constructor() {
                    this.stack = [];
                }
  
                push(value) {
                    this.stack.push(value);
                }
  
                pop() {
                    return this.stack.pop();
                }
  
                peek() {
                    return this.stack[this.stack.length - 1];
                }
            }
  
            const s = new Stack();
            s.push(1);
            s.push(2);
            s.push(3);
            console.log(s.pop());
            console.log(s.peek());`,
    options: [
        "3 2",
        "3 1",
        "1 2"
    ],
    correctAnswer: "3 2",
    explanation: "The stack follows the LIFO principle. After pushing 1, 2, and 3, calling `pop()` removes the last pushed value, 3, and `peek()` returns the next value, 2."
  },
  {
    language: "C++",
    level: 20,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <stack>
  using namespace std;
  
  int main() {
      stack<int> s;
      s.push(1);
      s.push(2);
      s.push(3);
  
      cout << s.top() << endl;
      s.pop();
      cout << s.top() << endl;
      return 0;
  }`,
    options: [
        "3 2",
        "3 1",
        "1 2"
    ],
    correctAnswer: "3 2",
    explanation: "The stack follows the LIFO principle. After pushing 1, 2, and 3, `top()` shows the last pushed value, 3, and after popping, `top()` shows 2."
  },
  {
    language: "C++",
    level: 20,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <stack>
  using namespace std;
  
  int main() {
      stack<int> s;
      s.push(1);
      s.push(2);
      s.push(3);
  
      cout << s.top() << endl;
      s.pop();
      cout << s.top() << endl;
      return 0;
  }`,
    options: [
        "3 2",
        "3 1",
        "1 2"
    ],
    correctAnswer: "3 2",
    explanation: "The stack follows the LIFO principle. After pushing 1, 2, and 3, `top()` shows the last pushed value, 3, and after popping, `top()` shows 2."
  },
  {
    language: "JavaScript",
    level: 21,
    question: "What will the following JavaScript code log?",
    code: `class Queue {
                constructor() {
                    this.queue = [];
                }
  
                enqueue(value) {
                    this.queue.push(value);
                }
  
                dequeue() {
                    return this.queue.shift();
                }
  
                peek() {
                    return this.queue[0];
                }
            }
  
            const q = new Queue();
            q.enqueue(1);
            q.enqueue(2);
            q.enqueue(3);
            console.log(q.dequeue());
            console.log(q.peek());`,
    options: [
        "1 2",
        "3 2",
        "1 3"
    ],
    correctAnswer: "1 2",
    explanation: "The queue follows the FIFO principle. After enqueueing 1, 2, and 3, `dequeue()` removes the first element, 1, and `peek()` shows the next element, 2."
  },
  {
    language: "C++",
    level: 21,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <queue>
  using namespace std;
  
  int main() {
      queue<int> q;
      q.push(1);
      q.push(2);
      q.push(3);
  
      cout << q.front() << endl;
      q.pop();
      cout << q.front() << endl;
      return 0;
  }`,
    options: [
        "1 2",
        "3 2",
        "1 3"
    ],
    correctAnswer: "1 2",
    explanation: "The queue follows the FIFO principle. After enqueueing 1, 2, and 3, `front()` shows the first element, 1, and after popping, `front()` shows 2."
  },
  {
    language: "Python",
    level: 22,
    question: "What will the following Python code print?",
    code: `def binary_search(arr, target):
               left, right = 0, len(arr) - 1
               while left <= right:
                   mid = (left + right) // 2
                   if arr[mid] == target:
                       return mid
                   elif arr[mid] < target:
                       left = mid + 1
                   else:
                       right = mid - 1
               return -1
  
           arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
           target = 5
           print(binary_search(arr, target))`,
    options: [
        "4",
        "5",
        "-1"
    ],
    correctAnswer: "4",
    explanation: "The binary search algorithm finds the target 5 at index 4 in the sorted list."
  },
  {
    language: "JavaScript",
    level: 22,
    question: "What will the following JavaScript code log?",
    code: `function binarySearch(arr, target) {
                let left = 0;
                let right = arr.length - 1;
                while (left <= right) {
                    const mid = Math.floor((left + right) / 2);
                    if (arr[mid] === target) {
                        return mid;
                    } else if (arr[mid] < target) {
                        left = mid + 1;
                    } else {
                        right = mid - 1;
                    }
                }
                return -1;
            }
  
            const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const target = 5;
            console.log(binarySearch(arr, target));`,
    options: [
        "4",
        "5",
        "-1"
    ],
    correctAnswer: "4",
    explanation: "The binary search algorithm finds the target 5 at index 4 in the sorted array."
  },
  {
    language: "C++",
    level: 22,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  int binarySearch(vector<int>& arr, int target) {
      int left = 0, right = arr.size() - 1;
      while (left <= right) {
          int mid = (left + right) / 2;
          if (arr[mid] == target) {
              return mid;
          } else if (arr[mid] < target) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
      return -1;
  }
  
  int main() {
      vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9};
      int target = 5;
      cout << binarySearch(arr, target) << endl;
      return 0;
  }`,
    options: [
        "4",
        "5",
        "-1"
    ],
    correctAnswer: "4",
    explanation: "The binary search algorithm finds the target 5 at index 4 in the sorted array."
  },
  
  {
    language: "Python",
    level: 23,
    question: "What will the following Python code print?",
    code: `def factorial(n):
               if n == 0:
                   return 1
               return n * factorial(n - 1)
  
           print(factorial(5))`,
    options: [
        "120",
        "24",
        "60"
    ],
    correctAnswer: "120",
    explanation: "The function calculates the factorial of 5, which is 5 * 4 * 3 * 2 * 1 = 120."
  },
  {
    language: "JavaScript",
    level: 23,
    question: "What will the following JavaScript code log?",
    code: `function factorial(n) {
                if (n === 0) {
                    return 1;
                }
                return n * factorial(n - 1);
            }
  
            console.log(factorial(5));`,
    options: [
        "120",
        "24",
        "60"
    ],
    correctAnswer: "120",
    explanation: "The function calculates the factorial of 5, which is 5 * 4 * 3 * 2 * 1 = 120."
  },
  {
    language: "C++",
    level: 23,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  using namespace std;
  
  int factorial(int n) {
      if (n == 0) {
          return 1;
      }
      return n * factorial(n - 1);
  }
  
  int main() {
      cout << factorial(5) << endl;
      return 0;
  }`,
    options: [
        "120",
        "24",
        "60"
    ],
    correctAnswer: "120",
    explanation: "The function calculates the factorial of 5, which is 5 * 4 * 3 * 2 * 1 = 120."
  },
  {
    language: "Python",
    level: 24,
    question: "What will the following Python code print?",
    code: `def bubble_sort(arr):
               n = len(arr)
               for i in range(n):
                   for j in range(0, n-i-1):
                       if arr[j] > arr[j+1]:
                           arr[j], arr[j+1] = arr[j+1], arr[j]
               return arr
  
           arr = [64, 34, 25, 12, 22, 11, 90]
           print(bubble_sort(arr))`,
    options: [
        "[11, 12, 22, 25, 34, 64, 90]",
        "[64, 34, 25, 12, 22, 11, 90]",
        "[90, 64, 34, 25, 22, 12, 11]"
    ],
    correctAnswer: "[11, 12, 22, 25, 34, 64, 90]",
    explanation: "Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order. After several passes, the list is sorted in ascending order."
  },
  {
    language: "Python",
    level: 24,
    question: "What will the following Python code print?",
    code: `def bubble_sort(arr):
               n = len(arr)
               for i in range(n):
                   for j in range(0, n-i-1):
                       if arr[j] > arr[j+1]:
                           arr[j], arr[j+1] = arr[j+1], arr[j]
               return arr
  
           arr = [64, 34, 25, 12, 22, 11, 90]
           print(bubble_sort(arr))`,
    options: [
        "[11, 12, 22, 25, 34, 64, 90]",
        "[64, 34, 25, 12, 22, 11, 90]",
        "[90, 64, 34, 25, 22, 12, 11]"
    ],
    correctAnswer: "[11, 12, 22, 25, 34, 64, 90]",
    explanation: "Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order. After several passes, the list is sorted in ascending order."
  },
  {
    language: "JavaScript",
    level: 24,
    question: "What will the following JavaScript code log?",
    code: `function bubbleSort(arr) {
                const n = arr.length;
                for (let i = 0; i < n; i++) {
                    for (let j = 0; j < n - i - 1; j++) {
                        if (arr[j] > arr[j + 1]) {
                            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                        }
                    }
                }
                return arr;
            }
  
            const arr = [64, 34, 25, 12, 22, 11, 90];
            console.log(bubbleSort(arr));`,
    options: [
        "[11, 12, 22, 25, 34, 64, 90]",
        "[64, 34, 25, 12, 22, 11, 90]",
        "[90, 64, 34, 25, 22, 12, 11]"
    ],
    correctAnswer: "[11, 12, 22, 25, 34, 64, 90]",
    explanation: "Bubble Sort compares adjacent elements and swaps them if necessary. This process continues until the array is sorted in ascending order."
  },
  
  {
    language: "C++",
    level: 24,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  void bubbleSort(vector<int>& arr) {
      int n = arr.size();
      for (int i = 0; i < n; i++) {
          for (int j = 0; j < n - i - 1; j++) {
              if (arr[j] > arr[j + 1]) {
                  swap(arr[j], arr[j + 1]);
              }
          }
      }
  }
  
  int main() {
      vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
      bubbleSort(arr);
      for (int i : arr) {
          cout << i << " ";
      }
      cout << endl;
      return 0;
  }`,
    options: [
        "[11, 12, 22, 25, 34, 64, 90]",
        "[64, 34, 25, 12, 22, 11, 90]",
        "[90, 64, 34, 25, 22, 12, 11]"
    ],
    correctAnswer: "[11, 12, 22, 25, 34, 64, 90]",
    explanation: "Bubble Sort compares adjacent elements and swaps them if they are in the wrong order. After all passes, the array is sorted in ascending order."
  },
  {
    language: "Python",
    level: 25,
    question: "What will the following Python code print?",
    code: `def hanoi(n, source, target, auxiliary):
               if n == 1:
                   print(f"Move disk 1 from {source} to {target}")
                   return
               hanoi(n - 1, source, auxiliary, target)
               print(f"Move disk {n} from {source} to {target}")
               hanoi(n - 1, auxiliary, target, source)
  
           hanoi(3, 'A', 'C', 'B')`,
    options: [
        "Move disk 1 from A to C, Move disk 2 from A to B, Move disk 1 from C to B, Move disk 3 from A to C, Move disk 1 from B to A, Move disk 2 from B to C, Move disk 1 from A to C",
        "Move disk 1 from A to C, Move disk 2 from A to C, Move disk 1 from B to A, Move disk 3 from A to C, Move disk 1 from B to A, Move disk 2 from B to C, Move disk 1 from A to C",
        "Move disk 1 from A to B, Move disk 2 from A to C, Move disk 1 from B to C, Move disk 3 from A to C, Move disk 1 from B to A, Move disk 2 from B to C, Move disk 1 from A to C"
    ],
    correctAnswer: "Move disk 1 from A to C, Move disk 2 from A to B, Move disk 1 from C to B, Move disk 3 from A to C, Move disk 1 from B to A, Move disk 2 from B to C, Move disk 1 from A to C",
    explanation: "The Tower of Hanoi problem involves moving disks from one peg to another using an auxiliary peg, following the rule that only one disk can be moved at a time and that no larger disk can be placed on a smaller disk."
  },
  {
    language: "JavaScript",
    level: 25,
    question: "What will the following JavaScript code log?",
    code: `function hanoi(n, source, target, auxiliary) {
                if (n === 1) {
                    console.log(\`Move disk 1 from \${source} to \${target}\`);
                    return;
                }
                hanoi(n - 1, source, auxiliary, target);
                console.log(\`Move disk \${n} from \${source} to \${target}\`);
                hanoi(n - 1, auxiliary, target, source);
            }
  
            hanoi(3, 'A', 'C', 'B');`,
    options: [
        "Move disk 1 from A to C, Move disk 2 from A to B, Move disk 1 from C to B, Move disk 3 from A to C, Move disk 1 from B to A, Move disk 2 from B to C, Move disk 1 from A to C",
        "Move disk 1 from A to C, Move disk 2 from A to C, Move disk 1 from B to A, Move disk 3 from A to C, Move disk 1 from B to A, Move disk 2 from B to C, Move disk 1 from A to C",
        "Move disk 1 from A to B, Move disk 2 from A to C, Move disk 1 from B to C, Move disk 3 from A to C, Move disk 1 from B to A, Move disk 2 from B to C, Move disk 1 from A to C"
    ],
    correctAnswer: "Move disk 1 from A to C, Move disk 2 from A to B, Move disk 1 from C to B, Move disk 3 from A to C, Move disk 1 from B to A, Move disk 2 from B to C, Move disk 1 from A to C",
    explanation: "The Tower of Hanoi problem involves moving disks from one peg to another using an auxiliary peg, following the rule that only one disk can be moved at a time and that no larger disk can be placed on a smaller disk."
  },
  {
    language: "C++",
    level: 25,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  using namespace std;
  
  void hanoi(int n, char source, char target, char auxiliary) {
      if (n == 1) {
          cout << "Move disk 1 from " << source << " to " << target << endl;
          return;
      }
      hanoi(n - 1, source, auxiliary, target);
      cout << "Move disk " << n << " from " << source << " to " << target << endl;
      hanoi(n - 1, auxiliary, target, source);
  }
  
  int main() {
      hanoi(3, 'A', 'C', 'B');
      return 0;
  }`,
    options: [
        "Move disk 1 from A to C, Move disk 2 from A to B, Move disk 1 from C to B, Move disk 3 from A to C, Move disk 1 from B to A, Move disk 2 from B to C, Move disk 1 from A to C",
        "Move disk 1 from A to C, Move disk 2 from A to C, Move disk 1 from B to A, Move disk 3 from A to C, Move disk 1 from B to A, Move disk 2 from B to C, Move disk 1 from A to C",
        "Move disk 1 from A to B, Move disk 2 from A to C, Move disk 1 from B to C, Move disk 3 from A to C, Move disk 1 from B to A, Move disk 2 from B to C, Move disk 1 from A to C"
    ],
    correctAnswer: "Move disk 1 from A to C, Move disk 2 from A to B, Move disk 1 from C to B, Move disk 3 from A to C, Move disk 1 from B to A, Move disk 2 from B to C, Move disk 1 from A to C",
    explanation: "The Tower of Hanoi problem involves moving disks from one peg to another using an auxiliary peg, following the rule that only one disk can be moved at a time and that no larger disk can be placed on a smaller disk."
  },
  {
    language: "Python",
    level: 26,
    question: "What will the following Python code print?",
    code: `def binary_search(arr, target):
               low, high = 0, len(arr) - 1
               while low <= high:
                   mid = (low + high) // 2
                   if arr[mid] == target:
                       return mid
                   elif arr[mid] < target:
                       low = mid + 1
                   else:
                       high = mid - 1
               return -1
  
           arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
           print(binary_search(arr, 7))`,
    options: [
        "3",
        "6",
        "-1"
    ],
    correctAnswer: "6",
    explanation: "The binary search algorithm looks for the target (7) in the sorted array and finds it at index 6."
  },
  {
    language: "JavaScript",
    level: 26,
    question: "What will the following JavaScript code log?",
    code: `function binarySearch(arr, target) {
                let low = 0, high = arr.length - 1;
                while (low <= high) {
                    const mid = Math.floor((low + high) / 2);
                    if (arr[mid] === target) {
                        return mid;
                    } else if (arr[mid] < target) {
                        low = mid + 1;
                    } else {
                        high = mid - 1;
                    }
                }
                return -1;
            }
  
            const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            console.log(binarySearch(arr, 7));`,
    options: [
        "3",
        "6",
        "-1"
    ],
    correctAnswer: "6",
    explanation: "The binary search algorithm looks for the target (7) in the sorted array and finds it at index 6."
  },
  {
    language: "C++",
    level: 26,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  using namespace std;
  
  int binarySearch(int arr[], int size, int target) {
      int low = 0, high = size - 1;
      while (low <= high) {
          int mid = (low + high) / 2;
          if (arr[mid] == target) {
              return mid;
          } else if (arr[mid] < target) {
              low = mid + 1;
          } else {
              high = mid - 1;
          }
      }
      return -1;
  }
  
  int main() {
      int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
      cout << binarySearch(arr, 10, 7) << endl;
      return 0;
  }`,
    options: [
        "3",
        "6",
        "-1"
    ],
    correctAnswer: "6",
    explanation: "The binary search algorithm looks for the target (7) in the sorted array and finds it at index 6."
  },
  {
    language: "Python",
    level: 27,
    question: "What will the following Python code print?",
    code: `def factorial(n):
               if n == 0:
                   return 1
               return n * factorial(n - 1)
  
           print(factorial(5))`,
    options: [
        "5",
        "120",
        "25"
    ],
    correctAnswer: "120",
    explanation: "The factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120. The function uses recursion to calculate the factorial."
  },
  {
    language: "JavaScript",
    level: 27,
    question: "What will the following JavaScript code log?",
    code: `function factorial(n) {
                if (n === 0) {
                    return 1;
                }
                return n * factorial(n - 1);
            }
  
            console.log(factorial(5));`,
    options: [
        "5",
        "120",
        "25"
    ],
    correctAnswer: "120",
    explanation: "The factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120. The function uses recursion to calculate the factorial."
  },
  {
    language: "C++",
    level: 27,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  using namespace std;
  
  int factorial(int n) {
      if (n == 0) {
          return 1;
      }
      return n * factorial(n - 1);
  }
  
  int main() {
      cout << factorial(5) << endl;
      return 0;
  }`,
    options: [
        "5",
        "120",
        "25"
    ],
    correctAnswer: "120",
    explanation: "The factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120. The function uses recursion to calculate the factorial."
  },
  {
    language: "Python",
    level: 28,
    question: "What will the following Python code print?",
    code: `def selection_sort(arr):
               for i in range(len(arr)):
                   min_idx = i
                   for j in range(i + 1, len(arr)):
                       if arr[j] < arr[min_idx]:
                           min_idx = j
                   arr[i], arr[min_idx] = arr[min_idx], arr[i]
               return arr
  
           arr = [64, 25, 12, 22, 11]
           print(selection_sort(arr))`,
    options: [
        "[11, 12, 22, 25, 64]",
        "[64, 25, 12, 22, 11]",
        "[25, 22, 12, 11, 64]"
    ],
    correctAnswer: "[11, 12, 22, 25, 64]",
    explanation: "The selection sort algorithm works by finding the minimum element from the unsorted part and swapping it with the first unsorted element. After performing the algorithm on the array, the sorted array is [11, 12, 22, 25, 64]."
  },
  {
    language: "JavaScript",
    level: 28,
    question: "What will the following JavaScript code log?",
    code: `function selectionSort(arr) {
                for (let i = 0; i < arr.length; i++) {
                    let minIdx = i;
                    for (let j = i + 1; j < arr.length; j++) {
                        if (arr[j] < arr[minIdx]) {
                            minIdx = j;
                        }
                    }
                    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
                }
                return arr;
            }
  
            const arr = [64, 25, 12, 22, 11];
            console.log(selectionSort(arr));`,
    options: [
        "[11, 12, 22, 25, 64]",
        "[64, 25, 12, 22, 11]",
        "[25, 22, 12, 11, 64]"
    ],
    correctAnswer: "[11, 12, 22, 25, 64]",
    explanation: "The selection sort algorithm works by finding the minimum element from the unsorted part and swapping it with the first unsorted element. After performing the algorithm on the array, the sorted array is [11, 12, 22, 25, 64]."
  },
  {
    language: "C++",
    level: 28,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  using namespace std;
  
  void selectionSort(int arr[], int size) {
      for (int i = 0; i < size; i++) {
          int minIdx = i;
          for (int j = i + 1; j < size; j++) {
              if (arr[j] < arr[minIdx]) {
                  minIdx = j;
              }
          }
          swap(arr[i], arr[minIdx]);
      }
  }
  
  int main() {
      int arr[] = {64, 25, 12, 22, 11};
      selectionSort(arr, 5);
      for (int i = 0; i < 5; i++) {
          cout << arr[i] << " ";
      }
      cout << endl;
      return 0;
  }`,
    options: [
        "[11, 12, 22, 25, 64]",
        "[64, 25, 12, 22, 11]",
        "[25, 22, 12, 11, 64]"
    ],
    correctAnswer: "[11, 12, 22, 25, 64]",
    explanation: "The selection sort algorithm works by finding the minimum element from the unsorted part and swapping it with the first unsorted element. After performing the algorithm on the array, the sorted array is [11, 12, 22, 25, 64]."
  },
  
  {
    language: "Python",
    level: 29,
    question: "What will the following Python code print?",
    code: `def binary_search(arr, target):
               low = 0
               high = len(arr) - 1
               while low <= high:
                   mid = (low + high) // 2
                   if arr[mid] == target:
                       return mid
                   elif arr[mid] < target:
                       low = mid + 1
                   else:
                       high = mid - 1
               return -1
  
           arr = [1, 3, 5, 7, 9, 11]
           print(binary_search(arr, 7))`,
    options: [
        "3",
        "2",
        "-1"
    ],
    correctAnswer: "3",
    explanation: "The binary search algorithm works by repeatedly dividing the search interval in half. In this case, it finds the number 7 at index 3."
  },
  {
    language: "JavaScript",
    level: 29,
    question: "What will the following JavaScript code log?",
    code: `function binarySearch(arr, target) {
                let low = 0;
                let high = arr.length - 1;
                while (low <= high) {
                    let mid = Math.floor((low + high) / 2);
                    if (arr[mid] === target) {
                        return mid;
                    } else if (arr[mid] < target) {
                        low = mid + 1;
                    } else {
                        high = mid - 1;
                    }
                }
                return -1;
            }
  
            const arr = [1, 3, 5, 7, 9, 11];
            console.log(binarySearch(arr, 7));`,
    options: [
        "3",
        "2",
        "-1"
    ],
    correctAnswer: "3",
    explanation: "The binary search algorithm works by repeatedly dividing the search interval in half. In this case, it finds the number 7 at index 3."
  },
  {
    language: "C++",
    level: 29,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  using namespace std;
  
  int binarySearch(int arr[], int size, int target) {
      int low = 0;
      int high = size - 1;
      while (low <= high) {
          int mid = (low + high) / 2;
          if (arr[mid] == target) {
              return mid;
          } else if (arr[mid] < target) {
              low = mid + 1;
          } else {
              high = mid - 1;
          }
      }
      return -1;
  }
  
  int main() {
      int arr[] = {1, 3, 5, 7, 9, 11};
      cout << binarySearch(arr, 6, 7) << endl;
      return 0;
  }`,
    options: [
        "3",
        "2",
        "-1"
    ],
    correctAnswer: "3",
    explanation: "The binary search algorithm works by repeatedly dividing the search interval in half. In this case, it finds the number 7 at index 3."
  },
  {
    language: "Python",
    level: 30,
    question: "What will the following Python code print?",
    code: `def quick_sort(arr):
               if len(arr) <= 1:
                   return arr
               pivot = arr[len(arr) // 2]
               left = [x for x in arr if x < pivot]
               middle = [x for x in arr if x == pivot]
               right = [x for x in arr if x > pivot]
               return quick_sort(left) + middle + quick_sort(right)
  
           arr = [10, 5, 2, 3, 7, 6]
           print(quick_sort(arr))`,
    options: [
        "[2, 3, 5, 6, 7, 10]",
        "[10, 5, 2, 3, 7, 6]",
        "[2, 3, 6, 7, 5, 10]"
    ],
    correctAnswer: "[2, 3, 5, 6, 7, 10]",
    explanation: "Quick sort works by selecting a pivot element and partitioning the array into elements smaller than the pivot, the pivot itself, and elements greater than the pivot. It then recursively sorts the left and right parts."
  },
  {
    language: "JavaScript",
    level: 30,
    question: "What will the following JavaScript code log?",
    code: `function quickSort(arr) {
                if (arr.length <= 1) {
                    return arr;
                }
                let pivot = arr[Math.floor(arr.length / 2)];
                let left = arr.filter(x => x < pivot);
                let middle = arr.filter(x => x === pivot);
                let right = arr.filter(x => x > pivot);
                return [...quickSort(left), ...middle, ...quickSort(right)];
            }
  
            const arr = [10, 5, 2, 3, 7, 6];
            console.log(quickSort(arr));`,
    options: [
        "[2, 3, 5, 6, 7, 10]",
        "[10, 5, 2, 3, 7, 6]",
        "[2, 3, 6, 7, 5, 10]"
    ],
    correctAnswer: "[2, 3, 5, 6, 7, 10]",
    explanation: "Quick sort works by selecting a pivot element and partitioning the array into elements smaller than the pivot, the pivot itself, and elements greater than the pivot. It then recursively sorts the left and right parts."
  },
  {
    language: "JavaScript",
    level: 30,
    question: "What will the following JavaScript code log?",
    code: `function quickSort(arr) {
                if (arr.length <= 1) {
                    return arr;
                }
                let pivot = arr[Math.floor(arr.length / 2)];
                let left = arr.filter(x => x < pivot);
                let middle = arr.filter(x => x === pivot);
                let right = arr.filter(x => x > pivot);
                return [...quickSort(left), ...middle, ...quickSort(right)];
            }
  
            const arr = [10, 5, 2, 3, 7, 6];
            console.log(quickSort(arr));`,
    options: [
        "[2, 3, 5, 6, 7, 10]",
        "[10, 5, 2, 3, 7, 6]",
        "[2, 3, 6, 7, 5, 10]"
    ],
    correctAnswer: "[2, 3, 5, 6, 7, 10]",
    explanation: "Quick sort works by selecting a pivot element and partitioning the array into elements smaller than the pivot, the pivot itself, and elements greater than the pivot. It then recursively sorts the left and right parts."
  },
  {
    language: "C++",
    level: 30,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  vector<int> quickSort(vector<int>& arr) {
      if (arr.size() <= 1) {
          return arr;
      }
      int pivot = arr[arr.size() / 2];
      vector<int> left, middle, right;
      for (int num : arr) {
          if (num < pivot) {
              left.push_back(num);
          } else if (num == pivot) {
              middle.push_back(num);
          } else {
              right.push_back(num);
          }
      }
      vector<int> sorted = quickSort(left);
      sorted.insert(sorted.end(), middle.begin(), middle.end());
      vector<int> rightSorted = quickSort(right);
      sorted.insert(sorted.end(), rightSorted.begin(), rightSorted.end());
      return sorted;
  }
  
  int main() {
      vector<int> arr = {10, 5, 2, 3, 7, 6};
      vector<int> sortedArr = quickSort(arr);
      for (int num : sortedArr) {
          cout << num << " ";
      }
      cout << endl;
      return 0;
  }`,
    options: [
        "[2, 3, 5, 6, 7, 10]",
        "[10, 5, 2, 3, 7, 6]",
        "[2, 3, 6, 7, 5, 10]"
    ],
    correctAnswer: "[2, 3, 5, 6, 7, 10]",
    explanation: "Quick sort works by selecting a pivot element and partitioning the array into elements smaller than the pivot, the pivot itself, and elements greater than the pivot. It then recursively sorts the left and right parts."
  },
  {
    language: "Python",
    level: 30,
    question: "What will the following Python code print?",
    code: `def quick_sort(arr):
               if len(arr) <= 1:
                   return arr
               pivot = arr[len(arr) // 2]
               left = [x for x in arr if x < pivot]
               middle = [x for x in arr if x == pivot]
               right = [x for x in arr if x > pivot]
               return quick_sort(left) + middle + quick_sort(right)
  
           arr = [10, 5, 2, 3, 7, 6]
           print(quick_sort(arr))`,
    options: [
        "[2, 3, 5, 6, 7, 10]",
        "[10, 5, 2, 3, 7, 6]",
        "[2, 3, 6, 7, 5, 10]"
    ],
    correctAnswer: "[2, 3, 5, 6, 7, 10]",
    explanation: "Quick sort works by selecting a pivot element and partitioning the array into elements smaller than the pivot, the pivot itself, and elements greater than the pivot. It then recursively sorts the left and right parts."
  },
  {
    language: "JavaScript",
    level: 30,
    question: "What will the following JavaScript code log?",
    code: `function quickSort(arr) {
                if (arr.length <= 1) {
                    return arr;
                }
                let pivot = arr[Math.floor(arr.length / 2)];
                let left = arr.filter(x => x < pivot);
                let middle = arr.filter(x => x === pivot);
                let right = arr.filter(x => x > pivot);
                return [...quickSort(left), ...middle, ...quickSort(right)];
            }
  
            const arr = [10, 5, 2, 3, 7, 6];
            console.log(quickSort(arr));`,
    options: [
        "[2, 3, 5, 6, 7, 10]",
        "[10, 5, 2, 3, 7, 6]",
        "[2, 3, 6, 7, 5, 10]"
    ],
    correctAnswer: "[2, 3, 5, 6, 7, 10]",
    explanation: "Quick sort works by selecting a pivot element and partitioning the array into elements smaller than the pivot, the pivot itself, and elements greater than the pivot. It then recursively sorts the left and right parts."
  },
  {
    language: "C++",
    level: 30,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  vector<int> quickSort(vector<int>& arr) {
      if (arr.size() <= 1) {
          return arr;
      }
      int pivot = arr[arr.size() / 2];
      vector<int> left, middle, right;
      for (int num : arr) {
          if (num < pivot) {
              left.push_back(num);
          } else if (num == pivot) {
              middle.push_back(num);
          } else {
              right.push_back(num);
          }
      }
      vector<int> sorted = quickSort(left);
      sorted.insert(sorted.end(), middle.begin(), middle.end());
      vector<int> rightSorted = quickSort(right);
      sorted.insert(sorted.end(), rightSorted.begin(), rightSorted.end());
      return sorted;
  }
  
  int main() {
      vector<int> arr = {10, 5, 2, 3, 7, 6};
      vector<int> sortedArr = quickSort(arr);
      for (int num : sortedArr) {
          cout << num << " ";
      }
      cout << endl;
      return 0;
  }`,
    options: [
        "[2, 3, 5, 6, 7, 10]",
        "[10, 5, 2, 3, 7, 6]",
        "[2, 3, 6, 7, 5, 10]"
    ],
    correctAnswer: "[2, 3, 5, 6, 7, 10]",
    explanation: "Quick sort works by selecting a pivot element and partitioning the array into elements smaller than the pivot, the pivot itself, and elements greater than the pivot. It then recursively sorts the left and right parts."
  },
  {
    language: "Python",
    level: 31,
    question: "What will the following Python code print?",
    code: `def dfs(graph, start, visited=None):
               if visited is None:
                   visited = set()
               visited.add(start)
               for neighbor in graph[start]:
                   if neighbor not in visited:
                       dfs(graph, neighbor, visited)
               return visited
  
           graph = {
               'A': ['B', 'C'],
               'B': ['A', 'D', 'E'],
               'C': ['A', 'F'],
               'D': ['B'],
               'E': ['B', 'F'],
               'F': ['C', 'E']
           }
           print(dfs(graph, 'A'))`,
    options: [
        "['A', 'B', 'C', 'D', 'E', 'F']",
        "['A', 'B', 'D', 'E', 'C', 'F']",
        "['A', 'C', 'F', 'B', 'D', 'E']"
    ],
    correctAnswer: "['A', 'B', 'C', 'D', 'E', 'F']",
    explanation: "DFS explores as far as possible along each branch before backtracking. Starting from node 'A', it visits 'B', then 'C', and then all the nodes that are reachable from them."
  },
  {
    language: "JavaScript",
    level: 31,
    question: "What will the following JavaScript code log?",
    code: `function dfs(graph, start, visited = new Set()) {
                visited.add(start);
                for (let neighbor of graph[start]) {
                    if (!visited.has(neighbor)) {
                        dfs(graph, neighbor, visited);
                    }
                }
                return visited;
            }
  
            const graph = {
                'A': ['B', 'C'],
                'B': ['A', 'D', 'E'],
                'C': ['A', 'F'],
                'D': ['B'],
                'E': ['B', 'F'],
                'F': ['C', 'E']
            };
            console.log([...dfs(graph, 'A')]);`,
    options: [
        "['A', 'B', 'C', 'D', 'E', 'F']",
        "['A', 'B', 'D', 'E', 'C', 'F']",
        "['A', 'C', 'F', 'B', 'D', 'E']"
    ],
    correctAnswer: "['A', 'B', 'C', 'D', 'E', 'F']",
    explanation: "DFS explores as far as possible along each branch before backtracking. Starting from node 'A', it visits 'B', then 'C', and then all the nodes that are reachable from them."
  },
  {
    language: "C++",
    level: 31,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  #include <unordered_set>
  using namespace std;
  
  void dfs(const unordered_map<char, vector<char>>& graph, char start, unordered_set<char>& visited) {
      visited.insert(start);
      for (char neighbor : graph.at(start)) {
          if (visited.find(neighbor) == visited.end()) {
              dfs(graph, neighbor, visited);
          }
      }
  }
  
  int main() {
      unordered_map<char, vector<char>> graph = {
          {'A', {'B', 'C'}},
          {'B', {'A', 'D', 'E'}},
          {'C', {'A', 'F'}},
          {'D', {'B'}},
          {'E', {'B', 'F'}},
          {'F', {'C', 'E'}}
      };
      
      unordered_set<char> visited;
      dfs(graph, 'A', visited);
      
      for (char node : visited) {
          cout << node << " ";
      }
      cout << endl;
      return 0;
  }`,
    options: [
        "A B C D E F",
        "A B D E C F",
        "A C F B D E"
    ],
    correctAnswer: "A B C D E F",
    explanation: "DFS explores as far as possible along each branch before backtracking. Starting from node 'A', it visits 'B', then 'C', and then all the nodes that are reachable from them."
  },
  {
    language: "Python",
    level: 32,
    question: "What will the following Python code print?",
    code: `def binary_search(arr, target):
               low = 0
               high = len(arr) - 1
               while low <= high:
                   mid = (low + high) // 2
                   if arr[mid] == target:
                       return mid
                   elif arr[mid] < target:
                       low = mid + 1
                   else:
                       high = mid - 1
               return -1
  
           arr = [1, 3, 5, 7, 9, 11, 13, 15]
           print(binary_search(arr, 9))`,
    options: [
        "4",
        "3",
        "-1"
    ],
    correctAnswer: "4",
    explanation: "The target value 9 is found at index 4 in the sorted list."
  },
  {
    language: "JavaScript",
    level: 32,
    question: "What will the following JavaScript code log?",
    code: `function binarySearch(arr, target) {
                let low = 0;
                let high = arr.length - 1;
                while (low <= high) {
                    const mid = Math.floor((low + high) / 2);
                    if (arr[mid] === target) {
                        return mid;
                    } else if (arr[mid] < target) {
                        low = mid + 1;
                    } else {
                        high = mid - 1;
                    }
                }
                return -1;
            }
  
            const arr = [1, 3, 5, 7, 9, 11, 13, 15];
            console.log(binarySearch(arr, 9));`,
    options: [
        "4",
        "3",
        "-1"
    ],
    correctAnswer: "4",
    explanation: "The target value 9 is found at index 4 in the sorted list."
  },
  {
    language: "C++",
    level: 32,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  int binarySearch(const vector<int>& arr, int target) {
      int low = 0;
      int high = arr.size() - 1;
      while (low <= high) {
          int mid = (low + high) / 2;
          if (arr[mid] == target) {
              return mid;
          } else if (arr[mid] < target) {
              low = mid + 1;
          } else {
              high = mid - 1;
          }
      }
      return -1;
  }
  
  int main() {
      vector<int> arr = {1, 3, 5, 7, 9, 11, 13, 15};
      cout << binarySearch(arr, 9) << endl;
      return 0;
  }`,
    options: [
        "4",
        "3",
        "-1"
    ],
    correctAnswer: "4",
    explanation: "The target value 9 is found at index 4 in the sorted list."
  },
  {
    language: "Python",
    level: 33,
    question: "What will the following Python code print?",
    code: `def selection_sort(arr):
               for i in range(len(arr)):
                   min_index = i
                   for j in range(i + 1, len(arr)):
                       if arr[j] < arr[min_index]:
                           min_index = j
                   arr[i], arr[min_index] = arr[min_index], arr[i]
               return arr
  
           arr = [64, 25, 12, 22, 11]
           print(selection_sort(arr))`,
    options: [
        "[11, 12, 22, 25, 64]",
        "[64, 25, 12, 22, 11]",
        "[11, 25, 12, 22, 64]"
    ],
    correctAnswer: "[11, 12, 22, 25, 64]",
    explanation: "Selection Sort repeatedly selects the smallest element from the unsorted part of the list and swaps it with the first unsorted element."
  },
  {
    language: "JavaScript",
    level: 33,
    question: "What will the following JavaScript code log?",
    code: `function selectionSort(arr) {
                for (let i = 0; i < arr.length; i++) {
                    let minIndex = i;
                    for (let j = i + 1; j < arr.length; j++) {
                        if (arr[j] < arr[minIndex]) {
                            minIndex = j;
                        }
                    }
                    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
                }
                return arr;
            }
  
            const arr = [64, 25, 12, 22, 11];
            console.log(selectionSort(arr));`,
    options: [
        "[11, 12, 22, 25, 64]",
        "[64, 25, 12, 22, 11]",
        "[11, 25, 12, 22, 64]"
    ],
    correctAnswer: "[11, 12, 22, 25, 64]",
    explanation: "Selection Sort repeatedly selects the smallest element from the unsorted part of the list and swaps it with the first unsorted element."
  },
  {
    language: "C++",
    level: 33,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  void selectionSort(vector<int>& arr) {
      for (int i = 0; i < arr.size(); i++) {
          int minIndex = i;
          for (int j = i + 1; j < arr.size(); j++) {
              if (arr[j] < arr[minIndex]) {
                  minIndex = j;
              }
          }
          swap(arr[i], arr[minIndex]);
      }
  }
  
  int main() {
      vector<int> arr = {64, 25, 12, 22, 11};
      selectionSort(arr);
      for (int num : arr) {
          cout << num << " ";
      }
      cout << endl;
      return 0;
  }`,
    options: [
        "[11, 12, 22, 25, 64]",
        "[64, 25, 12, 22, 11]",
        "[11, 25, 12, 22, 64]"
    ],
    correctAnswer: "[11, 12, 22, 25, 64]",
    explanation: "Selection Sort repeatedly selects the smallest element from the unsorted part of the list and swaps it with the first unsorted element."
  },
  {
    language: "Python",
    level: 34,
    question: "What will the following Python code print?",
    code: `def insertion_sort(arr):
               for i in range(1, len(arr)):
                   key = arr[i]
                   j = i - 1
                   while j >= 0 and arr[j] > key:
                       arr[j + 1] = arr[j]
                       j -= 1
                   arr[j + 1] = key
               return arr
  
           arr = [12, 11, 13, 5, 6]
           print(insertion_sort(arr))`,
    options: [
        "[5, 6, 11, 12, 13]",
        "[12, 11, 13, 5, 6]",
        "[11, 12, 5, 6, 13]"
    ],
    correctAnswer: "[5, 6, 11, 12, 13]",
    explanation: "Insertion Sort builds the final sorted array one element at a time by inserting each element in its correct position relative to the previously sorted elements."
  },
  {
    language: "JavaScript",
    level: 34,
    question: "What will the following JavaScript code log?",
    code: `function insertionSort(arr) {
                for (let i = 1; i < arr.length; i++) {
                    let key = arr[i];
                    let j = i - 1;
                    while (j >= 0 && arr[j] > key) {
                        arr[j + 1] = arr[j];
                        j--;
                    }
                    arr[j + 1] = key;
                }
                return arr;
            }
  
            const arr = [12, 11, 13, 5, 6];
            console.log(insertionSort(arr));`,
    options: [
        "[5, 6, 11, 12, 13]",
        "[12, 11, 13, 5, 6]",
        "[11, 12, 5, 6, 13]"
    ],
    correctAnswer: "[5, 6, 11, 12, 13]",
    explanation: "Insertion Sort builds the final sorted array one element at a time by inserting each element in its correct position relative to the previously sorted elements."
  },
  {
    language: "C++",
    level: 34,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  void insertionSort(vector<int>& arr) {
      for (int i = 1; i < arr.size(); i++) {
          int key = arr[i];
          int j = i - 1;
          while (j >= 0 && arr[j] > key) {
              arr[j + 1] = arr[j];
              j--;
          }
          arr[j + 1] = key;
      }
  }
  
  int main() {
      vector<int> arr = {12, 11, 13, 5, 6};
      insertionSort(arr);
      for (int num : arr) {
          cout << num << " ";
      }
      cout << endl;
      return 0;
  }`,
    options: [
        "[5, 6, 11, 12, 13]",
        "[12, 11, 13, 5, 6]",
        "[11, 12, 5, 6, 13]"
    ],
    correctAnswer: "[5, 6, 11, 12, 13]",
    explanation: "Insertion Sort builds the final sorted array one element at a time by inserting each element in its correct position relative to the previously sorted elements."
  },
  {
    language: "Python",
    level: 35,
    question: "What will the following Python code print?",
    code: `def quick_sort(arr):
               if len(arr) <= 1:
                   return arr
               pivot = arr[len(arr) // 2]
               left = [x for x in arr if x < pivot]
               middle = [x for x in arr if x == pivot]
               right = [x for x in arr if x > pivot]
               return quick_sort(left) + middle + quick_sort(right)
  
           arr = [3, 6, 8, 10, 1, 2, 1]
           print(quick_sort(arr))`,
    options: [
        "[1, 1, 2, 3, 6, 8, 10]",
        "[3, 6, 8, 10, 1, 2, 1]",
        "[1, 2, 3, 6, 8, 10, 1]"
    ],
    correctAnswer: "[1, 1, 2, 3, 6, 8, 10]",
    explanation: "QuickSort selects a pivot element and partitions the array into three sub-arrays: elements less than the pivot, equal to the pivot, and greater than the pivot. It then recursively sorts the left and right sub-arrays."
  },
  {
    language: "JavaScript",
    level: 35,
    question: "What will the following JavaScript code log?",
    code: `function quickSort(arr) {
                if (arr.length <= 1) {
                    return arr;
                }
                const pivot = arr[Math.floor(arr.length / 2)];
                const left = arr.filter(x => x < pivot);
                const middle = arr.filter(x => x === pivot);
                const right = arr.filter(x => x > pivot);
                return [...quickSort(left), ...middle, ...quickSort(right)];
            }
  
            const arr = [3, 6, 8, 10, 1, 2, 1];
            console.log(quickSort(arr));`,
    options: [
        "[1, 1, 2, 3, 6, 8, 10]",
        "[3, 6, 8, 10, 1, 2, 1]",
        "[1, 2, 3, 6, 8, 10, 1]"
    ],
    correctAnswer: "[1, 1, 2, 3, 6, 8, 10]",
    explanation: "QuickSort selects a pivot element and partitions the array into three sub-arrays: elements less than the pivot, equal to the pivot, and greater than the pivot. It then recursively sorts the left and right sub-arrays."
  },
  {
    language: "C++",
    level: 35,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  #include <algorithm>
  using namespace std;
  
  vector<int> quickSort(vector<int>& arr) {
      if (arr.size() <= 1) {
          return arr;
      }
      int pivot = arr[arr.size() / 2];
      vector<int> left, middle, right;
      for (int num : arr) {
          if (num < pivot) left.push_back(num);
          else if (num == pivot) middle.push_back(num);
          else right.push_back(num);
      }
      vector<int> result;
      vector<int> leftSorted = quickSort(left);
      vector<int> rightSorted = quickSort(right);
      result.insert(result.end(), leftSorted.begin(), leftSorted.end());
      result.insert(result.end(), middle.begin(), middle.end());
      result.insert(result.end(), rightSorted.begin(), rightSorted.end());
      return result;
  }
  
  int main() {
      vector<int> arr = {3, 6, 8, 10, 1, 2, 1};
      vector<int> sortedArr = quickSort(arr);
      for (int num : sortedArr) {
          cout << num << " ";
      }
      cout << endl;
      return 0;
  }`,
    options: [
        "[1, 1, 2, 3, 6, 8, 10]",
        "[3, 6, 8, 10, 1, 2, 1]",
        "[1, 2, 3, 6, 8, 10, 1]"
    ],
    correctAnswer: "[1, 1, 2, 3, 6, 8, 10]",
    explanation: "QuickSort selects a pivot element and partitions the array into three sub-arrays: elements less than the pivot, equal to the pivot, and greater than the pivot. It then recursively sorts the left and right sub-arrays."
  },
  {
    language: "Python",
    level: 36,
    question: "What will the following Python code print?",
    code: `def binary_search(arr, target):
               low, high = 0, len(arr) - 1
               while low <= high:
                   mid = (low + high) // 2
                   if arr[mid] == target:
                       return mid
                   elif arr[mid] < target:
                       low = mid + 1
                   else:
                       high = mid - 1
               return -1
  
           arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
           print(binary_search(arr, 5))`,
    options: [
        "4",
        "5",
        "-1"
    ],
    correctAnswer: "4",
    explanation: "The binary search algorithm repeatedly divides the search interval in half. If the value of the target is less than the value in the middle of the interval, the search continues in the lower half, otherwise it continues in the upper half."
  },
  {
    language: "JavaScript",
    level: 36,
    question: "What will the following JavaScript code log?",
    code: `function binarySearch(arr, target) {
                let low = 0, high = arr.length - 1;
                while (low <= high) {
                    let mid = Math.floor((low + high) / 2);
                    if (arr[mid] === target) {
                        return mid;
                    } else if (arr[mid] < target) {
                        low = mid + 1;
                    } else {
                        high = mid - 1;
                    }
                }
                return -1;
            }
  
            const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            console.log(binarySearch(arr, 5));`,
    options: [
        "4",
        "5",
        "-1"
    ],
    correctAnswer: "4",
    explanation: "The binary search algorithm repeatedly divides the search interval in half. If the value of the target is less than the value in the middle of the interval, the search continues in the lower half, otherwise it continues in the upper half."
  },
  {
    language: "C++",
    level: 36,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  int binarySearch(const vector<int>& arr, int target) {
      int low = 0, high = arr.size() - 1;
      while (low <= high) {
          int mid = (low + high) / 2;
          if (arr[mid] == target) {
              return mid;
          } else if (arr[mid] < target) {
              low = mid + 1;
          } else {
              high = mid - 1;
          }
      }
      return -1;
  }
  
  int main() {
      vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
      cout << binarySearch(arr, 5) << endl;
      return 0;
  }`,
    options: [
        "4",
        "5",
        "-1"
    ],
    correctAnswer: "4",
    explanation: "The binary search algorithm repeatedly divides the search interval in half. If the value of the target is less than the value in the middle of the interval, the search continues in the lower half, otherwise it continues in the upper half."
  },
  {
    language: "Python",
    level: 37,
    question: "What will the following Python code print?",
    code: `def factorial(n):
               if n == 0 or n == 1:
                   return 1
               return n * factorial(n - 1)
  
           print(factorial(5))`,
    options: [
        "5",
        "120",
        "25"
    ],
    correctAnswer: "120",
    explanation: "The factorial of a number is the product of all positive integers less than or equal to that number. For 5, it is 5 * 4 * 3 * 2 * 1 = 120. This code uses recursion, where the function calls itself until it reaches the base case (n == 0 or n == 1)."
  },
  {
    language: "JavaScript",
    level: 37,
    question: "What will the following JavaScript code log?",
    code: `function factorial(n) {
                if (n === 0 || n === 1) {
                    return 1;
                }
                return n * factorial(n - 1);
            }
  
            console.log(factorial(5));`,
    options: [
        "5",
        "120",
        "25"
    ],
    correctAnswer: "120",
    explanation: "The factorial of a number is the product of all positive integers less than or equal to that number. For 5, it is 5 * 4 * 3 * 2 * 1 = 120. This code uses recursion, where the function calls itself until it reaches the base case (n === 0 or n === 1)."
  },
  {
    language: "C++",
    level: 37,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  using namespace std;
  
  int factorial(int n) {
      if (n == 0 || n == 1) {
          return 1;
      }
      return n * factorial(n - 1);
  }
  
  int main() {
      cout << factorial(5) << endl;
      return 0;
  }`,
    options: [
        "5",
        "120",
        "25"
    ],
    correctAnswer: "120",
    explanation: "The factorial of a number is the product of all positive integers less than or equal to that number. For 5, it is 5 * 4 * 3 * 2 * 1 = 120. This code uses recursion, where the function calls itself until it reaches the base case (n == 0 or n == 1)."
  },
  {
    language: "Python",
    level: 38,
    question: "What will the following Python code print?",
    code: `def insertion_sort(arr):
               for i in range(1, len(arr)):
                   key = arr[i]
                   j = i - 1
                   while j >= 0 and key < arr[j]:
                       arr[j + 1] = arr[j]
                       j -= 1
                   arr[j + 1] = key
               return arr
  
           print(insertion_sort([12, 11, 13, 5, 6]))`,
    options: [
        "[12, 11, 13, 5, 6]",
        "[5, 6, 11, 12, 13]",
        "[12, 5, 6, 11, 13]"
    ],
    correctAnswer: "[5, 6, 11, 12, 13]",
    explanation: "Insertion sort works by selecting an element from the unsorted part of the list and placing it in the correct position within the sorted part of the list. The given array is sorted into [5, 6, 11, 12, 13]."
  },
  {
    language: "JavaScript",
    level: 38,
    question: "What will the following JavaScript code log?",
    code: `function insertionSort(arr) {
                for (let i = 1; i < arr.length; i++) {
                    let key = arr[i];
                    let j = i - 1;
                    while (j >= 0 && key < arr[j]) {
                        arr[j + 1] = arr[j];
                        j--;
                    }
                    arr[j + 1] = key;
                }
                return arr;
            }
  
            console.log(insertionSort([12, 11, 13, 5, 6]));`,
    options: [
        "[12, 11, 13, 5, 6]",
        "[5, 6, 11, 12, 13]",
        "[12, 5, 6, 11, 13]"
    ],
    correctAnswer: "[5, 6, 11, 12, 13]",
    explanation: "Insertion sort works by selecting an element from the unsorted part of the list and placing it in the correct position within the sorted part of the list. The given array is sorted into [5, 6, 11, 12, 13]."
  },
  {
    language: "C++",
    level: 38,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  vector<int> insertionSort(vector<int>& arr) {
      for (int i = 1; i < arr.size(); i++) {
          int key = arr[i];
          int j = i - 1;
          while (j >= 0 && key < arr[j]) {
              arr[j + 1] = arr[j];
              j--;
          }
          arr[j + 1] = key;
      }
      return arr;
  }
  
  int main() {
      vector<int> arr = {12, 11, 13, 5, 6};
      vector<int> sortedArr = insertionSort(arr);
      for (int num : sortedArr) {
          cout << num << " ";
      }
      cout << endl;
      return 0;
  }`,
    options: [
        "[12, 11, 13, 5, 6]",
        "[5, 6, 11, 12, 13]",
        "[12, 5, 6, 11, 13]"
    ],
    correctAnswer: "[5, 6, 11, 12, 13]",
    explanation: "Insertion sort works by selecting an element from the unsorted part of the list and placing it in the correct position within the sorted part of the list. The given array is sorted into [5, 6, 11, 12, 13]."
  },
  {
    language: "Python",
    level: 39,
    question: "What will the following Python code print?",
    code: `def binary_search(arr, target):
               left, right = 0, len(arr) - 1
               while left <= right:
                   mid = (left + right) // 2
                   if arr[mid] == target:
                       return mid
                   elif arr[mid] < target:
                       left = mid + 1
                   else:
                       right = mid - 1
               return -1
  
           arr = [1, 3, 5, 7, 9, 11]
           print(binary_search(arr, 7))`,
    options: [
        "3",
        "-1",
        "7"
    ],
    correctAnswer: "3",
    explanation: "The binary search algorithm repeatedly divides the search interval in half. If the value of the target is less than the item in the middle of the interval, the search continues in the left half, or right half if the target is greater. The target 7 is found at index 3."
  },
  {
    language: "JavaScript",
    level: 39,
    question: "What will the following JavaScript code log?",
    code: `function binarySearch(arr, target) {
                let left = 0, right = arr.length - 1;
                while (left <= right) {
                    let mid = Math.floor((left + right) / 2);
                    if (arr[mid] === target) {
                        return mid;
                    } else if (arr[mid] < target) {
                        left = mid + 1;
                    } else {
                        right = mid - 1;
                    }
                }
                return -1;
            }
  
            const arr = [1, 3, 5, 7, 9, 11];
            console.log(binarySearch(arr, 7));`,
    options: [
        "3",
        "-1",
        "7"
    ],
    correctAnswer: "3",
    explanation: "The binary search algorithm repeatedly divides the search interval in half. If the value of the target is less than the item in the middle of the interval, the search continues in the left half, or right half if the target is greater. The target 7 is found at index 3."
  },
  {
    language: "C++",
    level: 39,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  int binarySearch(vector<int>& arr, int target) {
      int left = 0, right = arr.size() - 1;
      while (left <= right) {
          int mid = left + (right - left) / 2;
          if (arr[mid] == target) {
              return mid;
          } else if (arr[mid] < target) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
      return -1;
  }
  
  int main() {
      vector<int> arr = {1, 3, 5, 7, 9, 11};
      cout << binarySearch(arr, 7) << endl;
      return 0;
  }`,
    options: [
        "3",
        "-1",
        "7"
    ],
    correctAnswer: "3",
    explanation: "The binary search algorithm repeatedly divides the search interval in half. If the value of the target is less than the item in the middle of the interval, the search continues in the left half, or right half if the target is greater. The target 7 is found at index 3."
  },
  {
    language: "Python",
    level: 40,
    question: "What will the following Python code print?",
    code: `def binary_search(arr, target, left=0, right=None):
               if right is None:
                   right = len(arr) - 1
               if left > right:
                   return -1
               mid = (left + right) // 2
               if arr[mid] == target:
                   return mid
               elif arr[mid] < target:
                   return binary_search(arr, target, mid + 1, right)
               else:
                   return binary_search(arr, target, left, mid - 1)
  
           arr = [1, 3, 5, 7, 9, 11]
           print(binary_search(arr, 7))`,
    options: [
        "3",
        "-1",
        "7"
    ],
    correctAnswer: "3",
    explanation: "This is a recursive version of the binary search algorithm. It works by dividing the array and searching in the appropriate half recursively until the target is found. The target 7 is located at index 3 in the array."
  },
  {
    language: "JavaScript",
    level: 40,
    question: "What will the following JavaScript code log?",
    code: `function binarySearch(arr, target, left = 0, right = arr.length - 1) {
                if (left > right) return -1;
                let mid = Math.floor((left + right) / 2);
                if (arr[mid] === target) return mid;
                if (arr[mid] < target) {
                    return binarySearch(arr, target, mid + 1, right);
                } else {
                    return binarySearch(arr, target, left, mid - 1);
                }
            }
  
            const arr = [1, 3, 5, 7, 9, 11];
            console.log(binarySearch(arr, 7));`,
    options: [
        "3",
        "-1",
        "7"
    ],
    correctAnswer: "3",
    explanation: "This is a recursive version of the binary search algorithm. It works by dividing the array and searching in the appropriate half recursively until the target is found. The target 7 is located at index 3 in the array."
  },
  {
    language: "C++",
    level: 40,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  int binarySearch(vector<int>& arr, int target, int left = 0, int right = -1) {
      if (right == -1) right = arr.size() - 1;
      if (left > right) return -1;
      int mid = left + (right - left) / 2;
      if (arr[mid] == target) return mid;
      else if (arr[mid] < target) return binarySearch(arr, target, mid + 1, right);
      else return binarySearch(arr, target, left, mid - 1);
  }
  
  int main() {
      vector<int> arr = {1, 3, 5, 7, 9, 11};
      cout << binarySearch(arr, 7) << endl;
      return 0;
  }`,
    options: [
        "3",
        "-1",
        "7"
    ],
    correctAnswer: "3",
    explanation: "This is a recursive version of the binary search algorithm. It works by dividing the array and searching in the appropriate half recursively until the target is found. The target 7 is located at index 3 in the array."
  },
  {
    language: "Python",
    level: 42,
    question: "What will the following Python code print?",
    code: `def find_person(people, name):
               for person in people:
                   if person["name"] == name:
                       return person["age"]
               return "Not found"
  
           people = [
               {"name": "Alice", "age": 30},
               {"name": "Bob", "age": 25},
               {"name": "Charlie", "age": 35}
           ]
           print(find_person(people, "Bob"))`,
    options: [
        "25",
        "30",
        "35"
    ],
    correctAnswer: "25",
    explanation: "The function searches for the person with the name 'Bob' in the list of people and returns their age, which is 25."
  },
  {
    language: "JavaScript",
    level: 42,
    question: "What will the following JavaScript code log?",
    code: `function findPerson(people, name) {
                for (let person of people) {
                    if (person.name === name) {
                        return person.age;
                    }
                }
                return "Not found";
            }
  
            const people = [
                {name: "Alice", age: 30},
                {name: "Bob", age: 25},
                {name: "Charlie", age: 35}
            ];
            console.log(findPerson(people, "Bob"));`,
    options: [
        "25",
        "30",
        "35"
    ],
    correctAnswer: "25",
    explanation: "The function searches for the person with the name 'Bob' in the list of people and returns their age, which is 25."
  },
  {
    language: "C++",
    level: 42,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  #include <string>
  using namespace std;
  
  struct Person {
      string name;
      int age;
  };
  
  int findPerson(const vector<Person>& people, const string& name) {
      for (const auto& person : people) {
          if (person.name == name) {
              return person.age;
          }
      }
      return -1; // Not found
  }
  
  int main() {
      vector<Person> people = {
          {"Alice", 30},
          {"Bob", 25},
          {"Charlie", 35}
      };
      cout << findPerson(people, "Bob") << endl;
      return 0;
  }`,
    options: [
        "25",
        "30",
        "35"
    ],
    correctAnswer: "25",
    explanation: "The function searches for the person with the name 'Bob' in the vector of people and returns their age, which is 25."
  },
  {
    language: "Python",
    level: 43,
    question: "What will the following Python code print?",
    code: `def calculate_total_value(products):
               total = 0
               for product in products:
                   total += product["price"] * product["stock"]
               return total
  
           products = [
               {"name": "Laptop", "price": 1000, "stock": 5},
               {"name": "Phone", "price": 500, "stock": 10},
               {"name": "Tablet", "price": 300, "stock": 7}
           ]
           print(calculate_total_value(products))`,
    options: [
        "10500",
        "8500",
        "10000"
    ],
    correctAnswer: "10500",
    explanation: "The function calculates the total value by multiplying the price of each product by its stock and summing the results: (1000*5) + (500*10) + (300*7) = 10500."
  },
  {
    language: "JavaScript",
    level: 43,
    question: "What will the following JavaScript code log?",
    code: `function calculateTotalValue(products) {
                let total = 0;
                for (let product of products) {
                    total += product.price * product.stock;
                }
                return total;
            }
  
            const products = [
                {name: "Laptop", price: 1000, stock: 5},
                {name: "Phone", price: 500, stock: 10},
                {name: "Tablet", price: 300, stock: 7}
            ];
            console.log(calculateTotalValue(products));`,
    options: [
        "10500",
        "8500",
        "10000"
    ],
    correctAnswer: "10500",
    explanation: "The function calculates the total value by multiplying the price of each product by its stock and summing the results: (1000*5) + (500*10) + (300*7) = 10500."
  },
  {
    language: "C++",
    level: 43,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  #include <string>
  using namespace std;
  
  struct Product {
      string name;
      int price;
      int stock;
  };
  
  int calculateTotalValue(const vector<Product>& products) {
      int total = 0;
      for (const auto& product : products) {
          total += product.price * product.stock;
      }
      return total;
  }
  
  int main() {
      vector<Product> products = {
          {"Laptop", 1000, 5},
          {"Phone", 500, 10},
          {"Tablet", 300, 7}
      };
      cout << calculateTotalValue(products) << endl;
      return 0;
  }`,
    options: [
        "10500",
        "8500",
        "10000"
    ],
    correctAnswer: "10500",
    explanation: "The function calculates the total value by multiplying the price of each product by its stock and summing the results: (1000*5) + (500*10) + (300*7) = 10500."
  },
  {
    language: "Python",
    level: 44,
    question: "What will the following Python code print?",
    code: `def total_salary_of_employees_with_dependents(employees):
               total = 0
               for employee in employees:
                   if len(employee["dependents"]) > 0:
                       total += employee["salary"]
               return total
  
           employees = [
               {"name": "John", "salary": 3000, "dependents": [{"name": "Alice", "age": 4}, {"name": "Bob", "age": 7}]},
               {"name": "Jane", "salary": 2500, "dependents": []},
               {"name": "Mike", "salary": 4000, "dependents": [{"name": "Charlie", "age": 2}]}
           ]
           print(total_salary_of_employees_with_dependents(employees))`,
    options: [
        "9500",
        "5500",
        "7500"
    ],
    correctAnswer: "9500",
    explanation: "The function sums the salaries of employees with dependents. John (3000) and Mike (4000) have dependents, so the total salary is 3000 + 4000 = 9500."
  },
  {
    language: "JavaScript",
    level: 44,
    question: "What will the following JavaScript code log?",
    code: `function totalSalaryOfEmployeesWithDependents(employees) {
                let total = 0;
                for (let employee of employees) {
                    if (employee.dependents.length > 0) {
                        total += employee.salary;
                    }
                }
                return total;
            }
  
            const employees = [
                {name: "John", salary: 3000, dependents: [{name: "Alice", age: 4}, {name: "Bob", age: 7}]},
                {name: "Jane", salary: 2500, dependents: []},
                {name: "Mike", salary: 4000, dependents: [{name: "Charlie", age: 2}]}
            ];
            console.log(totalSalaryOfEmployeesWithDependents(employees));`,
    options: [
        "9500",
        "5500",
        "7500"
    ],
    correctAnswer: "9500",
    explanation: "The function sums the salaries of employees with dependents. John (3000) and Mike (4000) have dependents, so the total salary is 3000 + 4000 = 9500."
  },
  {
    language: "C++",
    level: 44,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  #include <vector>
  #include <string>
  using namespace std;
  
  struct Dependent {
      string name;
      int age;
  };
  
  struct Employee {
      string name;
      int salary;
      vector<Dependent> dependents;
  };
  
  int totalSalaryOfEmployeesWithDependents(const vector<Employee>& employees) {
      int total = 0;
      for (const auto& employee : employees) {
          if (!employee.dependents.empty()) {
              total += employee.salary;
          }
      }
      return total;
  }
  
  int main() {
      vector<Employee> employees = {
          {"John", 3000, {{"Alice", 4}, {"Bob", 7}}},
          {"Jane", 2500, {}},
          {"Mike", 4000, {{"Charlie", 2}}}
      };
      cout << totalSalaryOfEmployeesWithDependents(employees) << endl;
      return 0;
  }`,
    options: [
        "9500",
        "5500",
        "7500"
    ],
    correctAnswer: "9500",
    explanation: "The function sums the salaries of employees with dependents. John (3000) and Mike (4000) have dependents, so the total salary is 3000 + 4000 = 9500."
  },
  {
    language: "Python",
    level: 45,
    question: "What will the following Python code print?",
    code: `class Vehicle:
               def __init__(self, brand, model, max_speed):
                   self.brand = brand
                   self.model = model
                   self.max_speed = max_speed
  
               def time_to_travel(self, distance):
                   return distance / self.max_speed
  
           car = Vehicle("Toyota", "Corolla", 180)
           time = car.time_to_travel(360)
           print(time)`,
    options: [
        "1",
        "2",
        "3"
    ],
    correctAnswer: "2",
    explanation: "The time to travel 360 km at a speed of 180 km/h is 360 / 180 = 2 hours."
  },
  {
    language: "JavaScript",
    level: 45,
    question: "What will the following JavaScript code log?",
    code: `class Vehicle {
                constructor(brand, model, maxSpeed) {
                    this.brand = brand;
                    this.model = model;
                    this.maxSpeed = maxSpeed;
                }
  
                timeToTravel(distance) {
                    return distance / this.maxSpeed;
                }
            }
  
            const car = new Vehicle("Toyota", "Corolla", 180);
            const time = car.timeToTravel(360);
            console.log(time);`,
    options: [
        "1",
        "2",
        "3"
    ],
    correctAnswer: "2",
    explanation: "The time to travel 360 km at a speed of 180 km/h is 360 / 180 = 2 hours."
  },
  {
    language: "C++",
    level: 45,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  using namespace std;
  
  class Vehicle {
  public:
      string brand;
      string model;
      int maxSpeed;
  
      Vehicle(string b, string m, int s) : brand(b), model(m), maxSpeed(s) {}
  
      double timeToTravel(double distance) {
          return distance / maxSpeed;
      }
  };
  
  int main() {
      Vehicle car("Toyota", "Corolla", 180);
      double time = car.timeToTravel(360);
      cout << time << endl;
      return 0;
  }`,
    options: [
        "1",
        "2",
        "3"
    ],
    correctAnswer: "2",
    explanation: "The time to travel 360 km at a speed of 180 km/h is 360 / 180 = 2 hours."
  },
  {
    language: "Python",
    level: 46,
    question: "What will the following Python code print?",
    code: `class Vehicle:
               def __init__(self, brand, model, max_speed):
                   self.brand = brand
                   self.model = model
                   self.max_speed = max_speed
  
               def time_to_travel(self, distance):
                   return distance / self.max_speed
  
           class Car(Vehicle):
               def __init__(self, brand, model, max_speed, fuel_type):
                   super().__init__(brand, model, max_speed)
                   self.fuel_type = fuel_type
  
           car = Car("Toyota", "Corolla", 180, "Petrol")
           time = car.time_to_travel(360)
           print(time)`,
    options: [
        "1",
        "2",
        "3"
    ],
    correctAnswer: "2",
    explanation: "The `Car` class inherits from `Vehicle`, so it has access to the `time_to_travel` method. The time to travel 360 km at a speed of 180 km/h is 360 / 180 = 2 hours."
  },
  {
    language: "JavaScript",
    level: 46,
    question: "What will the following JavaScript code log?",
    code: `class Vehicle {
                constructor(brand, model, maxSpeed) {
                    this.brand = brand;
                    this.model = model;
                    this.maxSpeed = maxSpeed;
                }
  
                timeToTravel(distance) {
                    return distance / this.maxSpeed;
                }
            }
  
            class Car extends Vehicle {
                constructor(brand, model, maxSpeed, fuelType) {
                    super(brand, model, maxSpeed);
                    this.fuelType = fuelType;
                }
            }
  
            const car = new Car("Toyota", "Corolla", 180, "Petrol");
            const time = car.timeToTravel(360);
            console.log(time);`,
    options: [
        "1",
        "2",
        "3"
    ],
    correctAnswer: "2",
    explanation: "The `Car` class extends `Vehicle`, so it inherits the `timeToTravel` method. The time to travel 360 km at a speed of 180 km/h is 360 / 180 = 2 hours."
  },
  {
    language: "C++",
    level: 46,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  using namespace std;
  
  class Vehicle {
  public:
      string brand;
      string model;
      int maxSpeed;
  
      Vehicle(string b, string m, int s) : brand(b), model(m), maxSpeed(s) {}
  
      double timeToTravel(double distance) {
          return distance / maxSpeed;
      }
  };
  
  class Car : public Vehicle {
  public:
      string fuelType;
  
      Car(string b, string m, int s, string f) : Vehicle(b, m, s), fuelType(f) {}
  };
  
  int main() {
      Car car("Toyota", "Corolla", 180, "Petrol");
      double time = car.timeToTravel(360);
      cout << time << endl;
      return 0;
  }`,
    options: [
        "1",
        "2",
        "3"
    ],
    correctAnswer: "2",
    explanation: "The `Car` class inherits from `Vehicle`, so it has access to the `timeToTravel` method. The time to travel 360 km at a speed of 180 km/h is 360 / 180 = 2 hours."
  },
  {
    language: "Python",
    level: 47,
    question: "What will the following Python code print?",
    code: `class Vehicle:
               def __init__(self, brand, model, max_speed):
                   self.brand = brand
                   self.model = model
                   self.max_speed = max_speed
  
               def time_to_travel(self, distance):
                   return distance / self.max_speed
  
           class Car(Vehicle):
               def __init__(self, brand, model, max_speed, fuel_type):
                   super().__init__(brand, model, max_speed)
                   self.fuel_type = fuel_type
  
               def time_to_travel(self, distance):
                   return distance / (self.max_speed * 1.2)  # Cars are assumed to travel slower due to fuel type
  
           class Bike(Vehicle):
               def __init__(self, brand, model, max_speed):
                   super().__init__(brand, model, max_speed)
  
               def time_to_travel(self, distance):
                   return distance / (self.max_speed * 0.8)  # Bikes are assumed to travel faster
  
           car = Car("Toyota", "Corolla", 180, "Petrol")
           bike = Bike("Yamaha", "R1", 200)
           print(car.time_to_travel(360))  # Expected slower time due to fuel
           print(bike.time_to_travel(360))  # Expected faster time due to bike speed increase`,
    options: [
        "1. 2, 1.5",
        "2. 2.4, 2",
        "3. 1.8, 1.6"
    ],
    correctAnswer: "1",
    explanation: "The `Car` class's `time_to_travel` method reduces the speed by a factor of 1.2, while the `Bike` class's `time_to_travel` method increases the speed by a factor of 1.2. So, the car takes 360 / (180 * 1.2) = 2 hours, and the bike takes 360 / (200 * 0.8) = 1.5 hours."
  },
  {
    language: "JavaScript",
    level: 47,
    question: "What will the following JavaScript code log?",
    code: `class Vehicle {
                constructor(brand, model, maxSpeed) {
                    this.brand = brand;
                    this.model = model;
                    this.maxSpeed = maxSpeed;
                }
  
                timeToTravel(distance) {
                    return distance / this.maxSpeed;
                }
            }
  
            class Car extends Vehicle {
                constructor(brand, model, maxSpeed, fuelType) {
                    super(brand, model, maxSpeed);
                    this.fuelType = fuelType;
                }
  
                timeToTravel(distance) {
                    return distance / (this.maxSpeed * 1.2);  // Cars are assumed to travel slower due to fuel type
                }
            }
  
            class Bike extends Vehicle {
                constructor(brand, model, maxSpeed) {
                    super(brand, model, maxSpeed);
                }
  
                timeToTravel(distance) {
                    return distance / (this.maxSpeed * 0.8);  // Bikes are assumed to travel faster
                }
            }
  
            const car = new Car("Toyota", "Corolla", 180, "Petrol");
            const bike = new Bike("Yamaha", "R1", 200);
            console.log(car.timeToTravel(360));  // Expected slower time due to fuel
            console.log(bike.timeToTravel(360));  // Expected faster time due to bike speed increase`,
    options: [
        "1. 2, 1.5",
        "2. 2.4, 2",
        "3. 1.8, 1.6"
    ],
    correctAnswer: "1",
    explanation: "The `Car` class's `timeToTravel` method reduces the speed by a factor of 1.2, while the `Bike` class's `timeToTravel` method increases the speed by a factor of 1.2. So, the car takes 360 / (180 * 1.2) = 2 hours, and the bike takes 360 / (200 * 0.8) = 1.5 hours."
  },
  {
    language: "C++",
    level: 47,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  using namespace std;
  
  class Vehicle {
  public:
      string brand;
      string model;
      int maxSpeed;
  
      Vehicle(string b, string m, int s) : brand(b), model(m), maxSpeed(s) {}
  
      virtual double timeToTravel(double distance) {
          return distance / maxSpeed;
      }
  };
  
  class Car : public Vehicle {
  public:
      string fuelType;
  
      Car(string b, string m, int s, string f) : Vehicle(b, m, s), fuelType(f) {}
  
      double timeToTravel(double distance) override {
          return distance / (maxSpeed * 1.2);  // Cars are assumed to travel slower due to fuel type
      }
  };
  
  class Bike : public Vehicle {
  public:
      Bike(string b, string m, int s) : Vehicle(b, m, s) {}
  
      double timeToTravel(double distance) override {
          return distance / (maxSpeed * 0.8);  // Bikes are assumed to travel faster
      }
  };
  
  int main() {
      Car car("Toyota", "Corolla", 180, "Petrol");
      Bike bike("Yamaha", "R1", 200);
      double carTime = car.timeToTravel(360);
      double bikeTime = bike.timeToTravel(360);
      cout << carTime << endl;  // Expected slower time due to fuel
      cout << bikeTime << endl;  // Expected faster time due to bike speed increase
      return 0;
  }`,
    options: [
        "1. 2, 1.5",
        "2. 2.4, 2",
        "3. 1.8, 1.6"
    ],
    correctAnswer: "1",
    explanation: "The `Car` class's `timeToTravel` method reduces the speed by a factor of 1.2, while the `Bike` class's `timeToTravel` method increases the speed by a factor of 1.2. So, the car takes 360 / (180 * 1.2) = 2 hours, and the bike takes 360 / (200 * 0.8) = 1.5 hours."
  },
  {
    language: "Python",
    level: 48,
    question: "What will the following Python code print?",
    code: `class Employee:
               def __init__(self, name, salary):
                   self.__name = name  # Private variable
                   self.__salary = salary  # Private variable
  
               # Getter method for name
               def get_name(self):
                   return self.__name
  
               # Setter method for name
               def set_name(self, name):
                   self.__name = name
  
               # Getter method for salary
               def get_salary(self):
                   return self.__salary
  
               # Setter method for salary
               def set_salary(self, salary):
                   if salary > 0:
                       self.__salary = salary
                   else:
                       print("Salary must be positive!")
  
           employee = Employee("John", 50000)
           print(employee.get_name())
           print(employee.get_salary())
           employee.set_name("Alice")
           employee.set_salary(60000)
           print(employee.get_name())
           print(employee.get_salary())`,
    options: [
        "1. John, 50000, Alice, 60000",
        "2. Alice, 60000, John, 50000",
        "3. John, 50000, Alice, 0"
    ],
    correctAnswer: "1",
    explanation: "The code uses getter and setter methods to encapsulate the private variables. Initially, the employee's name is 'John' and salary is 50000. After updating with setter methods, the name becomes 'Alice' and salary becomes 60000."
  },
  {
    language: "JavaScript",
    level: 48,
    question: "What will the following JavaScript code log?",
    code: `class Employee {
                constructor(name, salary) {
                    this._name = name;  // Private variable
                    this._salary = salary;  // Private variable
                }
  
                // Getter method for name
                get name() {
                    return this._name;
                }
  
                // Setter method for name
                set name(name) {
                    this._name = name;
                }
  
                // Getter method for salary
                get salary() {
                    return this._salary;
                }
  
                // Setter method for salary
                set salary(salary) {
                    if (salary > 0) {
                        this._salary = salary;
                    } else {
                        console.log("Salary must be positive!");
                    }
                }
            }
  
            const employee = new Employee("John", 50000);
            console.log(employee.name);
            console.log(employee.salary);
            employee.name = "Alice";
            employee.salary = 60000;
            console.log(employee.name);
            console.log(employee.salary);`,
    options: [
        "1. John, 50000, Alice, 60000",
        "2. Alice, 60000, John, 50000",
        "3. John, 50000, Alice, 0"
    ],
    correctAnswer: "1",
    explanation: "In JavaScript, we use getters and setters to encapsulate private variables. Initially, the employee's name is 'John' and salary is 50000. After updating with setters, the name becomes 'Alice' and salary becomes 60000."
  },
  
  {
    language: "C++",
    level: 48,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  using namespace std;
  
  class Employee {
  private:
      string name;
      double salary;
  
  public:
      Employee(string n, double s) : name(n), salary(s) {}
  
      // Getter method for name
      string getName() const {
          return name;
      }
  
      // Setter method for name
      void setName(string n) {
          name = n;
      }
  
      // Getter method for salary
      double getSalary() const {
          return salary;
      }
  
      // Setter method for salary
      void setSalary(double s) {
          if (s > 0) {
              salary = s;
          } else {
              cout << "Salary must be positive!" << endl;
          }
      }
  };
  
  int main() {
      Employee employee("John", 50000);
      cout << employee.getName() << endl;
      cout << employee.getSalary() << endl;
      employee.setName("Alice");
      employee.setSalary(60000);
      cout << employee.getName() << endl;
      cout << employee.getSalary() << endl;
      return 0;
  }`,
    options: [
        "1. John, 50000, Alice, 60000",
        "2. Alice, 60000, John, 50000",
        "3. John, 50000, Alice, 0"
    ],
    correctAnswer: "1",
    explanation: "In C++, private variables are accessed and modified through getter and setter methods. Initially, the employee's name is 'John' and salary is 50000. After updating with setter methods, the name becomes 'Alice' and salary becomes 60000."
  },
  {
    language: "Python",
    level: 49,
    question: "What will the following Python code print?",
    code: `class Employee:
               employee_count = 0  # Static variable
  
               def __init__(self, name, salary):
                   self.name = name
                   self.salary = salary
                   Employee.employee_count += 1  # Increment static variable
  
               @staticmethod
               def get_employee_count():
                   return Employee.employee_count
  
           emp1 = Employee("John", 50000)
           emp2 = Employee("Alice", 60000)
           emp3 = Employee("Bob", 55000)
  
           print(Employee.get_employee_count())  # Call static method`,
    options: [
        "1. 3",
        "2. 2",
        "3. 4"
    ],
    correctAnswer: "1",
    explanation: "The static variable 'employee_count' is shared by all instances of the Employee class. Every time an employee is created, the count is incremented. The static method 'get_employee_count' accesses this shared variable to return the total number of employees."
  },
  {
    language: "JavaScript",
    level: 49,
    question: "What will the following JavaScript code log?",
    code: `class Employee {
                static employeeCount = 0;  // Static variable
  
                constructor(name, salary) {
                    this.name = name;
                    this.salary = salary;
                    Employee.employeeCount++;  // Increment static variable
                }
  
                static getEmployeeCount() {
                    return Employee.employeeCount;
                }
            }
  
            const emp1 = new Employee("John", 50000);
            const emp2 = new Employee("Alice", 60000);
            const emp3 = new Employee("Bob", 55000);
  
            console.log(Employee.getEmployeeCount());  // Call static method`,
    options: [
        "1. 3",
        "2. 2",
        "3. 4"
    ],
    correctAnswer: "1",
    explanation: "The static variable 'employeeCount' is shared by all instances of the Employee class. Every time an employee is created, the count is incremented. The static method 'getEmployeeCount' accesses this shared variable to return the total number of employees."
  },
  {
    language: "C++",
    level: 49,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
  using namespace std;
  
  class Employee {
  private:
      string name;
      double salary;
  
  public:
      static int employeeCount;  // Static variable
  
      Employee(string n, double s) : name(n), salary(s) {
          employeeCount++;  // Increment static variable
      }
  
      static int getEmployeeCount() {
          return employeeCount;
      }
  };
  
  int Employee::employeeCount = 0;  // Initialize static variable
  
  int main() {
      Employee emp1("John", 50000);
      Employee emp2("Alice", 60000);
      Employee emp3("Bob", 55000);
  
      cout << Employee::getEmployeeCount() << endl;  // Call static method
      return 0;
  }`,
    options: [
        "1. 3",
        "2. 2",
        "3. 4"
    ],
    correctAnswer: "1",
    explanation: "The static variable 'employeeCount' is shared by all instances of the Employee class. Every time an employee is created, the count is incremented. The static method 'getEmployeeCount' accesses this shared variable to return the total number of employees."
  },
  {
    language: "Python",
    level: 50,
    question: "What will the following Python code print?",
    code: `class Animal:
               def __init__(self, name):
                   self.name = name
  
               def speak(self):
                   return "Animal makes a sound"
  
           class Dog(Animal):
               def __init__(self, name, breed):
                   super().__init__(name)
                   self.breed = breed
  
               def speak(self):
                   return "Woof!"
  
           class Cat(Animal):
               def __init__(self, name, color):
                   super().__init__(name)
                   self.color = color
  
               def speak(self):
                   return "Meow!"
  
           dog = Dog("Buddy", "Golden Retriever")
           cat = Cat("Whiskers", "Black")
  
           print(dog.speak())  # Call Dog's speak method
           print(cat.speak())  # Call Cat's speak method`,
    options: [
        "1. Woof! Meow!",
        "2. Animal makes a sound Animal makes a sound",
        "3. Woof! Animal makes a sound"
    ],
    correctAnswer: "1",
    explanation: "In this code, the 'Dog' and 'Cat' classes inherit from the 'Animal' class. Both 'Dog' and 'Cat' override the 'speak' method. When the speak method is called on the 'dog' and 'cat' objects, the respective overridden methods are invoked, which return 'Woof!' and 'Meow!'"
  },
  {
    language: "JavaScript",
    level: 50,
    question: "What will the following JavaScript code log?",
    code: `class Animal {
                constructor(name) {
                    this.name = name;
                }
  
                speak() {
                    return "Animal makes a sound";
                }
            }
  
            class Dog extends Animal {
                constructor(name, breed) {
                    super(name);
                    this.breed = breed;
                }
  
                speak() {
                    return "Woof!";
                }
            }
  
            class Cat extends Animal {
                constructor(name, color) {
                    super(name);
                    this.color = color;
                }
  
                speak() {
                    return "Meow!";
                }
            }
  
            const dog = new Dog("Buddy", "Golden Retriever");
            const cat = new Cat("Whiskers", "Black");
  
            console.log(dog.speak());  // Call Dog's speak method
            console.log(cat.speak());  // Call Cat's speak method`,
    options: [
        "1. Woof! Meow!",
        "2. Animal makes a sound Animal makes a sound",
        "3. Woof! Animal makes a sound"
    ],
    correctAnswer: "1",
    explanation: "The 'Dog' and 'Cat' classes inherit from the 'Animal' class and override the 'speak' method. Calling 'speak' on the 'dog' and 'cat' objects calls their respective overridden methods, returning 'Woof!' and 'Meow!'"
  },
  {
    language: "C++",
    level: 50,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
    using namespace std;
  
    class Animal {
    public:
        string name;
        Animal(string n) : name(n) {}
  
        virtual string speak() {
            return "Animal makes a sound";
        }
    };
  
    class Dog : public Animal {
    public:
        string breed;
        Dog(string n, string b) : Animal(n), breed(b) {}
  
        string speak() override {
            return "Woof!";
        }
    };
  
    class Cat : public Animal {
    public:
        string color;
        Cat(string n, string c) : Animal(n), color(c) {}
  
        string speak() override {
            return "Meow!";
        }
    };
  
    int main() {
        Dog dog("Buddy", "Golden Retriever");
        Cat cat("Whiskers", "Black");
  
        cout << dog.speak() << endl;  // Call Dog's speak method
        cout << cat.speak() << endl;  // Call Cat's speak method
        return 0;
    }`,
    options: [
        "1. Woof! Meow!",
        "2. Animal makes a sound Animal makes a sound",
        "3. Woof! Animal makes a sound"
    ],
    correctAnswer: "1",
    explanation: "The 'Dog' and 'Cat' classes inherit from the 'Animal' class and override the 'speak' method. The 'speak' method is virtual in the base class, allowing the derived classes to override it. Calling 'speak' on 'dog' and 'cat' calls the overridden methods, returning 'Woof!' and 'Meow!'"
  },
  {
    language: "Python",
    level: 51,
    question: "What will the following Python code print?",
    code: `from abc import ABC, abstractmethod
  
           class Animal(ABC):
               species = "Animal"  # Static property
  
               def __init__(self, name):
                   self.name = name
  
               @abstractmethod
               def speak(self):
                   pass
  
           class Dog(Animal):
               def speak(self):
                   return "Woof!"
  
           dog = Dog("Buddy")
           print(dog.species)  # Accessing static property
           print(dog.speak())  # Calling the speak method`,
    options: [
        "1. Animal Woof!",
        "2. Animal Animal",
        "3. Woof! Woof!"
    ],
    correctAnswer: "1",
    explanation: "In this code, the static property 'species' is accessed through the instance of the Dog class. The 'speak' method is overridden in the Dog class, so when it's called, it prints 'Woof!'."
  },
  {
    language: "JavaScript",
    level: 51,
    question: "What will the following JavaScript code log?",
    code: `class Animal {
                static species = "Animal";  // Static property
  
                constructor(name) {
                    this.name = name;
                }
  
                speak() {
                    return "Animal makes a sound";
                }
            }
  
            class Dog extends Animal {
                speak() {
                    return "Woof!";
                }
            }
  
            const dog = new Dog("Buddy");
            console.log(dog.constructor.species);  // Accessing static property
            console.log(dog.speak());  // Calling the speak method`,
    options: [
        "1. Animal Woof!",
        "2. Animal Animal",
        "3. Woof! Woof!"
    ],
    correctAnswer: "1",
    explanation: "In this code, the static property 'species' is accessed through the constructor of the Dog class. The 'speak' method is overridden in the Dog class, so when it's called, it prints 'Woof!'."
  },
  {
    language: "C++",
    level: 51,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
    using namespace std;
  
    class Animal {
    public:
        static string species;  // Static property
  
        Animal(string n) : name(n) {}
  
        virtual string speak() {
            return "Animal makes a sound";
        }
  
    protected:
        string name;
    };
  
    string Animal::species = "Animal";  // Defining static property outside the class
  
    class Dog : public Animal {
    public:
        Dog(string n) : Animal(n) {}
  
        string speak() override {
            return "Woof!";
        }
    };
  
    int main() {
        Dog dog("Buddy");
        cout << dog.species << endl;  // Accessing static property
        cout << dog.speak() << endl;  // Calling the speak method
        return 0;
    }`,
    options: [
        "1. Animal Woof!",
        "2. Animal Animal",
        "3. Woof! Woof!"
    ],
    correctAnswer: "1",
    explanation: "In this code, the static property 'species' is accessed through the class (Dog's superclass). The 'speak' method is overridden in the Dog class, so it prints 'Woof!' when called."
  },
  {
    language: "Python",
    level: 52,
    question: "What will the following Python code print?",
    code: `class Animal:
               def __init__(self, name):
                   self.name = name
  
               @classmethod
               def get_species(cls):
                   return "Animal"
  
               def speak(self):
                   return f"{self.name} says hello!"
  
           class Dog(Animal):
               def speak(self):
                   return f"{self.name} says woof!"
  
           dog = Dog("Buddy")
           print(dog.get_species())  # Calling class method
           print(dog.speak())  # Calling instance method`,
    options: [
        "1. Animal Buddy says woof!",
        "2. Animal Buddy says hello!",
        "3. Buddy says hello! Buddy says woof!"
    ],
    correctAnswer: "1",
    explanation: "In this code, 'get_species' is a class method, so it returns the class-level 'Animal'. The 'speak' method is overridden in the Dog class, so it prints 'Buddy says woof!'."
  },
  {
    language: "JavaScript",
    level: 52,
    question: "What will the following JavaScript code log?",
    code: `class Animal {
                constructor(name) {
                    this.name = name;
                }
  
                static getSpecies() {
                    return "Animal";
                }
  
                speak() {
                    return this.name + " says hello!";
                }
            }
  
            class Dog extends Animal {
                speak() {
                    return this.name + " says woof!";
                }
            }
  
            const dog = new Dog("Buddy");
            console.log(dog.constructor.getSpecies());  // Calling static method
            console.log(dog.speak());  // Calling instance method`,
    options: [
        "1. Animal Buddy says woof!",
        "2. Animal Buddy says hello!",
        "3. Buddy says hello! Buddy says woof!"
    ],
    correctAnswer: "1",
    explanation: "In this code, 'getSpecies' is a static method, so it returns 'Animal'. The 'speak' method is overridden in the Dog class, so it prints 'Buddy says woof!'."
  },
  {
    language: "C++",
    level: 52,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
    using namespace std;
  
    class Animal {
    public:
        Animal(string n) : name(n) {}
  
        static string getSpecies() {
            return "Animal";
        }
  
        virtual string speak() {
            return name + " says hello!";
        }
  
    protected:
        string name;
    };
  
    class Dog : public Animal {
    public:
        Dog(string n) : Animal(n) {}
  
        string speak() override {
            return name + " says woof!";
        }
    };
  
    int main() {
        Dog dog("Buddy");
        cout << dog.getSpecies() << endl;  // Calling static method
        cout << dog.speak() << endl;  // Calling instance method
        return 0;
    }`,
    options: [
        "1. Animal Buddy says woof!",
        "2. Animal Buddy says hello!",
        "3. Buddy says hello! Buddy says woof!"
    ],
    correctAnswer: "1",
    explanation: "In this code, 'getSpecies' is a static method, so it returns 'Animal'. The 'speak' method is overridden in the Dog class, so it prints 'Buddy says woof!'."
  },
  {
    language: "Python",
    level: 53,
    question: "What will the following Python code print?",
    code: `class Person:
               def __init__(self, name, age):
                   self.name = name
                   self.age = age
  
               def __repr__(self):
                   return f"Person(name={self.name}, age={self.age})"
  
           people = [
               Person("Alice", 30),
               Person("Bob", 25),
               Person("Charlie", 35)
           ]
  
           sorted_people = sorted(people, key=lambda x: x.age)
           print(sorted_people)`,
    options: [
        "1. [Person(name=Bob, age=25), Person(name=Alice, age=30), Person(name=Charlie, age=35)]",
        "2. [Person(name=Alice, age=30), Person(name=Bob, age=25), Person(name=Charlie, age=35)]",
        "3. [Person(name=Charlie, age=35), Person(name=Bob, age=25), Person(name=Alice, age=30)]"
    ],
    correctAnswer: "1",
    explanation: "The 'sorted' function is sorting the 'people' list by the 'age' attribute using a lambda function as the key. This sorts the people from youngest to oldest."
  },
  {
    language: "JavaScript",
    level: 53,
    question: "What will the following JavaScript code log?",
    code: `class Person {
                constructor(name, age) {
                    this.name = name;
                    this.age = age;
                }
  
                toString() {
                    return \`Person(name=\${this.name}, age=\${this.age})\`;
                }
            }
  
            const people = [
                new Person("Alice", 30),
                new Person("Bob", 25),
                new Person("Charlie", 35)
            ];
  
            const sortedPeople = people.sort((a, b) => a.age - b.age);
            console.log(sortedPeople);`,
    options: [
        "1. [Person(name=Bob, age=25), Person(name=Alice, age=30), Person(name=Charlie, age=35)]",
        "2. [Person(name=Alice, age=30), Person(name=Bob, age=25), Person(name=Charlie, age=35)]",
        "3. [Person(name=Charlie, age=35), Person(name=Bob, age=25), Person(name=Alice, age=30)]"
    ],
    correctAnswer: "1",
    explanation: "The 'sort' function is sorting the array of 'people' by the 'age' property. The sort is in ascending order, from youngest to oldest."
  },
  {
    language: "C++",
    level: 53,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
    #include <vector>
    #include <algorithm>
    using namespace std;
  
    class Person {
    public:
        Person(string n, int a) : name(n), age(a) {}
  
        string toString() const {
            return "Person(name=" + name + ", age=" + to_string(age) + ")";
        }
  
        int getAge() const {
            return age;
        }
  
    private:
        string name;
        int age;
    };
  
    int main() {
        vector<Person> people = {
            Person("Alice", 30),
            Person("Bob", 25),
            Person("Charlie", 35)
        };
  
        sort(people.begin(), people.end(), [](const Person &a, const Person &b) {
            return a.getAge() < b.getAge();
        });
  
        for (const auto &person : people) {
            cout << person.toString() << endl;
        }
        return 0;
    }`,
    options: [
        "1. Person(name=Bob, age=25) Person(name=Alice, age=30) Person(name=Charlie, age=35)",
        "2. Person(name=Alice, age=30) Person(name=Bob, age=25) Person(name=Charlie, age=35)",
        "3. Person(name=Charlie, age=35) Person(name=Bob, age=25) Person(name=Alice, age=30)"
    ],
    correctAnswer: "1",
    explanation: "The 'sort' function is sorting the vector of 'people' based on the 'age' property in ascending order. The output will be in the order from youngest to oldest."
  },
  {
    language: "Python",
    level: 54,
    question: "What will the following Python code print?",
    code: `class Product:
               def __init__(self, name, price):
                   self.name = name
                   self.price = price
  
           products = [
               Product("Laptop", 999),
               Product("Smartphone", 699),
               Product("Tablet", 499)
           ]
  
           discount = 0.10
           discounted_products = [
               (product.name, product.price * (1 - discount)) for product in products
           ]
  
           print(discounted_products)`,
    options: [
        "1. [('Laptop', 899.1), ('Smartphone', 629.1), ('Tablet', 449.1)]",
        "2. [('Laptop', 899.9), ('Smartphone', 629.9), ('Tablet', 449.9)]",
        "3. [('Laptop', 899), ('Smartphone', 629), ('Tablet', 449)]"
    ],
    correctAnswer: "1",
    explanation: "The code applies a 10% discount to each product's price. The discount is calculated using the formula 'price * (1 - discount)'."
  },
  {
    language: "JavaScript",
    level: 54,
    question: "What will the following JavaScript code log?",
    code: `class Product {
                constructor(name, price) {
                    this.name = name;
                    this.price = price;
                }
            }
  
            const products = [
                new Product("Laptop", 999),
                new Product("Smartphone", 699),
                new Product("Tablet", 499)
            ];
  
            const discount = 0.10;
            const discountedProducts = products.map(product => {
                return { name: product.name, price: product.price * (1 - discount) };
            });
  
            console.log(discountedProducts);`,
    options: [
        "1. [{ name: 'Laptop', price: 899.1 }, { name: 'Smartphone', price: 629.1 }, { name: 'Tablet', price: 449.1 }]",
        "2. [{ name: 'Laptop', price: 899.9 }, { name: 'Smartphone', price: 629.9 }, { name: 'Tablet', price: 449.9 }]",
        "3. [{ name: 'Laptop', price: 899 }, { name: 'Smartphone', price: 629 }, { name: 'Tablet', price: 449 }]"
    ],
    correctAnswer: "1",
    explanation: "The 'map' function creates a new array of objects with discounted prices. The discount is applied as 'price * (1 - discount)'."
  },
  {
    language: "C++",
    level: 54,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
    #include <vector>
    using namespace std;
  
    class Product {
    public:
        Product(string n, double p) : name(n), price(p) {}
  
        string getName() const {
            return name;
        }
  
        double getPrice() const {
            return price;
        }
  
        void applyDiscount(double discount) {
            price = price * (1 - discount);
        }
  
    private:
        string name;
        double price;
    };
  
    int main() {
        vector<Product> products = {
            Product("Laptop", 999),
            Product("Smartphone", 699),
            Product("Tablet", 499)
        };
  
        double discount = 0.10;
        for (auto& product : products) {
            product.applyDiscount(discount);
        }
  
        for (const auto& product : products) {
            cout << "{ name: '" << product.getName() << "', price: " << product.getPrice() << " }" << endl;
        }
        return 0;
    }`,
    options: [
        "1. { name: 'Laptop', price: 899.1 } { name: 'Smartphone', price: 629.1 } { name: 'Tablet', price: 449.1 }",
        "2. { name: 'Laptop', price: 899.9 } { name: 'Smartphone', price: 629.9 } { name: 'Tablet', price: 449.9 }",
        "3. { name: 'Laptop', price: 899 } { name: 'Smartphone', price: 629 } { name: 'Tablet', price: 449 }"
    ],
    correctAnswer: "1",
    explanation: "The 'applyDiscount' method applies a 10% discount to each product's price. The result is printed after the discount is applied."
  },
  {
    language: "Python",
    level: 55,
    question: "What will the following Python code print?",
    code: `class Employee:
               def __init__(self, name, salary):
                   self.name = name
                   self.salary = salary
  
           employees = [
               Employee("Alice", 60000),
               Employee("Bob", 55000),
               Employee("Charlie", 70000)
           ]
  
           def apply_bonus(employee):
               employee.salary *= 1.10  # 10% bonus
  
           for employee in employees:
               apply_bonus(employee)
  
           employee_salaries = [(employee.name, employee.salary) for employee in employees]
           print(employee_salaries)`,
    options: [
        "1. [('Alice', 66000), ('Bob', 60500), ('Charlie', 77000)]",
        "2. [('Alice', 66000), ('Bob', 60000), ('Charlie', 75000)]",
        "3. [('Alice', 60000), ('Bob', 55000), ('Charlie', 70000)]"
    ],
    correctAnswer: "1",
    explanation: "The 'apply_bonus' function increases each employee's salary by 10%. The salaries are updated accordingly."
  },
  {
    language: "JavaScript",
    level: 55,
    question: "What will the following JavaScript code log?",
    code: `class Employee {
                constructor(name, salary) {
                    this.name = name;
                    this.salary = salary;
                }
  
                applyBonus() {
                    this.salary *= 1.10;  // 10% bonus
                }
            }
  
            const employees = [
                new Employee("Alice", 60000),
                new Employee("Bob", 55000),
                new Employee("Charlie", 70000)
            ];
  
            employees.forEach(employee => employee.applyBonus());
  
            const employeeSalaries = employees.map(employee => {
                return { name: employee.name, salary: employee.salary };
            });
  
            console.log(employeeSalaries);`,
    options: [
        "1. [{ name: 'Alice', salary: 66000 }, { name: 'Bob', salary: 60500 }, { name: 'Charlie', salary: 77000 }]",
        "2. [{ name: 'Alice', salary: 66000 }, { name: 'Bob', salary: 60000 }, { name: 'Charlie', salary: 75000 }]",
        "3. [{ name: 'Alice', salary: 60000 }, { name: 'Bob', salary: 55000 }, { name: 'Charlie', salary: 70000 }]"
    ],
    correctAnswer: "1",
    explanation: "The 'applyBonus' method increases each employee's salary by 10%. The salaries are updated and then printed."
  },
  {
    language: "C++",
    level: 55,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
    #include <vector>
    using namespace std;
  
    class Employee {
    public:
        Employee(string n, double s) : name(n), salary(s) {}
  
        string getName() const {
            return name;
        }
  
        double getSalary() const {
            return salary;
        }
  
        void applyBonus() {
            salary *= 1.10;  // 10% bonus
        }
  
    private:
        string name;
        double salary;
    };
  
    int main() {
        vector<Employee> employees = {
            Employee("Alice", 60000),
            Employee("Bob", 55000),
            Employee("Charlie", 70000)
        };
  
        for (auto& employee : employees) {
            employee.applyBonus();
        }
  
        for (const auto& employee : employees) {
            cout << "{ name: '" << employee.getName() << "', salary: " << employee.getSalary() << " }" << endl;
        }
  
        return 0;
    }`,
    options: [
        "1. { name: 'Alice', salary: 66000 } { name: 'Bob', salary: 60500 } { name: 'Charlie', salary: 77000 }",
        "2. { name: 'Alice', salary: 66000 } { name: 'Bob', salary: 60000 } { name: 'Charlie', salary: 75000 }",
        "3. { name: 'Alice', salary: 60000 } { name: 'Bob', salary: 55000 } { name: 'Charlie', salary: 70000 }"
    ],
    correctAnswer: "1",
    explanation: "The 'applyBonus' method increases each employee's salary by 10%. The new salaries are printed after the bonus is applied."
  },
  {
    language: "Python",
    level: 56,
    question: "What will the following Python code print?",
    code: `class Car:
               def __init__(self, make, model, year):
                   self.make = make
                   self.model = model
                   self.year = year
                   self.mileage = 0
  
               def drive(self, miles):
                   self.mileage += miles
  
               def display_info(self):
                   return f"{self.year} {self.make} {self.model} with {self.mileage} miles"
  
           cars = [
               Car("Toyota", "Camry", 2020),
               Car("Honda", "Civic", 2022),
               Car("Ford", "Focus", 2021)
           ]
  
           cars[0].drive(100)
           cars[1].drive(200)
           cars[2].drive(50)
  
           car_info = [car.display_info() for car in cars]
           print(car_info)`,
    options: [
        "1. ['2020 Toyota Camry with 100 miles', '2022 Honda Civic with 200 miles', '2021 Ford Focus with 50 miles']",
        "2. ['2020 Toyota Camry with 0 miles', '2022 Honda Civic with 0 miles', '2021 Ford Focus with 0 miles']",
        "3. ['2020 Toyota Camry with 100 miles', '2022 Honda Civic with 0 miles', '2021 Ford Focus with 50 miles']"
    ],
    correctAnswer: "1",
    explanation: "Each car's `drive` method adds miles to its `mileage`. The `display_info` method shows the car's details along with the updated mileage."
  },
  {
    language: "JavaScript",
    level: 56,
    question: "What will the following JavaScript code log?",
    code: `class Car {
                constructor(make, model, year) {
                    this.make = make;
                    this.model = model;
                    this.year = year;
                    this.mileage = 0;
                }
  
                drive(miles) {
                    this.mileage += miles;
                }
  
                displayInfo() {
                    return \`\${this.year} \${this.make} \${this.model} with \${this.mileage} miles\`;
                }
            }
  
            const cars = [
                new Car("Toyota", "Camry", 2020),
                new Car("Honda", "Civic", 2022),
                new Car("Ford", "Focus", 2021)
            ];
  
            cars[0].drive(100);
            cars[1].drive(200);
            cars[2].drive(50);
  
            const carInfo = cars.map(car => car.displayInfo());
            console.log(carInfo);`,
    options: [
        "1. ['2020 Toyota Camry with 100 miles', '2022 Honda Civic with 200 miles', '2021 Ford Focus with 50 miles']",
        "2. ['2020 Toyota Camry with 0 miles', '2022 Honda Civic with 0 miles', '2021 Ford Focus with 0 miles']",
        "3. ['2020 Toyota Camry with 100 miles', '2022 Honda Civic with 0 miles', '2021 Ford Focus with 50 miles']"
    ],
    correctAnswer: "1",
    explanation: "Each car's `drive` method adds miles to its `mileage`. The `displayInfo` method shows the car's details along with the updated mileage."
  },
  
  {
    language: "C++",
    level: 56,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
    #include <vector>
    using namespace std;
  
    class Car {
    public:
        Car(string m, string mod, int y) : make(m), model(mod), year(y), mileage(0) {}
  
        void drive(int miles) {
            mileage += miles;
        }
  
        string displayInfo() const {
            return to_string(year) + " " + make + " " + model + " with " + to_string(mileage) + " miles";
        }
  
    private:
        string make;
        string model;
        int year;
        int mileage;
    };
  
    int main() {
        vector<Car> cars = {
            Car("Toyota", "Camry", 2020),
            Car("Honda", "Civic", 2022),
            Car("Ford", "Focus", 2021)
        };
  
        cars[0].drive(100);
        cars[1].drive(200);
        cars[2].drive(50);
  
        for (const auto& car : cars) {
            cout << car.displayInfo() << endl;
        }
  
        return 0;
    }`,
    options: [
        "1. 2020 Toyota Camry with 100 miles\n2022 Honda Civic with 200 miles\n2021 Ford Focus with 50 miles",
        "2. 2020 Toyota Camry with 0 miles\n2022 Honda Civic with 0 miles\n2021 Ford Focus with 0 miles",
        "3. 2020 Toyota Camry with 100 miles\n2022 Honda Civic with 0 miles\n2021 Ford Focus with 50 miles"
    ],
    correctAnswer: "1",
    explanation: "The `drive` method increases the mileage of each car. The `displayInfo` function prints the car details along with the updated mileage."
  },
  {
    language: "Python",
    level: 57,
    question: "What will the following Python code print?",
    code: `class Person:
               def __init__(self, name, age):
                   self.name = name
                   self.age = age
  
               def celebrate_birthday(self):
                   self.age += 1
                   return f"Happy Birthday, {self.name}! You are now {self.age} years old."
  
           person = Person("Alice", 30)
           person.celebrate_birthday()
           person.celebrate_birthday()
           print(person.age)`,
    options: [
        "1. 30",
        "2. 31",
        "3. 32"
    ],
    correctAnswer: "32",
    explanation: "The `celebrate_birthday` method increments the `age` by 1. The method is called twice, so Alice's age increases by 2."
  },
  {
    language: "JavaScript",
    level: 57,
    question: "What will the following JavaScript code log?",
    code: `class Person {
                constructor(name, age) {
                    this.name = name;
                    this.age = age;
                }
  
                celebrateBirthday() {
                    this.age++;
                    return \`Happy Birthday, \${this.name}! You are now \${this.age} years old.\`;
                }
            }
  
            const person = new Person("Alice", 30);
            person.celebrateBirthday();
            person.celebrateBirthday();
            console.log(person.age);`,
    options: [
        "1. 30",
        "2. 31",
        "3. 32"
    ],
    correctAnswer: "32",
    explanation: "The `celebrateBirthday` method increases the `age` by 1. The method is called twice, so Alice's age increases by 2."
  },
  {
    language: "C++",
    level: 57,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
    using namespace std;
  
    class Person {
    public:
        Person(string n, int a) : name(n), age(a) {}
  
        void celebrateBirthday() {
            age++;
        }
  
        int getAge() const {
            return age;
        }
  
    private:
        string name;
        int age;
    };
  
    int main() {
        Person person("Alice", 30);
        person.celebrateBirthday();
        person.celebrateBirthday();
        cout << person.getAge() << endl;
        return 0;
    }`,
    options: [
        "1. 30",
        "2. 31",
        "3. 32"
    ],
    correctAnswer: "32",
    explanation: "The `celebrateBirthday` method increments the `age` by 1. The method is called twice, so Alice's age increases by 2."
  },
  
  {
    language: "Python",
    level: 58,
    question: "What will the following Python code print?",
    code: `class Car:
               def __init__(self, make, model):
                   self.make = make
                   self.model = model
                   self.speed = 0
  
               def accelerate(self, increment):
                   self.speed += increment
  
               def brake(self, decrement):
                   self.speed -= decrement
  
           car = Car("Toyota", "Corolla")
           car.accelerate(50)
           car.brake(20)
           print(car.speed)`,
    options: [
        "1. 50",
        "2. 30",
        "3. 20"
    ],
    correctAnswer: "30",
    explanation: "The car's speed increases by 50 and then decreases by 20, resulting in a final speed of 30."
  },
  {
    language: "JavaScript",
    level: 58,
    question: "What will the following JavaScript code log?",
    code: `class Car {
                constructor(make, model) {
                    this.make = make;
                    this.model = model;
                    this.speed = 0;
                }
  
                accelerate(increment) {
                    this.speed += increment;
                }
  
                brake(decrement) {
                    this.speed -= decrement;
                }
            }
  
            const car = new Car("Toyota", "Corolla");
            car.accelerate(50);
            car.brake(20);
            console.log(car.speed);`,
    options: [
        "1. 50",
        "2. 30",
        "3. 20"
    ],
    correctAnswer: "30",
    explanation: "The car's speed increases by 50 and then decreases by 20, resulting in a final speed of 30."
  },
  {
    language: "C++",
    level: 58,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
    using namespace std;
  
    class Car {
    public:
        Car(string m, string mo) : make(m), model(mo), speed(0) {}
  
        void accelerate(int increment) {
            speed += increment;
        }
  
        void brake(int decrement) {
            speed -= decrement;
        }
  
        int getSpeed() const {
            return speed;
        }
  
    private:
        string make;
        string model;
        int speed;
    };
  
    int main() {
        Car car("Toyota", "Corolla");
        car.accelerate(50);
        car.brake(20);
        cout << car.getSpeed() << endl;
        return 0;
    }`,
    options: [
        "1. 50",
        "2. 30",
        "3. 20"
    ],
    correctAnswer: "30",
    explanation: "The car's speed increases by 50 and then decreases by 20, resulting in a final speed of 30."
  },
  {
    language: "Python",
    level: 59,
    question: "What will the following Python code print?",
    code: `class BankAccount:
               def __init__(self, owner, balance=0):
                   self.owner = owner
                   self.balance = balance
  
               def deposit(self, amount):
                   self.balance += amount
  
               def withdraw(self, amount):
                   if amount > self.balance:
                       return "Insufficient funds"
                   self.balance -= amount
  
           account = BankAccount("John", 1000)
           account.deposit(500)
           account.withdraw(300)
           print(account.balance)`,
    options: [
        "1. 1000",
        "2. 1200",
        "3. 500"
    ],
    correctAnswer: "1200",
    explanation: "The deposit increases the balance by 500, making it 1500. After withdrawing 300, the balance becomes 1200."
  },
  {
    language: "JavaScript",
    level: 59,
    question: "What will the following JavaScript code log?",
    code: `class BankAccount {
                constructor(owner, balance = 0) {
                    this.owner = owner;
                    this.balance = balance;
                }
  
                deposit(amount) {
                    this.balance += amount;
                }
  
                withdraw(amount) {
                    if (amount > this.balance) {
                        return "Insufficient funds";
                    }
                    this.balance -= amount;
                }
            }
  
            const account = new BankAccount("John", 1000);
            account.deposit(500);
            account.withdraw(300);
            console.log(account.balance);`,
    options: [
        "1. 1000",
        "2. 1200",
        "3. 500"
    ],
    correctAnswer: "1200",
    explanation: "The deposit increases the balance by 500, making it 1500. After withdrawing 300, the balance becomes 1200."
  },
  {
    language: "C++",
    level: 59,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
    using namespace std;
  
    class BankAccount {
    public:
        BankAccount(string o, double b = 0) : owner(o), balance(b) {}
  
        void deposit(double amount) {
            balance += amount;
        }
  
        void withdraw(double amount) {
            if (amount > balance) {
                cout << "Insufficient funds" << endl;
                return;
            }
            balance -= amount;
        }
  
        double getBalance() const {
            return balance;
        }
  
    private:
        string owner;
        double balance;
    };
  
    int main() {
        BankAccount account("John", 1000);
        account.deposit(500);
        account.withdraw(300);
        cout << account.getBalance() << endl;
        return 0;
    }`,
    options: [
        "1. 1000",
        "2. 1200",
        "3. 500"
    ],
    correctAnswer: "1200",
    explanation: "The deposit increases the balance by 500, making it 1500. After withdrawing 300, the balance becomes 1200."
  },
  {
    language: "Python",
    level: 60,
    question: "What will the following Python code print?",
    code: `class Rectangle:
               def __init__(self, width, height):
                   self.width = width
                   self.height = height
  
               def area(self):
                   return self.width * self.height
  
           rect = Rectangle(10, 5)
           print(rect.area())`,
    options: [
        "1. 50",
        "2. 15",
        "3. 100"
    ],
    correctAnswer: "50",
    explanation: "The area of a rectangle is calculated by multiplying its width by its height. Here, 10 * 5 = 50."
  },
  {
    language: "JavaScript",
    level: 60,
    question: "What will the following JavaScript code log?",
    code: `class Rectangle {
                constructor(width, height) {
                    this.width = width;
                    this.height = height;
                }
  
                area() {
                    return this.width * this.height;
                }
            }
  
            const rect = new Rectangle(10, 5);
            console.log(rect.area());`,
    options: [
        "1. 50",
        "2. 15",
        "3. 100"
    ],
    correctAnswer: "50",
    explanation: "The area of a rectangle is calculated by multiplying its width by its height. Here, 10 * 5 = 50."
  },
  {
    language: "C++",
    level: 60,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
    using namespace std;
  
    class Rectangle {
    public:
        Rectangle(int w, int h) : width(w), height(h) {}
  
        int area() const {
            return width * height;
        }
  
    private:
        int width;
        int height;
    };
  
    int main() {
        Rectangle rect(10, 5);
        cout << rect.area() << endl;
        return 0;
    }`,
    options: [
        "1. 50",
        "2. 15",
        "3. 100"
    ],
    correctAnswer: "50",
    explanation: "The area of a rectangle is calculated by multiplying its width by its height. Here, 10 * 5 = 50."
  },
  {
    language: "Python",
    level: 61,
    question: "What will the following Python code print?",
    code: `def factorial(n):
               if n == 0:
                   return 1
               else:
                   return n * factorial(n-1)
  
           print(factorial(5))`,
    options: [
        "1. 120",
        "2. 60",
        "3. 25"
    ],
    correctAnswer: "120",
    explanation: "This function calculates the factorial of 5. The factorial of 5 (5!) is 5 * 4 * 3 * 2 * 1 = 120."
  },
  {
    language: "JavaScript",
    level: 61,
    question: "What will the following JavaScript code log?",
    code: `function factorial(n) {
                if (n === 0) {
                    return 1;
                } else {
                    return n * factorial(n - 1);
                }
            }
  
            console.log(factorial(5));`,
    options: [
        "1. 120",
        "2. 60",
        "3. 25"
    ],
    correctAnswer: "120",
    explanation: "This function calculates the factorial of 5. The factorial of 5 (5!) is 5 * 4 * 3 * 2 * 1 = 120."
  },
  {
    language: "C++",
    level: 61,
    question: "What will the following C++ code print?",
    code: `#include <iostream>
    using namespace std;
  
    int factorial(int n) {
        if (n == 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
  
    int main() {
        cout << factorial(5) << endl;
        return 0;
    }`,
    options: [
        "1. 120",
        "2. 60",
        "3. 25"
    ],
    correctAnswer: "120",
    explanation: "This function calculates the factorial of 5. The factorial of 5 (5!) is 5 * 4 * 3 * 2 * 1 = 120."
  },
  {
    language: "Python",
    level: 62,
    question: "What will the following Python code print after sorting the list using Bubble Sort?",
    code: `def bubble_sort(arr):
               n = len(arr)
               for i in range(n):
                   for j in range(0, n-i-1):
                       if arr[j] > arr[j+1]:
                           arr[j], arr[j+1] = arr[j+1], arr[j]
  
           arr = [64, 34, 25, 12, 22, 11, 90]
           bubble_sort(arr)
           print(arr)`,
    options: [
        "1. [11, 12, 22, 25, 34, 64, 90]",
        "2. [90, 64, 34, 25, 22, 12, 11]",
        "3. [64, 34, 25, 12, 22, 11, 90]"
    ],
    correctAnswer: "11, 12, 22, 25, 34, 64, 90",
    explanation: "Bubble sort works by repeatedly swapping adjacent elements if they are in the wrong order. The final sorted list is [11, 12, 22, 25, 34, 64, 90]."
  },
  {
    language: "JavaScript",
    level: 62,
    question: "What will the following JavaScript code print after sorting the array using Bubble Sort?",
    code: `function bubbleSort(arr) {
                let n = arr.length;
                for (let i = 0; i < n; i++) {
                    for (let j = 0; j < n - i - 1; j++) {
                        if (arr[j] > arr[j + 1]) {
                            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                        }
                    }
                }
            }
  
            let arr = [64, 34, 25, 12, 22, 11, 90];
            bubbleSort(arr);
            console.log(arr);`,
    options: [
        "1. [11, 12, 22, 25, 34, 64, 90]",
        "2. [90, 64, 34, 25, 22, 12, 11]",
        "3. [64, 34, 25, 12, 22, 11, 90]"
    ],
    correctAnswer: "11, 12, 22, 25, 34, 64, 90",
    explanation: "Bubble sort works by repeatedly swapping adjacent elements if they are in the wrong order. The final sorted array is [11, 12, 22, 25, 34, 64, 90]."
  },
  {
    language: "C++",
    level: 62,
    question: "What will the following C++ code print after sorting the array using Bubble Sort?",
    code: `#include <iostream>
    using namespace std;
  
    void bubbleSort(int arr[], int n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr[j], arr[j + 1]);
                }
            }
        }
    }
  
    int main() {
        int arr[] = {64, 34, 25, 12, 22, 11, 90};
        int n = sizeof(arr) / sizeof(arr[0]);
        bubbleSort(arr, n);
        for (int i = 0; i < n; i++) {
            cout << arr[i] << " ";
        }
        return 0;
    }`,
    options: [
        "1. 11 12 22 25 34 64 90",
        "2. 90 64 34 25 22 12 11",
        "3. 64 34 25 12 22 11 90"
    ],
    correctAnswer: "11 12 22 25 34 64 90",
    explanation: "Bubble sort repeatedly compares adjacent elements and swaps them if they are in the wrong order. The final sorted array is [11, 12, 22, 25, 34, 64, 90]."
  },
  {
    language: "Python",
    level: 63,
    question: "What will the following Python code print after performing binary search on the sorted list?",
    code: `def binary_search(arr, target):
               left, right = 0, len(arr) - 1
               while left <= right:
                   mid = (left + right) // 2
                   if arr[mid] == target:
                       return mid
                   elif arr[mid] < target:
                       left = mid + 1
                   else:
                       right = mid - 1
               return -1
  
           arr = [11, 12, 22, 25, 34, 64, 90]
           target = 25
           result = binary_search(arr, target)
           print(result)`,
    options: [
        "1. 3",
        "2. -1",
        "3. 2"
    ],
    correctAnswer: "3",
    explanation: "In binary search, the algorithm checks the middle element of the list. In this case, the element 25 is found at index 3, so the result is 3."
  },
  {
    language: "JavaScript",
    level: 63,
    question: "What will the following JavaScript code print after performing binary search on the sorted array?",
    code: `function binarySearch(arr, target) {
                let left = 0, right = arr.length - 1;
                while (left <= right) {
                    let mid = Math.floor((left + right) / 2);
                    if (arr[mid] === target) {
                        return mid;
                    } else if (arr[mid] < target) {
                        left = mid + 1;
                    } else {
                        right = mid - 1;
                    }
                }
                return -1;
            }
  
            let arr = [11, 12, 22, 25, 34, 64, 90];
            let target = 25;
            let result = binarySearch(arr, target);
            console.log(result);`,
    options: [
        "1. 3",
        "2. -1",
        "3. 2"
    ],
    correctAnswer: "3",
    explanation: "Binary search works by comparing the middle element of the sorted array with the target. The element 25 is found at index 3, so the result is 3."
  },
  {
    language: "C++",
    level: 63,
    question: "What will the following C++ code print after performing binary search on the sorted array?",
    code: `#include <iostream>
    using namespace std;
  
    int binarySearch(int arr[], int n, int target) {
        int left = 0, right = n - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
  
    int main() {
        int arr[] = {11, 12, 22, 25, 34, 64, 90};
        int target = 25;
        int n = sizeof(arr) / sizeof(arr[0]);
        int result = binarySearch(arr, n, target);
        cout << result << endl;
        return 0;
    }`,
    options: [
        "1. 3",
        "2. -1",
        "3. 2"
    ],
    correctAnswer: "3",
    explanation: "In binary search, the middle element is compared with the target. The target 25 is located at index 3 in the array, so the result is 3."
  },
  {
    language: "Python",
    level: 64,
    question: "What will the following Python code print after performing the Quick Sort algorithm on the list?",
    code: `def quick_sort(arr):
               if len(arr) <= 1:
                   return arr
               pivot = arr[len(arr) // 2]
               left = [x for x in arr if x < pivot]
               middle = [x for x in arr if x == pivot]
               right = [x for x in arr if x > pivot]
               return quick_sort(left) + middle + quick_sort(right)
  
           arr = [34, 7, 23, 32, 5, 62]
           sorted_arr = quick_sort(arr)
           print(sorted_arr)`,
    options: [
        "1. [5, 7, 23, 32, 34, 62]",
        "2. [7, 5, 32, 23, 34, 62]",
        "3. [34, 7, 5, 32, 62, 23]"
    ],
    correctAnswer: "1",
    explanation: "Quick Sort works by selecting a pivot and sorting the elements around it. After recursively sorting the left and right parts, the result is [5, 7, 23, 32, 34, 62]."
  },
  {
    language: "JavaScript",
    level: 64,
    question: "What will the following JavaScript code print after performing the Quick Sort algorithm on the array?",
    code: `function quickSort(arr) {
                if (arr.length <= 1) {
                    return arr;
                }
                let pivot = arr[Math.floor(arr.length / 2)];
                let left = arr.filter(x => x < pivot);
                let middle = arr.filter(x => x === pivot);
                let right = arr.filter(x => x > pivot);
                return [...quickSort(left), ...middle, ...quickSort(right)];
            }
  
            let arr = [34, 7, 23, 32, 5, 62];
            let sortedArr = quickSort(arr);
            console.log(sortedArr);`,
    options: [
        "1. [5, 7, 23, 32, 34, 62]",
        "2. [7, 5, 32, 23, 34, 62]",
        "3. [34, 7, 5, 32, 62, 23]"
    ],
    correctAnswer: "1",
    explanation: "The Quick Sort algorithm selects a pivot and recursively sorts the left and right subarrays. After sorting, the result is [5, 7, 23, 32, 34, 62]."
  },
  {
    language: "C++",
    level: 64,
    question: "What will the following C++ code print after performing the Quick Sort algorithm on the array?",
    code: `#include <iostream>
    #include <vector>
    using namespace std;
  
    vector<int> quickSort(vector<int> arr) {
        if (arr.size() <= 1) return arr;
        int pivot = arr[arr.size() / 2];
        vector<int> left, middle, right;
        for (int x : arr) {
            if (x < pivot) left.push_back(x);
            else if (x == pivot) middle.push_back(x);
            else right.push_back(x);
        }
        vector<int> result;
        result.insert(result.end(), quickSort(left).begin(), quickSort(left).end());
        result.insert(result.end(), middle.begin(), middle.end());
        result.insert(result.end(), quickSort(right).begin(), quickSort(right).end());
        return result;
    }
  
    int main() {
        vector<int> arr = {34, 7, 23, 32, 5, 62};
        vector<int> sortedArr = quickSort(arr);
        for (int num : sortedArr) {
            cout << num << " ";
        }
        cout << endl;
        return 0;
    }`,
    options: [
        "1. 5 7 23 32 34 62",
        "2. 7 5 32 23 34 62",
        "3. 34 7 5 32 62 23"
    ],
    correctAnswer: "1",
    explanation: "Quick Sort selects a pivot and sorts the array recursively. After sorting the array, the result is 5 7 23 32 34 62."
  },
  {
    language: "Python",
    level: 65,
    question: "What will the following Python code print after performing insertion sort on the array?",
    code: `def insertion_sort(arr):
               for i in range(1, len(arr)):
                   key = arr[i]
                   j = i - 1
                   while j >= 0 and arr[j] > key:
                       arr[j + 1] = arr[j]
                       j -= 1
                   arr[j + 1] = key
               return arr
  
           arr = [12, 11, 13, 5, 6]
           sorted_arr = insertion_sort(arr)
           print(sorted_arr)`,
    options: [
        "1. [5, 6, 11, 12, 13]",
        "2. [6, 5, 11, 12, 13]",
        "3. [12, 11, 13, 5, 6]"
    ],
    correctAnswer: "1",
    explanation: "The insertion sort algorithm sorts the array in ascending order. The sorted array will be [5, 6, 11, 12, 13]."
  },
  
  {
    language: "JavaScript",
    level: 65,
    question: "What will the following JavaScript code print after performing insertion sort on the array?",
    code: `function insertionSort(arr) {
                for (let i = 1; i < arr.length; i++) {
                    let key = arr[i];
                    let j = i - 1;
                    while (j >= 0 && arr[j] > key) {
                        arr[j + 1] = arr[j];
                        j--;
                    }
                    arr[j + 1] = key;
                }
                return arr;
            }
  
            let arr = [12, 11, 13, 5, 6];
            let sortedArr = insertionSort(arr);
            console.log(sortedArr);`,
    options: [
        "1. [5, 6, 11, 12, 13]",
        "2. [6, 5, 11, 12, 13]",
        "3. [12, 11, 13, 5, 6]"
    ],
    correctAnswer: "1",
    explanation: "The insertion sort algorithm sorts the array in ascending order. The sorted array will be [5, 6, 11, 12, 13]."
  },
  {
    language: "C++",
    level: 65,
    question: "What will the following C++ code print after performing insertion sort on the array?",
    code: `#include <iostream>
    #include <vector>
    using namespace std;
  
    void insertionSort(vector<int>& arr) {
        for (int i = 1; i < arr.size(); i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }
  
    int main() {
        vector<int> arr = {12, 11, 13, 5, 6};
        insertionSort(arr);
        for (int num : arr) {
            cout << num << " ";
        }
        cout << endl;
        return 0;
    }`,
    options: [
        "1. [5, 6, 11, 12, 13]",
        "2. [6, 5, 11, 12, 13]",
        "3. [12, 11, 13, 5, 6]"
    ],
    correctAnswer: "1",
    explanation: "The insertion sort algorithm sorts the array in ascending order. The sorted array will be [5, 6, 11, 12, 13]."
  },
  {
    language: "Python",
    level: 66,
    question: "What will the following Python code print after performing a binary search for the number 23 in the list?",
    code: `def binary_search(arr, target):
               low = 0
               high = len(arr) - 1
               while low <= high:
                   mid = (low + high) // 2
                   if arr[mid] == target:
                       return mid
                   elif arr[mid] < target:
                       low = mid + 1
                   else:
                       high = mid - 1
               return -1
  
           arr = [5, 7, 23, 32, 34, 62]
           target = 23
           index = binary_search(arr, target)
           print(index)`,
    options: [
        "1. 2",
        "2. 3",
        "3. -1"
    ],
    correctAnswer: "1",
    explanation: "The binary search algorithm finds the target number 23 at index 2 in the sorted list."
  },
  {
    language: "JavaScript",
    level: 66,
    question: "What will the following JavaScript code print after performing a binary search for the number 23 in the array?",
    code: `function binarySearch(arr, target) {
                let low = 0;
                let high = arr.length - 1;
                while (low <= high) {
                    let mid = Math.floor((low + high) / 2);
                    if (arr[mid] === target) {
                        return mid;
                    } else if (arr[mid] < target) {
                        low = mid + 1;
                    } else {
                        high = mid - 1;
                    }
                }
                return -1;
            }
  
            let arr = [5, 7, 23, 32, 34, 62];
            let target = 23;
            let index = binarySearch(arr, target);
            console.log(index);`,
    options: [
        "1. 2",
        "2. 3",
        "3. -1"
    ],
    correctAnswer: "1",
    explanation: "The binary search algorithm finds the target number 23 at index 2 in the sorted array."
  },
  {
    language: "C++",
    level: 66,
    question: "What will the following C++ code print after performing a binary search for the number 23 in the array?",
    code: `#include <iostream>
    #include <vector>
    using namespace std;
  
    int binarySearch(vector<int>& arr, int target) {
        int low = 0;
        int high = arr.size() - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }
  
    int main() {
        vector<int> arr = {5, 7, 23, 32, 34, 62};
        int target = 23;
        int index = binarySearch(arr, target);
        cout << index << endl;
        return 0;
    }`,
    options: [
        "1. 2",
        "2. 3",
        "3. -1"
    ],
    correctAnswer: "1",
    explanation: "The binary search algorithm finds the target number 23 at index 2 in the sorted array."
  },
  {
    language: "Python",
    level: 67,
    question: "What will the following Python code print when searching for the value 7 in the sorted list?",
    code: `def binary_search(arr, target):
               low = 0
               high = len(arr) - 1
               while low <= high:
                   mid = (low + high) // 2
                   if arr[mid] == target:
                       return mid
                   elif arr[mid] < target:
                       low = mid + 1
                   else:
                       high = mid - 1
               return -1
  
           arr = [1, 3, 5, 7, 9, 11]
           target = 7
           result = binary_search(arr, target)
           print(result)`,
    options: [
        "1. 3",
        "2. 4",
        "3. -1"
    ],
    correctAnswer: "1",
    explanation: "The binary search algorithm finds the target value 7 at index 3 in the sorted list [1, 3, 5, 7, 9, 11]."
  },
  {
    language: "JavaScript",
    level: 67,
    question: "What will the following JavaScript code print when searching for the value 7 in the sorted list?",
    code: `function binarySearch(arr, target) {
                let low = 0;
                let high = arr.length - 1;
                while (low <= high) {
                    let mid = Math.floor((low + high) / 2);
                    if (arr[mid] === target) {
                        return mid;
                    } else if (arr[mid] < target) {
                        low = mid + 1;
                    } else {
                        high = mid - 1;
                    }
                }
                return -1;
            }
  
            const arr = [1, 3, 5, 7, 9, 11];
            const target = 7;
            const result = binarySearch(arr, target);
            console.log(result);`,
    options: [
        "1. 3",
        "2. 4",
        "3. -1"
    ],
    correctAnswer: "1",
    explanation: "The binary search algorithm finds the target value 7 at index 3 in the sorted list [1, 3, 5, 7, 9, 11]."
  },
  {
    language: "C++",
    level: 67,
    question: "What will the following C++ code print when searching for the value 7 in the sorted list?",
    code: `#include <iostream>
    #include <vector>
    using namespace std;
  
    int binarySearch(vector<int>& arr, int target) {
        int low = 0;
        int high = arr.size() - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }
  
    int main() {
        vector<int> arr = {1, 3, 5, 7, 9, 11};
        int target = 7;
        int result = binarySearch(arr, target);
        cout << result << endl;
        return 0;
    }`,
    options: [
        "1. 3",
        "2. 4",
        "3. -1"
    ],
    correctAnswer: "1",
    explanation: "The binary search algorithm finds the target value 7 at index 3 in the sorted list [1, 3, 5, 7, 9, 11]."
  },
  {
    language: "Python",
    level: 68,
    question: "What will the following Python code print after sorting the array using Quick Sort?",
    code: `def quick_sort(arr):
               if len(arr) <= 1:
                   return arr
               pivot = arr[len(arr) // 2]
               left = [x for x in arr if x < pivot]
               middle = [x for x in arr if x == pivot]
               right = [x for x in arr if x > pivot]
               return quick_sort(left) + middle + quick_sort(right)
  
           arr = [10, 7, 8, 9, 1, 5]
           sorted_arr = quick_sort(arr)
           print(sorted_arr)`,
    options: [
        "1. [1, 5, 7, 8, 9, 10]",
        "2. [10, 9, 8, 7, 5, 1]",
        "3. [10, 1, 5, 7, 8, 9]"
    ],
    correctAnswer: "1",
    explanation: "The Quick Sort algorithm sorts the array [10, 7, 8, 9, 1, 5] into the order [1, 5, 7, 8, 9, 10]."
  },
  {
    language: "JavaScript",
    level: 68,
    question: "What will the following JavaScript code print after sorting the array using Quick Sort?",
    code: `function quickSort(arr) {
                if (arr.length <= 1) {
                    return arr;
                }
                const pivot = arr[Math.floor(arr.length / 2)];
                const left = arr.filter(x => x < pivot);
                const middle = arr.filter(x => x === pivot);
                const right = arr.filter(x => x > pivot);
                return [...quickSort(left), ...middle, ...quickSort(right)];
            }
  
            const arr = [10, 7, 8, 9, 1, 5];
            const sortedArr = quickSort(arr);
            console.log(sortedArr);`,
    options: [
        "1. [1, 5, 7, 8, 9, 10]",
        "2. [10, 9, 8, 7, 5, 1]",
        "3. [10, 1, 5, 7, 8, 9]"
    ],
    correctAnswer: "1",
    explanation: "The Quick Sort algorithm sorts the array [10, 7, 8, 9, 1, 5] into the order [1, 5, 7, 8, 9, 10]."
  },
  {
    language: "C++",
    level: 68,
    question: "What will the following C++ code print after sorting the array using Quick Sort?",
    code: `#include <iostream>
    #include <vector>
    #include <algorithm>
    using namespace std;
  
    vector<int> quickSort(vector<int>& arr) {
        if (arr.size() <= 1) {
            return arr;
        }
        int pivot = arr[arr.size() / 2];
        vector<int> left, middle, right;
        for (int x : arr) {
            if (x < pivot) {
                left.push_back(x);
            } else if (x == pivot) {
                middle.push_back(x);
            } else {
                right.push_back(x);
            }
        }
        vector<int> result = quickSort(left);
        result.insert(result.end(), middle.begin(), middle.end());
        vector<int> rightSorted = quickSort(right);
        result.insert(result.end(), rightSorted.begin(), rightSorted.end());
        return result;
    }
  
    int main() {
        vector<int> arr = {10, 7, 8, 9, 1, 5};
        vector<int> sortedArr = quickSort(arr);
        for (int num : sortedArr) {
            cout << num << " ";
        }
        cout << endl;
        return 0;
    }`,
    options: [
        "1. 1 5 7 8 9 10",
        "2. 10 9 8 7 5 1",
        "3. 10 1 5 7 8 9"
    ],
    correctAnswer: "1",
    explanation: "The Quick Sort algorithm sorts the array [10, 7, 8, 9, 1, 5] into the order 1 5 7 8 9 10."
  },
  {
    language: "Python",
    level: 69,
    question: "What will the following Python code print when calculating the factorial of 5 using recursion?",
    code: `def factorial(n):
               if n == 0 or n == 1:
                   return 1
               else:
                   return n * factorial(n - 1)
  
           result = factorial(5)
           print(result)`,
    options: [
        "1. 120",
        "2. 24",
        "3. 60"
    ],
    correctAnswer: "1",
    explanation: "The function calculates the factorial of 5. The factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120."
  },
  {
    language: "JavaScript",
    level: 69,
    question: "What will the following JavaScript code print when calculating the factorial of 5 using recursion?",
    code: `function factorial(n) {
                if (n === 0 || n === 1) {
                    return 1;
                } else {
                    return n * factorial(n - 1);
                }
            }
  
            const result = factorial(5);
            console.log(result);`,
    options: [
        "1. 120",
        "2. 24",
        "3. 60"
    ],
    correctAnswer: "1",
    explanation: "The function calculates the factorial of 5. The factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120."
  },
  {
    language: "C++",
    level: 69,
    question: "What will the following C++ code print when calculating the factorial of 5 using recursion?",
    code: `#include <iostream>
    using namespace std;
  
    int factorial(int n) {
        if (n == 0 || n == 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
  
    int main() {
        int result = factorial(5);
        cout << result << endl;
        return 0;
    }`,
    options: [
        "1. 120",
        "2. 24",
        "3. 60"
    ],
    correctAnswer: "1",
    explanation: "The function calculates the factorial of 5. The factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120."
  },
  {
    language: "Python",
    level: 70,
    question: "What will the following Python code print when performing a binary search for the number 7 in the list [1, 3, 5, 7, 9, 11, 13]?",
    code: `def binary_search(arr, target):
               low = 0
               high = len(arr) - 1
               while low <= high:
                   mid = (low + high) // 2
                   if arr[mid] == target:
                       return mid
                   elif arr[mid] < target:
                       low = mid + 1
                   else:
                       high = mid - 1
               return -1
  
           arr = [1, 3, 5, 7, 9, 11, 13]
           result = binary_search(arr, 7)
           print(result)`,
    options: [
        "1. 3",
        "2. 2",
        "3. 4"
    ],
    correctAnswer: "1",
    explanation: "The target number 7 is at index 3 in the sorted list [1, 3, 5, 7, 9, 11, 13]."
  },
  {
    language: "JavaScript",
    level: 70,
    question: "What will the following JavaScript code print when performing a binary search for the number 7 in the list [1, 3, 5, 7, 9, 11, 13]?",
    code: `function binarySearch(arr, target) {
                let low = 0;
                let high = arr.length - 1;
                while (low <= high) {
                    const mid = Math.floor((low + high) / 2);
                    if (arr[mid] === target) {
                        return mid;
                    } else if (arr[mid] < target) {
                        low = mid + 1;
                    } else {
                        high = mid - 1;
                    }
                }
                return -1;
            }
  
            const arr = [1, 3, 5, 7, 9, 11, 13];
            const result = binarySearch(arr, 7);
            console.log(result);`,
    options: [
        "1. 3",
        "2. 2",
        "3. 4"
    ],
    correctAnswer: "1",
    explanation: "The target number 7 is at index 3 in the sorted list [1, 3, 5, 7, 9, 11, 13]."
  },
  {
    language: "C++",
    level: 70,
    question: "What will the following C++ code print when performing a binary search for the number 7 in the list [1, 3, 5, 7, 9, 11, 13]?",
    code: `#include <iostream>
    using namespace std;
  
    int binarySearch(int arr[], int n, int target) {
        int low = 0, high = n - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }
  
    int main() {
        int arr[] = {1, 3, 5, 7, 9, 11, 13};
        int result = binarySearch(arr, 7, 7);
        cout << result << endl;
        return 0;
    }`,
    options: [
        "1. 3",
        "2. 2",
        "3. 4"
    ],
    correctAnswer: "1",
    explanation: "The target number 7 is at index 3 in the sorted array [1, 3, 5, 7, 9, 11, 13]."
  },

]