'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

// ─────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
}

const staggerFast = {
  show: { transition: { staggerChildren: 0.1 } },
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Courses', href: '#courses' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      id="navbar"
      variants={fadeIn}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0acc] border-b border-[#222222]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-lg bg-[#ff3c3c] flex items-center justify-center text-white font-bold text-sm font-syne">R</span>
          <span className="font-syne font-bold text-lg text-[#f0ece4] tracking-tight group-hover:text-white transition-colors">
            Rishav <span className="text-[#ff3c3c]">Explains</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#888888] hover:text-[#f0ece4] text-sm font-medium transition-colors duration-200 font-dm"
            >
              {link.label}
            </a>
          ))}
          <motion.a
            href="#courses"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#ff3c3c] hover:bg-[#e63535] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200 font-syne"
          >
            <span className="font-nepali">Courses हेर्नुस्</span>
          </motion.a>
        </div>

        {/* Hamburger */}
        <button
          id="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#f0ece4] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#f0ece4] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#f0ece4] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#111111] border-t border-[#222222] overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#888888] hover:text-[#f0ece4] text-sm font-medium py-1 transition-colors font-dm"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#courses"
                onClick={() => setMenuOpen(false)}
                className="bg-[#ff3c3c] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center font-syne"
              >
                <span className="font-nepali">Courses हेर्नुस्</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// ─────────────────────────────────────────────
// FLOATING DOTS BACKGROUND
// ─────────────────────────────────────────────
function FloatingDots() {
  const dots = [
    { size: 6, x: '10%', y: '20%', delay: 0, color: '#ff3c3c' },
    { size: 4, x: '80%', y: '15%', delay: 1.5, color: '#00c9a7' },
    { size: 8, x: '70%', y: '70%', delay: 0.8, color: '#ff3c3c' },
    { size: 5, x: '20%', y: '75%', delay: 2.2, color: '#00c9a7' },
    { size: 4, x: '90%', y: '45%', delay: 1, color: '#ff3c3c' },
    { size: 6, x: '40%', y: '85%', delay: 3, color: '#00c9a7' },
    { size: 3, x: '55%', y: '10%', delay: 0.5, color: '#ff3c3c' },
    { size: 5, x: '15%', y: '50%', delay: 2.5, color: '#00c9a7' },
  ]
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-30"
          style={{
            width: dot.size,
            height: dot.size,
            left: dot.x,
            top: dot.y,
            background: dot.color,
            animation: `float2 ${6 + i}s ease-in-out infinite`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────
// HERO ORB (right side)
// ─────────────────────────────────────────────
function HeroOrb() {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[360px]">
      {/* Outer glow ring */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #ff3c3c 0%, #00c9a7 100%)' }}
      />
      {/* Spinning conic gradient ring */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-[3px] overflow-hidden"
        style={{ background: 'conic-gradient(from 0deg, #ff3c3c, #ff6b3d, #00c9a7, #004af0, #ff3c3c)' }}
      >
        <div className="absolute inset-0 rounded-full"
          style={{ background: 'conic-gradient(from 0deg, #ff3c3c, #ff6b3d, #00c9a7, #004af0, #ff3c3c)', animation: 'spin-slow 8s linear infinite' }}
        />
        {/* Inner card */}
        <div className="relative w-full h-full rounded-full bg-[#111111] flex flex-col items-center justify-center gap-2 z-10">
          {/* RE monogram */}
          <div className="w-16 h-16 rounded-2xl bg-[#ff3c3c] flex items-center justify-center mb-1 shadow-lg"
            style={{ boxShadow: '0 0 30px rgba(255,60,60,0.5)' }}
          >
            <span className="text-white font-syne font-black text-2xl">RE</span>
          </div>
          <p className="font-syne font-bold text-[#f0ece4] text-base tracking-wide">Rishav Explains</p>
          <p className="font-dm text-[#888888] text-xs tracking-widest uppercase">Academy</p>
          {/* Decorative dots around inner */}
          <div className="absolute top-6 right-8 w-2 h-2 rounded-full bg-[#00c9a7] opacity-80" />
          <div className="absolute bottom-8 left-6 w-2 h-2 rounded-full bg-[#ff3c3c] opacity-80" />
        </div>
      </div>

      {/* Floating stat chips */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        className="absolute top-8 left-0 bg-[#161616] border border-[#222222] rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg"
      >
        <span className="text-[#00c9a7] text-base">📚</span>
        <span className="font-dm text-[#f0ece4] text-xs font-semibold">Digital Skills</span>
      </motion.div>

      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-10 right-0 bg-[#161616] border border-[#222222] rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg"
      >
        <span className="text-base">🇳🇵</span>
        <span className="font-dm text-[#f0ece4] text-xs font-semibold">Nepali Mा</span>
      </motion.div>

      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/2 -right-4 md:-right-10 bg-[#161616] border border-[#ff3c3c33] rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg"
      >
        <span className="text-base">🔥</span>
        <span className="font-dm text-[#ff3c3c] text-xs font-semibold">Trending</span>
      </motion.div>
    </div>
  )
}

// ─────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 grid-bg overflow-hidden"
    >
      <FloatingDots />

      {/* Red glow top-left */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: '#ff3c3c' }} />
      {/* Teal glow bottom-right */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: '#00c9a7' }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">

          {/* LEFT: Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            {/* Tag */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <span className="tag-pill font-dm">IT • Tech • Daily Science</span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={stagger} className="flex flex-col gap-1">
              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="font-syne font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-[#f0ece4]"
              >
                <span className="font-nepali">सिक्नुस्।</span>{' '}
                <span className="font-nepali">बढ्नुस्।</span>
              </motion.h1>
              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="font-syne font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.05]"
              >
                <span className="text-[#ff3c3c] text-glow-red">Online</span>{' '}
                <span className="font-nepali text-[#f0ece4]">कमाउनुस्।</span>
              </motion.h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="font-dm text-[#888888] text-base md:text-lg leading-relaxed max-w-md"
            >
              Rishav ले Nepali भाषामा Digital Skills, Online Business, र Content Creation सिकाउँछन् — IT देखि आम मान्छेसम्म सबैलाई।
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <motion.a
                href="#courses"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#ff3c3c] hover:bg-[#e63535] text-white font-syne font-semibold px-6 py-3 rounded-full transition-colors duration-200 shadow-lg"
                style={{ boxShadow: '0 0 25px rgba(255,60,60,0.35)' }}
                id="hero-cta-courses"
              >
                <span className="font-nepali">Courses हेर्नुस्</span>
                <span>→</span>
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border border-[#333333] hover:border-[#ff3c3c44] text-[#f0ece4] font-syne font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:bg-[#ff3c3c08]"
                id="hero-cta-about"
              >
                <span className="font-nepali">हाम्रो बारे</span>
              </motion.a>
            </motion.div>

            {/* WhatsApp */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-dm text-[#555555] text-sm flex items-center gap-2"
            >
              <span className="w-4 h-4 rounded-full bg-[#25d366] flex items-center justify-center text-[8px] text-white font-bold">W</span>
              +977-98XXXXXXXX
            </motion.p>
          </motion.div>

          {/* RIGHT: Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroOrb />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-dm text-[#444444] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-[#444444] to-transparent"
        />
      </motion.div>
    </section>
  )
}

// ─────────────────────────────────────────────
// PLATFORM INTRO SECTION
// ─────────────────────────────────────────────
function PlatformSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const cards = [
    {
      emoji: '📖',
      title: 'सिक्नुस्',
      titleEn: 'Learn',
      desc: 'Digital skills — Coding, Marketing, Content Creation — Nepali भाषामा सिक्नुस्।',
      accent: '#ff3c3c',
    },
    {
      emoji: '🚀',
      title: 'बढ्नुस्',
      titleEn: 'Grow',
      desc: 'आफ्नो Online presence build गर्नुस् र real audience बनाउनुस्।',
      accent: '#00c9a7',
    },
    {
      emoji: '💰',
      title: 'कमाउनुस्',
      titleEn: 'Earn',
      desc: 'Skills लाई income मा convert गर्नुस् — freelancing, content, business।',
      accent: '#ff3c3c',
    },
  ]

  return (
    <section id="platform" className="py-24 relative">
      <div className="section-divider mb-24" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-14"
        >
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="font-dm text-[#ff3c3c] text-sm font-semibold tracking-widest uppercase mb-3">
            Platform
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-syne font-black text-4xl md:text-5xl text-[#f0ece4]"
          >
            <span className="font-nepali">यो Platform किन?</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-dm text-[#888888] text-base mt-4 max-w-lg mx-auto"
          >
            Nepali भाषामा quality digital education — सबैको पहुँचमा।
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerFast}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="card-hover bg-[#161616] border border-[#222222] rounded-2xl p-7 flex flex-col gap-4 relative overflow-hidden"
            >
              {/* Accent top line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{ background: card.accent }} />

              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: `${card.accent}15`, border: `1px solid ${card.accent}30` }}>
                {card.emoji}
              </div>

              <div>
                <h3 className="font-syne font-black text-2xl text-[#f0ece4] font-nepali">{card.title}</h3>
                <p className="font-dm text-[#444444] text-xs uppercase tracking-widest font-semibold mt-0.5">{card.titleEn}</p>
              </div>

              <p className="font-dm text-[#888888] text-sm leading-relaxed font-nepali">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// COURSES SECTION
// ─────────────────────────────────────────────
function CoursesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const courses = [
    {
      emoji: '📱',
      title: 'TikTok Growth Hacks',
      titleNe: 'TikTok बाट Grow गर्नुस्',
      desc: 'Viral content strategy, hooks, trends — everything to blow up on TikTok.',
      tag: 'Content Creation',
      tagColor: '#ff3c3c',
    },
    {
      emoji: '📊',
      title: 'Digital Marketing Mastery',
      titleNe: 'Digital Marketing सिक्नुस्',
      desc: 'SEO, Paid Ads, Email Marketing — complete digital marketing course in Nepali.',
      tag: 'Marketing',
      tagColor: '#00c9a7',
    },
    {
      emoji: '🎥',
      title: 'Content Creation Blueprint',
      titleNe: 'Content Creator बन्नुस्',
      desc: 'Script, shoot, edit — build your brand from zero as a Nepali content creator.',
      tag: 'Beginner Friendly',
      tagColor: '#ff3c3c',
    },
  ]

  return (
    <section id="courses" className="py-24 relative bg-[#0d0d0d]">
      <div className="section-divider mb-24" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-14"
        >
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="font-dm text-[#00c9a7] text-sm font-semibold tracking-widest uppercase mb-3">
            Courses
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-syne font-black text-4xl md:text-5xl text-[#f0ece4]"
          >
            <span className="font-nepali">हाम्रा Courses</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-dm text-[#888888] text-base mt-4 font-nepali"
          >
            थप courses आउँदैछन् — <span className="text-[#f0ece4]">Coming Soon</span>
          </motion.p>
        </motion.div>

        {/* Course Cards */}
        <motion.div
          variants={staggerFast}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {courses.map((course, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="locked-card bg-[#161616] border border-[#222222] rounded-2xl p-6 flex flex-col gap-4 relative"
            >
              {/* Coming Soon Badge */}
              <div className="flex items-center justify-between">
                <span className="badge-coming font-dm">Coming Soon</span>
                <span className="text-2xl">{course.emoji}</span>
              </div>

              {/* Course tag */}
              <span
                className="inline-block text-xs font-semibold font-dm px-2.5 py-1 rounded-full w-fit"
                style={{ background: `${course.tagColor}18`, color: course.tagColor, border: `1px solid ${course.tagColor}30` }}
              >
                {course.tag}
              </span>

              <div>
                <h3 className="font-syne font-bold text-lg text-[#f0ece4]">{course.title}</h3>
                <p className="font-nepali text-[#888888] text-sm mt-0.5">{course.titleNe}</p>
              </div>

              <p className="font-dm text-[#666666] text-sm leading-relaxed">{course.desc}</p>

              {/* Notify button — above blur overlay z-index */}
              <motion.button
                id={`notify-btn-${i}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative z-20 mt-auto border border-[#333333] hover:border-[#ff3c3c55] text-[#888888] hover:text-[#f0ece4] text-sm font-semibold py-2.5 rounded-xl transition-all duration-200 font-dm bg-[#111111]"
              >
                🔔 Notify Me
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// ABOUT SECTION
// ─────────────────────────────────────────────
function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const skills = ['IT & Technology', 'Daily Science', 'Content Creation', 'Digital Marketing', 'Online Business', 'Nepali Education']

  return (
    <section id="about" className="py-24 relative">
      <div className="section-divider mb-24" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* LEFT: Text */}
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="font-dm text-[#ff3c3c] text-sm font-semibold tracking-widest uppercase">
              About
            </motion.p>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="font-syne font-black text-4xl md:text-5xl text-[#f0ece4] leading-tight"
            >
              Nepal को{' '}
              <span className="text-[#ff3c3c]">Digital</span>{' '}
              <br />Educator
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="font-dm text-[#888888] text-base leading-relaxed"
            >
              Rishav एक Nepali content creator र digital educator हुन् जसले IT, Technology, र Daily Science लाई सरल Nepali भाषामा explain गर्छन्।
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="font-dm text-[#888888] text-base leading-relaxed"
            >
              Tech-savvy audience देखि सामान्य मान्छेसम्म — Rishav को content सबैले बुझ्न सक्छन्। यो platform उनले Nepali audience लाई digitally empower गर्न create गरेका हुन्।
            </motion.p>

            {/* Skills */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="flex flex-wrap gap-2 pt-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="font-dm text-xs font-medium text-[#888888] border border-[#222222] rounded-full px-3 py-1.5 bg-[#161616] hover:border-[#ff3c3c44] hover:text-[#f0ece4] transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#ff3c3c] hover:bg-[#e63535] text-white font-syne font-semibold px-6 py-3 rounded-full transition-colors duration-200 text-sm"
                style={{ boxShadow: '0 0 20px rgba(255,60,60,0.25)' }}
              >
                <span className="font-nepali">सम्पर्क गर्नुस्</span> →
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT: Photo placeholder */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-3xl opacity-30 blur-2xl"
                style={{ background: 'radial-gradient(circle, #ff3c3c 0%, transparent 70%)', transform: 'scale(1.1)' }} />

              {/* Photo box */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl bg-[#161616] border border-[#222222] flex flex-col items-center justify-center gap-3 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 grid-bg opacity-50" />

                {/* Avatar placeholder */}
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#ff3c3c] to-[#00c9a7] flex items-center justify-center shadow-lg">
                  <span className="font-syne font-black text-4xl text-white">R</span>
                </div>
                <p className="font-syne font-bold text-[#f0ece4] text-base relative">Rishav</p>
                <p className="font-dm text-[#555555] text-xs relative font-nepali">Rishav को Photo</p>

                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#ff3c3c44] rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#ff3c3c44] rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#ff3c3c44] rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#ff3c3c44] rounded-br-lg" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────
function Footer() {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Courses', href: '#courses' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const socials = [
    {
      label: 'YouTube',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      label: 'TikTok',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.83a8.18 8.18 0 0 0 4.78 1.53V6.9a4.85 4.85 0 0 1-1.01-.21z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      ),
    },
  ]

  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-[#161616]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start mb-12">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <a href="#home" className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#ff3c3c] flex items-center justify-center text-white font-bold text-sm font-syne">R</span>
              <span className="font-syne font-bold text-base text-[#f0ece4]">
                Rishav <span className="text-[#ff3c3c]">Explains</span>
              </span>
            </a>
            <p className="font-dm text-[#555555] text-sm leading-relaxed font-nepali">
              Nepali मा Digital Education। सिक्नुस्, बढ्नुस्, कमाउनुस्।
            </p>
            <p className="font-dm text-[#444444] text-xs flex items-center gap-1.5 mt-1">
              <span className="w-3.5 h-3.5 rounded-full bg-[#25d366] flex items-center justify-center text-[7px] text-white font-bold">W</span>
              +977-98XXXXXXXX
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <p className="font-syne font-semibold text-[#f0ece4] text-sm tracking-wide">Navigate</p>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}
                  className="font-dm text-[#555555] hover:text-[#f0ece4] text-sm transition-colors duration-200">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <p className="font-syne font-semibold text-[#f0ece4] text-sm tracking-wide">Follow Along</p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  id={`social-${social.label.toLowerCase()}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-[#161616] border border-[#222222] flex items-center justify-center text-[#555555] hover:text-[#f0ece4] hover:border-[#ff3c3c44] transition-all duration-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="font-dm text-[#444444] text-xs mt-2">
              YouTube • TikTok • Instagram
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-dm text-[#333333] text-xs">
            © 2025 Rishav Explains Academy. All rights reserved.
          </p>
          <p className="font-dm text-[#2a2a2a] text-xs">
            Built with ❤️ for Nepal
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─────────────────────────────────────────────
// PAGE EXPORT
// ─────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PlatformSection />
      <CoursesSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
