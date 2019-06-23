// @flow

/*::
type Config = {
    title: string,
    properties: Array<PropertyMeta>,
    required: Array<string>
};
*/

/*::
type PropertyMeta = {
    primary: boolean,
    type: string,
    maxLength: number,
    autoincrement: boolean
};
*/

/*::
declare class Object {
    static entries<TValue>(Array<TValue>): [string, TValue][];
}
*/


/**
 * Get string type
 * 
 * @param {string} type 
 * @param {number} maxLength 
 */
const stringType = (type, maxLength) => type === 'string' && maxLength > 65535 ? 'TEXT' : 'VARCHAR'

/**
 * Get length of value
 * 
 * @param {number} maxLength 
 * @param {string} stringType 
 */
const valueLength = (maxLength, stringType) => maxLength !== undefined && stringType === 'VARCHAR' ? `(${maxLength})` : ''

/**
 * 
 * @param {*} type 
 * @param {*} stringtype 
 * @param {*} length 
 */
const valueType = (type /*: string */, stringtype, length) => (type === 'string' ? `${stringtype}${length} ` : `INT${length} `)

const column = (config, key, values /*: PropertyMeta */) => {
    let stringtype = stringType(values.type, values.maxLength)
    let length = valueLength(values.maxLength, stringtype)
    return `${key} ` + 
        valueType(values.type, stringtype, length) +
        (config.required.includes(key) ? 'NOT NULL ' : '') + 
        (values.autoincrement ? 'AUTO_INCREMENT ' : '') + 
        (values.primary ? 'PRIMARY KEY ' : '')
}

/**
 * Translates config into mysql schema
 * 
 * @param {object} config
 * @return string
 */
module.exports = (config /*: Config */) => {
    return `CREATE TABLE IF NOT EXISTS ${config.title}
    (
        ${Object.entries(config.properties).map(([key, values] /*: [string, PropertyMeta] */) => {
            return column(config, key, values);
        }).join(`,
        `).replace(/ ,/g, ',').trim()}
    );`
}