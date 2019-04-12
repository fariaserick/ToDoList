import ShallowRenderer from "react-test-renderer/shallow";
import Header from "../component/Header.js";

// in your test:
const renderer = new ShallowRenderer();
renderer.render(<Header />);
const result = renderer.getRenderOutput();

expect(result.type).toBe("div");
expect(result.props.children).toEqual([
  <div className="header">
    <h1 />
  </div>
]);
