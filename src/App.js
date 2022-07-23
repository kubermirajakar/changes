import "./styles.css";
import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";
import { useState } from "react";

export default function App() {
  const [userInput, setUserInput] = useState([]);

  function Users(props) {
    setUserInput((prevState) => {
      return [
        ...prevState,
        {
          username: props.username,
          comments: props.comments
        }
      ];
    });
  }
  function Reset() {
    setUserInput([]);
  }
  console.log(userInput);
  return (
    <div className="App">
      <AddUser setUserInput={Users} Reset={Reset} />
      <UserList userInput={userInput} />
    </div>
  );
}
