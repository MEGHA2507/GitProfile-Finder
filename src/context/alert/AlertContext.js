import { createContext, useReducer } from "react";
import alertReducer from "./AlterReducer";

const AlterContext = createContext();

export const AlterProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  return (
    <AlterContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlterContext.Provider>
  );
};

export default AlterContext;
