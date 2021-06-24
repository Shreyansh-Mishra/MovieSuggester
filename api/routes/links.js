var express = require('express');
var router = express.Router();
var JSSoup = require('jssoup').default;
var axios = require('axios');

const getDownloadLinks = async (title) => {
    let req = await axios.get(`http://moviesverse.org.in/?s=${title}`)
    let soup = new JSSoup(req.data);
    let articles = soup.findAll("article", "latestPost");
    links = []
    articles.forEach(article=>{
        links.push(article.find("a").attrs.href)
    })
    let filteredLinks = []
    j = 0
          for (let i = 0; i < links.length; i++) {
              if (j<2) {
                filteredLinks.push(links[i])
              }
              else {
                  break
              }
              j++;
          }
    req = await axios.get(`http://1sdmoviespoint.kim/?s=${title}`)
    soup = new JSSoup(req.data);
    console.log(soup)
    articles = soup.findAll("a");
    farticles=[]
    articles.forEach(e=>{
      if(e.attrs.rel==='bookmark'){
        farticles.push(e.attrs.href)
      }
    })
    console.log(farticles.join('\n'))
     let k=0
     for (let i = 0; i < farticles.length; i++) {
       if (k<2) {
         filteredLinks.push(farticles[i])
       }
       else {
           break
       }
       k++;
   }
    return filteredLinks;
}

/* GET home page. */
router.get('/:name', async function(req, res, next) {
  let links = await getDownloadLinks(req.params.name);
  res.status(200).json(links);
});

module.exports = router;
