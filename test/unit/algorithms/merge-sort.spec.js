import { mergeSort } from '../../../src/algorithms/merge-sort'

describe('Merge Sort', () => {
  it('should return the same array when length equals 1', () => {
    expect(mergeSort([1])).toEqual([1])
  })

  it('should return return an ordered array', () => {
    expect(mergeSort([1,3,4,2])).toEqual([1,2,3,4])
  })

  it('should return return an ordered array with repeated values', () => {
    expect(mergeSort([2,3,4,4,1,5])).toEqual([1,2,3,4,4,5])
  })

  it('should return return an ordered array when partially ordered', () => {
    expect(mergeSort([1,2,3,4,8,7,6,5])).toEqual([1,2,3,4,5,6,7,8])
  })
})
