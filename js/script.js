/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

// global variables that store DOM elements
const studentList = document.querySelectorAll(".student-list");
const students = document.querySelectorAll(".student-item");
const studentDetails = document.querySelectorAll('.student-details');
const page = document.querySelector(".page");
const pageHeader = document.querySelector('.page-header');
let studentsPerPage = 10;
const numOfPages = Math.ceil(students.length/studentsPerPage);


// a function with a parameter of page and students
const showPage = (students, page) => {
   // define range for the first and last indexes
   let firstIndex = (studentsPerPage * page) - studentsPerPage;
   let lastIndex = (studentsPerPage - 1) + firstIndex;
   // loop through the list of students
   for (let i = 0; i < students.length; i += 1) {
      //if else statement to show or hide students if index is within page number intervals
      if (i >= ((page * 10) - 10) && i < (page * 10)){
      students[i].style.display ="block";
      } else {
      students[i].style.display ="none";
      }
   }
}
   
// calling function of students qnd the first page
showPage (students, 1);


const appendPages = (list) => {
   const pages = students.length/studentsPerPage
   const pagination = document.createElement("div");
   page.appendChild(pagination);
// add "pagination" class
   pagination.className = "pagination";
// add unordered list to store button links
   const unorderedList = document.createElement("ul");
   pagination.appendChild(unorderedList);
// for every page, add li and a tags with the page number text
   for(let i = 0; i <= numOfPages; i += 1){
// add li tags
      const listItem = document.createElement("li");
      unorderedList.appendChild(listItem);
// create link tags
      const a = document.createElement("a");
      listItem.appendChild(a);
      a.setAttribute("href", "#");
      a.textContent = i + 1;
      if (a.textContent === "1")
      // highlight first button
      a.style.backgroundColor = "highlight";
      // add an event listener that displays appropiate page when clicked
      a.addEventListener('click', (e) => {
        const aLinks = document.querySelectorAll("a");
        let page = e.target;
        page.className = "active";
        // loops through all a tags and highlights current page
        for (let i = 0; i < aLinks.length; i += 1)
        {
          if (aLinks[i] === page)
          {
          page.style.backgroundColor = "highlight";
          }
          else
          {
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