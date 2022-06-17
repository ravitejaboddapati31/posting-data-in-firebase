import React, { useState } from "react";
const Oneplus = () => {
  const [age, Newage] = useState(10);
  const [weight, Newweight] = useState(30);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 text-warning">
          <h1>Age:{age}</h1>
          <button
            onClick={() => Newage(age + 1)}
            className="btn btn-info btn-sm "
          >
            ADD AGE
          </button>
        </div>
        <div className="col-lg-4 text-success">
          <h1>weight:{weight}</h1>
          <button
            onClick={() => Newweight(weight - 10)}
            className="btn btn-primary btn-sm "
          >
            DECREASE WEIGHT
          </button>
        </div>
      </div>
    </div>
  );
};
export default Oneplus;
