"use client"

import { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Monitor,
  Tablet,
  Smartphone,
  Eye,
  Download,
  Rocket,
  Trash2,
  Type,
  ImageIcon,
  Layout,
  Square,
  Grid3X3,
  User,
  Mail,
  Briefcase,
  Star,
} from "lucide-react"

interface Component {
  id: string
  type: string
  content: string
  styles: Record<string, string>
}

interface Template {
  id: string
  name: string
  preview: string
  components: Component[]
}

const componentTypes = [
  { type: "header", icon: Type, label: "Header", defaultContent: "Your Name" },
  { type: "text", icon: Type, label: "Text", defaultContent: "Lorem ipsum dolor sit amet..." },
  { type: "image", icon: ImageIcon, label: "Image", defaultContent: "/placeholder.svg?height=200&width=300" },
  { type: "button", icon: Square, label: "Button", defaultContent: "Click Me" },
  { type: "card", icon: Layout, label: "Card", defaultContent: "Card Content" },
  { type: "grid", icon: Grid3X3, label: "Grid", defaultContent: "Grid Layout" },
  { type: "hero", icon: User, label: "Hero Section", defaultContent: "Hero Content" },
  { type: "contact", icon: Mail, label: "Contact", defaultContent: "Contact Form" },
  { type: "portfolio", icon: Briefcase, label: "Portfolio", defaultContent: "Portfolio Grid" },
  { type: "testimonial", icon: Star, label: "Testimonial", defaultContent: "Client Review" },
]

const templates: Template[] = [
  {
    id: "minimal",
    name: "Minimal Developer",
    preview: "/placeholder.svg?height=200&width=300&text=Clean+Minimal+Design",
    components: [
      {
        id: "1",
        type: "hero",
        content: "Alex Chen - Full Stack Developer",
        styles: {
          backgroundColor: "#ffffff",
          padding: "6rem 2rem",
          textAlign: "center",
          borderBottom: "1px solid #e5e7eb",
        },
      },
      {
        id: "2",
        type: "text",
        content:
          "I craft digital experiences with modern web technologies. Passionate about clean code, user experience, and building products that make a difference.",
        styles: {
          padding: "2rem",
          textAlign: "center",
          fontSize: "1.2rem",
          color: "#6b7280",
          maxWidth: "600px",
          margin: "0 auto",
        },
      },
      {
        id: "3",
        type: "portfolio",
        content: "Featured Projects",
        styles: {
          padding: "4rem 2rem",
          backgroundColor: "#f9fafb",
        },
      },
      {
        id: "4",
        type: "contact",
        content: "Let's Work Together",
        styles: {
          backgroundColor: "#ffffff",
          padding: "4rem 2rem",
        },
      },
    ],
  },
  {
    id: "creative",
    name: "Creative Designer",
    preview: "/placeholder.svg?height=200&width=300&text=Bold+Creative+Design",
    components: [
      {
        id: "1",
        type: "hero",
        content: "Maya Rodriguez - Creative Director",
        styles: {
          backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          padding: "8rem 2rem",
          textAlign: "center",
        },
      },
      {
        id: "2",
        type: "text",
        content:
          "Award-winning designer specializing in brand identity, digital experiences, and creative campaigns that tell compelling stories.",
        styles: {
          fontSize: "1.3rem",
          color: "white",
          textAlign: "center",
          padding: "0 2rem 4rem",
          backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        },
      },
      {
        id: "3",
        type: "grid",
        content: "Design Portfolio",
        styles: {
          padding: "4rem 2rem",
          backgroundColor: "#ffffff",
        },
      },
      {
        id: "4",
        type: "testimonial",
        content: "Client Love",
        styles: {
          backgroundColor: "#f3f4f6",
          padding: "4rem 2rem",
        },
      },
    ],
  },
  {
    id: "professional",
    name: "Professional Executive",
    preview: "/placeholder.svg?height=200&width=300&text=Corporate+Professional",
    components: [
      {
        id: "1",
        type: "hero",
        content: "Dr. Sarah Johnson - Technology Executive",
        styles: {
          backgroundColor: "#1f2937",
          color: "white",
          padding: "6rem 2rem",
          textAlign: "center",
        },
      },
      {
        id: "2",
        type: "card",
        content: "About Me",
        styles: {
          margin: "4rem 2rem",
          padding: "3rem",
          backgroundColor: "#ffffff",
          borderRadius: "1rem",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        },
      },
      {
        id: "3",
        type: "portfolio",
        content: "Leadership Experience",
        styles: {
          padding: "4rem 2rem",
          backgroundColor: "#f9fafb",
        },
      },
      {
        id: "4",
        type: "testimonial",
        content: "Professional References",
        styles: {
          backgroundColor: "#ffffff",
          padding: "4rem 2rem",
        },
      },
    ],
  },
  {
    id: "startup",
    name: "Startup Founder",
    preview: "/placeholder.svg?height=200&width=300&text=Startup+Founder",
    components: [
      {
        id: "1",
        type: "hero",
        content: "Marcus Kim - Serial Entrepreneur",
        styles: {
          backgroundColor: "#0f172a",
          color: "white",
          padding: "8rem 2rem",
          textAlign: "center",
          backgroundImage: "radial-gradient(circle at 50% 50%, #1e293b 0%, #0f172a 100%)",
        },
      },
      {
        id: "2",
        type: "text",
        content:
          "Building the future, one startup at a time. 3 successful exits, 50+ investments, and a passion for solving problems that matter.",
        styles: {
          fontSize: "1.2rem",
          color: "#e2e8f0",
          textAlign: "center",
          padding: "0 2rem 4rem",
          backgroundColor: "#0f172a",
        },
      },
      {
        id: "3",
        type: "portfolio",
        content: "Venture Portfolio",
        styles: {
          padding: "4rem 2rem",
          backgroundColor: "#ffffff",
        },
      },
      {
        id: "4",
        type: "contact",
        content: "Let's Build Something",
        styles: {
          backgroundColor: "#f1f5f9",
          padding: "4rem 2rem",
        },
      },
    ],
  },
]

export default function PortfolioBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [components, setComponents] = useState<Component[]>([])
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null)
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const [activeTab, setActiveTab] = useState("templates")

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const { source, destination } = result

    if (source.droppableId === "components" && destination.droppableId === "canvas") {
      // Adding new component from palette
      const componentType = componentTypes[source.index]
      const newComponent: Component = {
        id: `component-${Date.now()}`,
        type: componentType.type,
        content: componentType.defaultContent,
        styles: getDefaultStyles(componentType.type),
      }

      const newComponents = [...components]
      newComponents.splice(destination.index, 0, newComponent)
      setComponents(newComponents)
    } else if (source.droppableId === "canvas" && destination.droppableId === "canvas") {
      // Reordering components in canvas
      const newComponents = Array.from(components)
      const [reorderedItem] = newComponents.splice(source.index, 1)
      newComponents.splice(destination.index, 0, reorderedItem)
      setComponents(newComponents)
    }
  }

  const getDefaultStyles = (type: string): Record<string, string> => {
    const baseStyles = { padding: "1rem", margin: "0.5rem 0" }

    switch (type) {
      case "header":
        return { ...baseStyles, fontSize: "2rem", fontWeight: "bold", textAlign: "center" }
      case "hero":
        return { ...baseStyles, backgroundColor: "#6366f1", color: "white", padding: "4rem 2rem", textAlign: "center" }
      case "card":
        return {
          ...baseStyles,
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "0.5rem",
          padding: "2rem",
        }
      case "button":
        return {
          ...baseStyles,
          backgroundColor: "#3b82f6",
          color: "white",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.375rem",
          display: "inline-block",
        }
      default:
        return baseStyles
    }
  }

  const selectTemplate = (template: Template) => {
    setSelectedTemplate(template)
    setComponents(template.components)
    setActiveTab("builder")
  }

  const updateComponentContent = (id: string, content: string) => {
    setComponents((prev) => prev.map((comp) => (comp.id === id ? { ...comp, content } : comp)))
  }

  const updateComponentStyles = (id: string, styles: Record<string, string>) => {
    setComponents((prev) =>
      prev.map((comp) => (comp.id === id ? { ...comp, styles: { ...comp.styles, ...styles } } : comp)),
    )
  }

  const deleteComponent = (id: string) => {
    setComponents((prev) => prev.filter((comp) => comp.id !== id))
    setSelectedComponent(null)
  }

  const renderComponent = (component: Component, index: number) => {
    const isSelected = selectedComponent?.id === component.id

    return (
      <div
        key={component.id}
        className={`relative group cursor-pointer transition-all ${isSelected ? "ring-2 ring-blue-500" : ""}`}
        style={component.styles}
        onClick={() => setSelectedComponent(component)}
      >
        {component.type === "header" && <h1 className="text-4xl font-bold">{component.content}</h1>}

        {component.type === "text" && <p className="text-gray-700 leading-relaxed">{component.content}</p>}

        {component.type === "image" && (
          <img
            src={component.content || "/placeholder.svg?height=400&width=600&text=Professional+Headshot"}
            alt="Component"
            className="w-full h-auto rounded-lg shadow-md"
          />
        )}

        {component.type === "button" && (
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md">
            {component.content}
          </button>
        )}

        {component.type === "card" && (
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                AJ
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">About Me</h3>
                <p className="text-gray-600">Full Stack Developer & Designer</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              With over 8 years of experience in web development, I specialize in creating scalable applications using
              React, Node.js, and cloud technologies. I'm passionate about clean code, user experience, and mentoring
              the next generation of developers.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "AWS", "Docker", "GraphQL"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {component.type === "hero" && (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-white font-bold text-4xl shadow-xl">
              {component.content.split(" ")[0]?.[0] || "A"}
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {component.content}
            </h1>
            <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
              Crafting digital experiences that make a difference
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg">
                View My Work
              </button>
              <button className="px-8 py-3 border border-white/30 text-current rounded-lg font-medium hover:bg-white/10 transition-colors">
                Get In Touch
              </button>
            </div>
          </div>
        )}

        {component.type === "portfolio" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A selection of my recent work spanning web applications, mobile apps, and digital experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-Commerce Platform",
                  description: "Full-stack React application with payment integration",
                  tech: ["React", "Node.js", "Stripe"],
                  image: "/placeholder.svg?height=200&width=300&text=E-Commerce+App",
                },
                {
                  title: "Task Management App",
                  description: "Collaborative project management tool with real-time updates",
                  tech: ["Vue.js", "Firebase", "WebSocket"],
                  image: "/placeholder.svg?height=200&width=300&text=Task+Manager",
                },
                {
                  title: "Data Visualization Dashboard",
                  description: "Interactive analytics dashboard for business intelligence",
                  tech: ["D3.js", "Python", "PostgreSQL"],
                  image: "/placeholder.svg?height=200&width=300&text=Analytics+Dashboard",
                },
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                        Live Demo
                      </button>
                      <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                        View Code
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {component.type === "contact" && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
              <p className="text-xl text-gray-600">
                Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">hello@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <Smartphone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Social</p>
                      <p className="text-gray-600">@username</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Budget</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors h-32 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {component.type === "testimonial" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
              <p className="text-xl text-gray-600">
                Don't just take my word for it - here's what some of my clients have to say about working with me.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO, TechStart Inc.",
                  content:
                    "Exceptional work quality and attention to detail. The project was delivered on time and exceeded our expectations.",
                  rating: 5,
                  avatar: "/placeholder.svg?height=60&width=60&text=SJ",
                },
                {
                  name: "Michael Chen",
                  role: "Product Manager, InnovateCorp",
                  content:
                    "Professional, reliable, and incredibly talented. I wouldn't hesitate to work with them again on future projects.",
                  rating: 5,
                  avatar: "/placeholder.svg?height=60&width=60&text=MC",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Founder, CreativeStudio",
                  content:
                    "Brought our vision to life perfectly. Great communication throughout the entire process and delivered beyond expectations.",
                  rating: 5,
                  avatar: "/placeholder.svg?height=60&width=60&text=ER",
                },
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {component.type === "grid" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
              <p className="text-xl text-gray-600">
                I offer a comprehensive range of services to help bring your digital vision to life.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "💻",
                  title: "Web Development",
                  description: "Custom web applications built with modern frameworks and best practices.",
                },
                {
                  icon: "📱",
                  title: "Mobile Apps",
                  description: "Native and cross-platform mobile applications for iOS and Android.",
                },
                {
                  icon: "🎨",
                  title: "UI/UX Design",
                  description: "User-centered design that creates intuitive and engaging experiences.",
                },
                {
                  icon: "☁️",
                  title: "Cloud Solutions",
                  description: "Scalable cloud infrastructure and deployment strategies.",
                },
                {
                  icon: "🔧",
                  title: "Consulting",
                  description: "Technical consulting and architecture planning for your projects.",
                },
                {
                  icon: "🚀",
                  title: "Optimization",
                  description: "Performance optimization and SEO improvements for existing applications.",
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {isSelected && (
          <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="sm"
              variant="destructive"
              onClick={(e) => {
                e.stopPropagation()
                deleteComponent(component.id)
              }}
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        )}
      </div>
    )
  }

  const getViewportClass = () => {
    switch (viewport) {
      case "tablet":
        return "max-w-2xl"
      case "mobile":
        return "max-w-sm"
      default:
        return "max-w-full"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DragDropContext onDragEnd={handleDragEnd}>
        {/* Header */}
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900">Portfolio Builder</h1>
              <Badge variant="secondary">v1.0</Badge>
            </div>

            <div className="flex items-center gap-4">
              {/* Viewport Controls */}
              <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                <Button
                  size="sm"
                  variant={viewport === "desktop" ? "default" : "ghost"}
                  onClick={() => setViewport("desktop")}
                >
                  <Monitor className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant={viewport === "tablet" ? "default" : "ghost"}
                  onClick={() => setViewport("tablet")}
                >
                  <Tablet className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant={viewport === "mobile" ? "default" : "ghost"}
                  onClick={() => setViewport("mobile")}
                >
                  <Smartphone className="h-4 w-4" />
                </Button>
              </div>

              <Separator orientation="vertical" className="h-6" />

              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <Rocket className="h-4 w-4 mr-2" />
                Deploy
              </Button>
              <Button variant="outline" size="sm" onClick={() => window.open("/demo", "_blank")}>
                <Eye className="h-4 w-4 mr-2" />
                View Demos
              </Button>
            </div>
          </div>
        </header>

        <div className="flex h-[calc(100vh-73px)]">
          {/* Left Sidebar */}
          <div className="w-80 bg-white border-r flex flex-col">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
              <TabsList className="grid w-full grid-cols-3 m-4">
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="components">Components</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="templates" className="flex-1 px-4">
                <ScrollArea className="h-full">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Choose a Template</h3>
                    {templates.map((template) => (
                      <Card
                        key={template.id}
                        className="cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => selectTemplate(template)}
                      >
                        <CardContent className="p-4">
                          <img
                            src={template.preview || "/placeholder.svg"}
                            alt={template.name}
                            className="w-full h-32 object-cover rounded mb-2"
                          />
                          <h4 className="font-medium">{template.name}</h4>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="components" className="flex-1 px-4">
                <ScrollArea className="h-full">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 mb-4">Drag Components</h3>
                    <Droppable droppableId="components">
                      {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
                          {componentTypes.map((component, index) => (
                            <Draggable key={component.type} draggableId={component.type} index={index}>
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-grab hover:bg-gray-100 transition-colors ${
                                    snapshot.isDragging ? "shadow-lg" : ""
                                  }`}
                                >
                                  <component.icon className="h-5 w-5 text-gray-600" />
                                  <span className="font-medium text-gray-900">{component.label}</span>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="settings" className="flex-1 px-4">
                <ScrollArea className="h-full">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Component Settings</h3>
                    {selectedComponent ? (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="content">Content</Label>
                          <Input
                            id="content"
                            value={selectedComponent.content}
                            onChange={(e) => updateComponentContent(selectedComponent.id, e.target.value)}
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="backgroundColor">Background Color</Label>
                          <Input
                            id="backgroundColor"
                            type="color"
                            value={selectedComponent.styles.backgroundColor || "#ffffff"}
                            onChange={(e) =>
                              updateComponentStyles(selectedComponent.id, { backgroundColor: e.target.value })
                            }
                            className="mt-1 h-10"
                          />
                        </div>

                        <div>
                          <Label htmlFor="textColor">Text Color</Label>
                          <Input
                            id="textColor"
                            type="color"
                            value={selectedComponent.styles.color || "#000000"}
                            onChange={(e) => updateComponentStyles(selectedComponent.id, { color: e.target.value })}
                            className="mt-1 h-10"
                          />
                        </div>

                        <div>
                          <Label htmlFor="padding">Padding</Label>
                          <Input
                            id="padding"
                            value={selectedComponent.styles.padding || "1rem"}
                            onChange={(e) => updateComponentStyles(selectedComponent.id, { padding: e.target.value })}
                            className="mt-1"
                            placeholder="e.g., 1rem, 20px"
                          />
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-500 text-sm">Select a component to edit its properties</p>
                    )}
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </div>

          {/* Main Canvas */}
          <div className="flex-1 p-6 overflow-auto">
            <div
              className={`mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${getViewportClass()}`}
            >
              <Droppable droppableId="canvas">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`min-h-[600px] ${
                      snapshot.isDraggingOver ? "bg-blue-50 border-2 border-dashed border-blue-300" : ""
                    } ${components.length === 0 ? "flex items-center justify-center" : ""}`}
                  >
                    {components.length === 0 ? (
                      <div className="text-center text-gray-500">
                        <Layout className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p className="text-lg font-medium">Start building your portfolio</p>
                        <p className="text-sm">Choose a template or drag components here</p>
                      </div>
                    ) : (
                      components.map((component, index) => (
                        <Draggable key={component.id} draggableId={component.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={snapshot.isDragging ? "opacity-50" : ""}
                            >
                              {renderComponent(component, index)}
                            </div>
                          )}
                        </Draggable>
                      ))
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        </div>
      </DragDropContext>
    </div>
  )
}
