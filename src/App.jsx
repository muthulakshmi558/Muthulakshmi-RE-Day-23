import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AsyncComponent from './components/ThunkActionsDisplay';
import UserList from './components/UserList.jsX';
import LoadingList from './components/LoadingList';
import DataComponent from './components/DataComponent';
import FetchUserList from './components/FetchUserList';
import FetchPostList from './components/FetchPostList';
import DispatchThunk from './components/DispatchThunk';
import PromiseUserList from './components/PromiseMiddleware';
import QuoteGenerator from './components/QuoteGenerator';
import UserListThunk from './components/UserListwithThunk';
import WeatherComponent from './components/WeatherComponent';
import JokeGenerator from './components/JokeGenerator';

const reduxThunkTasks = [
  { id: 0, name: 'Async Component (Thunk)', component: <AsyncComponent /> },
  { id: 1, name: 'User List (Reducer)', component: <UserList /> },
  { id: 2, name: 'Loading List', component: <LoadingList /> },
  { id: 3, name: 'Data Component (Error Handling)', component: <DataComponent /> },
  { id: 4, name: 'Fetch User List (Thunk)', component: <FetchUserList /> },
  { id: 5, name: 'Fetch Post List (Thunk)', component: <FetchPostList /> },
  { id: 6, name: 'Dispatch Thunk from Component', component: <DispatchThunk /> },
  { id: 7, name: 'Promise Middleware Users', component: <PromiseUserList /> },
  { id: 8, name: 'Quote Generator', component: <QuoteGenerator /> },
  { id: 9, name: 'User List with Thunk (Mini Project)', component: <UserListThunk /> },
  { id: 10, name: 'Weather Component (Thunk)', component: <WeatherComponent /> },
  { id: 11, name: 'Joke Generator (API)', component: <JokeGenerator /> },
];

function App() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % reduxThunkTasks.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + reduxThunkTasks.length) % reduxThunkTasks.length);
  };

  return (
    <div className="app-container container mt-4">
      <h3 className="text-center mb-4">
        Task {reduxThunkTasks[index].id + 1}: {reduxThunkTasks[index].name}
      </h3>

      <div className="component-wrapper p-3 border rounded shadow-sm bg-light">
        {reduxThunkTasks[index].component}
      </div>

      <div className="text-center mt-4">
        <button onClick={handlePrev} className="btn btn-outline-secondary me-3">← Previous</button>
        <button onClick={handleNext} className="btn btn-outline-primary">Next →</button>
      </div>
    </div>
  );
}

export default App;
