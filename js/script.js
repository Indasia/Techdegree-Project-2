/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// global variables that store DOM elements
const students = document.querySelectorAll(".student-item");
const page = document.querySelector(".page");
let studentsPerPage = 10;
const numOfPages = Math.ceil(students.length/studentsPerPage);


// a function with a parameter of students and page
const showPage = (students, page) => {
   // define the range for the first and last indexes
   let firstIndex = (studentsPerPage * page) - studentsPerPage;
   let lastIndex = (studentsPerPage - 1) + firstIndex;
   // loop through the list of students
   for (let i = 0; i < students.length; i += 1) {
      // if else statement to show or hide students if index is within page number intervals
      if (i >= ((page * 10) - 10) && i < (page * 10)){
      students[i].style.display ="block";
      } else {
      students[i].style.display ="none";
      }
   }
}


// initial call to show page function to show students and first page
showPage (students, 1);


const appendPages = (list) => {
   // create div element on page and set class
   const div = document.createElement("div");
   page.appendChild(div);
   div.className = "pagination";
   // add unordered list to div
   const ul = document.createElement("ul");
   div.appendChild(ul);
   // for every page, add li and a tags with the page number
   for(let i = 1; i <= numOfPages; i += 1){
      // add li tags to the div
      const li = document.createElement("li");
      ul.appendChild(li);
      // add a tags to the li
      const a = document.createElement("a");
      li.appendChild(a);
      a.setAttribute("href", "#");
      a.textContent = i;
      if (a.textContent === "1")
      // highlight first button
      a.style.backgroundColor = "highlight";
      // add an event listener that displays correct page when clicked
      a.addEventListener('click', (e) => {
        const aLinks = document.querySelectorAll("a");
        let page = e.target;
        page.className = "active";
        // loops through all a tags and highlights current page
        for (let i = 0; i < aLinks.length; i += 1) {
          if (aLinks[i] === page) {
          page.style.backgroundColor = "highlight";
          } else {
            aLinks[i].style.backgroundColor = '';
            aLinks[i].className = '';
          }
        }
        // call the show page function
        showPage(students, page.textContent);
      });
   }
}
appendPages(students);
