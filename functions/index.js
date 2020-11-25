const functions = require("firebase-functions");
const express = require("express");
const commit_route = require("./commits");
const branches_routes = require('./branches')
const app = express();

app.get("/commits", commit_route.get);

app.get('/branches', branches_routes.get);

exports.app = functions.https.onRequest(app);
