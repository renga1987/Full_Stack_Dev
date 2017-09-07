//This is one of the common usecase where form validation is carried out
//for all the fields using every.

function Field(value){
 this.value = value;
}

Field.prototype.validate = function(){
  return this.value.length > 0;
};

var userName = new Field('Renga');
var passWord = new Field('Prasad');
//userName.validate();
//passWord.validate();
var fields = [userName,passWord]
fields.every(function(field){
return field.validate();
});
