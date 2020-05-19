
const bom = {
  query: {
    get (parm) {
      let query = location.search
      query = query.replace(/\?/, '')
      const arr = query.split('&')
      const obj = {}
      arr.forEach(item => {
        const queryArr = item.split('=')
        obj[queryArr[0]] = queryArr[1]
      })
      if (parm) {
        return obj[parm]
      }
      return obj
    },
    set (num) {
      let search = location.search
      if (search.indexOf('page=') !== -1) {
        search = search.replace(/page=\d*/, `page=${ num }`)
      } else {
        if (search === '') {
          search += `?page=${num}`
        } else {
          search += `&page=${num}`
        }
      }
      location.search = search
    }
  }
}

// module.exports = bom