var Product=require('../models/product');
var mongoose=require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/shopping'); 
var products=[new Product({
imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
title:'Gothic Video game',
description:'awesome game !!!!!!!',
price:10
}),
new Product({
imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
title:'Gothic Video game',
description:'awesome game !!!!!!!',
price:10
}),
new Product({
imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
title:'Gothic Video game',
description:'awesome game !!!!!!!',
price:10
}),
];
var done=0; 
for(var i=0;i<products.length;i++){
products[i].save(function(err,result){
done++;
if(done===products.length){
exit();
}
});
}
function exit(){
mongoose.disconnect();
}