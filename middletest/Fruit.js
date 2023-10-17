import { useState } from 'react';

const FruitPage = () => {
  const [fruit, setFruit] = useState('');
  
  const handleClick = (selectedFruit) => {
    setFruit(selectedFruit);
  }

  return (
    <div>
      <h1 className={fruit}>{fruit}</h1>
      <button onClick={() => handleClick('apple')}>Apple</button>
      <button onClick={() => handleClick('banana')}>Banana</button>
      <button onClick={() => handleClick('orange')}>Orange</button>

      <style jsx>{`
        .apple {
          color: red;
        }
        .banana {
          color: yellow;
        }
        .orange {
          color: orange;
        }
      `}</style>
    </div>
  );
};

export default FruitPage;