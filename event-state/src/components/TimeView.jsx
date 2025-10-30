import { useEffect, useState } from 'react';

export default () => {
  console.log('TimeView 랜더링');
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
      console.log(date.toLocaleString());
    }, 1000);
  }, []);
  return (
    <>
      <h2>TimeView</h2>
      <p>{date.toLocaleString()}</p>
    </>
  );
};
