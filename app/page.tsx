'use client'
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card" // Updated import for CardContent
import { Rocket, Zap, Shield } from "lucide-react"
import MoonLogo from "@/components/moon-logo"
import Image from "next/image" // For optimized images
import HeroMacAppSection from '@/components/HeroMacAppSection'
import { MacAppWindow } from '@/components/HeroMacAppSection'
import HamburgerMenu from '@/components/HamburgerMenu'
import VibeCodingCard from "@/components/VibeCodingCard"
import AgenticAISearchSection from "../cursor-landing-page/components/agentic-ai-search-section"
import React, { useState, useRef, useEffect } from "react"
import { IconCloud } from "@/components/magicui/icon-cloud"
import { File, Folder, Tree } from "@/components/magicui/file-tree"
import { CardFooter } from "@heroui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCannabis, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Marquee3D from '@/components/Marquee3D'
import WaitlistSection from '@/components/WaitlistSection'

// New Trusted Brands Section Component
const TrustedBrandsSection = () => {
  const brands = [
    { name: "coinbase.com", logo: "https://www.material-tailwind.com/logos/logo-coinbase.svg", span: 1 },
    { name: "amazon.com", logo: "https://www.material-tailwind.com/logos/logo-amazon.svg", span: 1 },
    {
      name: "netflix.com",
      logo: "https://www.material-tailwind.com/logos/logo-netflix.svg",
      quote:
        '"It have broadened our horizons and helped me advance my career. The community is incredibly supportive "',
      span: 2, // Netflix card will span 2 columns on larger screens
    },
    { name: "spotify.com", logo: "https://www.material-tailwind.com/logos/logo-spotify.svg", span: 1 },
    { name: "google.com", logo: "https://www.material-tailwind.com/logos/logo-google.svg", span: 1 },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="font-semibold lg:text-lg text-base text-primary">More than 50+ brands trust us</p>
        <h2 className="my-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-foreground">
          Trusted by Leading Brands
        </h2>
        <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg lg:px-8 mb-10">
          From innovative startups to Fortune 500 companies, our client list spans a spectrum of sectors, each with
          unique challenges that we&apos;ve successfully navigated.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
          {brands.map((brand, index) => (
            <Card
              key={brand.name}
              className={`bg-card flex flex-col justify-center items-center p-6 
                          ${brand.span === 2 ? "sm:col-span-2" : ""}`}
            >
              <CardContent className="flex flex-col items-center justify-center text-center p-0">
                {" "}
                {/* Removed default padding from CardContent */}
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  width={160} // w-40
                  height={brand.name === "amazon.com" ? 80 : 40} // Approximate height, adjust as needed
                  className="mb-2" // Removed w-40, width is handled by Image component
                />
                <p className="text-sm font-normal text-muted-foreground">{brand.name}</p>
                {brand.quote && (
                  <blockquote className="mt-4 text-sm font-normal text-foreground/80 lg:max-w-[16rem]">
                    {brand.quote}
                  </blockquote>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <Button variant="outline" className="mt-10 mx-auto flex">
          See All Projects
        </Button>
      </div>
    </section>
  )
}

// Add IconCloudDemo component
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}

// Add FileTreeDemo component
export function FileTreeDemo() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden">
      <Tree
        className="overflow-hidden rounded-md p-2 text-white border border-white"
        initialSelectedId="7"
        initialExpandedItems={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
        ]}
        elements={ELEMENTS}
      >
        <Folder element="src" value="1">
          <Folder value="2" element="app">
            <File value="3">
              <p>layout.tsx</p>
            </File>
            <File value="4">
              <p>page.tsx</p>
            </File>
          </Folder>
          <Folder value="5" element="components">
            <Folder value="6" element="ui">
              <File value="7">
                <p>button.tsx</p>
              </File>
            </Folder>
            <File value="8">
              <p>header.tsx</p>
            </File>
            <File value="9">
              <p>footer.tsx</p>
            </File>
          </Folder>
          <Folder value="10" element="lib">
            <File value="11">
              <p>utils.ts</p>
            </File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "app",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "layout.tsx",
          },
          {
            id: "4",
            isSelectable: true,
            name: "page.tsx",
          },
        ],
      },
      {
        id: "5",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "6",
            isSelectable: true,
            name: "header.tsx",
          },
          {
            id: "7",
            isSelectable: true,
            name: "footer.tsx",
          },
        ],
      },
      {
        id: "8",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "9",
            isSelectable: true,
            name: "utils.ts",
          },
        ],
      },
    ],
  },
];

const figmaSlides = [
  {
    icon: "/figma.png",
    title: "Figma Design",
    description:
      "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui. Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    type: "figma"
  },
  {
    icon: "/claude.png",
    type: "claude"
  },
];

function FigmaDesignSlider() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  function handleNext() {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % figmaSlides.length);
      setFade(true);
    }, 250);
  }
  function handlePrev() {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + figmaSlides.length) % figmaSlides.length);
      setFade(true);
    }, 250);
  }

  const slide = figmaSlides[index];

  return (
    <div className="relative flex flex-col justify-between w-full h-full p-6" style={{ minWidth: 500, maxWidth: 500, float: 'left' }}>
      <div
        className={`transition-all duration-300 ${fade ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} flex flex-col`}
        style={{ minHeight: 300 }}
      >
        {slide.type === 'figma' && (
          <>
            <div className="flex items-center mb-4">
              <span className="flex items-center justify-center w-[120px] h-[120px] rounded-xl bg-white/10">
                <img src={slide.icon} alt={slide.title} className="w-20 h-20 object-contain" />
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-3 text-white" style={{ fontFamily: 'var(--font-geist-sans, GeistSans, sans-serif)' }}>
              {slide.title}
            </h1>
            <p className="text-white/90" style={{ fontSize: 14, fontFamily: 'var(--font-geist-sans, GeistSans, sans-serif)', fontWeight: 300 }}>
              Shadow is building a seamless bridge between Figma and code, enabling designers and developers to collaborate in real time. Our integration lets you import Figma designs directly into Shadow, instantly converting layouts, components, and styles into editable, production-ready code. With live sync and visual feedback, teams can iterate on UI/UX in Figma and see changes reflected in their codebase within seconds—empowering rapid prototyping, pixel-perfect handoff, and a truly unified workflow from design to deployment.
            </p>
          </>
        )}
        {slide.type === 'claude' && (
          <div className="flex flex-col items-start">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 w-full" style={{ background: '#18181b', maxWidth: 320 }}>
              <div style={{ padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                <img
                  src={slide.icon}
                  alt="Claude AI"
                  className="object-cover w-full h-[200px]"
                  style={{ borderRadius: 16, background: '#18181b' }}
                  width={320}
                  height={200}
                />
              </div>
            </div>
            <div className="flex items-center w-full px-4 py-2 border-t border-white/20 rounded-b-2xl shadow-md" style={{ height: 60, background: 'transparent' }}>
              <p className="text-xs text-white/80">Agent Integration</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Component() {
  const [activePanel, setActivePanel] = useState(0);
  const featuresRef = useRef<HTMLDivElement>(null);
  const waitlistRef = useRef<HTMLDivElement>(null);

  // Scroll to section helpers
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="w-full min-h-screen relative">
      {/* Video background behind everything */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0"
        src="/main-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ filter: "blur(8px) brightness(0.8)", objectFit: "cover" }}
      />
      {/* Top bar: logo + nav, no black background */}
      <div className="w-full flex items-center justify-between relative z-10 bg-transparent" style={{ paddingLeft: 100, paddingRight: 20 }}>
        <img src="/logo-icon.png" alt="Logo" width={40} height={40} className="w-[40px] h-[40px] object-contain" style={{ marginTop: 20 }} />
        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-4 sm:gap-6 items-center" style={{ marginRight: 20 }}>
          <button
            onClick={scrollToFeatures}
            className="text-sm font-medium hover:underline underline-offset-4 bg-transparent border-0 p-0 m-0 cursor-pointer"
            type="button"
          >
            Features
          </button>
          <button
            onClick={scrollToWaitlist}
            className="text-sm font-medium hover:underline underline-offset-4 bg-transparent border-0 p-0 m-0 cursor-pointer"
            type="button"
          >
            Contact
          </button>
          <Link
            href="/signup"
            className="inline-flex h-[34px] items-center justify-center rounded-[10px] border border-white/30 bg-black text-white px-[26px] text-sm font-medium shadow transition-colors duration-200 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ml-2"
            prefetch={false}
          >
            Try Demo
          </Link>
        </nav>
        {/* Mobile Hamburger */}
        <div className="sm:hidden flex items-center">
          <HamburgerMenu />
        </div>
      </div>
      {/* Mac-app-like window for hero section */}
      <div style={{ marginTop: 50 }}>
        <HeroMacAppSection>
          <section className="w-full">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] px-8 md:px-[50px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    The complete platform for building the Web
                  </h1>
                  <p className="max-w-[600px] text-[15px] text-muted-foreground md:text-[15px]">
                    Give your team the toolkit to stop configuring and start innovating. Securely build, deploy, and
                    scale the best web experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-[34px] items-center justify-center rounded-[15px] border border-white/30 bg-transparent text-white px-[29px] text-sm font-medium shadow transition-colors duration-200 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    <span className="font-light">Try</span> <span className="ml-1 font-bold">Demo</span>
                  </Link>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-[20px] object-cover sm:w-full lg:order-last lg:aspect-square">
                <video
                  src="/web-design.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ borderRadius: 20 }}
              />
            </div>
          </div>
        </section>
        </HeroMacAppSection>
      </div>

      {/* Collaboration with Orchids Section */}
      <div style={{ marginTop: 50, display: 'flex', justifyContent: 'center', width: '100%' }}>
        <MacAppWindow
          style={{
            width: '100%',
            maxWidth: 1200,
            minHeight: 400,
            borderRadius: 10,
            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.15)',
          }}
        >
          <section className="w-full">
            <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr] items-center">
              {/* Left: Video Card */}
              <div className="flex flex-col items-center">
                <div className="rounded-[20px] overflow-hidden shadow-lg border border-white/15 aspect-video w-full max-w-[400px] bg-black/70">
                  <video
                    src="/orchids-site.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ borderRadius: 20 }}
                  />
                </div>
              </div>
              {/* Right: Description and YC Indicator */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Collaborating with Orchids (YC W25)
                  </h1>
                  <p className="max-w-[600px] text-[15px] text-muted-foreground md:text-[15px] font-light">
                    Make a website in seconds. Start, iterate, and launch your website all in one place, backed by YC.
                  </p>
                </div>
                {/* Backed by YC Button Indicator */}
                <div className="mt-6">
                  <span
                    className="inline-flex items-center gap-2 px-6 h-[50px] rounded-[10px] border border-white/20 font-semibold text-base bg-transparent"
                    style={{
                      borderWidth: 1,
                      borderColor: 'rgba(255,255,255,0.1)',
                      height: 50,
                    }}
                  >
                    <img src="/YC.png" alt="YC Logo" className="w-8 h-8 object-contain" style={{ marginRight: 12, borderRadius: 4 }} />
                    <span className="text-white">Backed by YC</span>
                  </span>
                </div>
              </div>
            </div>
            {/* New row: Shadow team invited by Orchids */}
            <div className="mt-12 w-full flex flex-col items-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4 text-center">
                Shadow team got invited by Orchids
              </h1>
              <p className="max-w-2xl text-[15px] text-muted-foreground md:text-[15px] font-light text-center mb-8">
                This summer Founder of shadow, Zeradam will be collaborating with founders at Orchids. Shadow is here to add features to Orchids; the one prompt design-any-site slogan is ideal, promising, and achievable. Shadow's primary workflow is shadow cloning any site through web links in seconds, restructuring everything based on the desired tech stack. Users can select React, Vue, Next.js for front end, and choose database types and more.
              </p>
              <div className="flex flex-row items-center justify-center gap-[100px] mt-2">
                <div className="flex flex-row items-center gap-2">
                  <span className="font-semibold text-lg">Shadow</span>
                  <img src="/logo-icon.png" alt="Shadow Logo" className="w-10 h-10 object-contain" />
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span className="font-semibold text-lg">Orchids</span>
                  <img src="/orchids-logo.jpg" alt="Orchids Logo" className="w-10 h-10 object-contain rounded" />
                </div>
              </div>
              {/* VibeCodingCard below company logos */}
              <div className="mt-10 w-full flex flex-col items-center">
                <VibeCodingCard />
                <div style={{ marginTop: 50, marginBottom: 40, width: '100%' }}>
                  <p className="w-full text-center mb-0" style={{ fontSize: 16, color: 'var(--tw-prose-body, #fff)', fontWeight: 400 }}>
                    Shadow empowers the rebellious, creative spirit of coding, where breakthrough innovations are born in seconds.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </MacAppWindow>
          </div>

      {/* Features Section */}
      <div ref={featuresRef} style={{ marginTop: 100, display: 'flex', justifyContent: 'center', width: '100%' }}>
        <MacAppWindow
          style={{
            width: '100%',
            maxWidth: 1296,
            minHeight: 1000,
            borderRadius: 10,
            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.15)',
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
          }}
        >
          <section className="w-full">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-2 text-center w-full" style={{ marginBottom: 60 }}>Features</h1>
            <p className="max-w-2xl text-[15px] text-muted-foreground font-light text-center mx-auto w-full" style={{ marginBottom: 60 }}>
              Shadow lets you instantly clone any website, then visually adjust layouts, grids, and content. You can edit the tech stack—choose React, Vue, or Next.js for the frontend, select your preferred database, and deploy with a single click. Shadow is built for rapid iteration, letting you go from idea to live site in seconds.
            </p>
            <div className="w-full flex justify-center mb-10" style={{ marginBottom: 60 }}>
              <div className="w-full max-w-2xl px-2 sm:px-0" style={{ minWidth: 800 }}>
                <div className="aspect-video">
                  <video
                    src="/progress-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-[10px]"
                    style={{ borderRadius: 10 }}
                  />
                </div>
              </div>
            </div>
            <div style={{ marginBottom: 60 }} />
            <h5 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground mb-6 text-center w-full" style={{ marginBottom: 60 }}>Search Components</h5>
            <p className="max-w-2xl text-[15px] text-muted-foreground font-light text-center mx-auto w-full" style={{ marginBottom: 40 }}>
              Search anything on shadow to better design and refine websites. Shadow understands your entire coding timeline — across versions, branches, and editors.
            </p>
            {/* Overlay Panels on Video */}
            <div className="w-full flex justify-center" style={{ marginBottom: 60 }}>
              <div className="relative w-full max-w-5xl flex flex-col md:flex-row gap-8 items-stretch" style={{ minWidth: 800, minHeight: 600, overflow: 'hidden' }}>
                {/* Video as background for the panels, scrollable if needed */}
                <div className="absolute inset-0 w-full h-full z-0" style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch', borderRadius: 12 }}>
                  <video
                    src={[
                      '/search-vid-1.mp4',
                      '/code-editor.mp4',
                      '/components.mp4',
                    ][activePanel]}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ minWidth: 800, minHeight: 600, opacity: 0.7, borderRadius: 12 }}
                  />
                </div>
                {/* Overlay: Panels */}
                <div className="relative z-10 flex flex-col gap-4 md:w-1/2 p-6">
                  {[
                    {
                      id: 'feature',
                      category: 'Feature',
                      question: 'Search designs on shadow, from the community page',
                      badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30',
                    },
                    {
                      id: 'editor',
                      category: 'Editor',
                      question: 'Can i update my code on an Editor.',
                      badge: 'bg-orange-500/20 text-orange-300 border-orange-400/30',
                    },
                    {
                      id: 'refactor',
                      category: 'Refactor',
                      question: 'Can i migrate components from previous designs.',
                      badge: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
                    },
                  ].map((panel, idx) => (
                    <button
                      key={panel.id}
                      onClick={() => setActivePanel(idx)}
                      className={`group relative text-left transition-colors duration-200 flex items-center justify-start px-4 py-2 ${
                        activePanel === idx
                          ? 'bg-white/20 text-white shadow-lg'
                          : 'bg-black/40 text-white/90 hover:bg-white/10'
                      }`}
                      style={{
                        backdropFilter: 'blur(8px)',
                        minHeight: 70,
                        height: 70,
                        minWidth: 350,
                        width: 350,
                        borderRadius: 12,
                        border: activePanel === idx ? 'none' : '0.1rem solid rgba(255,255,255,0.15)',
                        marginTop: 4,
                        marginBottom: 4,
                      }}
                    >
                      <div className="flex flex-row items-center gap-3 w-full">
                        <span
                          className={`px-1.5 py-0.5 text-[10px] font-medium ${panel.badge}`}
                          style={{
                            borderRadius: 4,
                            background: activePanel === idx ? '#d1d5db' : 'transparent',
                            color: activePanel === idx ? '#222' : '#fff',
                          }}
                        >
                          {panel.category}
                        </span>
                        <p className="text-xs leading-relaxed font-mono" style={{ fontSize: 13, fontFamily: 'var(--font-geist-sans, GeistSans, sans-serif)', fontWeight: 300, margin: 0 }}>
                          "{panel.question}"
                        </p>
                        {activePanel === idx && (
                          <svg className="w-3 h-3 text-white/80 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M7 6v12l10-6-10-6z" /></svg>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                {/* Spacer for right side on desktop, or stack on mobile */}
                <div className="md:w-1/2" />
              </div>
            </div>
            {/* Integrations Feature Section */}
            <div className="w-full mt-20">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4 text-center">Integrations</h1>
              <p className="max-w-2xl text-[15px] text-muted-foreground font-light text-center mx-auto mb-10">
                Shadow integrates most frameworks within its IDE. Shadow is backed by Claude for agentic integrations, designs and more.
              </p>
              <div className="w-full flex justify-center items-center" style={{ minHeight: 400 }}>
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '125%', // 1/4 bigger than 100%
                    maxWidth: 500, // adjust as needed for your layout
                    height: 500,   // adjust as needed for your layout
                    margin: '0 auto',
                    transform: 'scale(1.25)', // scale up by 25%
                  }}
                >
                  <IconCloudDemo />
                </div>
              </div>
              <div className="flex flex-row w-full justify-center mt-10">
                <div className="flex flex-row justify-center items-center w-full h-full" style={{ maxWidth: 1000 }}>
                  {/* Left: Video */}
                  <div className="flex items-center justify-center" style={{ width: 600, height: 400, borderRadius: 16, overflow: 'hidden' }}>
                    <video
                      src="/figma-video.mp4"
                      width={600}
                      height={400}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full rounded-2xl"
                      style={{ borderRadius: 16 }}
                    />
                  </div>
                  {/* Spacer */}
                  <div style={{ width: 100 }} />
                  {/* Right: Content */}
                  <FigmaDesignSlider />
                </div>
              </div>
            </div>
          </section>
        </MacAppWindow>
      </div>

      {/* Community thoughts Section */}
      <div style={{ marginTop: 100, display: 'flex', justifyContent: 'center', width: '100%' }}>
        <MacAppWindow
          style={{
            width: '100%',
            maxWidth: 1296,
            minHeight: 600,
            borderRadius: 10,
            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.15)',
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
          }}
        >
          <section className="w-full">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6 text-center w-full">Community thoughts</h1>
            <p className="max-w-2xl text-[15px] text-muted-foreground font-light text-center mx-auto w-full mb-[50px]">
              The developer community is excited by how Shadow unifies web frameworks, environments, IDEs, Framer, Figma design, agentic integrations, and cloud services into a single, seamless platform. By bridging design and code, Shadow empowers teams to build, iterate, and deploy faster than ever—making the creative process collaborative, efficient, and truly end-to-end.
            </p>
            <div className="w-full flex justify-center">
              <Marquee3D />
          </div>
        </section>
        </MacAppWindow>
      </div>
      {/* Waitlist Section */}
      <div ref={waitlistRef} style={{ marginTop: 100, display: 'flex', justifyContent: 'center', width: '100%' }}>
        <MacAppWindow
          style={{
            width: '100%',
            maxWidth: 1240,
            minHeight: 400,
            borderRadius: 15,
            background: 'transparent',
            border: 'none',
            boxShadow: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="px-5 sm:px-10 border-none bg-transparent shadow-none"
        >
          <WaitlistSection />
        </MacAppWindow>
      </div>
      {/* Footer */}
      <footer className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'var(--font-geist-sans, GeistSans, sans-serif)', fontSize: 15, color: '#fff' }}>
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div>
              <p className="text-xs" style={{ color: '#fff', fontSize: 15 }}>
                Shadow@2025
              </p>
            </div>
            <ul className="flex flex-wrap items-center">
              <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-white/40">
                <a className="text-xs underline hover:text-white/80 hover:decoration-2 focus:outline-none focus:decoration-2" style={{ color: '#fff', fontSize: 15 }} href="https://x.com/FantayeZer94217" target="_blank" rel="noopener noreferrer">
                  X (Twitter)
                </a>
              </li>
              <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-white/40">
                <a className="text-xs underline hover:text-white/80 hover:decoration-2 focus:outline-none focus:decoration-2" style={{ color: '#fff', fontSize: 15 }} href="https://www.linkedin.com/in/zeradamkiflefantaye/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li className="inline-block pe-4 text-xs">
                <a className="text-xs underline hover:text-white/80 hover:decoration-2 focus:outline-none focus:decoration-2" style={{ color: '#fff', fontSize: 15 }} href="#">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
