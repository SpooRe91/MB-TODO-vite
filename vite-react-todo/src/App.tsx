import './App.scss';
import './ResetCSS.scss';

import { useAppSelector } from './App/hooks';

import LoadingComponent from './Components/GlobalComponents/LoadingComponent';


import { globalState } from './features/globalSlice';
import { Suspense, lazy } from 'react';

const AddToDo = lazy(() => import('./Components/AddToDo/AddToDo'));
const FormComponent = lazy(() => import('./Components/FormComponent/FormComponent'));

function App() {
  const globalStateData = useAppSelector(globalState);

  return (
    <main>
      {
        globalStateData.loading
          ?
          <div className="loaderComp">
            <LoadingComponent />
          </div>
          : null
      }
      <Suspense fallback={<LoadingComponent />}>
        {
          globalStateData.showForm
            ?
            <FormComponent />
            :
            null
        }
      </Suspense>
      <AddToDo />
    </main >
  )
}

export default App
