import "../styles/Button.css";

interface buttonProps {
  text: string;
  onClick: () => void;
  color?: string;
}

const Button = ({ text, onClick, color = "primary" }: buttonProps) => {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
