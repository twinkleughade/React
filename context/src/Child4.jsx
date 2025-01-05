import React, { useContext } from "react";
import { newdata } from "./Child2";

const Child4 = () => {
  let { name, age } = useContext(newdata);
  return (
    <>
      <div>
        Child4
        <newdata.Consumer>
          {({ name, age }) => {
            return (
              <h1>
                my name is {name} and my age is {age}
              </h1>
            );
          }}
        </newdata.Consumer>
      </div>
    </>
  );
};
export default Child4;
