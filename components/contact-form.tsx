"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Send } from "lucide-react"

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      setLoading(false)
      // Reset form
      ;(e.target as HTMLFormElement).reset()
    }, 1000)
  }

  return (
    <Card className="shadow-lg">
      <CardContent className="pt-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-semibold">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="transition-all focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-semibold">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="transition-all focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="font-semibold">
              Subject
            </Label>
            <Input
              id="subject"
              name="subject"
              placeholder="What would you like to discuss?"
              required
              className="transition-all focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-semibold">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or opportunity..."
              rows={6}
              required
              className="transition-all focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full md:w-auto shadow-lg hover:shadow-xl transition-shadow"
          >
            {loading ? (
              <>Sending...</>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
