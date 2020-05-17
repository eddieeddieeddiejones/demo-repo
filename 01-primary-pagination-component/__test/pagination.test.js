
const Pagination  = require('../pagination')
const dom = require('../utils/dom')

describe('getNums function return right pageNum', () => {
  test.each([
    [5, 5, 10, [3, 4, 5, 6, 7]],
    [7, 3, 34, [1, 2, 3, 4, 5, 6, 7]],
    [6, 3, 34, [1, 2, 3, 4, 5, 6]],
    [6, 9, 10, [5, 6, 7, 8, 9, 10]],
    [4, 5, 10, [4, 5, 6, 7]],
    [5, 3, 5, [1, 2, 3, 4, 5]]
  ])('get proper page number', (showPages, currentPage, pageNums, result) => {
    
    expect(Pagination.getNums(showPages, currentPage, pageNums)).toEqual(result)
  })
})