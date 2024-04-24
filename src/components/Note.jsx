import React from "react";
import "./Styles/Note.css";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import Button from "./Button";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { useDispatch } from "react-redux";
import { deleteNote } from "../redux/apiCalls";
import { toast } from "react-toastify";
function Note({ item }) {
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch()
  const handleDelete = ()=>{
  //pop up deletion confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5d17ea",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        //dispatch delete note action
        try {
          dispatch(deleteNote(item._id))
        } catch (error) {
          console.log(error);
          toast.error('something went wrong!')
        }
       
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  
  return (
    <>
      <div className="Single-note" >
        <div className="Single-note-icons d-flex justify-content-end align-items-center">
          <Link to='/edit-note' state={item}><MdModeEditOutline className="icon text-warning" /></Link>
          <MdDelete className="icon text-danger" onClick={handleDelete}/>
        </div>
        <div className="Single-note-main" onClick={() => setModalShow(true)}>
          <div className="Single-note-content d-flex align-items-center justify-content-around flex-column">
            <p className="Single-note-title">{item.title}</p>
            <p className="note-p">{item.content}</p>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        item={item}
      />
    </>
  );
}

export default Note;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
     
    >
      <Modal.Header closeButton className="modal-head">
        <Modal.Title id="contained-modal-title-vcenter">
        {props.item.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="">
     
        <p>
          {props.item.content}
        </p>
      </Modal.Body>
      <Modal.Footer className="">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
