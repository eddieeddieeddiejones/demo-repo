const dom = {
  create (htmlStr) {
    const div = document.createElement('div')
    div.innerHTML = htmlStr
    return div.children[0]
  },
  on (el, event, selector, callback) {
    el.addEventListener(event, (e) => {
      ta = e.target
      while(ta !== el) {
        if (ta.matches(selector)) {
          callback.call(ta, e, ta)
          return
        } else {
          ta = ta.parentNode
        }
      }
    }, false)
  }
}
// module.exports = dom