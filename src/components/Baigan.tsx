import { useState } from "react";
import { produce } from "immer";

const Baigan = () => {
  const [bugs, setBugs] = useState([
    {
      id: 1,
      description: "Bug 1",
      resolved: false,
    },
    {
      id: 2,
      description: "Bug 2",
      resolved: false,
    },
  ]);

  const handleClick = () => {
    console.log("ded");
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) {
          bug.resolved = true;
        } else {
          console.log("bug not found");
        }
      })
    );
  };

  return (
    <>
      <div>useStateHook</div>
      <button onClick={handleClick}>CLickME</button>
      {bugs.map((bug) => {
        return (
          <>
            <p key={bug.id}>
              {bug.resolved}and{bug.description}
            </p>
          </>
        );
      })}
    </>
  );
};

export default Baigan;
