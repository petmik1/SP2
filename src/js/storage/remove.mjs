/**
 * this will remove one item from local storage based on key
 * @param {string} key
 * ```
 * remove(key);
 * ```
 */
export function remove(key) {
    localStorage.removeItem(key);
}