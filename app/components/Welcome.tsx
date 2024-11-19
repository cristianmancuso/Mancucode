"use client";
import { useState } from "react";
import { puzzles } from "./puzzles"; 
import Image from "next/image";

export default function Welcome() {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [explanation, setExplanation] = useState("");
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [language, setLanguage] = useState<string | null>(null);

  // Filtra los puzzles según el lenguaje seleccionado
  const languagePuzzles = puzzles.filter(puzzle => puzzle.language === language);
  const currentPuzzle = languagePuzzles[puzzleIndex];

  function handleLanguageSelect(lang: string) {
    setLanguage(lang);
  }

  function handleAnswerClick(answer: string) {
    if (!selectedAnswer) {
      setSelectedAnswer(answer);
      if (answer !== currentPuzzle.correctAnswer) {
        setExplanation(currentPuzzle.explanation);
      } else {
        setExplanation("");
      }
    }
  }

  function handleNextPuzzle() {
    setSelectedAnswer("");
    setExplanation("");
    if (puzzleIndex + 1 < languagePuzzles.length) {
      setPuzzleIndex((prevIndex) => prevIndex + 1);
    } else {
      alert("No more puzzles. More will be added in the next season!");
    }
  }

  return (
    <div className="relative flex justify-center pt-12 px-10 items-start h-auto pb-12 w-screen bg-gray-900">
      {!language ? (
        <div className="flex flex-col gap-10 items-center">
         <Image
        src="/mancucode.png"
        width={300}
        height={200}
        alt="codigo"
        
        />

          
          <p className="text-2xl text-white font-bold animate-slideUp">Select Programming Language</p>
          <div className="flex gap-5">
            {["Python", "C++", "JavaScript"].map((lang) => (
              <button
                key={lang}
                className="px-8 py-2 border border-purple-500  rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent hover:scale-105"
                onClick={() => handleLanguageSelect(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
          <p className="font-bold text-xl">70 levels</p>
        </div>
      ) : (
        // Pantalla de los puzzles
        <div className="flex flex-col gap-3 items-center text-center animate-fadeIn">
          <p className="mt-1 text-white text-xl font-bold animate-slideUp">{`Level: ${currentPuzzle.level}`}</p>
          <p className="mt-1 text-white animate-slideUp font-bold">{currentPuzzle.question}</p>
          
          <div className="bg-gray-800 text-white p-6 rounded-xl text-center animate-slideUp border border-purple-500">
            <pre className="whitespace-pre-wrap">{currentPuzzle.code}</pre>
          </div>
  
          <div className="flex flex-col gap-2 mt-5 animate-slideUp">
            {currentPuzzle.options.map((option, index) => (
              <button
                key={index}
                className={`px-5 py-2 border border-purple-500  rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent hover:scale-105 ${
                  selectedAnswer === option ? 'bg-purple-500' : 'text-white'
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
              className={`text-center font-bold mt-4 ${
                selectedAnswer === currentPuzzle.correctAnswer ? 'text-green-500' : 'text-red-500'
              } animate-fadeIn`}
            >
              {selectedAnswer === currentPuzzle.correctAnswer ? "Correct! 🎉" : "Incorrect!"}
            </div>
          )}
  
          {explanation && (
            <div className="text-green-400 text-center px-3 mt-4 animate-fadeIn">
              <p><strong>Explanation:</strong> {explanation}</p>
            </div>
          )}
  
          {selectedAnswer && (
            <button
              className="px-5 py-2 border border-purple-500  rounded-[6px] mt-2  relative group transition duration-200 text-white hover:bg-transparent hover:scale-105"
              onClick={handleNextPuzzle}
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
}
