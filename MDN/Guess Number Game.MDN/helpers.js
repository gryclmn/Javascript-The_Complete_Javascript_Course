/*
Helper functions that may be helpful for most Javascript applications
*/

function getRandomInt(min, max, includeMax = false) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let x = 0;
    if (includeMax) x = 1;
    return Math.floor(Math.random() * (max - min + x)) + min;
}