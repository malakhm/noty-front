import React from "react";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addNote } from "../redux/apiCalls";
import { toast } from "react-toastify";
import { MdArrowBack } from "react-icons/md";
function AddNote() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(addNote(title, content)).then(() => navigate("/"));
      toast.success("Note added successfully");
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
        <h2>Add Note Form</h2>
      </div>

      <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Button type="submit">Add Note</Button>
      </form>
    </div>
    </>
  );
}

export default AddNote;
