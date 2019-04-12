var todolist = [
  { id: 0, content: "Wash the car", checked: false },
  { id: 1, content: "Clean the gutter", checked: true }
];
const controller = {};

// Loads the initial list
controller.index = (req, res) => {
  res.json({ data: { todolist } });
};

// Refresh list
controller.show = (req, res) => {
  if (err) {
    return console.log(err);
  }
  let item = todolist.find(todo => todo.id == req.params.id);
  res.json({
    message: "ok",
    data: { todolist }
  });
};

// Select only non completed items
controller.notcompleted = (req, res) => {
  let newlist = todolist.filter(todo => todo.checked == false);
  res.json({
    message: "ok",
    data: { newlist }
  });
};

// Creates a new item in the array
controller.create = (req, res) => {
  let itemsId = 1;
  if (todolist.slice(-1).pop() != undefined) {
    itemsId = todolist.slice(-1).pop().id + 1;
  }
  todolist.push({ id: itemsId, content: req.body.content });
  res.json({ message: "ok", data: { todolist } });
};

// Updates item from the array by id
controller.update = (req, res) => {
  let item = todolist.find(todo => todo.id == req.params.id);
  item.checked = req.body.checked;
  res.json({
    message: "ok",
    data: { todolist }
  });
};

// Deletes existing item by id
controller.destroy = (req, res) => {
  var removeIndex = todolist.findIndex(todo => todo.id == req.params.id);
  if (!todolist[removeIndex]) {
    res.json({ message: "Nothing to delete!" });
  } else {
    var deletedItem = todolist[removeIndex];
    todolist.splice(removeIndex, 1);
    res.json({ message: "To Do Deleted " + deletedItem });
    res.send();
  }
};

module.exports = controller;
