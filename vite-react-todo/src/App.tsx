import './App.scss';
import './ResetCSS.scss';

import { Suspense, lazy } from 'react';
import { globalState, setToShowForm } from './features/globalSlice';
import { useAppDispatch, useAppSelector } from './App/hooks';

import LoadingComponent from './Components/GlobalComponents/LoadingComponent';

const AddToDo = lazy(() => import('./Components/AddToDo/AddToDo'));
const FormComponent = lazy(() => import('./Components/FormComponent/FormComponent'));

function App() {
  const globalStateData = useAppSelector(globalState);
  const dispatch = useAppDispatch();

//   const handleHideContainer = (e: React.MouseEvent<HTMLDivElement>) => {
//     e.target === e.currentTarget
//       ? dispatch(setToShowForm(!globalStateData.showForm))
//       : null
//   }

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
