const dom = {
  create (htmlStr) {
    const div = document.createElement('div')
    div.innerHTML = htmlStr
    return div.children[0]
  }
}
module.exports = dom