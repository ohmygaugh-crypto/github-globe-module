async function fetchNews() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY');
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
      speed: 10,
      type: 'horizontal'
    });
  
    const news = await fetchNews();
    nt.add(...news);
    nt.start();
  }
  
  main();
  