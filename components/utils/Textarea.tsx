type TextareaProps = {
  id: string;
  name: string;
  placeholder: string;
};

export default function Textarea({ id, name, placeholder }: TextareaProps) {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      className="bg-background dark:bg-darkBackground resize-none rounded-lg outline-none focus:ring-2 focus:ring-accentRed p-2 w-full h-28"
    ></textarea>
  );
}
