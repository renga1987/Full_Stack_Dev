//Find
//Returns the first matching object.
var users = [
  {name:'Renga',id:5},
  {name:'Sam'},
  {name:'Jai'},
  {name:'Renga'}
];

users.find(function(user){
return user.name === 'Renga'
});

//2.

var posts=[
  {id:1,title:'New Post'},
  {id:2,title:'Old Post'}
];

var comment = {postId:1,content:'Great Post'};

function postForComment(posts,comment){
return posts.find(function(post){
	return post.id === comment.postId;
});
}
postForComment(posts,comment);
