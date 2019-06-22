const stringType = (type, maxLength) => type === 'string' && maxLength > 65535 ? 'TEXT' : 'VARCHAR'
const valueLength = (maxLength, stringType) => maxLength !== undefined && stringType === 'VARCHAR' ? `(${maxLength})` : ''

/**
 * Translates config into mysql schema
 * 
 * @param {object} config
 * @return string
 */
module.exports = (config) => {
    return `CREATE TABLE IF NOT EXISTS ${config.title}
    (
        ${Object.entries(config.properties).map(([key, values]) => {
            let stringtype = stringType(values.type, values.maxLength)
            let length = valueLength(values.maxLength, stringtype)
            return `${key} ` + 
                (values.type === 'string' ? `${stringtype}${length} ` : `INT${length} `) +
                (config.required.includes(key) ? 'NOT NULL ' : '') + 
                (values.autoincrement ? 'AUTO_INCREMENT ' : '') + 
                (values.primary ? 'PRIMARY KEY ' : '')
            }).join(`,
        `).replace(/ ,/g, ',').trim()}
    );`
}