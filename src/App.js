import Header from "./components/Header";
import Form from "./components/Form";


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <div className="row justify-content-center mt-4">
          <div className="col-4">
            <Form className = "register-form" title = "Register Form" description = "All aviable input types are included"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
