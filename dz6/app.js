const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const bmiValue = document.getElementById('bmiValue');
const bmiText = document.getElementById('bmiText');

window.addEventListener('load', () => {
    const savedData = localStorage.getItem('bmiData');
    if (savedData) {
        const data = JSON.parse(savedData);
        heightInput.value = data.height;
        weightInput.value = data.weight;
        bmiValue.textContent = data.bmi;
        bmiText.textContent = data.status;
        bmiText.style.color = data.color;
    }
});

function calculateBMI() {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (!height || !weight) return;

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let status = '';
    let color = '';

    if (bmi < 18.5) {
        status = 'Недостаточный вес';
        color = 'blue';
    } else if (bmi < 25) {
        status = 'Норма';
        color = 'green';
    } else if (bmi < 30) {
        status = 'Избыточный вес';
        color = 'orange';
    } else {
        status = 'Ожирение';
        color = 'red';
    }

    bmiValue.textContent = bmi;
    bmiText.textContent = status;
    bmiText.style.color = color;

    const data = {
        height: height,
        weight: weight,
        bmi: bmi,
        status: status,
        color: color
    };

    localStorage.setItem('bmiData', JSON.stringify(data));
}

heightInput.addEventListener('input', calculateBMI);
weightInput.addEventListener('input', calculateBMI);