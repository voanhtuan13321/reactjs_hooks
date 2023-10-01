import Mounting from './components/demoLifeMounting/Mounting';
import UnMounting from './components/demoLifeUnmounting/UnMounting';
import Updating from './components/demoLifeUpdating/Updating';
import Props from './components/demoProps/Props';
import StateClass from './components/demoStateClassComponent/StateClass';
import ParentComponent from './components/demoUseCallback/ParentComponent';
import UseContext from './components/demoUseContext/UseContext';
import UseEffect from './components/demoUseEffect/UseEffect';
import UseReducer from './components/demoUseReducer/UseReducer';
import UseRef from './components/demoUseRef/UseRef';
import UseState from './components/demoUseState/UseState';

function App() {
  return (
    <>
      <h1>DEMO</h1>
      {/* demo state trong class components */}
      {/* <StateClass /> */}

      {/* demo mounting trong vòng đời */}
      {/* <Mounting /> */}

      {/* demo updating trong vòng dời */}
      {/* <Updating /> */}

      {/* demo unmounting trong vòng đời */}
      {/* <UnMounting /> */}

      {/* demo props trong class components */}
      {/* <Props /> */}

      {/* demo useState */}
      {/* <UseState /> */}

      {/* demo useReducer */}
      {/* <UseReducer /> */}

      {/* demo useEffect */}
      {/* <UseEffect /> */}

      {/* demo useContext  */}
      {/* <UseContext /> */}

      {/* demo useRef */}
      <UseRef />

      {/* demo useCallBack */}
      {/* <ParentComponent /> */}
    </>
  );
}

export default App;
