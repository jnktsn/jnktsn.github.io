// script.js
// JavaScript behavior for inputs will go here
const issueAbbreviations = {
    'Economic Inequality': 'EI',
    'Social Unrest': 'SU',
    'Education Levels': 'EL',
    'Economic Development': 'ED',
    'Rule of Law': 'RL',
    'Corruption Levels': 'CL',
    'Military Spending': 'MS',
    'Social Spending': 'SS',
    'Ethnic Equality': 'EE',
    'Rise in Nationalism': 'RN',
    'Environmental Policies': 'EP',
    'Economic Growth': 'EG',
    'Technological Advancements': 'TA',
    'Job Displacement': 'JD'
}

const correlationMatrix = {
    'EI': { 'EI': null, 'SU': 0.6, 'EL': -0.3, 'ED': -0.4, 'RL': -0.5, 'CL': 0.5, 'MS': 0.4, 'SS': -0.6, 'EE': -0.2, 'RN': 0.4, 'EP': -0.4, 'EG': -0.2, 'TA': -0.3, 'JD': 0.5 },
    'SU': { 'EI': 0.6, 'SU': null, 'EL': -0.4, 'ED': -0.5, 'RL': -0.5, 'CL': 0.6, 'MS': 0.5, 'SS': -0.5, 'EE': 0.3, 'RN': 0.5, 'EP': 0.4, 'EG': -0.4, 'TA': -0.3, 'JD': 0.6 },
    'EL': { 'EI': -0.3, 'SU': -0.4, 'EL': null, 'ED': 0.7, 'RL': 0.8, 'CL': -0.6, 'MS': -0.3, 'SS': 0.7, 'EE': 0.6, 'RN': -0.3, 'EP': 0.7, 'EG': 0.6, 'TA': 0.8, 'JD': -0.6 },
    'ED': { 'EI': -0.4, 'SU': -0.5, 'EL': 0.7, 'ED': null, 'RL': 0.8, 'CL': -0.6, 'MS': -0.4, 'SS': 0.6, 'EE': 0.6, 'RN': -0.4, 'EP': -0.4, 'EG': 0.7, 'TA': 0.7, 'JD': -0.5 },
    'RL': { 'EI': -0.5, 'SU': -0.5, 'EL': 0.8, 'ED': 0.8, 'RL': null, 'CL': -0.7, 'MS': -0.4, 'SS': 0.8, 'EE': 0.6, 'RN': -0.5, 'EP': 0.6, 'EG': 0.7, 'TA': 0.7, 'JD': -0.6 },
    'CL': { 'EI': 0.5, 'SU': 0.6, 'EL': -0.6, 'ED': -0.6, 'RL': -0.7, 'CL': null, 'MS': 0.5, 'SS': -0.7, 'EE': -0.4, 'RN': 0.5, 'EP': -0.5, 'EG': -0.6, 'TA': -0.6, 'JD': 0.7 },
    'MS': { 'EI': 0.4, 'SU': 0.5, 'EL': -0.3, 'ED': -0.4, 'RL': -0.4, 'CL': 0.5, 'MS': null, 'SS': -0.6, 'EE': -0.3, 'RN': 0.5, 'EP': -0.4, 'EG': -0.3, 'TA': -0.3, 'JD': 0.6 },
    'SS': { 'EI': -0.6, 'SU': -0.5, 'EL': 0.7, 'ED': 0.6, 'RL': 0.8, 'CL': -0.7, 'MS': -0.6, 'SS': null, 'EE': 0.5, 'RN': -0.5, 'EP': 0.6, 'EG': -0.4, 'TA': -0.4, 'JD': -0.6 },
    'EE': { 'EI': -0.2, 'SU': 0.3, 'EL': 0.6, 'ED': 0.6, 'RL': 0.6, 'CL': -0.4, 'MS': -0.3, 'SS': 0.5, 'EE': null, 'RN': 0.5, 'EP': 0.5, 'EG': -0.2, 'TA': 0.4, 'JD': -0.4 },
    'RN': { 'EI': 0.4, 'SU': 0.5, 'EL': -0.3, 'ED': -0.4, 'RL': -0.5, 'CL': 0.5, 'MS': 0.5, 'SS': -0.5, 'EE': 0.5, 'RN': null, 'EP': -0.4, 'EG': -0.4, 'TA': -0.3, 'JD': 0.6 },
    'EP': { 'EI': -0.4, 'SU': 0.4, 'EL': 0.7, 'ED': -0.4, 'RL': 0.6, 'CL': -0.5, 'MS': -0.4, 'SS': 0.6, 'EE': 0.5, 'RN': -0.4, 'EP': null, 'EG': -0.5, 'TA': 0.6, 'JD': 0.5 },
    'EG': { 'EI': -0.2, 'SU': -0.4, 'EL': 0.6, 'ED': 0.7, 'RL': 0.7, 'CL': -0.6, 'MS': -0.3, 'SS': -0.4, 'EE': -0.2, 'RN': -0.4, 'EP': -0.5, 'EG': null, 'TA': 0.7, 'JD': -0.4 },
    'TA': { 'EI': -0.3, 'SU': -0.3, 'EL': 0.8, 'ED': 0.7, 'RL': 0.7, 'CL': -0.6, 'MS': -0.3, 'SS': -0.4, 'EE': 0.4, 'RN': -0.3, 'EP': 0.6, 'EG': 0.7, 'TA': null, 'JD': 0.6 },
    'JD': { 'EI': 0.5, 'SU': 0.6, 'EL': -0.6, 'ED': -0.5, 'RL': -0.6, 'CL': 0.7, 'MS': 0.6, 'SS': -0.6, 'EE': -0.4, 'RN': 0.6, 'EP': 0.5, 'EG': -0.4, 'TA': 0.6, 'JD': null }
}

//array of capacities
var startingElements = Array.from(document.querySelectorAll('.filled-portion'));

//randomly set starting values
function initialFill() {
    for (var element of startingElements) {
        var randomNumber = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
        element.style.width = randomNumber + '%';
    }
}

initialFill()


var elements = getElementsByClassExcludingId('your-class', 'your-id');

function getElementsByClassExcludingId(className, excludedId) {
    var elements = Array.from(document.querySelectorAll('.' + className));
    var filteredElements = elements.filter(function (element) {
        return element.id !== excludedId;
    });
    return filteredElements;
}

function setCapacity(changedElement, changedWidth) {
    var filledPortion = document.getElementById('filled-portion');
    filledPortion.style.width = percent + '%';
}

//////////////

var bars = document.querySelectorAll('.capacity-bar');

bars.forEach(function (bar) {
    var filled = bar.querySelector('.filled-portion');

    // Listen for the mousedown event
    bar.addEventListener('mousedown', function (e) {
        updateBar(e, filled);
    });
});

function updateBar(e, filled) {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; // X position within the bar
    var newWidth = Math.floor((x / rect.width) * 100);

    // Get the previous width of the filled bar
    var previousWidth = parseFloat(filled.style.width);
    if (isNaN(previousWidth)) { // handle case where filled.style.width is not set yet
        previousWidth = 0;
    }

    // Calculate the change in width
    var changeInWidth = newWidth - previousWidth;

    // Now update the width
    filled.style.width = newWidth + '%';

    //console.log('ID: ' + filled.id + ', Change in width: ' + changeInWidth + '%');

    //array without the changed element
    elements = getElementsByClassExcludingId('filled-portion', filled.id);

    //change other elements
    for (var element of elements) {

        var pWidth = parseFloat(element.style.width);

        if (isNaN(pWidth)) { // handle case where filled.style.width is not set yet
            pWidth = 0;
        };

        var corFactor = correlationMatrix[filled.id][element.id];

        var newElementWidth = calculateNewValue(previousWidth, newWidth, pWidth, corFactor);

        if (newElementWidth > 100) {
            newElementWidth = 100;
        }

        element.style.width = newElementWidth + '%';
    }

}

function calculateNewValue(oldValueSU, newValueSU, oldValueEI, correlation) {
    var changeSU = (newValueSU - oldValueSU) / oldValueSU;
    var changeEI = changeSU * correlation;
    var newValueEI = oldValueEI + (oldValueEI * changeEI);
    return newValueEI;
}













