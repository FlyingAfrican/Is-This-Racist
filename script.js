racist_exclusions = ['black', 'dark', 'africa', 'poor', '2+2=5', 'blm'];
racist_extremes = [''];

function isRacist(value) {
    return !racist_exclusions.some((el) => value.toLowerCase().includes(el));
}

window.onload = function() {
    let el_input = document.getElementById('input-textbox');
    let el_result = document.getElementById('result');
    document.getElementById('input-textbox').onkeyup = function(event) {
        if (el_input.value === '') {
            el_result.innerHTML = '...';
            el_result.style.color = '#000000';
        }
        else {
            if (isRacist(el_input.value)) {
                el_result.innerHTML = 'Yes';
                el_result.style.color = 'limegreen';
            }
            else {
                el_result.innerHTML = 'No';
                el_result.style.color = 'red';
            }
        }
    }
}