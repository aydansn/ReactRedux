import { useSelector } from "react-redux";
import { increment, decrement, sign_in, sign_out } from "./actions/action";
import { useDispatch } from "react-redux";
const App = () => {
  const counter = useSelector((store) => store.counterState);
  const isLogged = useSelector((store) => store.isLoggedState);
  const dispatch = useDispatch();
  return (
    <div>
      Menim hesabim {counter}
      <button onClick={() => dispatch(increment(20))}>ARTIR</button>
      <button onClick={() => dispatch(decrement())}>AZALT</button>
      <div>
        <div>{isLogged ? "girish edilib" : "edilmeyib"}</div>
        <button onClick={() => dispatch(sign_in())}>Girish</button>
        <button onClick={() => dispatch(sign_out())}>Cixish</button>
      </div>
    </div>
  );
};

export default App;
