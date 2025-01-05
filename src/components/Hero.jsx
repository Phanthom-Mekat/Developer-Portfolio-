import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TwitterIcon, InstagramIcon, GithubIcon, MailIcon, LinkedinIcon, CodeIcon, ServerIcon, DatabaseIcon, Facebook } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import InteractiveHoverButton from "./ui/interactive-hover-button"

export default function Hero() {
    const technologies = [
        "React", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker",
        "Next.js", "PostgreSQL", "GraphQL", "Python"
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br space-y-5 from-white via-gray-100 to-purple-100 dark:from-black dark:via-gray-900 dark:to-purple-950 text-black dark:text-white px-4 py-12 md:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Grid Effect (dark mode only) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]  hidden dark:flex" />

                {/* Glowing Orb Effects */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-purple-500/30 rounded-full filter blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/30 rounded-full filter blur-[120px]" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2   gap-12 space-y-5 items-center relative">
                {/* Left Column */}
                <div className="space-y-8 text-center lg:text-left">
                    <div className="relative group">
                        <div className="relative w-48 h-48 mx-auto lg:mx-0">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse group-hover:animate-none transition-all duration-500"
                                style={{ transform: "rotate(-45deg)", filter: "blur(24px)" }} />
                            <img
                                src="/profile-pic.jpg?height=192&width=192"
                                alt="Profile"
                                className="relative rounded-full object-cover w-full h-full border-2 border-purple-500/50"
                            />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold">Jahidul Hossain Mekat</h2>
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-xl">
                            <TypeAnimation
                                sequence={[
                                    'Fullstack Developer',
                                    2000,
                                    'Software Engineer',
                                    2000,
                                    'Frontend Developer',
                                    1700,
                                    'Backend Developer',
                                    1700,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-transparent  font-bold bg-clip-text bg-gradient-to-r from-primary to-secondary"
                            />
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-400">
                            <CodeIcon size={16} className="w-4 h-4 text-green-500 " />
                            <span>Available for new projects</span>
                        </div>
                    </div>

                    <div className="flex gap-4 justify-center lg:justify-start">
                        {[
                            { icon: GithubIcon, href: "https://github.com/phanthom-Mekat",   label: "Github" },
                            { icon: LinkedinIcon, href: "https://www.linkedin.com/in/jahidul-hossain-mekat-157874228/", label: "LinkedIn" },
                            { icon: Facebook, href: "https://www.facebook.com/buletboy.mekat", label: "Twitter" },
                            { icon: MailIcon, href: "mailto:jahidulhossainmekat@gmail.com", label: "Email" }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target= "_blank"
                                rel="noreferrer"
                                className="group relative p-2 rounded-full bg-gray-800/30 hover:bg-purple-500/20 transition-all duration-300"
                                aria-label={social.label}
                            >
                                <social.icon className="w-6 h-6 group-hover:text-purple-400 transition-colors" />
                            </a>
                        ))}
                    </div>
                </div>  

                {/* Right Column */}
                <div className="space-y-8">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Transforming  Ideas into{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-400 dark:to-blue-400">
                                Reality
                            </span>
                        </h1>
                        <p className="text-xl text-gray-800 dark:text-gray-300 leading-relaxed">
                            Full-stack developer with expertise in crafting exceptional digital experiences.
                            Connecting the dots between design and functionality with modern frontend and backend technologies.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        <div className="p-4 rounded-xl bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm">
                            <div className="flex items-center gap-2">
                                <CodeIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-400 dark:to-blue-400">
                                    +1
                                </div>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">YEARS OF<br />EXPERIENCE</div>
                        </div>
                        <div className="p-4 rounded-xl bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm">
                            <div className="flex items-center gap-2">
                                <ServerIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-400 dark:to-blue-400">
                                    +10
                                </div>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">PROJECTS<br />COMPLETED</div>
                        </div>
                        <div className="p-4 rounded-xl bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm">
                            <div className="flex items-center gap-2">
                                <DatabaseIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-400 dark:to-blue-400">
                                    +5
                                </div>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">SATISFIED<br />CLIENTS</div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="bg-gray-200/50 dark:bg-gray-800/50 hover:bg-purple-500/20 transition-colors border-purple-500/50 text-gray-800 dark:text-gray-300"
                >
                  {tech}
                </Badge>
              ))}
            </div> */}

                        <div className="flex items-center  gap-4">
                            <Button className="relative group overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 btn border-none dark:from-purple-500 dark:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-600 transition-colors">
                                <span className="relative z-10">Let's Collaborate</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 dark:from-purple-600 dark:to-blue-600 transition-transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0" />
                                <div className="absolute inset-0 bg-black dark:bg-white transition-opacity group-hover:opacity-10 opacity-0" />
                            </Button>
                            <a
                                href="./resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                download="resume.pdf"
                                className="">
                                <InteractiveHoverButton text="Resume" className="outline bg-none rounded-lg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

