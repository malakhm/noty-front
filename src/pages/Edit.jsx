import React from "react";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addNote, editNote } from "../redux/apiCalls";
import { toast } from "react-toastify";
import { MdArrowBack } from "react-icons/md";
import { useLocation } from 'react-router-dom';

function AddNote() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const item = location.state
  const [title, setTitle] = useState(item?.title);
  const [content, setContent] = useState(item?.content);


  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(editNote(title, content, item._id)).then(() => navigate("/"));
      toast.success("Note updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };
  return (
    <>
    <Link to='/'><MdArrowBack className="fs-5 mb-5"/></Link>
    <div>
      <div className="Home-title-main d-flex align-items-center justify-content-center">
        <h2>Edit Note Form</h2>
      </div>

      <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Button type="submit">Update Note</Button>
      </form>
    </div>
    </>
  );
}

export default AddNote;
