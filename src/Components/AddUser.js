import { useState } from "react";
import Button from "./Button";
import classes from "./AddUser.module.css";
import ErrorModal from "./ErrorModal";

export default function AddUser({ setUserInput, Reset }) {
  const [username, setUsername] = useState("");
  const [comments, setcomments] = useState("");
  const [error, setError] = useState();

  function userN(e) {
    setUsername(e.target.value);
  }
  function commentsN(e) {
    setcomments(e.target.value);
  }
  function onSubmit() {
    if (username.trim().length === 0 || comments.trim().length === 0) {
      setError({
        message: "please enter a valid input"
      });
      return;
    }
    setUserInput({ username: username, comments: comments });
    console.log(username, comments);
    setUsername("");
    setcomments("");
  }
  function errorHandler() {
    setError(null);
  }

  return (
    <div className={classes.container}>
      <div className={classes.input}>
        <label htmlFor="username">username</label>
        <input type="text" id="username" onChange={userN} value={username} />
      </div>
      <div className={classes.input}>
        <label htmlFor="comments">comments</label>
        <input
          type="text"
          id="comments"
          onChange={commentsN}
          value={comments}
        />
      </div>

      <Button type="submit" onClick={onSubmit}>
        Click
      </Button>
      <Button onClick={Reset}>Reset</Button>
      {error && <ErrorModal onClick={errorHandler} message={error.message} />}
    </div>
  );
}
