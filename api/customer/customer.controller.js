'use strict';

var Customer = require('./customer.model');
var excelReport = require('excel-report');
var express = require('express');
var _ = require('lodash');
var fs = require('fs');

// Get list of customers
exports.index = function(req, res) {
	return res.send('respond with a customer index');
};


exports.download = function(req, res) {
	return res.send('respond with a customer download');
};


exports.excel = function(req, res) {
  //console.log(Math.floor(Math.random()*100));
  //npm install excel-report --save

  	var data ={title:'Voucher List',company:'STP software',address:'56, 13C Street, Binh Tri Dong B ward, Binh Tan district, Ho Chi Minh City',user_created:'TRUONGPV'};
      	data.table1 =[{date:new Date(Date.UTC(2015,0,13)),number:1,description:'description 1',qty:10}
      	  	,{date:new Date(Date.UTC(2015,0,14)),number:2,description:'description 2',qty:20}
      	  	,{date:new Date(Date.UTC(2015,0,14)),number:5,description:'description 2',qty:30}
      	];

  var template_file = __dirname + '/template.xlsx';

  //return res.send(data); //si quiero que pare aquí

  excelReport(template_file,data,function(error,binary){
    if(error){
      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.end(error);
      return
    }
    res.setHeader('Content-Type', 'application/vnd.openxmlformats');
    res.setHeader("Content-Disposition", "attachment; filename=Customer-"+Number(new Date())+".xlsx");
    res.end(binary, 'binary');
    
  });

};
