import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { APP_TITLE, customer_testimonials } from '@/utils/constants'
import Image from 'next/image'
import { ArrowRightIcon } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#1b1517] text-white">
      {/* Header */}
      <header className="bg-[#1b1517] text-white py-4 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Image alt={APP_TITLE} src="/omnishop-logo.jpeg" width={50} height={50} />
            OmniShop Meats
          </h1>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-4">
              <li><Link href="#" className="hover:text-[#f0c040]">Home</Link></li>
              <li><Link href="#" className="hover:text-[#f0c040]">Products</Link></li>
              <li>
                  <Button variant="signin" asChild><Link href="/sign-in">Sign In</Link></Button>
                  <Button variant="signin" asChild className="md:mx-4"><Link href="/home" className="flex items-center gap-2">Go home <ArrowRightIcon /></Link></Button>
              </li>
            </ul>
          </nav>
          <Button variant="outline" className="md:hidden text-white border-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section with Large Image */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-theme-black/80 bg-blend-multiply bg-center z-0"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}
        ></div>
        <div className="container mx-auto text-center relative z-10 px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Premium Frozen Meats <br /> Delivered to Your Door</h2>
          <p className="md:text-lg mb-8">Experience the finest quality meats, flash-frozen for ultimate freshness</p>
          <Button size="lg" className="bg-[#f0c040] text-[#1b1517] hover:bg-[#d1a93a]">Shop Now</Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#2c2325]">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Our Premium Selections</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Prime Beef Cuts', 'Organic Chicken', 'Wild-Caught Seafood'].map((product) => (
              <Card key={product} className="bg-[#1b1517] border-[#f0c040]">
                <CardHeader>
                  <CardTitle className="text-[#f0c040]">{product}</CardTitle>
                  <CardDescription className="text-gray-300">Flash-frozen for maximum freshness</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-[#2c2325] rounded-md mb-4">
                    <Image alt={APP_TITLE} src="/omnishop-logo.jpeg" width={200} height={200} />
                  </div>
                  <p className="text-gray-300">Savor the rich flavors of our premium {product.toLowerCase()}.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#f0c040] text-[#1b1517] hover:bg-[#d1a93a]">View Selection</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#1b1517]">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose OmniShop Meats?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Premium Quality', description: 'Sourced from the finest farms and fisheries' },
              { title: 'Flash-Frozen', description: 'Locks in flavor and nutrients' },
              { title: 'Convenient Delivery', description: 'Straight to your doorstep in insulated packaging' }
            ].map((feature) => (
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
      <section className="py-20 bg-[#2c2325]">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Choose Your Meats', description: 'Select from our wide range of premium frozen meats' },
              { step: '2', title: 'We Prepare Your Order', description: 'Your selections are carefully packed in insulated boxes' },
              { step: '3', title: 'Enjoy at Home', description: 'Receive your delivery and savor restaurant-quality meats' }
            ].map((item) => (
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
          <h3 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h3>
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
      <section className="py-20 bg-[#2c2325]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl mb-8">Subscribe to our newsletter for exclusive deals and new product alerts!</p>
          <form className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full md:w-1/3 text-[#1b1517]"
            />
            <Button type="submit" className="w-full md:w-auto bg-[#f0c040] text-[#1b1517] hover:bg-[#d1a93a]">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#f0c040] text-[#1b1517] py-20">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-4">Ready to Elevate Your Dining Experience?</h3>
          <p className="text-xl mb-8">Join thousands of satisfied customers and start enjoying premium frozen meats today.</p>
          <Button size="lg" className="bg-[#1b1517] text-white hover:bg-[#2c2325]">Start Shopping</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c2325] text-white py-8">
        <div className="container mx-auto text-center px-4">
          <p>&copy; 2023 OmniShop Meats. All rights reserved.</p>
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