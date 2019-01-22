function createNode(element) 
{
   return document.createElement(element);
 
}
function append(parent,el)
{
	return parent.appendChild(el); //append the child 'ele' to the parent
}


const ul=document.getElementById("authors");

const url='https://randomuser.me/api/?result=5';



fetch(url) //fetch url that want to fetch                       	
.then((resp)=> resp.json())  //if request is successful it returns a promise in then() and return response in JSON format like resp => (and grabbing the response in) JSON format
.then(function(data) 
{    
   //also if request is successfulit also return another promise in then()
	let authors=data.results;
	return authors.map(function(person)
	{
	
		let li= createNode('li'),
		img=createNode('img'),
		span=createNode('span');
		
		
		img.src= person.picture.medium;
		

		span.innerHTML=`${person.name.first}
		${person.name.last}`;
		
		append(li,img);
		append(li,span);
		append(ul,li);


})
})
		
		
.catch(function(error)           //if request is unsuccessful returns error 
{
console.log(JSON.stringify(error));
});