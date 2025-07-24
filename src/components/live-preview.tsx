"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Tablet, Smartphone, RefreshCw, ExternalLink, Code2, Palette, Settings } from "lucide-react"

interface LivePreviewProps {
  components: any[]
  viewport: "desktop" | "tablet" | "mobile"
  onViewportChange: (viewport: "desktop" | "tablet" | "mobile") => void
}

export default function LivePreview({ components, viewport, onViewportChange }: LivePreviewProps) {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [showCode, setShowCode] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 1000)
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

  const generateCode = () => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="min-h-screen bg-white">
        ${components
          .map(
            (component) => `
        <section style="${Object.entries(component.styles)
          .map(([key, value]) => `${key}: ${value}`)
          .join("; ")}">
            <!-- ${component.type} component -->
            ${component.content}
        </section>
        `,
          )
          .join("")}
    </div>
</body>
</html>
    `.trim()
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Preview Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className="font-semibold text-gray-900">Live Preview</h3>
          <Badge variant="secondary" className="text-xs">
            {components.length} components
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          {/* Viewport Controls */}
          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            <Button
              size="sm"
              variant={viewport === "desktop" ? "default" : "ghost"}
              onClick={() => onViewportChange("desktop")}
              className="h-8 w-8 p-0"
            >
              <Monitor className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant={viewport === "tablet" ? "default" : "ghost"}
              onClick={() => onViewportChange("tablet")}
              className="h-8 w-8 p-0"
            >
              <Tablet className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant={viewport === "mobile" ? "default" : "ghost"}
              onClick={() => onViewportChange("mobile")}
              className="h-8 w-8 p-0"
            >
              <Smartphone className="h-4 w-4" />
            </Button>
          </div>

          <Button
            size="sm"
            variant="outline"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="h-8 bg-transparent"
          >
            <RefreshCw className={`h-3 w-3 ${isRefreshing ? "animate-spin" : ""}`} />
          </Button>

          <Button size="sm" variant="outline" onClick={() => setShowCode(!showCode)} className="h-8">
            <Code2 className="h-3 w-3 mr-1" />
            {showCode ? "Preview" : "Code"}
          </Button>

          <Button size="sm" className="h-8">
            <ExternalLink className="h-3 w-3 mr-1" />
            Open
          </Button>
        </div>
      </div>

      {/* Preview Content */}
      <div className="flex-1 p-6 bg-gray-50 overflow-auto">
        {showCode ? (
          <Card className="h-full">
            <CardContent className="p-0 h-full">
              <pre className="h-full overflow-auto p-4 text-sm bg-gray-900 text-gray-100 rounded-lg">
                <code>{generateCode()}</code>
              </pre>
            </CardContent>
          </Card>
        ) : (
          <div
            className={`mx-auto bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 ${getViewportClass()}`}
          >
            <div className="min-h-[600px]">
              {components.length === 0 ? (
                <div className="h-full flex items-center justify-center text-center p-12">
                  <div>
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Palette className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Building Your Portfolio</h3>
                    <p className="text-gray-600 mb-6 max-w-md">
                      Choose a template from the sidebar or drag components to start creating your professional
                      portfolio website.
                    </p>
                    <div className="flex gap-3 justify-center">
                      <Button size="sm">
                        <Settings className="h-4 w-4 mr-2" />
                        Choose Template
                      </Button>
                      <Button size="sm" variant="outline">
                        <Code2 className="h-4 w-4 mr-2" />
                        Add Component
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-0">
                  {/* Render components here - this would be handled by the parent component */}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Preview Footer */}
      <div className="bg-white border-t px-4 py-2 flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-4">
          <span>Viewport: {viewport}</span>
          <span>•</span>
          <span>Components: {components.length}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>Live Preview</span>
        </div>
      </div>
    </div>
  )
}
