
import './App.css';
import Props from './components/02.Props/Composition';
import ClassComponent from './components/03.State/ClassComponent';
import FunctionalComponent from './components/03.State/FunctionalComponent';
import ClassComponent2 from './components/04.LifeCycle/ClassComponent';
import Event from './components/05. Event/Event';
import Condition from './components/06. ConditionalRendering/Condition';
import ListandKey from './components/07. List/ListandKey';
import ControlledComponent from './components/08. Form/ControlledComponent';
import UncontrolledComponent from './components/08. Form/UncontrolledComponent';

function App() {
  return (
    <>
      <div className="App">
        <h2>02. Props</h2>
        <Props />
        <hr/>

        <h2>03. State</h2>
        <ClassComponent />
        <FunctionalComponent />
        <hr/>

        <h2>04. LifeCycle</h2>
        <ClassComponent2 />
        <hr/>

        <h2>05. Event</h2>
        <Event />
        <hr/>

        <h2>06. 조건부 렌더링</h2>
        <Condition />
        <hr/>

        <h2>07. List</h2>
        <ListandKey />
        <hr/>

        <h2>08. Form</h2>
        <ControlledComponent />
        <hr/>
        <UncontrolledComponent />


      </div>
    </>
  );
}

export default App;
