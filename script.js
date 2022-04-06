/* DOM - Document Object Model 
    Document - The web page and all of its elements
    Object Model - an object representation of that document
*/

fetch("http://localhost:8080/reimbursements")
  .then((res) => {
    if (res.ok) {
      console.log("SUCCESS");
    } else {
      console.log("Not Successful");
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));

//     .then((response) => res.json())
//     .then((data) => createNewReimbursement(data));
// }

// const content = document.getElementById("content");

// // when the window is loaded it will call the createReimbursements callback function;
// window.onload = getReimbursement;

// function createReimbursementElements(reimbursementData) {
//   console.log(reimbursementData);
//   reimbursementData.forEach((reimbursement) =>
//     createReimbursement(reimbursement)
//   );
// }

// function createReimbursement(reimbursement) {
//   // creating the html element and binding as a child to the content

//   const reimbursementEle = document.createElement("div");
//   reimbursementEle.setAttribute("class", "reimbursement");
//   reimbursementEle.setAttribute("onclick", "Please fill out");

//   const question = document.createElement("p");
//   question.textContent = reimbursement.title;

//   const solution = document.createElement("p");
//   solution.textContent = reimbursement.solution;
//   solution.setAttribute("hidden", "true");

//   // now that the elements are created, what do we need to do?
//   content.appendChild(reimbursementEle);
//   reimbursementEle.appendChild(question);
//   reimbursementEle.appendChild(solution);
// }

// function flip(element) {
//   const question = element.children[0];
//   const solution = element.children[1];

//   if (isHidden(question)) {
//     // question is hidden
//     solution.setAttribute("hidden", "true");
//     question.removeAttribute("hidden");
//   } else {
//     question.setAttribute("hidden", "true");
//     solution.removeAttribute("hidden");
//   }

//   function isHidden(element) {
//     return element.hasAttribute("hidden");
//   }
// }
