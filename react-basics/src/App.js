import { Link, Outlet } from "react-router-dom";
import Firstclasscomp from "./components/01day/Firstclasscomp";
import Firstfunctionalcomp from './components/01day/Firstclasscomp'
import Propsdemoinfun from "./components/01day/Propsdemoinfun";
import Childrenprops from "./components/02day/Childrenprops";
import EventDemoinfun from "./components/02day/EventDemoinfun";
import Propsinfundemo from "./components/02day/Propsinfundemo";
import CounterApp from "./components/03day/CounterApp";
import StateDemo from "./components/03day/StateDemo";
import TextBoxDemo from "./components/03day/TextBoxDemo";
import Form1 from "./components/04day/Form1";
import Form2 from "./components/04day/Form2";
import './App.css'
import cssmodule from './App.module.css'

function App() {
  return (
    <>
        {/* <h1 className="text-danger">Hello React</h1>
        <h2 style={{color:'beige',backgroundColor:'GrayText'}}>Welcome to LRA</h2> */}
        {/* <hr></hr>
        <Firstfunctionalcomp/><hr/>
        <Firstclasscomp/> */}

        {/* <Propsdemoinfun/> */}

        {/* <Propsinfundemo username="Happy" address="ahmedabad"
        isActive={true}
        mobile={9098767}
        /> */}

          {/* <Childrenprops empid={1001}>
              <h1>heading</h1>
              <Firstfunctionalcomp/>
              <p>rhwkhtrkwh</p>
          </Childrenprops> */}

            {/* <EventDemoinfun/> */}

            {/* <CounterApp/> <hr/>/
            <StateDemo/> <hr/> */}
            {/* <TextBoxDemo/> */}
            {/* <Form1/> */}
            {/* <Form2/>     */}

          <Link type="button"  class="btn btn-primary me-2" to='/fun'> 
          <span className={cssmodule.App1}>Functional component Concepts</span>
          </Link>
          <Link type="button" to='/class'  class="btn btn-danger"> class component Concepts
          </Link>          
            <Outlet/>
    </>
  )
}

export default App;
