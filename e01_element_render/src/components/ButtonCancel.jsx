export default function ButtonCancel() {
  let n = 100;
  const eventFunc = () => {
    alert('취소 버튼 클릭');
    n++;
    console.log(n);
  };
  return <button onClick={eventFunc}>취소({n})</button>;
}