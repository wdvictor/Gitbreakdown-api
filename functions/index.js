const functions = require("firebase-functions");
const express = require("express")
const commit_route = require("./commits")
const branches_routes = require('./branches')
const issues_route = require("./issues")
const app = express();

app.get("/commits", commit_route.get)

app.get('/branches', branches_routes.get)

app.get('/issues' , issues_route.get)

exports.app = functions.https.onRequest(app)
