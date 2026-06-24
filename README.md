**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
Ans: getElementById selects an element by its id, return only one element. example: const title= document.getElementById("title");
getElementsByClassName: selects element by class name,it return a  live html collection.
example: const items= document.getElementByClassName("items")
querySelector::select 1st element matches a query selector.
  it returns one elements.
example: document.querySelector("#item");
  document.querySelector(".item");
document.querySelector("p")
querySelectorAll(): selects all the element mathches a CSS selector, returns a static nodelist

example: const item =document.querySelectorAll('.item')
         items.forEach(item=>{
         console.log(item);
         });
**2. How do you create and insert a new element into the DOM?**
Ans:I create an element using document.createElement() and insert it using methods like appendChild() or append().
    example:  
       const p= document.createElement("p");
       p.innerText="Hello World"
       document.body.appendChild(p);

**3. What is Event Bubbling? And how does it work?**
Ans: Event bubble is a process where an event starts from the target element and propagates upward thriugh its parents element.
 <div id="parent" >
   <button id="child">   Click</button>
 </div>

 example:  document.getElementById("child").addEventListener("click",function(){
    console.log("button clicked");
    }

    document.getElementById("parent").addEventListener("click",function(){
    console.log("div clicked");
    }

**4. What is Event Delegation in JavaScript? Why is it useful?**
Ans: Event delegation is a technique where I attach a single event listener to a parent element and handle events for its child element for bubbling

document.getElementById("list").addEventListener("click",function(event){

if(event.target.tagName==="LI"){
console.log(event.target.innerText");
}
why it is useful:: reduces the numbers of event listener 
                    Improves performance.
                    Works for dynamically added elements.
**5.What is the difference between preventDefault() and stopPropagation()?**
Ans:preventDefault()
Prevents the browser's default behavior.
stopPropagation()
Stops the event from bubbling to parent elements.
                    

