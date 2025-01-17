'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { LandingHeader } from '@/components'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('');
  }

  return (
    <>
      <LandingHeader />
      <div className="min-h-screen bg-gray-200 text-white flex items-center justify-center px-4">
        <Card className="w-full max-w-md bg-[#2c2325] border-[#f0c040]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-[#f0c040]">Sign Up for OmniShop Meats</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-[#1b1517]"
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="text-[#1b1517]"
                  />
                </div>
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                <Button type="submit" className="w-full bg-[#f0c040] text-[#1b1517] hover:bg-[#d1a93a]">
                  Sign Up
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="text-center">
            <p className='text-gray-300'>Already have an account? <Link href="/sign-in" className="text-[#f0c040] hover:underline">Log in</Link></p>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

