import './App.scss';
import './ResetCSS.scss';

import { useAppSelector } from './App/hooks';

import AddToDo from './Components/AddToDo/AddToDo';
import LoadingComponent from './Components/GlobalComponents/LoadingComponent';

import { globalState } from './features/globalSlice';

function App() {
  const loadState = useAppSelector(globalState);

  return (
    <main>
      {
        loadState.loading
          ?
          <div className="loaderComp">
            <LoadingComponent />
          </div>
          : null
      }
      <AddToDo />
    </main >
  )
}

export default App
