
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
import UseEffectExample from './components/09. Hook/UseEffectExample';
import UseReducerExample from './components/09. Hook/UseReducerExample';
import UseStateExample from './components/09. Hook/UseStateExample';
import ThankyouDialog from './components/10-2. Compositon2/ThankyouDialog';
import WelcomeDialog from './components/10-1. Composition/WelcomeDialog';
import Input from './components/11. HOC/Input';
import Button from './components/11. HOC/Button';


function App() {
  return (
    <>
      <div className="App" style={{padding: "20px 0"}}>
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
        
        <UncontrolledComponent />
        <hr/>

        <h2>09. Hook</h2>
        <UseStateExample />
        <UseEffectExample />
        <UseReducerExample />
        <hr/>

        <h2>10-1. Composition</h2>
        <WelcomeDialog />
        <ThankyouDialog />
        <hr/>

        <h2>10-2. Composition2</h2>
        <ThankyouDialog />
        <hr/>

        <h2>11. HOC</h2>
        <Input />
        <Button />
        <hr/>

      </div>
    </>
  );
}

export default App;
