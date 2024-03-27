type InputProps = {
  type: string;
  id: string;
  name: string;
  autocomplete: string;
  placeholder: string;
};

export default function Input({
  type,
  id,
  name,
  autocomplete,
  placeholder,
}: InputProps) {
  return (
    <input
      className="bg-background dark:bg-darkBackground p-2 outline-none focus:ring-2 focus:ring-accentRed rounded-lg"
      type={type}
      id={id}
      name={name}
      autoComplete={autocomplete}
      placeholder={placeholder}
    />
  );
}
