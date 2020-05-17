class Pagination {
  constructor (options) {
    this.defaultOptions = {
      doms: {}
    },
    this.config = Object.assign({}, options, this.defaultOptions)
    this.check().initHTML().bindEvents()
  }
  check () {
    if (!this.config.el) {
      throw new Error('cannot find root element')
      return
    }
    return this
  }
  initHTML () {
    this.config.doms.start = dom.create('<button>首页</button>')
    this.config.doms.prev = dom.create('<button>上一页</button>')
    this.config.doms.next = dom.create('<button>下一页</button>')
    this.config.doms.last = dom.create('<button>末页</button>')

    const { showNums, currentPage, pageNums } = this.config
    Pagination.getNums(showNums, currentPage, pageNums)

    return this
  }
  bindEvents () {
    return this
  }

  static getNums(showNums, currentPage, pageNums) {
    let start1 = Math.max(parseInt(currentPage - showNums / 2 + 1), 1)
    let end1 = Math.min(parseInt(currentPage + showNums / 2), pageNums)
    if (start1 === 1) {
      end1 = start1 + showNums - 1
    }
    if (end1 === pageNums) {
      start1 = end1 - showNums + 1
    }
    let arr = []
    for (let i = start1; i <= end1; i ++) {
      arr.push(i) 
    }
    return arr
  }
}

module.exports = Pagination
