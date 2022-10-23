import React from "react";

function App() {

  const title='Rate Your Experience';
  const body='How would you rate youre experience with Chipotle?'

  const comments = [
    {id: 1, text: 'Amazing grilled steak!!'},
    {id: 2, text: 'Food was great, but expensive.'},
    {id: 3, text: 'Order was not ready when I was told to arrive.'}
  ]

  const loading = false;
  const showComments = true;

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className='container'>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
      {showComments && 
      (<div className="comments">
        <h3>Reviews: ({comments.length})</h3>
        <ul>
          {comments.map((c, i) => {
            return <li key={c.id}>{c.text}</li>
          })}
        </ul>
      </div>
      )}
    </div>
  );
}

export default App;