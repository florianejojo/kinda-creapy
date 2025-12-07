"use client"

import { PAGE_LABELS } from "@/app/_shared/shared.const"
import { SubHeader } from "@/app/_shared/sub-header"
import { PageLayout } from "@/app/page-layout"
import type React from "react"

import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitted(false)
    }, 5000)
  }

  return (
    <div>
      <SubHeader
        title={PAGE_LABELS.fr.contact}
        description="Nous serions ravi d'entendre parler de vous. Envoyez-nous un message."
      />
      <PageLayout>
        <div className="space-y-6 text-sm text-foreground/80">
          <div>
            <p className="font-light tracking-wide text-foreground mb-1">Email</p>
            <a href="mailto:kindacreapy.art@gmail.com" className="hover:opacity-60 transition">
              kindacreapy.art@gmail.com
            </a>
          </div>
          <div>
            <p className="font-light tracking-wide text-foreground mb-1">Instagram</p>
            <div className="space-y-1">
              <p>@kindacreapy</p>
            </div>
          </div>
        </div>

        {/* {submitted ? (
          <div className="p-6 border border-border bg-background/50 text-center">
            <p className="text-foreground font-light tracking-wide">
              Merci pour votre message ! Nous vous répondrons très bientôt.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 w-xl">
            <div>
              <label htmlFor="name" className="block text-sm text-foreground mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm text-foreground mb-2">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition"
                placeholder="Sujet de votre message"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition resize-none"
                placeholder="Votre message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 border border-foreground text-foreground font-light tracking-wide hover:bg-foreground hover:text-background transition duration-200"
            >
              Envoyer
            </button>
          </form>
        )}

        <div className="mt-20 pt-12 border-t border-border">
          <h2 className="text-2xl font-display font-light text-foreground mb-8">
            Autres moyens de nous contacter
          </h2>
          <div className="space-y-6 text-sm text-foreground/80">
            <div>
              <p className="font-light tracking-wide text-foreground mb-1">Email</p>
              <a href="mailto:kindacreapy.art@gmail.com" className="hover:opacity-60 transition">
                kindacreapy.art@gmail.com
              </a>
            </div>
            <div>
              <p className="font-light tracking-wide text-foreground mb-1">Instagram</p>
              <div className="space-y-1">
                <p>@kindacreapy</p>
              </div>
            </div>
          </div>
        </div> */}
      </PageLayout>
    </div>
  )
}
