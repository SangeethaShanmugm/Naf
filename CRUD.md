fetch('https://jsonplaceholder.typicode.com/posts', {
method: "GET",

})
.then(res => res.json())
.then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/posts', {
method: "POST",
body: JSON.stringify({fakeData: 1}),
headers: {"Content-type": "application/json"}
})
.then(response => response.json())
.then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/posts/${id}', {
method: "PUT",
body: JSON.stringify({fakeData: 200,id: 1}),
headers: {"Content-type": "application/json"}
})
.then(response => response.json())
.then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/posts', {
method: "DELETE",

})
.then(res => res.json())
.then(data => console.log(data));
