import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({ text, amount, transaction }) {
  const sign = amount < 0 ? "-" : "+";

  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      {text}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
}

export default Transaction;
