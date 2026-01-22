const input = document.getElementById('phone');
const btn = document.getElementById('checkBtn');
const result = document.getElementById('result');

function isFullNumber(value) {

    if (value.length === 10) {
        let onlyNumbers = true;

        for (let i = 0; i < value.length; i++) {
            if (value[i] < '0' || value[i] > '9') {
                onlyNumbers = false;
            }
        }

        if (onlyNumbers) {
            return true;
        }
    }

    if (value.startsWith('+996') && value.length === 13) {
        let onlyNumbers = true;

        for (let i = 4; i < value.length; i++) {
            if (value[i] < '0' || value[i] > '9') {
                onlyNumbers = false;
            }
        }

        if (onlyNumbers) {
            return true;
        }
    }

    return false;
}

input.addEventListener('input', () => {
    if (isFullNumber(input.value)) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
        result.textContent = '';
        result.className = '';
    }
});

btn.addEventListener('click', () => {
    let number = input.value;
    let code;

    if (number.startsWith('+996')) {
        code = number.slice(4, 7);
    } else {
        code = number.slice(1, 4);
    }

    let codeNum = parseInt(code);

    
    let oCodes = [];
    for (let i = 500; i <= 509; i++) oCodes.push(i);
    for (let i = 700; i <= 709; i++) oCodes.push(i);

    let megaCodes = [];
    for (let i = 550; i <= 559; i++) megaCodes.push(i);

    let beelineCodes = [775, 776, 222];

    
    if (oCodes.includes(codeNum)) {
        result.textContent = 'Оператор: О!';
        result.className = 'o';
    }
    else if (megaCodes.includes(codeNum)) {
        result.textContent = 'Оператор: MegaCom';
        result.className = 'mega';
    }
    else if (beelineCodes.includes(codeNum)) {
        result.textContent = 'Оператор: Beeline';
        result.className = 'beeline';
    }
    else {
        result.textContent = 'Оператор не найден';
        result.className = 'not-found';
    }
});