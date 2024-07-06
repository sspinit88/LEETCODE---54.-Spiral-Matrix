/*
54. Spiral Matrix

Given an m x n matrix, return all elements of the matrix in spiral order.


Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

*/

/*
Ваша задача - вернуть все элементы матрицы в спиральном порядке.

Вот шаги, которые мы будем следовать:

1. Инициализируйте четыре переменные для отслеживания текущих границ матрицы: верхней, нижней, левой и правой.
2. Пока верхняя граница не превышает нижнюю и левая граница не превышает правую, продолжайте следующие шаги:
   - Добавьте все элементы в текущей верхней строке в результат, затем увеличьте верхнюю границу.
   - Добавьте все элементы в текущем правом столбце в результат, затем уменьшите правую границу.
   - Если верхняя граница не превышает нижнюю, добавьте все элементы в текущей нижней строке в результат, затем уменьшите нижнюю границу.
   - Если левая граница не превышает правую, добавьте все элементы в текущем левом столбце в результат, затем увеличьте левую границу.
3. Верните результат.

Your task is to return all elements of the matrix in spiral order.

Here are the steps we will follow:

1. Initialize four variables to track the current boundaries of the matrix: top, bottom, left, and right.
2. While the top boundary does not exceed the bottom and the left boundary does not exceed the right, continue the following steps:
   - Add all elements in the current top row to the result, then increase the top boundary.
   - Add all elements in the current right column to the result, then decrease the right boundary.
   - If the top boundary does not exceed the bottom, add all elements in the current bottom row to the result, then decrease the bottom boundary.
   - If the left boundary does not exceed the right, add all elements in the current left column to the result, then increase the left boundary.
3. Return the result.

*/

function spiralOrder(matrix) {
  // Инициализируем переменные для отслеживания текущих границ матрицы
  // Initialize variables to track the current boundaries of the matrix
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  let result = [];

  // Пока верхняя граница не превышает нижнюю и левая граница не превышает правую
  // While the top boundary does not exceed the bottom and the left boundary does not exceed the right
  while (top <= bottom && left <= right) {
    // Добавляем все элементы в текущей верхней строке в результат
    // Add all elements in the current top row to the result
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // Добавляем все элементы в текущем правом столбце в результат
    // Add all elements in the current right column to the result
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // Если верхняя граница не превышает нижнюю
    // If the top boundary does not exceed the bottom
    if (top <= bottom) {
      // Добавляем все элементы в текущей нижней строке в результат
      // Add all elements in the current bottom row to the result
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // Если левая граница не превышает правую
    // If the left boundary does not exceed the right
    if (left <= right) {
      // Добавляем все элементы в текущем левом столбце в результат
      // Add all elements in the current left column to the result
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  // Возвращаем результат
  // Return the result
  return result;
}
