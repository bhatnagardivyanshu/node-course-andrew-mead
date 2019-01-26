const request = require('supertest')
const {app} = require('./index')
const expect = require('expect')

describe('Express App Cases', () => {
  it('should return welcome message', (done) => {
    request(app)
      .get('/')
      .expect(404)
      .expect(res => {
        expect(res.body).toInclude({
          name: 'Divyanshu'
        })
      })
      .end(done)
  })
})
