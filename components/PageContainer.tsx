export default function PageContainer({
  children,
}: {
  children: React.JSX.Element;
}) {
  return <div className="flex justify-center">{children}</div>;
}
