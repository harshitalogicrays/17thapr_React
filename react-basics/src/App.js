import Firstclasscomp from "./components/01day/Firstclasscomp";
import Firstfunctionalcomp from './components/01day/Firstclasscomp'
import Propsdemoinfun from "./components/01day/Propsdemoinfun";
import Childrenprops from "./components/02day/Childrenprops";
import EventDemoinfun from "./components/02day/EventDemoinfun";
import Propsinfundemo from "./components/02day/Propsinfundemo";


function App() {
  return (
    <div className="container mt-5">
        {/* <h1 className="text-danger">Hello React</h1>
        <h2>Welcome to LRA</h2>
        <hr></hr>
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

            <EventDemoinfun/>
    </div>
  )
}

export default App;
