'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
    Mail, 
    Phone, 
    Send, 
    Copy, 
    Check, 
    MessageCircle, 
    Linkedin, 
    Github, 
    Twitter 
} from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import QRCode from 'qrcode.react'

// Contact Information (replace with your actual details)
const CONTACT_INFO = {
    email: 'youremail@example.com',
    phone: '+1 (123) 456-7890',
    whatsapp: '+1 (123) 456-7890',
    socialLinks: {
        linkedin: 'https://linkedin.com/in/yourprofile',
        github: 'https://github.com/yourusername',
        twitter: 'https://twitter.com/yourusername'
    }
}

function ContactSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [copied, setCopied] = useState({
        email: false,
        phone: false,
        whatsapp: false
    })

    // Copy to clipboard function
    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(prev => ({ ...prev, [type]: true }))
            setTimeout(() => {
                setCopied(prev => ({ ...prev, [type]: false }))
            }, 2000)
        })
    }

    // Contact Info Card Component
    const ContactInfoCard = ({ icon, title, value, type }) => (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
        >
            <div className="flex items-center mb-4">
                {icon}
                <h3 className="ml-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {title}
                </h3>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400 mr-4">{value}</span>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => copyToClipboard(value, type)}
                    className="text-primary hover:bg-primary/10"
                >
                    {copied[type] ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                </Button>
            </div>
        </motion.div>
    )

    // Social Links Component
    const SocialLinks = () => (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center space-x-6 mt-8"
        >
            {Object.entries(CONTACT_INFO.socialLinks).map(([platform, link]) => {
                const icons = {
                    linkedin: <Linkedin className="w-6 h-6 text-blue-600" />,
                    github: <Github className="w-6 h-6 text-gray-800 dark:text-white" />,
                    twitter: <Twitter className="w-6 h-6 text-blue-400" />
                }
                return (
                    <a 
                        key={platform}
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        {icons[platform]}
                    </a>
                )
            })}
        </motion.div>
    )

    // WhatsApp QR Code Component
    const WhatsAppQR = () => (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center mt-8"
        >
            <div className="p-4 bg-white rounded-xl shadow-lg">
                <QRCode 
                    value={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} 
                    size={180}
                    level={'H'}
                    includeMargin={true}
                />
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Scan to WhatsApp
            </p>
        </motion.div>
    )

    return (
        <section 
            ref={ref}
            className="min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white py-20 px-4 relative overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] hidden dark:flex" />
            
            <div className="absolute top-20 left-0 w-72 h-72 bg-purple-500/30 rounded-full filter blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/30 rounded-full filter blur-[120px]" />

            <div className="max-w-5xl mx-auto relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-block"
                    >
                        <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-400/10 to-pink-400/10 border border-purple-500/10 mb-4 inline-block">
                            Get in Touch
                        </span>
                    </motion.div>

                    <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-primary to-secondary text-transparent bg-clip-text">
                        Contact Me
                    </h3>
                </motion.div>

                {/* Contact Information Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    <ContactInfoCard 
                        icon={<Mail className="w-6 h-6 text-red-500" />}
                        title="Email"
                        value={CONTACT_INFO.email}
                        type="email"
                    />
                    <ContactInfoCard 
                        icon={<Phone className="w-6 h-6 text-green-500" />}
                        title="Phone"
                        value={CONTACT_INFO.phone}
                        type="phone"
                    />
                    <ContactInfoCard 
                        icon={<MessageCircle className="w-6 h-6 text-blue-500" />}
                        title="WhatsApp"
                        value={CONTACT_INFO.whatsapp}
                        type="whatsapp"
                    />
                </div>

                {/* Social Links */}
                <SocialLinks />

                {/* WhatsApp QR Code */}
                <WhatsAppQR />
            </div>
        </section>
    )
}

export default ContactSection