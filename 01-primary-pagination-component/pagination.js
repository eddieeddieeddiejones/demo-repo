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

    const { showPages, currentPage, pageNums } = this.config
    Pagination.getNums(showPages, currentPage, pageNums)

    return this
  }
  bindEvents () {
    return this
  }

  static getNums(showPages, currentPage, pageNums) {
    
    return [1, 2, 3, 4, 5, 6, 7]
  }
}

module.exports = Pagination
