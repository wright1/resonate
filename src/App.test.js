import React from "react";
// import { shallow } from "enzyme";
import ReactDOM from "react-dom";
// import Header, { Title } from "./components/heading";
import App from "./App";



// eslint-disable-next-line no-undef
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it("renders Header component", () => {
//    shallow(<Header />);
//   // const title = <Title>Resonate</Title>
//   // expect(wrapper.contains(title)).toEqual(true);
// });

