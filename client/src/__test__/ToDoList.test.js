import ShallowRenderer from "react-test-renderer/shallow";
import ToDoList from "../component/ToDoList.js";

// in your test:
const renderer = new ShallowRenderer();
renderer.render(<ToDoList />);
const result = renderer.getRenderOutput();

expect(result.type).toBe("section");
expect(result.props.children).toEqual([
  <section className="todo">
    <ul className="todo-list">
      <ToDo />
    </ul>
  </section>
]);
