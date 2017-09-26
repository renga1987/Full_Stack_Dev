class Comment{
  constructor(content,children){
    this.content=content;
    this.children=children;
  }
  //This is how we use a generator in class
  //Array Helper methods are not supported inside Generators
  //Here we loop the content and its children.
  //The children in turn can have many children
  *[Symbol.iterator](){
    	yield this.content;
    	for(let child of this.children){
    		yield* child;
      }
 	 }
}

const childern = [
  new Comment('Good Comment',[]),
  new Comment('Bad Comment',[]),
  new Comment('V.Good Comment',[])
];

const tree = new Comment('Great Post',childern);
const values=[];
for(let value of tree){
  values.push(value);
}
values;
