import { Link, Outlet } from "@remix-run/react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <nav className="p-4 space-y-2">
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link to="/dashboard">Dashboard Home</Link>
          </Button>
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link to="/dashboard/profile">Profile</Link>
          </Button>
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link to="/dashboard/settings">Settings</Link>
          </Button>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}