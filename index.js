const App = () => {
  const [expression, setExpression] = React.useState("");
  const [answer, setAnswer] = React.useState(0);

  React.useEffect(() => {});

  // const display = (val) => {
  //   if (expression.indexOf("=") > -1) {
  //     setExpression(answer);
  //   }
  //   setExpression((prev) => prev + val);
  //   if (val === "+" || val === "-" || val === "*" || val === "/") {
  //     setAnswer(0);
  //   } else if (val === ".") {
  //     setAnswer((prev) => prev + val);
  //   } else {
  //     setAnswer((prev) => parseFloat(prev + val));
  //   }
  // };

  const display = (val) => {
    setExpression((prev) => prev + val);
    if (expression[expression.length - 1] === "=") {
      if (/[0-9.]/.test(val)) {
        setExpression(val);
      } else {
        setExpression(answer + val);
      }
    }
  };
  const cal = () => {
    setExpression((prev) => prev + "=");
    setAnswer(eval(expression));
  };

  const clear = () => {
    setExpression("");
  };

  const allClear = () => {
    setAnswer(0);
    setExpression("");
  };

  return (
    <div className="container">
      <div className="grid">
        <div className="dis">
          <div className="expression">{expression}</div>
          <div className="answer" id="display">
            {answer}
          </div>
        </div>
        <div className="padButton" onClick={allClear} id="clear">
          AC
        </div>
        <div className="padButton" onClick={clear}>
          C
        </div>
        <div className="padButton" onClick={() => display("/")} id="divide">
          /
        </div>
        <div className="padButton" onClick={() => display("*")} id="multiply">
          *
        </div>
        <div className="padButton" onClick={() => display("7")} id="seven">
          7
        </div>
        <div className="padButton" onClick={() => display("8")} id="eight">
          8
        </div>
        <div className="padButton" onClick={() => display("9")} id="nine">
          9
        </div>
        <div className="padButton" onClick={() => display("+")} id="add">
          +
        </div>
        <div className="padButton" onClick={() => display("4")} id="four">
          4
        </div>
        <div className="padButton" onClick={() => display("5")} id="five">
          5
        </div>
        <div className="padButton" onClick={() => display("6")} id="six">
          6
        </div>
        <div className="padButton" onClick={() => display("-")} id="subtract">
          -
        </div>
        <div className="padButton" onClick={() => display("1")} id="one">
          1
        </div>
        <div className="padButton" onClick={() => display("2")} id="two">
          2
        </div>
        <div className="padButton" onClick={() => display("3")} id="three">
          3
        </div>
        <div className="padButton equal" onClick={() => cal()} id="equals">
          =
        </div>
        <div className="padButton zero" onClick={() => display("0")} id="zero">
          0
        </div>
        <div className="padButton" onClick={() => display(".")}>
          .
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
