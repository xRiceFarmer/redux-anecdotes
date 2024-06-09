import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotification, clearNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    if (state.filter) {
      return state.anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
    } else {
      return state.anecdotes
    }
  });
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteAnecdote(id));
    const votedAnecdote = anecdotes.find(anecdote => anecdote.id === id)
    dispatch(setNotification(`you voted '${votedAnecdote.content}'`))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
  }

  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  return (
    <div>
      <h1>Anecdotes</h1>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
