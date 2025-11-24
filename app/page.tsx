import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    // 1. Layout Container (Tailwind)
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-slate-50">
      
      {/* 2. The Card Primitive (The Wrapper) */}
      <Card className="w-full max-w-sm shadow-lg">
        
        {/* 3. Composition: Header Section */}
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sleep Coach AI</CardTitle>
          <CardDescription>
            Login to access your personalized sleep plan.
          </CardDescription>
        </CardHeader>

        {/* 4. Composition: Content Section (The Form) */}
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="user@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>

        {/* 5. Composition: Footer Section (The Action) */}
        <CardFooter>
          <Button className="w-full">Sign In</Button>
        </CardFooter>

      </Card>
    </main>
  )
}