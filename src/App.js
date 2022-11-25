import { createContext, useState } from "react";
import CreateList from "./components/CreateList";
import DisplayList from "./components/DisplayList";

import './App.css'

export const listContext = createContext()
function App() {


  const [taskList, setTaskList] = useState([{ title: 'Task 1', id: '2' }])

  function handleDelete(id) {
    let remTasks = taskList.filter(task => task.id !== id)
    setTaskList(remTasks)

  }

  // const value = { taskList, setTaskList, handleDelete }
  return (
    <>

      <listContext.Provider value={{ taskList, handleDelete, setTaskList }} >
        <div className="App">
          {/* <CreateList setTaskList={setTaskList} /> */}
          {/* <DisplayList list={taskList} handleDelete={handleDelete} /> */}

          <CreateList />
          <DisplayList />
        </div>

      </listContext.Provider>
    </>

  );
}

export default App;
