import "./styles.css";

export const App = () => {
  const onClickUsers = () => {};
  const onClickUser1 = () => {};
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のuser</button>
    </div>
  );
};
