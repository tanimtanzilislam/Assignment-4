1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
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


