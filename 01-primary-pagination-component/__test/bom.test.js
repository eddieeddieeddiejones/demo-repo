const bom = require('../utils/bom')

const { location } = window;

beforeAll(() => {
  delete window.location;
  window.location = {
    reload: jest.fn()
  };
});

afterAll(() => {
  window.location = location;
});

describe('get the right query from the location', () => {


  it('get 6 from ?page=6', () => {
    window.location.search = '?page=6&mock=34'
    expect(bom.query.get('page')).toBe('6')
  })
  it('get nothing from empty queryString', () => {
    window.location.search = ''
    expect(bom.query.get('page')).toBe(undefined)
  })
})

describe('set the right queryString while click the pagination button', () => {
  it('set the right queryString number', () => {
    window.location.search = '?mock=12&page=8'
    bom.query.set(20)
    expect(window.location.search).toBe('?mock=12&page=20')
  })
  it('set the right queryString if the queryString is ', () => {
    window.location.search = ''
    bom.query.set(20)
    expect(window.location.search).toBe('?page=20')
  })
})