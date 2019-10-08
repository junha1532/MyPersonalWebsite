todos = [
  {
    id: 1,
    task: "Wash my dog",
    isCompleted: false
  },
  {
    id: 2,
    task: "Wake up my penguins",
    isCompleted: false
  },
  { id: 3, task: "Feed my iguanas", isCompleted: false }
];

const todoJSON = JSON.stringify(todos);

// forEach, map, filter
//== checks only for value without type checking

const x = 10;
const color = x > 10 ? "red" : "blue";
