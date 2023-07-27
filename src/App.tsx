// import { useState } from "react";
import "./App.css";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";
// import LikeButton from "./components/LikeButton";
// import Navbar from "./components/Navbar";
// import Cart from "./components/Cart";
// import Expandable from "./components/Expandable";
// import Form from "./components/Form";
import ExpenseTrackerProj from "./components/pages/ExpenseTrackerProj";

function App() {
  // const [showFull, setShowFull] = useState(false);

  // const handleGameClick = () => {
  //   console.log("clicked");
  // };

  // const [cartItems, setCartItems] = useState(["P1", "P2"]);
  // const [btnState, setBtnState] = useState(false);
  // const [liked, setliked] = useState(false);
  // const onLike = () => {
  //   setliked(!liked);
  //   console.log("liked!!");
  // };
  // const onClickAlert = () => {
  //   setBtnState(false);
  // };
  // const onClear = () => {
  //   setCartItems([]);
  // };
  // const item = ["London", "Paris", "New York", "Tokyo", "Delhi", "Dubai"];
  // const showFullFunc = () => {
  //   setShowFull(!showFull);
  //   console.log("clicked");
  // };
  return (
    <>
      {/* <Expandable state={showFull}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ex
        beatae sit omnis at. Rem eos laudantium quia rerum dignissimos.
      </Expandable>
      <button onClick={showFullFunc}>
      Show {showFull ? "Less" : "Full"} Text
    </button> */}
      {/* <ListGroup
        items={item}
        title="Cities"
        onSelectItem={(item: string) => {
          console.log(item);
        }}
      /> */}
      {/* <Alert btnState={btnState} onClick={onClickAlert}>
        Alert <span>OKAY!!</span>
      </Alert> */}
      {/* <Button
        color="secondary"
        text="Button text"
        onClick={() => {
          setBtnState(true);
        }}
      /> */}
      {/* <LikeButton liked={liked} onClick={onLike} /> */}
      {/* <Baigan /> */}
      {/* <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItem={cartItems} onClear={onClear} /> 
    <button onClick={handleGameClick}>Click to change </button> */}
      {/* <Form /> */}
      <ExpenseTrackerProj />
    </>
  );
}

export default App;
