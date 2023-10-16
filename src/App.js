import Header from "./components/Header";
import Form from "./components/Form";


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-5">
            <Form/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
