    
    function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let resultMultiply = multiply(num1, num2);
                    let resultAdd = add(num1, num2);
                    let resultDiv = div(num1, num2);

                    // Display the result
                    displayResults(num1, num2, resultMultiply, resultAdd, resultDiv);
                    // displayResult(resultMultiply);
                    // displayResult(resultAdd);
                    // displayResult(resultDiv);
                } else {
                    displayResult('Please enter valid numbers');
                }
            }

            function multiply(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Multiply the numbers
                return a * b;
            }

            function add(a,b) {
                // add numbers
                return  a + b;

            }

            function div(a, b) {
                // divide numbers
                return a / b;
            }

            function displayResult(result) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result');
                resultElement.textContent = `The result is: ${result}`;
            }

            function displayResults(num1, num2, resultMultiply, resultAdd, resultDiv) {
                // Display all calculations in the paragraph element
                const resultElement = document.getElementById('result');
                resultElement.innerHTML = `
                    The result for Addition is: ${num1} + ${num2} = ${resultAdd}<br>
                    The result for Multiplication: ${num1} × ${num2} = ${resultMultiply}<br>
                    The result for Division: ${num1} ÷ ${num2} = ${resultDiv}
                `;
            }

        