import { ReactNode } from "react";

interface alertProps {
  children: ReactNode;
  btnState: boolean;
  onClick: () => void;
}

const Alert = ({ children, btnState, onClick }: alertProps) => {
  return (
    <>
      {btnState && (
        <div className="alert alert-primary">
          {children}
          <button
            type="button"
            onClick={onClick}
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </>
  );
};

export default Alert;
