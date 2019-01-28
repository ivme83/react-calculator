import React from 'react';
import Calculator from "./components/Calculator/Calculator.jsx";
import { Provider } from "react-redux";
import store from "./state";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Calculator />
//       </div>
//     );
//   }
// }

function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <Calculator />
      </div>
    </Provider>
  );
};

export default App;
