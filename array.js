
/**
 *
 * @param {number} i
 * @param {any} item
 * @param {array} arr
 * @returns {array}
 */
export const set = (i, item, arr) => (
    [...arr.slice(0, i), item, ...arr.slice(i + 1)]
);

/**
 *
 * @param {any} item
 * @param {array} arr
 * @returns {array}
 */
export const push = (item, arr) => (
    [...arr, item]
);

export const unshift = (item, arr) => (
    [item, ...arr]
);

/**
 *
 * @param {array} arr
 * @returns {array}
 */
export const pop = arr => arr.slice(0, arr.length - 1);

/**
 *
 * @param {array} arr
 * @returns {array}
 */
export const shift = arr => arr.slice(1);

/**
 *
 * @param {array} arr
 * @param {any} item
 * @param {function} callback
 */
export const findAndReplace = (arr, item, callback) => (
    arr.map((el, i) => {
        return callback(el, i, arr) ? item : el;
    })
);

export const concat = (arr, arr2) => (
    [...arr, ...arr2]
);

export const indexOf = (item, arr) => (
    arr.reduce((v, c, i) => (c === item && v === -1) ?  i : v, -1)
);
