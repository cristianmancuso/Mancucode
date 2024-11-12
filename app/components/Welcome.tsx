"use client"
import { useState, useEffect } from 'react';
import { puzzles } from './puzzles';

export default function Welcome() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [explanation, setExplanation] = useState('');
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [isLastPuzzle, setIsLastPuzzle] = useState(false);

  // Load puzzle index from localStorage when component mounts
  useEffect(() => {
    const savedIndex = localStorage.getItem('puzzleIndex');
    if (savedIndex) {
      setPuzzleIndex(Number(savedIndex));
    }
  }, []);

  // Save puzzle index to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('puzzleIndex', puzzleIndex.toString());
  }, [puzzleIndex]);

  const currentPuzzle = puzzles[puzzleIndex];

  function checkName() {
    const regex = /[^a-zA-Z]/;
    if (name === '' || regex.test(name)) {
      setError('Please, insert a valid name');
      setTimeout(() => {
        setError('');
      }, 3000);
    } else {
      setError('');
      setIsNameSubmitted(true);
    }
  }

  function handleAnswerClick(answer: string) {
    if (!selectedAnswer) {
      setSelectedAnswer(answer);
      if (answer !== currentPuzzle.correctAnswer) {
        setExplanation(currentPuzzle.explanation);
      } else {
        setExplanation('');
      }
    }
  }

  function handleNextPuzzle() {
    setSelectedAnswer('');
    setExplanation('');

    // Check if current puzzle is the last one
    if (puzzleIndex === puzzles.length - 1) {
      setIsLastPuzzle(true); // Show the message
    } else {
      setPuzzleIndex((prevIndex) => prevIndex + 1);
    }
  }

  return (
    <div className="relative flex justify-center items-center h-screen w-screen bg-gray-900">
      {isNameSubmitted ? (
        <div className="flex flex-col gap-6 items-center text-center animate-fadeIn">
          <p className="mt-1 text-white font-semibold animate-slideUp">{`Level: ${currentPuzzle.level}`}</p>
          <p className="mt-1 text-white animate-slideUp">{currentPuzzle.question}</p>
          
          <div className="bg-gray-800 text-lime-400 p-6 rounded-xl text-center animate-slideUp">
            <pre className="whitespace-pre-wrap">{currentPuzzle.code}</pre>
          </div>
  
          <div className="flex flex-col gap-2  animate-slideUp">
            {currentPuzzle.options.map((option, index) => (
              <button
                key={index}
                className={`border border-white py-2 px-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${
                  selectedAnswer === option ? 'bg-slate-800' : 'text-white'
                }`}
                onClick={() => handleAnswerClick(option)}
                disabled={!!selectedAnswer}
              >
                {option}
              </button>
            ))}
          </div>
  
          {selectedAnswer && (
            <div
              className={`text-center font-bold  ${
                selectedAnswer === currentPuzzle.correctAnswer ? 'text-green-500' : 'text-red-500'
              } animate-fadeIn`}
            >
              {selectedAnswer === currentPuzzle.correctAnswer ? "Correct! 🎉" : "Incorrect!"}
            </div>
          )}
  
          {explanation && (
            <div className="text-green-400 text-center px-3 animate-fadeIn">
              <p><strong>Explanation:</strong> {explanation}</p>
            </div>
          )}
  
          {selectedAnswer && (
            <button
              className="border border-white text-white py-2 px-4 rounded-xl  transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleNextPuzzle}
            >
              Next
            </button>
          )}

          {isLastPuzzle && (
            <div className="text-yellow-500 text-center font-bold animate-fadeIn">
              <p>No more puzzles for now. More will be added in the next season!</p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-6 items-center text-center animate-fadeIn">
          <p className="text-2xl text-white font-bold animate-slideUp">Welcome to MancuCode:</p>
          <input
            type="text"
            id="nametext"
            placeholder="Insert your name"
            className="border border-white py-2 text-center outline-none text-lime-400 bg-slate-900  transition duration-300 ease-in-out transform hover:scale-105"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="border border-white px-5 text-white bg-slate-900 rounded-xl py-2 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={checkName}
          >
            Send
          </button>
          {error && <p className="text-red-500 text-center font-bold ">{error}</p>}
        </div>
      )}
  
      {isNameSubmitted && (
        <div className="absolute top-4 right-4 text-lg text-white animate-fadeIn">
          User: {name}
        </div>
      )}
    </div>
  );
}
