import React, { useEffect, useState } from 'react';
import { ColorfulMessage } from './components/ColorfulMessage';

const App = () => {
  console.log('最初');

  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickShowFlag = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  useEffect(() => {
    console.log('useEffect');
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlg || setFaceShowFlg(true);
      } else {
        faceShowFlg && setFaceShowFlg(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      <ColorfulMessage color="blue" message="お元気ですか" />
      <ColorfulMessage color="pink">元気です</ColorfulMessage>

      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlg && <p>😃</p>}
    </>
  );
};

export default App;
