 const fs = require('fs');
 const path = require('path');


   let files = fs.readdirSync(__dirname);
   files.forEach(file=> {

   let ext =path.extname(file).slice(1);
  if(!ext ||file ==path.basename(__filename))return;
   let folderPath =path.join(__dirname,ext)
   fs.mkdirSync(folderPath , {recursive : true});
   let oldPath=path.join(__dirname, file);
   let newPath =path.join(folderPath,file);
   fs.renameSync(oldPath,newPath);

   })