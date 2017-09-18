//ES5
function createBookShop(inventory){
	return{
  	inventory : inventory,
  	inventoryValue : function(){
  	 return this.inventory.reduce((total,book)=>total+book.price,0);
  	},
  	priceForTitle : function(title){
   	 return this.inventory.find(book => book.title === title).price;
  	}
  }
}
const inventory = [
  {title : 'Book1',price : 20},
  {title : 'Book2',price : 40}
];
const bookShop = createBookShop(inventory);
bookShop.inventoryValue();
bookShop.priceForTitle('Book1');

//ES6
//If a key and value has same name then we can remove one and use only one like inventory.
//If there is a key and value and value is a function then we can remove the : and function keywords like  inventoryValue(){

function createBookShop(inventory){
	return{
  	inventory,
  	inventoryValue(){
  	 return this.inventory.reduce((total,book)=>total+book.price,0);
     //This also fine. Without this. We can refer inventory directly
     //return inventory.reduce((total,book)=>total+book.price,0);
  	},
  	priceForTitle(title){
   	 return this.inventory.find(book => book.title === title).price;
  	}
  }
}
const inventory = [
  {title : 'Book1',price : 20},
  {title : 'Book2',price : 40}
];
const bookShop = createBookShop(inventory);
bookShop.inventoryValue();
bookShop.priceForTitle('Book1');

//Example 2:

function saveFile(url,data){
  $.ajax({
		//ES5
     /*url : url,
     data: data,
     method:'POST'*/
    //ES6
    	url,
    	data,
     method:'POST'
  });
}

const url = "http://fileupload.com";
const data = {color:'red'};
saveFile(url,data);
