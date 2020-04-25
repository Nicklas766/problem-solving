/**
 * Arrays: Left Rotation
 */

function rotLeft(a, d) {
    return [...a.slice(d, a.length), ...a.slice(0, d)];
}