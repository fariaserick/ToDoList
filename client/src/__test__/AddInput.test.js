import ShallowRenderer from "react-test-renderer/shallow";
import AddInput from "../component/AddInput.js";

// in your test:
const renderer = new ShallowRenderer();
renderer.render(<AddInput />);
const result = renderer.getRenderOutput();

expect(result.type).toBe("div");
expect(result.props.children).toEqual([
  <div className="container">
    <form />
  </div>
]);
