function App() {
  const darkGray = { backgroundColor: "#23272F", color: "white" };

  return (
    <div>
      <div className="main">
        <div className="content">
          <h1 className="Title">Quick Start</h1>
          <p>
            Welcome to the React documentation! This page will give you an
            introduction to the 80% of React concepts that you will use on a
            daily basis.
          </p>
          <div>
            <ul className="learning-list">
              <h3 className="welcome">You will learn</h3>
              <li>How to create and nest components</li>
              <li>How to display data</li>
              <li>How to render conditions and lists</li>
              <li>How to respond to events and update the screen</li>
              <li>How to share data between components</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
