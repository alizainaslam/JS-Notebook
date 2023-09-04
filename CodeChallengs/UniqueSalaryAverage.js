// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary.

// Example 1:
// Input: salary = [4000,3000,1000,2000]
// Output: 2500
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

// Example 2:
// Input: salary = [1000,2000,3000]
// Output: 2000
// Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
// Average salary excluding minimum and maximum salary is (2000) / 1 = 2000

// All the integers of salary are unique.

const averageSalary = (arr) => {
  if (typeof arr === "number") {
    return NaN;
  }
  let result = [];
  const maxSalary = Math.max(...arr);
  const minSalary = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== maxSalary && arr[i] !== minSalary) {
      result.push(arr[i]);
    }
  }
  const average = result.reduce((acc, curr) => acc + curr) / result.length;
  return average;
};

// test
const salary = [4000, 3000, 1000, 2000];
console.log(averageSalary(salary));