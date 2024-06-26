const ErrorCode = ({ code, message }: { code: string; message: string }) => {
  return (
    // h-[calc(100vh-3.5rem)] gives the div full height minus the height of the navbar
    <div className="flex h-[calc(100vh-3.5rem)] items-center justify-center gap-5">
      <span className="bg-gradient-to-r from-accentRed to-amber-500 bg-clip-text text-2xl font-extrabold text-transparent">
        {code}
      </span>
      <div className="h-5 border-l-2 border-text dark:border-darkText"></div>
      <span>{message}</span>
    </div>
  );
};

export default ErrorCode;
