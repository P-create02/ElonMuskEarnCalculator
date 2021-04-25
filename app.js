const text = [
    'In 4 seconds [$ 15 000], earn average annual gross remuneration in Poland',
    'In 13 seconds [$ 51 000], makes the equivalent of one Bitcoin',
    'In 35 seconds [$ 139 990], earns the equivalent of a Tesla Model S',
    'In 167 seconds [$ 680 000], earns as much as an average Pole in his entire life',
    'In 12 minutes [$ 2 750 000], earns as much as the average American in a lifetime',
    'In 13 minutes [$ 3 000 000], makes the equivalent of a Bugatti Chiron',
    'In 41 minutes [$ 10 000 000], earn for a new apartment in Monte Carlo',
    'Within 17 hours [$ 238 000 000], can buy the most expensive apartment in Manhattan',
];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 300);
}());