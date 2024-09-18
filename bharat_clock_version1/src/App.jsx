import "./App.css";
import Clockheading from "./components/Clockheading";
import Clockslogan from "./components/Clockslogan";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <center>
        <Clockheading />
        <Clockslogan />
        <CurrentTime />
      </center>
    </>
  );
}
export default App;
