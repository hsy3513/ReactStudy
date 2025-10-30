// export default (props) => {
export default ({ attr1, data, var1 }) => {
  // console.log(props);
  // const attr1 = props.att1;
  // const data = props.data;
  // const var1 = props.var1;
  // const { attr1, data, var1 } = props;
  console.log(attr1, data, var1);

  return <button onClick={() => alert(`${attr1} / ${data} / ${var1}`)}>OK</button>;
};
