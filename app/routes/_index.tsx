import { Link } from "@remix-run/react";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Web App</h1>
      <nav className="space-x-4">
        <Button asChild>
          <Link to="/login">Login</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/signup">Sign Up</Link>
        </Button>
        <Button asChild variant="link">
          <Link to="/about">About</Link>
        </Button>
      </nav>
    </div>
  );
}