const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const resultBox = document.getElementById('result');
const errorMsg = document.getElementById('error-msg');
const buttons = document.querySelectorAll('.btn');

function showError(message) {
    errorMsg.textContent = message;
    errorMsg.classList.remove('hidden');
    resultBox.textContent = '...';
}

function clearError() {
    errorMsg.classList.add('hidden');
    errorMsg.textContent = '';
}

function calculate(action) {
    clearError();

    const val1 = input1.value.trim();
    const val2 = input2.value.trim();

    if (val1 === '' || val2 === '') {
        showError('Заповніть обидва поля');
        return;
    }

    const num1 = Number(val1);
    const num2 = Number(val2);

    if (isNaN(num1) || isNaN(num2)) {
        showError('Введіть коректні числа');
        return;
    }

    let result;

    switch (action) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                showError('На нуль ділити не можна!');
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    if (!Number.isInteger(result)) {
        result = result.toFixed(2);
    }

    resultBox.textContent = result;
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
    
        const action = this.getAttribute('data-action');
        calculate(action);
    });
});