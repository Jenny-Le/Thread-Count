const {expect} = require('chai')

// Module
const methods = require('./methods')

describe('methods', () => {
  it('Should be an array', () => {
    expect(methods).to.be.an('array')
  })

  it('Should be an array of strings', () => {
    const outcome = [...methods].every((method) => typeof method === 'string')
    expect(outcome).to.be.true
  })
})
