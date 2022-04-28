import React from 'react';
import NotesView from 'views/NotesView/NotesView';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename={`/`}>
        <React.Suspense fallback={null}>
          <Switch>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/login`}
              render={() => {
                return <></>;
              }}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/notes`}
              render={() => {
                return <NotesView />;
              }}
            />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
