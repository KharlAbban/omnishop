import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { APP_TITLE, appFEatures, customer_testimonials, howItWorks, landingPagePremiumSelections } from '@/utils/constants'
import Image from 'next/image'
import { LandingHeader } from '@/components'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <LandingHeader />

      {/* Hero Section with Large Image */}
      <section className="relative h-screen flex items-center justify-center text-gray-50">
        <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-theme-black/80 bg-blend-multiply bg-center z-0"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}
        ></div>
        <div className="container mx-auto text-center relative z-10 px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Premium Frozen Meats <br /> Delivered to Your Door</h2>
          <p className="md:text-lg mb-8">Experience the finest quality meats, flash-frozen for ultimate freshness</p>
          <Button asChild size="lg" className="bg-[#f0c040] text-[#1b1517] hover:bg-[#d1a93a]"><Link href="/home">Shop Now</Link></Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Our Premium Selections</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landingPagePremiumSelections.map((product) => (
              <Card key={product.title} className="bg-[#1b1517] border-[#f0c040]">
                <CardHeader>
                  <CardTitle className="text-[#f0c040]">{product.title}</CardTitle>
                  <CardDescription className="text-gray-300">{product.bio}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 rounded-md mb-4 relative">
                    <Image alt={APP_TITLE} src={product.imgUrl || "/omnishop-logo.jpeg"} fill className='object-cover' />
                  </div>
                  <p className="text-gray-300">{product.desc}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-[#f0c040] text-[#1b1517] hover:bg-[#d1a93a]"><Link href="/home">View Selection</Link></Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-theme-black">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-50 underline">Why Choose OmniShop Meats?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appFEatures.map((feature) => (
              <Card key={feature.title} className="text-center bg-[#2c2325] border-[#f0c040]">
                <CardHeader>
                  <CardTitle className="text-[#f0c040]">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item) => (
              <Card key={item.step} className="bg-[#1b1517] border-[#f0c040]">
                <CardHeader>
                  <CardTitle className="text-[#f0c040]">Step {item.step}: {item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-[#1b1517]">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-50 underline">What Our Customers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customer_testimonials.map((review, index) => (
              <Card key={index} className="bg-[#2c2325] border-[#f0c040]">
                <CardHeader>
                  <CardTitle className="text-[#f0c040]">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">"{review.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl mb-8">Subscribe to our newsletter for exclusive deals and new product alerts!</p>
          <form className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full md:w-1/3 text-[#1b1517]"
              required
            />
            <Button type="submit" className="w-full md:w-auto bg-[#f0c040] text-[#1b1517] hover:bg-[#d1a93a]">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-theme-yellow text-theme-black py-20">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-4">Ready to Elevate Your Dining Experience?</h3>
          <p className="text-xl mb-8">Join thousands of satisfied customers and start enjoying premium frozen meats today.</p>
          <Button asChild size="lg" className="bg-[#1b1517] text-white hover:bg-[#2c2325]"><Link href="/home">Start Shopping</Link></Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-theme-black text-white py-8">
        <div className="container mx-auto text-center px-4">
          <p>&copy; {new Date().getFullYear()} OmniShop Meats. All rights reserved.</p>
          <div className="mt-4">
            <Link href="#" className="hover:text-[#f0c040] mx-2">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#f0c040] mx-2">Terms of Service</Link>
            <Link href="#" className="hover:text-[#f0c040] mx-2">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}