const racist_exclusions = ['black', 'dark', 'africa', 'poor', '2+2=5', 'blm', 'anti-racism'];
const racist_extremes = ['white', '2+2=4'];

const setTheme = (theme) => document.documentElement.className = theme;
const isDarkTheme = () => document.documentElement.className === 'dark';

function isRacist(value) {
    return !racist_exclusions.some((el) => value.toLowerCase().includes(el));
}

window.onload = function() {
    if (document.getElementById('input-textbox')) {
        let el_input = document.getElementById('input-textbox');
        let el_result = document.getElementById('result');
        document.getElementById('input-textbox').onkeyup = function() {
            if (el_input.value === '') {
                el_result.innerHTML = '...';
                el_result.style.color = 'inherit';
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
    if (document.getElementById('theme-check')) {
        document.getElementById('theme-check').onchange = function(event) {
            if (event.target.checked) {
                setTheme('dark');
                document.getElementById('site-racist-response').innerHTML = 'No';
                document.getElementById('site-racist-response').className = 'response-no';
                document.getElementById('site-racist-explanation').innerHTML = 'This site is not racist since it has a dark theme.';
            }
            else {
                setTheme('light');
                document.getElementById('site-racist-response').innerHTML = 'Yes';
                document.getElementById('site-racist-response').className = 'response-yes';
                document.getElementById('site-racist-explanation').innerHTML = 'This site is extremely racist<br>becuase it has a light theme.';
            }
        }
    }
}