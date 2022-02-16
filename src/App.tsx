import { useCallback, useState } from 'react';
import './App.css';
import ControlledForm from './components/ControlledForm/ControlledForm';
import Form from './components/Form/Form';
import IdleWatcher2 from './components/IdleWatcher/IdleWatcher2';
import LifeCycleHooks from './components/LifeCycleHooks/LifeCycleHooks';
import LifeCycleHooks2 from './components/LifeCycleHooks/LifeCycleHooks2';
import StudentsMemo from './components/Memo/Memo';
import MemoMoviesExample from './components/Memo2/MemoMoviesExample';
import MemoExample from './components/Memo2/MemoExample';
import MovieUIComposer from './components/Context/MovieUIComposer';
import SimpleContext from './components/SimpleContext/SimpleContext';
import Tv from './components/Reducer/Reducer';

function App() {

  const [showLifeCycleHook, setShowLifeCycleHook] = useState<boolean>(true);

  const toggleLifeCycleHook = useCallback(() => {
    setShowLifeCycleHook(!showLifeCycleHook);
  }, [showLifeCycleHook]);


  return (
    <div className="App">
      {/* <Form></Form> */}
      {/* <ControlledForm></ControlledForm>
      {showLifeCycleHook && <LifeCycleHooks2></LifeCycleHooks2>}
      <button onClick={toggleLifeCycleHook}>Toggle LifeCycleHook</button> */}
      {/* <IdleWatcher2></IdleWatcher2>
      <StudentsMemo></StudentsMemo> */}
      {/* <MemoExample></MemoExample> */}
      {/* <MemoMoviesExample></MemoMoviesExample> */}
      {/* <MovieUIComposer></MovieUIComposer> */}
      {/* <SimpleContext></SimpleContext> */}
      <Tv></Tv>
    </div>
  );
}

export default App;
