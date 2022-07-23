import classes from "./Button.module.css";
export default function Button(props) {
  // console.log(props);
  return (
    <div className={classes.btn}>
      <button
        className={`${classes.btn__btn} ${props.className}`}
        type={props.type}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
}
