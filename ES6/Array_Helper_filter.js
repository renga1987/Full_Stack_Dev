//Filter
//ES5
var products = [
  {name:'cucumber',type:'Vegetable'},
  {name:'Apple',type:'Fruit'},
  {name:'Carrot',type:'Vegetable'},
  {name:'Orange',type:'Fruit'}
];
var filteredProducts = [];
for(var i=0;i<products.length;i++){
	if(products[i].type === 'Fruit'){
  	filteredProducts.push(products[i]);
  }
}
//filteredProducts

//ES6
//return keyword is must
var res = products.filter(function(product){
		return product.type === 'Fruit';
});
console.log(res);

//2.
var products = [
  {name:'cucumber',type:'Vegetable',quantity:0,price:30},
  {name:'Apple',type:'Fruit',quantity:10,price:130},
  {name:'Carrot',type:'Vegetable',quantity:20,price:230},
  {name:'Orange',type:'Fruit',quantity:30,price:100}
];

var res1 = products.filter(function(product){
	return product.type === 'Fruit' &&
    		 product.quantity > 0 &&
    		 product.price>10
});
console.log(res1);
