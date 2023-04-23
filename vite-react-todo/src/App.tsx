import './App.scss';
import './ResetCSS.scss';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { globalState, setToShowForm } from './features/globalSlice';
import { useAppDispatch, useAppSelector } from './App/hooks';

import LoadingComponent from './Components/GlobalComponents/LoadingComponent';
import CompletedComponent from './Components/CompletedComponent/CompletedComponent';
import NavBar from './Components/NavBar/NavBar';
import AddToDo from './Components/AddToDo/AddToDo';
import { MdFormatListNumbered } from 'react-icons/md';

const FormComponent = lazy(() => import('./Components/FormComponent/FormComponent'));

function App() {
  const globalStateData = useAppSelector(globalState);
  const dispatch = useAppDispatch();

  return (
    <main data-cy="app-main">
      <NavBar />
      <div>
        <button
          className='showFormButton'
          data-cy='showFormButton'
          onClick={() => dispatch(setToShowForm(!globalStateData.showForm))}>
          <MdFormatListNumbered /> {globalStateData.showForm ? 'Hide task from' : 'Show task form'}
        </button>
      </div>
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
        <Routes>
          <Route path='/all-tasks' element={<AddToDo />} />
          <Route path='/done-deleted-tasks' element={<CompletedComponent />} />
        </Routes>
      </Suspense>
      {/* <Suspense fallback={<LoadingComponent />}>
        </Suspense> */}
    </main >
  )
}

export default App
