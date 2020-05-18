// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const Parser = require('rss-parser');
const DOMParser = require('xmldom').DOMParser;

module.exports = function (api) {
  let parser = new Parser();

  api.loadSource(async actions => {
    let data = await parser.parseURL(process.env.BLOG_FEED_URL);
    const collection = actions.addCollection('Posts');

    for (const [index, item] of data.items.entries()) {
      let doc = new DOMParser().parseFromString(item['content:encoded']);
      let img = doc.getElementsByTagName('img')[0];
      let fisrt_para = doc.getElementsByTagName('p')[0];

      let cover_img_src = img != undefined ? img.getAttribute('src') : undefined
      let highlights = fisrt_para != undefined ? fisrt_para.textContent : undefined

      collection.addNode({
        id: index,
        creator: item.creator,
        title: item.title,
        link: item.guid,
        pubDate: item.pubDate,
        highlights,
        categories: item.categories,
        cover_img_src
      })
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
