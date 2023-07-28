import {searchbar} from './interface/components/searchbar';
import {NewsTicker} from './interface/components/newsticker';
import {Feed} from './interface/components/feed';

const nt = new NewsTicker({
    el: document.querySelector('.line'),
    textArr: [
      'news ticker in your page'
    ],
    onLeave: el => {
      const text = el.innerText
      const isUpperCase = /[A-Z]/.test(text[0])
      nt.add(
        isUpperCase
          ? text.toLowerCase()
          : text.toUpperCase()
      )
    }
  })

const feed = new Feed({
  
})
class Interface {
    constructor(container) {
        searchbar(container);
    }
    constructor(container) {
        nt(container);
}
    constructor(container) {
      feed(container)
    }
}

export { Interface };