export default function PageContainer({
  children,
}: {
  children: React.JSX.Element;
}) {
  return (
    <div className="flex justify-center w-full">
      <div className="lg:w-1/2 md:w-2/3 w-full">{children}</div>
    </div>
  );
}
