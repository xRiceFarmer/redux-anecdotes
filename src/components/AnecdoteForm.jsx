import { useDispatch } from "react-redux";
import { newAnecdote } from "../reducers/anecdoteReducer";
import { clearNotification, setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(newAnecdote(content));
    dispatch(setNotification(`a new anecdote '${content}' added`))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
  };

  return (
    <div>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm
