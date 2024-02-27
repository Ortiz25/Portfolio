import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

function Backdrop(props) {
  function handleClick() {
    props.setModal(!props.modal);
  }
  return <div className={classes.backdrop} onClick={handleClick}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}
const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop setModal={props.setModal} modal={props.modal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
