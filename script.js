//PART 1
//1. Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded.

document.addEventListener('DOMContentLoaded', function(){
  const heading = document.getElementById('change_heading');
  
});

// 2.Replace the text "Change me" with "Hello World!".
document.querySelector('#change_heading').innerHTML =  'Hello World!';

// 3.When a user hovers over one of the colored boxes change the text to display the color 
//that is being hovered over.

document.addEventListener('mouseover', function(mouse){
const section = document.querySelector('.selected');
    section.innerText= mouse.target.className;
});

// 4. Create a new div element.
const newDiv = document.createElement('div');

//5. Give your new div a class of purple and style it so that it has a background color of purple.
 newDiv.classList.add('purple');
 newDiv.style.backgroundColor = 'purple';
 newDiv.style.color = 'red';

 // 6. Append your new div to the page to the section tag.
    const sectionTag = Document.querySelector('section');
     sectionTag.appendChild(newDiv);
   