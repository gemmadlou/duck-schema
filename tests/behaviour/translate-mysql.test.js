let userconf = require('./translate-mysql.user.js')
let postconf = require('./translate-mysql.post.js')
let translator = require('../../translators/mysql')
const fs = require('fs')
const path = require('path')

it(`should generate mysql post example table`, () => {
    let result2 = translator(postconf);
    expect(result2).toEqual(fs.readFileSync(path.join(__dirname, 'translate-mysql.post.sql'), { encoding: 'utf8'}))
})

it(`should generate mysql user table`, () => {
    let result = translator(userconf);
    expect(result).toEqual(fs.readFileSync(path.join(__dirname, 'translate-mysql.user.sql'), { encoding: 'utf8'}))
})