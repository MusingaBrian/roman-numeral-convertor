const input = document.getElementById('number');
const inputBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const checkNumber = () => {

    let inputValue = parseInt(input.value);

    if (!input.value || isNaN(inputValue)) {
        output.innerText = 'Please enter a valid number';
        return;
    } else if (Math.sign(inputValue === -1 || input.value <= 0)) {
        output.innerText = 'Please enter a number greater than or equal to 1';
        return;
    } else if (inputValue >= 4000) {
        output.innerText = 'Please enter a number less than or equal to 3999';
        return;
    } else {
        convertToRomanNumeral(inputValue);
    }

}

const convertToRomanNumeral = (num) => {
    
    let romanNumeralObj = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    }

    let romanNumeral = '';
    const numeralKeys = Object.keys(romanNumeralObj).reverse();
    //console.log(numeralKeys);

    numeralKeys.forEach((key) => {

        while (key <= num) {
            console.log(num);
            romanNumeral += romanNumeralObj[key];
            //console.log(romanNumeral);
            num -= key;
        }
        
    })

    return output.innerText = romanNumeral;
}

inputBtn.addEventListener("click", checkNumber);