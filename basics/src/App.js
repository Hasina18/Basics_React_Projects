import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Greeting from "./Greeting";

function App() {
  let name ="Pooja";
  return (
    <div>
    <h1>Hello from react js</h1>
    {/* < Header/>
    <Home name = {name} age = {24}/>
    <Contact/>
    <About/> */}
    <Greeting name = {name}/>
    <Greeting name = {'Akash'}/>
    <Greeting name = {'Ayush'}/>

    </div>
  );
}

export default App;
