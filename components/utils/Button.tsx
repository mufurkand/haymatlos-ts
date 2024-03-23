type ButtonProps = {
  children: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
};

const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <button
      className="hover:transition-color rounded-md bg-background p-2 text-text duration-300 hover:bg-accentRed hover:text-white dark:bg-darkBackground dark:text-darkText"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
