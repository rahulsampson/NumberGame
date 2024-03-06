import { useState } from 'react';

const Game = () => {

  const [attempts, setAttempts] = useState(0);
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [userGuess, setUserGuess] = useState('');
  

  const handleGuess = (e) => {
    e.preventDefault();
    const newGuess = parseInt(userGuess, 10);
    if (isNaN(newGuess) || newGuess < 1 || newGuess > 100) {
      alert('Please enter a valid number between 1 and 100.');
      return;
    }

    setAttempts(attempts + 1);
    setPreviousGuesses([...previousGuesses, newGuess]);

    if (newGuess < randomNumber) {
      alert('Too low! Try again.');
    } else if (newGuess > randomNumber) {
      alert('Too high! Try again.');
    } else {
      alert(`Congratulations! You found the number in ${attempts} attempts.`);
      setRandomNumber(Math.floor(Math.random() * 100) + 1);
      setAttempts(0);
      setPreviousGuesses([]);
    }
    setUserGuess('');
  };

  const resetGame = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setAttempts(0);
    setPreviousGuesses([]);
    setUserGuess('');
  };

  return (
    <div className='bg-slate-400 py-20 grow font-serif'>
      <div className='flex flex-col text-center pb-10 text-4xl'>GUESS THE NUMBER GAME</div>
      <div className='w-[800px]  gap-3 flex flex-col  mx-auto'>
      <div className='bg-amber-300 py-5 px-3 mx-10 rounded text-center text-2xl'>
        <p className='font-semibold'>I have a random number between 1 - 100</p>
        <p>Dare to guess?</p>
        <button type='button' onClick={resetGame}className='bg-slate-200 h-30 mt-2 rounded px-3 py-2'>New Game</button>
      </div>
      <div className='bg-amber-300 flex flex-col gap-3 py-5 px-3 mx-10 rounded text-center text-xl'>
        <p className='font-semibold'>Enter  your guess below & press Enter</p>
        <div className='rounded overflow-hidden w-max mx-auto'>
          <input type='number' className='h-30 px-3 py-2' value={userGuess} onChange={(e) => setUserGuess(e.target.value)} />
          <button type='submit' onClick={handleGuess} className='bg-slate-200 h-30  px-3 py-2'>Submit</button>
        </div>
        <p>Number of previous attempts : {previousGuesses.length}</p>
      </div>
      <div className='bg-amber-300 py-5 px-3 mx-10 rounded text-center'>
        <p className="text-xl">Previous Guesses: {previousGuesses.join(', ')}</p>
      </div>
      </div>
    </div>
  );
};

export default Game;