
import './App.css';
import Props from './components/02.Props/Composition';
import ClassComponent from './components/03.State/ClassComponent';
import FunctionalComponent from './components/03.State/FunctionalComponent';
import ClassComponent2 from './components/04.LifeCycle/ClassComponent';

function App() {
  return (
    <>
      <div className="App">
        <Props />
        <hr/>

        <h1>03. State</h1>
        <ClassComponent />
        <FunctionalComponent />
        <hr/>

        <h1>04. LifeCycle</h1>
        <ClassComponent2 />


      </div>
    </>
  );
}

export default App;
