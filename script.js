let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  const developers = employees.filter(employees => employees.profession == "developer");
  console.log(developers);
}

// Function to print developers using map
function printDevelopersByMap() {
  employees.map(employee => {
      if (employee.profession === "developer") {
          console.log(employee);
      }
  });
}

// Function to print developers using forEach
function PrintDeveloperbyForEach() {
  const developers = [];
    employees.forEach(employee => {
        if (employee.profession === "developer") {
            developers.push(employee);
        }
    });
    console.log(developers);
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  employees.push(newEmployee);
  console.log(newEmployee);
}

function removeAdmin() {
  employees = employees.filter(employee => employee.profession !== "admin");
  console.log(employees);
}

function concatenateArray() {
   const newArray = [
        { id: 5, name: "Alice", age: "22", profession: "designer" },
        { id: 6, name: "Bob", age: "25", profession: "engineer" },
        { id: 7, name: "Eva", age: "30", profession: "manager" }
    ];
    const concatenatedArray = employees.concat(newArray);
    console.log(concatenatedArray);
}
