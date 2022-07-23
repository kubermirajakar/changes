import classes from "./ErrorModal.module.css";
import Button from "./Button";
export default function ErrorModal(props) {
  return (
    <div className={classes.container} onClick={props.onClick}>
      <h1>{props.message}</h1>
      <Button onClick={props.onClick} className={classes.btn}>
        Close
      </Button>
    </div>
  );
}
