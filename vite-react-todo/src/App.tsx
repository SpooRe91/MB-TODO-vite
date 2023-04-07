import './App.scss';
import './ResetCSS.scss';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { globalState, setToShowForm } from './features/globalSlice';
import { useAppDispatch, useAppSelector } from './App/hooks';

import LoadingComponent from './Components/GlobalComponents/LoadingComponent';
import NavBar from './Components/NavBar/NavBar';
import CompletedComponent from './Components/CompletedComponent/CompletedComponent';
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
      </Suspense>
      <Routes>
        {/* <Suspense fallback={<LoadingComponent />}> */}
        <Route path='/all-tasks' element={<AddToDo />} />
        <Route path='/done-deleted-tasks' element={<CompletedComponent />} />
        {/* </Suspense> */}
      </Routes>
    </main >
  )
}

export default App
