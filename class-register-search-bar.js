const userCardTemplate = document.querySelector("[data-user-template]")

const classes = []
classes.push({
    "className": "Beginning Wheel Throwing Mondays Session A",
    "category": "Ceramics",
    "instructor": "Rachel Kirby (she/her)",
    "term": "Winter 2022",
    "fee": "$100",
    "max enrl": 5,
    "actual enrl": 4,
    "description": "In this 4 week class, you will learn the basics of throwing. From centering to trimming and glazing, this class will get you going in ceramics!"
})

classes.push({
    "className": "Make a Mug Workshop!",
    "category": "Ceramics",
    "instructor": "Rachel Kirby (she/her)",
    "term": "Winter 2022",
    "fee": "$20",
    "max enrl": 2,
    "actual enrl": 1,
    "description": "Make your own hand built mug while learning handbuilding techniques!"
})

const myJSON = JSON.stringify(classes);

let data = JSON.parse(myJSON)
// console.log(data)

data.forEach(classes => {
  const card = userCardTemplate.content.cloneNode(true)
  const collapsible = card.querySelector("[collapsible-header]")
  console.log(classes)

});


// function search_animal() {
//   let input = document.getElementById('searchbar').value
//   input = input.toLowerCase();
//   let x = document.querySelector('#list-holder');
//   x.innerHTML = "";
//
//   for (i = 0; i < data.length; i++) {
//     let obj = data[i];
//
//     if (obj.className.toLowerCase().includes(input)) {
//       const elem = document.createElement("li")
//       elem.innerHTML = `${obj.className} - ${obj.category} - ${obj.instructor}`
//       x.appendChild(elem)
//     }
//   }
// }

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
