const day1part1 = require('./1.1')
const day1part2 = require('./1.2')

describe('Day 1: Inverse Captcha', () => {
  describe('--- Part One ---', () => {
    it('should find the sum of all digits that match the next digit in the list', () => {
      expect(day1part1('1122')).toBe(3)
      expect(day1part1('1234')).toBe(0)
      expect(day1part1('112233445566778899')).toBe(45)
      expect(day1part1('1111')).toBe(4)
      expect(day1part1('91212129')).toBe(9)
      expect(day1part1('44442444')).toBe(24)
      expect(day1part1('444422222444')).toBe(32)
      expect(day1part1('4444222224449')).toBe(28)
    })
  })

  describe('--- Part Two ---', () => {
    it('should find the sum of all digits that match the digit halfway around the circular list', () => {
      expect(day1part2('1212')).toBe(6)
      expect(day1part2('1221')).toBe(0)
      expect(day1part2('123425')).toBe(4)
      expect(day1part2('123123')).toBe(12)
      expect(day1part2('12131415')).toBe(4)
    })
  })
})
