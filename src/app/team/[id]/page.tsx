export default async function DashboardPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <div className="w-full">Dashboard</div>;
}
