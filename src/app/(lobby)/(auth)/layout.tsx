export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container mt-8 flex justify-center">{children}</div>;
}
