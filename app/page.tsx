import { Button } from '@/components/ui/button';
import { Dumbbell } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8" />
            <span className="text-2xl font-bold">GymBuddy</span>
          </div>
          <div className="space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Find Your Perfect Workout Partner
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Connect with like-minded fitness enthusiasts, whether you're hitting the gym
            or enjoying outdoor activities. Make your fitness journey more enjoyable
            and effective with a companion who shares your goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-4">Gym Mode</h3>
              <p className="text-muted-foreground">
                Find partners at your preferred gym. Connect based on workout preferences
                and schedules.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-4">Outdoor Mode</h3>
              <p className="text-muted-foreground">
                Connect with nearby fitness enthusiasts for walking, running, or yoga
                sessions in your area.
              </p>
            </div>
          </div>
          <Button size="lg" className="w-full md:w-auto" asChild>
            <Link href="/signup">Get Started Now</Link>
          </Button>
        </main>
      </div>
    </div>
  );
}