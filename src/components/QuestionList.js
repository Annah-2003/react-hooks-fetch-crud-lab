import React, { useState, useEffect } from 'react';
import QuestionList from './components/QuestionList'; // Import QuestionList

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error('Error fetching questions:', error));
  }, []);

  return (
    <div>
      <QuestionList questions={questions} /> {/* Use QuestionList component */}
      {/* Render other components */}
    </div>
  );
}

export default App;
