var express = require('express');
var router = express.Router();
const { requiresAuth } = require('express-openid-connect');

const CyclicDB = require('@cyclic.sh/dynamodb')
const db = CyclicDB(process.env.CYCLIC_DB)
let institutions = db.collection('institutions')

router.get('/', requiresAuth(), async function(req, res, next) {
  let list = await institutions.list();
  let keys = list.results.map(x => x.key);
  keys = keys.filter(x=> x.includes(req.oidc.user.email));
  let result = await Promise.all(keys.map(async (key) => {
    return await institutions.get(key);
  }));
  result = result.map( x=> x.props);
  console.log(result);
  res.render("institutions", {institutions: result});
});

router.post('/', requiresAuth(), async function(req, res, next) {
  const {name} = req.body
  const email = req.oidc.user.email;
  const key = email + "@" + name 
  await institutions.set(key, {
    Name: name,
    Money: 0,
    UserEmail: email
  });
  res.end();
});

router.put('/', requiresAuth(), async function(req, res, next) {
  const {id, money} = req.body 
  await institutions.set(id, {
    Money: money
  });
  res.end();
});

router.delete('/', requiresAuth(), async function(req, res, next) {
  const {id} = req.body 
  await institutions.delete(id);
  res.end();
});

module.exports = router;
