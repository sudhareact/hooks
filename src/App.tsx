import { useCallback, useState } from 'react';
import './App.css';
import ControlledForm from './components/ControlledForm/ControlledForm';
import Form from './components/Form/Form';
import LifeCycleHooks from './components/LifeCycleHooks/LifeCycleHooks';

function App() {

  const [showLifeCycleHook, setShowLifeCycleHook] = useState<boolean>(true);

  const toggleLifeCycleHook = useCallback(() => {
    setShowLifeCycleHook(!showLifeCycleHook);
  }, [showLifeCycleHook]);


  return (
    <div className="App">
      {/* <Form></Form> */}
      <ControlledForm></ControlledForm>
      {showLifeCycleHook && <LifeCycleHooks></LifeCycleHooks>}
      <button onClick={toggleLifeCycleHook}>Toggle LifeCycleHook</button>
    </div>
  );
}

export default App;
