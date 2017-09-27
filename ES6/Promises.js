//Javascript executes code line by line without any pauses. No pausing in JS
//No sleep like pause for 3 ms.
// We have setTimeOut method where we can set some time delay..
//If there is a consle.log(data) after a external call which returns "data" we may have undefined returned
//if it takes long time to return.
//Promises helps to avoid that. Only after the request is processed and returned data will be accessed.
//Promises States:
  //Unresolved - Waiting for something to finish
  //Resolved - something finished and all went ok
  //Rejected - something finished and something went bad.

//Promise -> Everything Worked out -> status 'Resolved' -> 'then' Callback
//Promise -> Something Bad Happened -> status 'Rejected' -> 'catch' Callback

promise = new Promise((resolve,reject)=>{
  setTimeOut(()=>{
    reject();
  },3000);
});

promise.then(()=>{
  console.log('Completed Successfully....');
}).then(()=>{
  console.log('Chain Callback....');
}).catch(()=>{
  console.log('Errrrrrr....');
});

//Fetch Helper

url = "https://jsonplaceholder.typicode.com/posts/";
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
