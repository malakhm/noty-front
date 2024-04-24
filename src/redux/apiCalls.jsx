import axios from "axios";
import { toast } from "react-toastify";
import { noteActions } from "./slice";

//function to fetch all notes from db
export const getAllNotes = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:5000/api/note/`)
            dispatch(noteActions.setNotes(data)) 
            return data
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong!')
        }
    }
}

//function to send add note request
export const addNote = (title, content) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post(`http://localhost:5000/api/note/`, {
                title,
                content
            })
        
            return data
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong!')
        }
    }
}
//update note
export const editNote = (title, content, id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.put(`http://localhost:5000/api/note/edit/${id}`, {
                title,
                content
            })
        
            return data
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong!')
        }
    }
}
//delete note by id
export const deleteNote = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.put(`http://localhost:5000/api/note/delete/${id}`)
            dispatch(noteActions.deleteNote(id))
            return data
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong!')
        }
    }
}

