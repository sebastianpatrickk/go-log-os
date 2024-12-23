export default function TeamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container mt-8">{children}</div>;
}
