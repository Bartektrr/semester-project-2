var express = require('express');
var router = express.Router();
const { requiresAuth } = require('express-openid-connect');

const CyclicDB = require('@cyclic.sh/dynamodb')
const db = CyclicDB(process.env.CYCLIC_DB)
let institutions = db.collection('institutions')

router.get('/', requiresAuth(), async function(req, res, next) {
  let list = await institutions.list();
  res.render("institutions", {institutions: list.results, host: process.env.CYCLIC_URL});
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
