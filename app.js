const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/code.html'));
  //__dirname : It will resolve to your project folder.
});
router.get('/barcoe',function(req,res){
    res.sendFile(path.join(__dirname+'/barcode.html'));
    //__dirname : It will resolve to your project folder.
  });
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');