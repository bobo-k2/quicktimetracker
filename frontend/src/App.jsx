import React from 'react';
import Tasks from './components/tasks';
import ErrorBoundary from './util/error-boundary';

function App() {
  return (
    <ErrorBoundary>
      <Tasks />
    </ErrorBoundary>
  );
}

export default App;
