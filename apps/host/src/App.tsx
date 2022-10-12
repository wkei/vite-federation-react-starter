import { lazy } from "react";

const isDevMode = import.meta.env.MODE === "development";

const RemoteApp = lazy(() =>
  isDevMode ? import("remote") : import("remote/App")
);

function App() {
  return (
    <div className="App">
      <h1>Host</h1>
      <hr />
      <RemoteApp />
    </div>
  );
}

export default App;
