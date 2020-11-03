import React from "react";
import { Link } from "react-router-dom";
import MyChatbot from "./MyChatbot";
import MyMap from "./MyMap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "../App.css";
import { API_URL } from "../config";

function TodoList(props) {
  // props.todos = [{}, {}, {}]
  const promise = loadStripe(
    "pk_test_51Hj17lC1YX8p2d4c9G08r5zn5yPMZs6PXHczUMKsHQwiz2BDKOXwcdLVbzhDuCfkfY0I1z2K91OR3bwcuGmfZDnT00eZD7r6N8"
  );

  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <Link to={`/todo/${todo._id}`} key={todo._id}>
            <p>{todo.name}</p>
          </Link>
        );
      })}
      {/* <MyMap /> */}
      {/* <MyChatbot /> */}
      {/* <Elements stripe={promise}>
        <CheckoutForm />
      </Elements> */}
    </div>
  );
}

export default TodoList;
