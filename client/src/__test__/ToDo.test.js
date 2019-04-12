import ShallowRenderer from "react-test-renderer/shallow";
import ToDo from "../component/ToDo.js";

// in your test:
const renderer = new ShallowRenderer();
renderer.render(<ToDo />);
const result = renderer.getRenderOutput();

expect(result.type).toBe("li");
expect(result.props.children).toEqual([
  <li className="item">
    <div className="content">
      <input name="checked" />
    </div>
  </li>
]);
