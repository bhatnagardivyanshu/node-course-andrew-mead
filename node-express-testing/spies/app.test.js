const expect = require('expect')
const rewire = require('rewire')

const app = rewire('./app')

describe('App', () => {

  const db = {
    saveUser: expect.createSpy()
  }

  app.__set__('db', db)

  it('should call spy correctly', () => {
    const spy = expect.createSpy()
    // spy()
    // expect(spy).toHaveBeenCalled()
    spy('Divyanshu', 'Admin')
    expect(spy).toHaveBeenCalledWith('Divyanshu', 'Admin')
  })

  it('should call saveUser with user object', () => {
    const email = 'abc@xyz.com'
    const password = '123abc'

    app.handleSignup(email, password)
    expect(db.saveUser).toHaveBeenCalledWith({email, password})
  })
})
