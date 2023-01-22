import * as React from "react";
import renderer from "react-test-renderer";
import Loader from "../loader/Loader";

it(`renders correctly a Loader component`, () => {
  const tree = renderer.create(<Loader loading={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});
