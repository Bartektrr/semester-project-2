var express = require('express');
var router = express.Router();
const { requiresAuth } = require('express-openid-connect');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var db = require("../models");
var InstitutionService = require("../services/InstitutionService")
var institutionService = new InstitutionService(db);

router.get('/', requiresAuth(), async function(req, res, next) {
  var institutions = await institutionService.getAll()
  res.render("institutions", {institutions: institutions});
});

router.post('/', requiresAuth(), jsonParser, async function(req, res, next) {
  const {name} = req.body
  await institutionService.create(name, req.oidc.user.email, 0);
  res.end();
});

router.put('/', requiresAuth(), jsonParser, async function(req, res, next) {
  const {id, money} = req.body 
  await institutionService.update(id, money);
  res.end();
});

router.delete('/', requiresAuth(), jsonParser, async function(req, res, next) {
  await institutionService.delete(req.body.id);
  res.end();
});

module.exports = router;
