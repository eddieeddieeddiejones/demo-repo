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

    if (this.config.currentPage === 1) {
      this.config.doms.start.setAttribute('disabled', 'disabled')
      this.config.doms.prev.setAttribute('disabled', 'disabled')
    }
    if (this.config.currentPage === this.config.pageCount) {
      this.config.doms.next.setAttribute('disabled', 'disabled')
      this.config.doms.last.setAttribute('disabled', 'disabled')
    }

    this._createNumbers()
    
    this.config.el.innerHTML = ''
    this.config.el.appendChild(this.config.doms.start)
    this.config.el.appendChild(this.config.doms.prev)
    this.config.el.appendChild(this.config.doms.numbers)
    this.config.el.appendChild(this.config.doms.next)
    this.config.el.appendChild(this.config.doms.last)
    return this
  }
  bindEvents () {
    dom.on(this.config.el, 'click', '.pagination li, .pagination > button', (e, el) => {
      if (el.matches('.pagination li')) {
        this.config.currentPage = +el.dataset.index
        
      }
      if (el.matches('.pagination > button')) {
        if (el.innerHTML === '首页') {
          this.config.currentPage = 1
        }
        if (el.innerHTML === '上一页') {
          this.config.currentPage --
        }
        if (el.innerHTML === '下一页') {
          this.config.currentPage ++
        }
        if (el.innerHTML === '末页') {
          this.config.currentPage = this.config.pageCount
        }
      }

      const pageChange = new CustomEvent('pageChange', { detail: this.config.currentPage })
      this.config.el.dispatchEvent(pageChange)
      
      this.initHTML()
    })
    return this
  }
  _createNumbers () {
    const { showNums, currentPage, pageCount } = this.config
    const pageNumbers = Pagination.getNums(showNums, currentPage, pageCount)

    const ul = document.createElement('ul')
    const frag = document.createDocumentFragment()
    pageNumbers.forEach(item => {
      const li = dom.create(`<li data-index=${item}>${ item }</li>`)
      if (item === currentPage) {
        li.classList.add('active')
      }
      frag.appendChild(li)
    })
    ul.appendChild(frag)
    this.config.doms.numbers = ul
  }

  static getNums(showNums, currentPage, pageCount) {
    let start = Math.max(parseInt(currentPage - showNums / 2 + 1), 1)
    let end = Math.min(parseInt(currentPage + showNums / 2), pageCount)
    if (start === 1) {
      end = start + showNums - 1
    }
    if (end === pageCount) {
      start = end - showNums + 1
    }
    let arr = []
    for (let i = start; i <= end; i ++) {
      arr.push(i) 
    }
    return arr
  }
}

// module.exports = Pagination
