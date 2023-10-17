import { useState } from 'react';
import Image from 'next/image';
import profilePic from '../image/1.jpg';
import profilePicTwo from '../image/2.webp';
import profilePicThree from '../image/3.jpg';

const SumPage = () => {
  const [sum, setSum] = useState('');
  
  const handleClick = (selectedSum) => {
    setSum(selectedSum);
  }

  return (
    <div>
      <h1 className={sum}>{sum}</h1>
      <button onClick={() => handleClick(<Image
            src={profilePic}
            width={600}
            height={500}
        ></Image>)}>
            1
      </button>
      <button onClick={() => handleClick(<Image
            src={profilePicTwo}
            width={600}
            height={500}
        ></Image>)}>2</button>
      <button onClick={() => handleClick(<Image
            src={profilePicThree}
            width={600}
            height={500}
        ></Image>)}>3</button>
    </div>
  );
};

export default SumPage;