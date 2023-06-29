import {useState} from 'react';

const UseInitialScreen = () => {
  const [initial, setInitial] = useState<boolean>(true);

  return {
    setInitial,
    initial,
  };
};

export default UseInitialScreen;
