import "./styles.css";

export const App = () => {
  const onClickUsers = () => {
    alert();
  };
  const onClickUser1 = () => {
    alert();
  };
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のuser</button>
    </div>
  );
};
