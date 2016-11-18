/**
 * Created by maggie on 16/11/17.
 */
var mongoose = require('mongoose');
var dbconfig  = require('../dbconfig.js');

mongoose.connect(dbconfig.dburl);
//创建数据库模型
    var userSchema = new mongoose.Schema({
        username: String,
        password: String,
        email:{type:String,default:''}
    });

    var articleSchema = new mongoose.Schema({
      title: String,
   });

 exports.User = mongoose.model('userinfo',userSchema);
 exports.Article = mongoose.model('article',articleSchema);

