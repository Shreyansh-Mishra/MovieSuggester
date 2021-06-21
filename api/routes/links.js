var express = require('express');
var router = express.Router();
var JSSoup = require('jssoup').default;
var axios = require('axios');

const getDownloadLinks = async (title) => {
    let req = await axios.get(`https://moviesverse.org.in/?s=${title}`)
    let soup = new JSSoup(req.data);
    let articles = soup.findAll("article", "latestPost");
    links = []
    articles.forEach(article=>{
        links.push(article.find("a").attrs.href)
    })
    let filteredLinks = []
    j = 0
          for (let i = 0; i < links.length; i++) {
              if (j<3) {
                filteredLinks.push(links[i])
              }
              else {
                  break
              }
          }
    return filteredLinks;
}

/* GET home page. */
router.get('/:name', async function(req, res, next) {
  let links = await getDownloadLinks(req.params.name);
  res.status(200).json(links);
});

module.exports = router;
