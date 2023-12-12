import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  return (
    <>
      <Step step={step} setStep={setStep} />
      <Count count={count} setCount={setCount} step={step} />
      <Message count={count} />
    </>
  );
}

function Step({ step, setStep }) {
  return (
    <div className="row">
      <button onClick={() => setStep(step - 1)} className="btn">
        -
      </button>
      <h2>Step: {step}</h2>
      <button onClick={() => setStep(step + 1)} className="btn">
        +
      </button>
    </div>
  );
}

function Count({ count, setCount, step }) {
  return (
    <div className="row">
      <button onClick={() => setCount(count - step)} className="btn">
        -
      </button>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + step)} className="btn">
        +
      </button>
    </div>
  );
}

function Message({ count }) {
  let today = new Date();
  today.setDate(today.getDate() + count);

  if (count === 0) {
    return <h2 className="row">{`Today is ${today.toDateString()}`}</h2>;
  } else if (count >= 0) {
    return (
      <h2 className="row">{`${count} days from today is ${today.toDateString()}`}</h2>
    );
  } else
    return (
      <h2 className="row">{`${Math.abs(
        count
      )} days ago was ${today.toDateString()}`}</h2>
    );
}
