const expect = require('expect')
const utils = require('./utils')

describe('Sync Test Cases', () => {

  describe('Number Test Cases', () => {

    it('should add two numbers', () => {
      const res = utils.add(21, 29)
      expect(res).toBe(50, `Expected res to be 50, but got ${res}`)
    //   if (res !== 50) {
    //     throw new Error(`Expected 50, but got ${res}`)
    //   }
    })

    it('should give the square of a number', () => {
      const square = utils.square(9)
      //   .toString()
      expect(square)
        .toBe(81)
        .toBeA('number', "Didn't get a number")
    //   if (square !== 81) {
    //     throw new Error(`Expected 81, but got ${square}`)
    //   }
    })
  })

  describe('Object Test Cases', () => {

    it('should expect some values', () => {
      // expect(12).toNotBe(11)
      // expect({name: 'Divyanshu'}).toBe({name: 'Divyanshu'}); // not compares objects with toBe, use toEqual instead
      // expect({name: 'Divyanshu'}).toEqual({name: 'Divyanshu'})
      // expect([1,2,3,4]).toInclude(4)
      // expect([1,2,3,4]).toExclude(5)
      expect({
        name: 'Divyanshu',
        age: 23,
        city: 'New Delhi'
      }).toInclude({
        age: 23
      })
    })

    it('should set firstName and lastname', () => {
      let user = {location: 'New Delhi', age: 23}
      const res = utils.setName(user, 'Divyanshu Bhatnagar')
      expect(res).toInclude({firstName: 'Divyanshu', lastName: 'Bhatnagar'})
    })
  })
})

describe('Async Test Cases', () => {
  // testing async functions
  it('should async add two numbers', (done) => {
    utils.addAsync(9, 1, (sum) => {
      expect(sum).toBe(10)
      done()
    })
  })
})
