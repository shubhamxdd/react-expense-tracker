interface ExpandableProps {
  children: string;
  state: boolean;
  maxChar?: number;
}

const Expandable = ({ children, state, maxChar = 10 }: ExpandableProps) => {
  return (
    <>
      <h1>ExpandableComponent</h1>
      <p>
        {state ? children : children?.substring(0, maxChar)}
        {!state && <span>...</span>}
      </p>
    </>
  );
};

export default Expandable;
