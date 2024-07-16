import MetaGenerator from "@/components/MetaGenerator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MetaGenerator
        title="Welcome to your Next.js app"
        description="Get started by editing src/app/page.tsx"
      />
      <h1>Home Page</h1>
    </main>
  );
}
