import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import LikeButton from "./components/LikeButton";
// import Baigan from "./components/Baigan";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Expandable from "./components/Expandable";

function App() {
  const [showFull, setShowFull] = useState(false);
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      {
        id: 1,
        title: "Pizza 1",
        quantity: 1,
      },
      {
        id: 2,
        title: "Pizza 2",
        quantity: 1,
      },
    ],
  });
  // const [pizza, setPizza] = useState({
  //   name: "Pizza Name",
  //   toppings: ["Cheese"],
  // });

  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "Shubham",
  //   },
  // });

  const handleGameClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });
    console.log(cart);

    // setPizza({
    //   ...pizza,
    //   toppings: [...pizza.toppings, "Goo"],
    // });
    // console.log(pizza);
    // setGame({
    //   ...game,
    //   player: {
    //     ...game.player,
    //     name: "Shubhammmmmmmmmmmmmmm",
    //   },
    // });
    // console.log(game);
    console.log("clicked");
  };

  const [cartItems, setCartItems] = useState(["P1", "P2"]);
  const [btnState, setBtnState] = useState(false);
  const [liked, setliked] = useState(false);
  const onLike = () => {
    setliked(!liked);
    console.log("liked!!");
  };
  const onClickAlert = () => {
    setBtnState(false);
  };
  const onClear = () => {
    setCartItems([]);
  };
  const item = ["London", "Paris", "New York", "Tokyo", "Delhi", "Dubai"];
  const showFullFunc = () => {
    setShowFull(!showFull);
    console.log("clicked");
  };
  return (
    <>
      <Expandable state={showFull}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ex
        beatae sit omnis at. Rem eos laudantium quia rerum dignissimos.
      </Expandable>
      <button onClick={showFullFunc}>
        Show {showFull ? "Less" : "Full"} Text
      </button>
      <ListGroup
        items={item}
        title="Cities"
        onSelectItem={(item: string) => {
          console.log(item);
        }}
      />
      <Alert btnState={btnState} onClick={onClickAlert}>
        Alert <span>OKAY!!</span>
      </Alert>
      <Button
        color="secondary"
        text="Button text"
        onClick={() => {
          setBtnState(true);
        }}
      />
      <LikeButton liked={liked} onClick={onLike} />
      {/* <Baigan /> */}
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItem={cartItems} onClear={onClear} />
      <button onClick={handleGameClick}>Click to change name </button>
    </>
  );
}

export default App;
