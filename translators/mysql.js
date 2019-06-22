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
            let stringType = values.type === 'string' && values.maxLength > 65535 ? 'TEXT' : 'VARCHAR'
            let length = values.maxLength !== undefined && stringType === 'VARCHAR' ? `(${values.maxLength})` : ''
            return `${key} ` + 
                (values.type === 'string' ? `${stringType}${length} ` : `INT${length} `) +
                (config.required.includes(key) ? 'NOT NULL ' : '') + 
                (values.autoincrement ? 'AUTO_INCREMENT ' : '') + 
                (values.primary ? 'PRIMARY KEY ' : '')
            }).join(`,
        `).replace(/ ,/g, ',').trim()}
    );`
}