import React from "react";
import "./Styles/Note.css";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
function Note() {
    return (
        <div className="Single-note">
          <div className="Single-note-icons d-flex justify-content-end align-items-center">
                <MdModeEditOutline className="icon text-warning"/>
                <MdDelete className="icon text-danger"/>
            </div>
        <div className="Single-note-main ">
          
            <div className="Single-note-content d-flex align-items-center justify-content-around flex-column">
                <p className="Single-note-title">Shopping list</p>
                <p className="note-p">
                    should buy 1kg of vegetables like: potato, meat,{" "}
                </p>
            </div>
        </div>
        </div>
        
    );
}

export default Note;
