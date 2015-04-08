'use strict';

//var Customer = require('./customer.model');
var express = require('express');
var _ = require('lodash');


// Get list of customers
exports.index = function(req, res) {
	//send Mostrara el json, render usara ejs como plantilla
	return res.render('index', { title: 'Express 777' });
};

// Get list of customers
exports.download = function(req, res) {
	return res.send('respond with a index download');
};