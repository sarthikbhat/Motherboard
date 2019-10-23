const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'temp')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+".png")
    }
  })
  
var upload = multer({storage:storage});
 
module.exports = upload;