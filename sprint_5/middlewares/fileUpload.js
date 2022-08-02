const path = require('path');
const multer = require('multer');

const pathULImages = path.resolve(__dirname , "../public/images/avatars");

const storage = multer.diskStorage({

        destination: function(req, file, cb){

                cb(null, pathULImages);               

        },

        filename: function( req, file, cb){

                cb(null, Date.now() + '-' + file.originalname);

        }

});

const uploadFile = multer({storage: storage});

module.exports = uploadFile;