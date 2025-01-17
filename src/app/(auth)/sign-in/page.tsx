'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authenticate } from '@/lib/actions'
import { LandingHeader } from '@/components'

export default function SignInPage() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <>
      <LandingHeader />
      <div className="min-h-screen bg-gray-200 text-white flex items-center justify-center px-4">
        <Card className="w-full max-w-md bg-[#2c2325] border-[#f0c040]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-[#f0c040]">Log in to OmniShop Meats</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={formAction}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="text-[#1b1517]"
                  />
                  <p className='text-gray-50'>{errorMessage}</p>
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="text-[#1b1517]"
                    />
                </div>
                <SubmitButton isPending={isPending} />
              </div>
            </form>
          </CardContent>
          <CardFooter className="text-center">
            <p className='text-gray-300'>Don't have an account? <Link href="/sign-up" className="text-[#f0c040] hover:underline">Sign up</Link></p>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

function SubmitButton ({isPending}: {isPending: boolean}) {
    
    return (
        <Button disabled={isPending} type="submit" className="w-full bg-[#f0c040] text-[#1b1517] hover:bg-[#d1a93a]">
            Log In
        </Button>
    )
}