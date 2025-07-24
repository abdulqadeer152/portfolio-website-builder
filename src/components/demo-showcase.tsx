"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Code, ExternalLink, Star, Users, Zap, Palette, Smartphone, Monitor, Globe } from "lucide-react"

const demoSites = [
  {
    id: "tech-founder",
    name: "Tech Founder Portfolio",
    category: "Startup",
    description: "Modern portfolio for a serial entrepreneur with venture portfolio showcase",
    image: "/placeholder.svg?height=300&width=500&text=Tech+Founder+Portfolio",
    features: ["Venture Portfolio", "Investment Tracker", "Startup Timeline", "Contact CRM"],
    tech: ["React", "Next.js", "Tailwind", "Framer Motion"],
    metrics: { views: "12.5K", conversions: "8.2%", rating: 4.9 },
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "creative-agency",
    name: "Creative Agency",
    category: "Design",
    description: "Bold, artistic portfolio showcasing creative work and client testimonials",
    image: "/placeholder.svg?height=300&width=500&text=Creative+Agency+Site",
    features: ["Project Gallery", "Client Portal", "Team Showcase", "Service Packages"],
    tech: ["Vue.js", "Nuxt", "GSAP", "Strapi CMS"],
    metrics: { views: "8.7K", conversions: "12.1%", rating: 4.8 },
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "developer-portfolio",
    name: "Full Stack Developer",
    category: "Developer",
    description: "Clean, minimal portfolio focusing on technical skills and project showcase",
    image: "/placeholder.svg?height=300&width=500&text=Developer+Portfolio",
    features: ["Code Samples", "GitHub Integration", "Blog", "Skills Matrix"],
    tech: ["React", "TypeScript", "Node.js", "MongoDB"],
    metrics: { views: "15.2K", conversions: "6.8%", rating: 4.7 },
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "consultant-executive",
    name: "Executive Consultant",
    category: "Professional",
    description: "Professional, corporate design for C-level executives and consultants",
    image: "/placeholder.svg?height=300&width=500&text=Executive+Portfolio",
    features: ["Case Studies", "Speaking Events", "Media Kit", "Booking System"],
    tech: ["Angular", "Express", "PostgreSQL", "AWS"],
    metrics: { views: "6.3K", conversions: "15.4%", rating: 4.9 },
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "freelancer",
    name: "Freelance Designer",
    category: "Freelance",
    description: "Vibrant portfolio for freelance designers with client work showcase",
    image: "/placeholder.svg?height=300&width=500&text=Freelance+Designer",
    features: ["Project Timeline", "Client Reviews", "Pricing Calculator", "Availability Calendar"],
    tech: ["Svelte", "SvelteKit", "Supabase", "Stripe"],
    metrics: { views: "9.8K", conversions: "11.3%", rating: 4.6 },
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "product-manager",
    name: "Product Manager",
    category: "Product",
    description: "Data-driven portfolio showcasing product launches and growth metrics",
    image: "/placeholder.svg?height=300&width=500&text=Product+Manager",
    features: ["Product Roadmaps", "Metrics Dashboard", "User Research", "A/B Test Results"],
    tech: ["React", "D3.js", "Python", "Firebase"],
    metrics: { views: "7.1K", conversions: "9.7%", rating: 4.8 },
    liveUrl: "#",
    codeUrl: "#",
  },
]

const categories = ["All", "Startup", "Design", "Developer", "Professional", "Freelance", "Product"]

export default function DemoShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDemo, setSelectedDemo] = useState<(typeof demoSites)[0] | null>(null)

  const filteredSites =
    selectedCategory === "All" ? demoSites : demoSites.filter((site) => site.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Website Demos</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore real-world examples of portfolio websites built with our drag-and-drop builder. Each demo
              showcases different industries, styles, and use cases.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredSites.map((site) => (
            <Card key={site.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={site.image || "/placeholder.svg"}
                  alt={site.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button
                    size="sm"
                    className="bg-white text-gray-900 hover:bg-gray-100"
                    onClick={() => setSelectedDemo(site)}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    View Demo
                  </Button>
                </div>
                <Badge className="absolute top-3 left-3" variant="secondary">
                  {site.category}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{site.name}</span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    {site.metrics.rating}
                  </div>
                </CardTitle>
                <p className="text-gray-600 text-sm">{site.description}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {site.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {site.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{site.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center text-gray-500 mb-1">
                        <Users className="h-3 w-3 mr-1" />
                        Views
                      </div>
                      <div className="font-semibold">{site.metrics.views}</div>
                    </div>
                    <div>
                      <div className="flex items-center text-gray-500 mb-1">
                        <Zap className="h-3 w-3 mr-1" />
                        Conversion
                      </div>
                      <div className="font-semibold">{site.metrics.conversions}</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Code className="h-3 w-3 mr-1" />
                      Use Template
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Portfolio Builder?</h2>
            <p className="text-xl text-gray-600">
              Everything you need to create a professional portfolio that stands out
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Palette,
                title: "Drag & Drop Design",
                description: "Intuitive visual editor with no coding required",
              },
              {
                icon: Smartphone,
                title: "Mobile Responsive",
                description: "Looks perfect on all devices and screen sizes",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for speed and performance",
              },
              {
                icon: Globe,
                title: "One-Click Deploy",
                description: "Publish your site instantly to the web",
              },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {selectedDemo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedDemo.name}</h3>
                  <p className="text-gray-600">{selectedDemo.description}</p>
                </div>
                <Button variant="outline" onClick={() => setSelectedDemo(null)}>
                  Close
                </Button>
              </div>
            </div>

            <div className="p-6">
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="tech">Tech Stack</TabsTrigger>
                </TabsList>

                <TabsContent value="preview" className="mt-6">
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Monitor className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Interactive demo would load here</p>
                      <Button className="mt-4">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Open Full Demo
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="features" className="mt-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedDemo.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="tech" className="mt-6">
                  <div className="flex flex-wrap gap-3">
                    {selectedDemo.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{selectedDemo.metrics.views}</div>
                      <div className="text-sm text-gray-600">Monthly Views</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{selectedDemo.metrics.conversions}</div>
                      <div className="text-sm text-gray-600">Conversion Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">{selectedDemo.metrics.rating}</div>
                      <div className="text-sm text-gray-600">User Rating</div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
