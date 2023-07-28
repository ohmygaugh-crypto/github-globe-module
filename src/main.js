import '/styles/main.css';
import { World } from './world/world';
import NewsTicker from '../node_modules/news-ticker';

// I want to import the interface here too, but I don't know how to do it.
async function fetchNews() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b632efdea9a44f9d97ea377044a4a864');
    const data = await response.json();
    return data.articles.map(article => article.title);
  }
  
  async function main() {
    const container = document.querySelector('#scene-container');
    const world = new World(container);
    world.start();
  
    const nt = new NewsTicker({
      el: document.querySelector('.line'),
      textArr: [],
      speed: 1,
      type: 'horizontal'
    });
  
    const news = await fetchNews();
    nt.add(...news);
    nt.start();
  }
  
  main();