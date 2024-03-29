import "./App.scss";
import "./ResetCSS.scss";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { globalState } from "./features/globalSlice";
import { useAppSelector } from "./App/hooks";

import { HomeComp, NavBar, LoadingComponent } from "./Components";

const FormComponent = lazy(() => import("./Components/FormComponent/FormComponent"));
const AddToDo = lazy(() => import("./Components/AddToDo/AddToDo"));
const CompletedComponent = lazy(() => import("./Components/CompletedComponent/CompletedComponentContainer"));

function App() {
    const globalStateData = useAppSelector(globalState);

    return (
        <main data-cy="app-main">
            <NavBar />
            {globalStateData.loading ? (
                <div className="loaderComp">
                    <LoadingComponent />
                </div>
            ) : null}
            <Suspense fallback={<LoadingComponent />}>
                {globalStateData.showForm ? <FormComponent /> : null}
                <Routes>
                    <Route path="/" element={<HomeComp />} />
                    <Route path="/all-tasks" element={<AddToDo />} />
                    <Route path="/done-deleted-tasks" element={<CompletedComponent />} />
                </Routes>
            </Suspense>
        </main>
    );
}

export default App;
