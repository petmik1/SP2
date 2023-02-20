/**
 * this will save the "key" and "state" in local storage
 * @param {string} key this is the key which is used in local storage
 * @param {*} state this is the information saved under the key
 * @example 
 * ```js
 * //use this function to save information in local storage
 * save(exampleKey, Info);
 * //saves info under the key "exampleKey" in local storage
 * ```
 */
export function save (key, state) {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
}