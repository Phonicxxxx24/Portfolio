import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Mail, 
  Mic, 
  Video, 
  PenTool, 
  Code, 
  Layers, 
  Award,
  Globe,
  Gamepad2,
  ArrowLeft,
  Share2,
  Image as ImageIcon
} from 'lucide-react';

// --- DATA CONFIGURATION ---

const RIALO_WORK = [
  {
    id: 1,
    title: "Creative Content",
    description: "Keeping the community entertained through unique formats like the viral ASCII art video series and engaging storytelling.",
    tags: ["ASCII Art", "Video Series"],
    type: "video",
    icon: <Video className="w-6 h-6 text-[#010101]" />,
    link: null,
    hasDetails: true,
    image: "", 
    details: {
      about: null,
      features: null,
      links: null,
      // Added footer note here
      galleryNote: "These are just some examples. You can check out all my works on my X profile.",
      gallery: [
        {
          id: 1,
          link: "https://x.com/gaminggop24/status/1984857549783654509?s=20",
          image: "https://res.cloudinary.com/duf6r8fhk/image/upload/v1765208506/Screenshot_2025-12-07_163944_zvkskd.png" 
        },
        {
          id: 2,
          link: "https://x.com/gaminggop24/status/1985793345722204572?s=20",
          image: "https://res.cloudinary.com/duf6r8fhk/image/upload/v1765208610/02_o48iwy.jpg"
        },
        {
          id: 3,
          link: "https://x.com/gaminggop24/status/1987869007102521511?s=20",
          image: "https://res.cloudinary.com/duf6r8fhk/image/upload/v1765208656/03_edkvgz.jpg"
        },
        {
          id: 4,
          link: "https://x.com/gaminggop24/status/1989743737850007797?s=20",
          image: "https://res.cloudinary.com/duf6r8fhk/image/upload/v1765208697/Screenshot_2025-12-07_165042_s6yae1.png"
        },
        {
          id: 5,
          link: "https://x.com/gaminggop24/status/1990682364906004919?s=20",
          image: "https://res.cloudinary.com/duf6r8fhk/image/upload/v1765208733/Screenshot_2025-12-07_165134_ew6k1o.png"
        },
        {
          id: 6,
          link: "https://x.com/gaminggop24/status/1994805911693693298?s=20",
          image: "https://res.cloudinary.com/duf6r8fhk/image/upload/v1765208761/Screenshot_2025-12-07_165215_sqzkqc.png"
        }
      ]
    }
  },
  {
    id: 2,
    title: "Deep Research",
    description: "Delivering comprehensive market analysis and technical deep dives to help the community navigate the ecosystem.",
    tags: ["Research", "Analysis"],
    type: "research",
    icon: <PenTool className="w-6 h-6 text-[#010101]" />,
    link: null,
    hasDetails: true,
    image: "", 
    details: {
      about: null,
      features: null,
      links: null,
      gallery: [
        {
          id: 1,
          link: "https://medium.com/@jainharshit24072/rialo-redefining-the-layer-1-experience-with-web-native-blockchain-architecture-4d0cfe60ad87",
          image: "https://res.cloudinary.com/duf6r8fhk/image/upload/v1765208808/Professional_Mind_Map_Business_Brainstorm_ydk15g.png" 
        },
        {
          id: 2,
          link: "https://medium.com/@jainharshit24072/rialo-1337-a-glimpse-into-the-next-generation-of-onchain-market-infrastructure-4b253b77bbb8",
          image: "https://res.cloudinary.com/duf6r8fhk/image/upload/v1765208850/res_03_rn1dgz.webp"
        },
        {
          id: 3,
          link: "https://medium.com/@jainharshit24072/solving-cryptos-invisible-tax-rialo-and-the-end-of-compound-marginalization-a15087f10261",
          image: "https://res.cloudinary.com/duf6r8fhk/image/upload/v1765208873/res_04_qqpkms.webp"
        },
        {
          id: 4,
          link: "https://medium.com/@jainharshit24072/meet-the-team-behind-rialo-from-sui-to-solving-the-oracle-problem-3898c44aea28",
          image: "https://res.cloudinary.com/duf6r8fhk/image/upload/v1765208914/res_05_kog2t5.webp"
        },
        {
          id: 5,
          link: "https://medium.com/@jainharshit24072/why-prediction-markets-break-today-the-oracle-problem-blockchains-cant-ignore-237ac239ea07",
          image: "https://res.cloudinary.com/duf6r8fhk/image/upload/v1765208966/res_06_oq76nw.webp"
        },
        {
          id: 6,
          link: "https://medium.com/@jainharshit24072/how-rialo-fixes-prediction-markets-native-web-event-driven-execution-and-a-world-beyond-oracles-34f84d73d1e5",
          image: "https://res.cloudinary.com/duf6r8fhk/image/upload/v1765208996/res_07_b4fllf.webp"
        }
      ]
    }
  },
  {
    id: 3,
    title: "Memes",
    description: "Cultivating culture and driving massive engagement through relatable",
    tags: ["Memes", "Culture"],
    type: "design",
    icon: <Layers className="w-6 h-6 text-[#010101]" />,
    link: null,
    hasDetails: true,
    image: "https://res.cloudinary.com/duf6r8fhk/image/upload/v1765207933/meme_upload_qenv7u.png", // Placeholder for your image
    details: {
      about: "A collection of high-impact memes and community content. Click the link below to view the full archive on Google Drive.",
      features: null,
      links: [
        { label: "Google Drive Folder", url: "https://drive.google.com/drive/folders/1t2X0vjzJcUqzXK4dDcVrjUI8ij_yLlIL?usp=drive_link" }
      ]
    }
  },
  {
    id: 4,
    title: "Game & Builder Stuff",
    description: "Developing experimental game prototypes and simple developer tools to explore new interaction models.",
    tags: ["Gaming", "Tools", "R&D"],
    type: "game",
    icon: <Gamepad2 className="w-6 h-6 text-[#010101]" />,
    link: null,
    hasDetails: false // Still coming soon
  },
];

const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Raiku Visualizer",
    role: "Solo Builder",
    tech: ["Solana", "Ideathon"], 
    description: "Winning runner up Of Raiku Ideathon with colosseum, powered by Solana.",
    link: null, 
    hasDetails: true,
    // --- UPDATE IMAGE HERE ---
    // Paste your hosted image URL inside the quotes below (e.g., "https://imgur.com/...")
    image: "https://res.cloudinary.com/duf6r8fhk/image/upload/v1765209074/Screenshot_2025-12-07_170357_qeyoyg.png", 
    // -------------------------
    demoLink: "https://raiku-visualizer-seven.vercel.app/", // Main visual click link
    details: {
      about: "Visual blueprint for deterministic execution on Solana. Through dashboards, simulations, and animated flows, it makes Raiku’s core concepts clear and accessible for developers and users.",
      features: [
        "Dynamic hero section with branded visuals",
        "Congestion visualization: transaction failure demo during Solana network spikes",
        "Deterministic engine and slot scheduling timeline",
        "Live dashboard showing blockspace success rates and instant slot reservations",
        "Use case blueprints: DEX, NFTs, gaming, AI agent coordination",
        "Architecture diagram for developer integration"
      ],
      whyItMatters: "During volatile periods on Solana, up to 75% of transactions can fail—leading to lost opportunities and unreliable experiences. Raiku guarantees institutional-grade certainty with cryptographically pre-confirmed execution, and this visualizer makes those guarantees tangible for all stakeholders.",
      links: [
        { label: "Raiku Visualizer Repo", url: "https://github.com/Phonicxxxx24/Raiku_visualizer" }
      ]
    }
  },
  {
    id: 2,
    title: "Renewable Energy Monitoring System for Microgrids",
    role: "Full Stack Developer",
    tech: ["IoT", "React", "Data Viz"],
    description: "A real-time dashboard for monitoring solar generation, battery health, and energy consumption in microgrid environments.",
    link: null,
    hasDetails: true,
    // --- UPDATE IMAGE HERE ---
    image: "https://res.cloudinary.com/duf6r8fhk/image/upload/v1765209131/Screenshot_2025-12-07_170526_nzd8hp.png", 
    // -------------------------
    demoLink: "https://oorja-mitra.vly.site/dashboard", // Main visual click link
    details: {
      about: "Employs affordable IoT sensors (e.g., Raspberry Pi, Arduino) and cloud-based analytics for real-time monitoring, compatible with existing microgrid setups. This platform is designed to make renewable energy data accessible and actionable.",
      features: [
        "Real-time energy generation tracking",
        "Battery health monitoring",
        "Grid consumption analytics",
        "Precaution is better than cure: Predictive maintenance alerts"
      ],
      whyItMatters: "One of my web examples of vibe coding as well.",
      links: [
         { label: "GitHub Repo", url: "https://github.com/Phonicxxxx24/solar-dashboard-shell" },
         { label: "Live Dashboard", url: "https://oorja-mitra.vly.site/dashboard" }
      ] 
    }
  }
];

// --- COMPONENTS ---

const ScrollLink = ({ to, children, className = "" }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12 md:mb-16">
    <h2 className="text-3xl md:text-5xl font-bold text-[#e8e3d5] mb-4 tracking-tight">
      {title}
    </h2>
    <div className="h-1 w-20 bg-[#a9ddd3] rounded-full mb-4 shadow-[0_0_10px_#a9ddd3]" />
    {subtitle && <p className="text-gray-400 max-w-xl">{subtitle}</p>}
  </div>
);

const GlassCard = ({ children, className = "", delay = 0, href = null, onClick = null }) => {
  const CardContent = (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-[#a9ddd3]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </>
  );

  const baseStyles = `group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:border-[#a9ddd3]/50 ${className}`;
  const animationProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5, delay },
    whileHover: { 
      y: -10, 
      scale: 1.02,
      boxShadow: "0 0 25px rgba(169, 221, 211, 0.15)"
    }
  };

  if (href) {
    return (
      <motion.a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} block cursor-pointer`}
        {...animationProps}
      >
        {CardContent}
      </motion.a>
    );
  }

  if (onClick) {
    return (
      <motion.div 
        onClick={onClick}
        className={`${baseStyles} cursor-pointer`} 
        {...animationProps}
      >
        {CardContent}
      </motion.div>
    );
  }

  return (
    <motion.div className={baseStyles} {...animationProps}>
      {CardContent}
    </motion.div>
  );
};

// --- PROJECT DETAIL VIEW COMPONENT ---
const ProjectDetailView = ({ project, onBack }) => {
  // Helper to wrap content in a link if demoLink exists
  const VisualWrapper = ({ children }) => {
    if (project.demoLink) {
      return (
        <a 
          href={project.demoLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full h-full cursor-pointer"
        >
          {children}
        </a>
      );
    }
    return <>{children}</>;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className="fixed inset-0 z-[60] bg-[#010101] overflow-y-auto"
    >
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#a9ddd3] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.05]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#e8e3d5] rounded-full mix-blend-screen filter blur-[100px] opacity-[0.05]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-400 hover:text-[#a9ddd3] transition-colors mb-12"
        >
          <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-[#a9ddd3]/50 transition-colors">
            <ArrowLeft size={20} />
          </div>
          <span className="text-sm font-mono uppercase tracking-widest">Back to Universe</span>
        </button>

        {/* Header */}
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
             {project.role && (
               <div className="inline-block px-4 py-1 mb-6 rounded-full border border-[#a9ddd3]/30 bg-[#a9ddd3]/10 text-[#a9ddd3] font-mono text-sm">
                  {project.role}
               </div>
             )}
             <h1 className="text-5xl md:text-7xl font-bold text-[#e8e3d5] mb-6">{project.title}</h1>
             <p className="text-xl md:text-2xl text-gray-400 leading-relaxed border-l-4 border-[#a9ddd3] pl-6">
               {project.description}
             </p>
          </motion.div>
        </div>

        {/* Content Section: Either Standard Layout or Gallery Layout */}
        
        {project.details?.gallery ? (
          // --- GALLERY LAYOUT ---
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.details.gallery.map((item, idx) => {
                // Determine label based on link URL
                let linkLabel = "VIEW LINK";
                if (item.link.includes("x.com") || item.link.includes("twitter.com")) linkLabel = "VIEW ON X";
                else if (item.link.includes("medium.com")) linkLabel = "READ ON MEDIUM";

                return (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-[4/3] rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-[#a9ddd3] hover:shadow-[0_0_20px_rgba(169,221,211,0.2)] transition-all duration-300"
                >
                  {item.image ? (
                     <img 
                       src={item.image} 
                       alt={`Gallery Item ${idx + 1}`} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 group-hover:text-[#a9ddd3] transition-colors">
                       <ImageIcon size={32} className="mb-2 opacity-50" />
                       <span className="text-xs font-mono">Image Coming Soon</span>
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <span className="flex items-center gap-2 text-[#a9ddd3] font-bold tracking-wider">
                        {linkLabel} <ExternalLink size={16} />
                     </span>
                  </div>
                </a>
              );
              })}
            </div>

            {/* Gallery Footer Note */}
            {project.details.galleryNote && (
              <div className="mt-10 text-center">
                <p className="text-gray-400 text-lg">
                  {project.details.galleryNote}{" "}
                  <a 
                    href="https://x.com/gaminggop24" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#a9ddd3] font-medium hover:underline hover:text-white transition-colors"
                  >
                    my X profile
                  </a>.
                </p>
              </div>
            )}
          </motion.div>
        ) : (
          // --- STANDARD LAYOUT ---
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
            {/* Main Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-12"
            >
              {/* Visual Placeholder / Image Tab */}
              <div className={`w-full aspect-video rounded-2xl bg-[#111] border border-white/10 relative overflow-hidden flex items-center justify-center group ${project.demoLink ? 'hover:border-[#a9ddd3] hover:shadow-[0_0_30px_rgba(169,221,211,0.1)] transition-all duration-300' : ''}`}>
                 <VisualWrapper>
                   {project.image ? (
                     // If image is provided in data, show it
                     <div className="absolute inset-0">
                       <img 
                         src={project.image} 
                         alt={project.title} 
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                     </div>
                   ) : (
                     // Fallback default visual if no image provided
                     <>
                       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          {project.icon ? React.cloneElement(project.icon, { className: "text-[#a9ddd3] w-24 h-24 opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" }) : <Award className="text-[#a9ddd3] w-24 h-24 opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />}
                       </div>
                     </>
                   )}

                   {/* Overlay Text/Badges */}
                   {project.id === 1 && project.tech && project.tech.includes("Ideathon") && (
                     <div className="absolute bottom-6 left-6 pointer-events-none">
                       <p className="text-white font-bold text-lg">Runner Up: Raiku Ideathon</p>
                       <p className="text-gray-400 text-sm">Powered by Solana</p>
                     </div>
                   )}
                   {project.demoLink && (
                     <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md text-[#a9ddd3] text-xs font-mono px-3 py-1.5 rounded-full border border-[#a9ddd3]/30 flex items-center gap-2 group-hover:bg-[#a9ddd3] group-hover:text-black transition-all">
                       LIVE DEMO <ExternalLink size={12} />
                     </div>
                   )}
                 </VisualWrapper>
              </div>

              {/* Description Text */}
              <div className="prose prose-invert prose-lg max-w-none">
                <h3 className="text-[#e8e3d5] text-2xl font-bold mb-4">About the Project</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {project.details?.about || "Detailed project description coming soon..."}
                </p>
                
                {project.details?.features && (
                  <>
                    <h3 className="text-[#e8e3d5] text-2xl font-bold mb-4">Features</h3>
                    <ul className="space-y-3 mb-10">
                      {project.details.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#a9ddd3] shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {project.details?.whyItMatters && (
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                     <h3 className="text-[#e8e3d5] text-xl font-bold mb-3">Why It Matters</h3>
                     <p className="text-gray-400 leading-relaxed">
                       {project.details.whyItMatters}
                     </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Sidebar / Links */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.4 }}
               className="space-y-8"
            >
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className="text-[#e8e3d5] font-bold mb-6 flex items-center gap-2">
                  <ExternalLink size={20} />
                  Links
                </h4>
                
                <div className="space-y-4">
                  {project.details?.links && project.details.links.length > 0 ? project.details.links.map((link, i) => (
                    <a 
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-xl bg-black/40 border border-white/5 hover:border-[#a9ddd3]/50 hover:bg-[#a9ddd3]/5 transition-all group"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[#a9ddd3] font-medium text-sm group-hover:text-white transition-colors">{link.label}</span>
                        <ExternalLink size={14} className="text-gray-500 group-hover:text-[#a9ddd3]" />
                      </div>
                      <div className="text-xs text-gray-500 truncate">{link.url.replace('https://', '')}</div>
                    </a>
                  )) : (
                    <div className="text-gray-500 text-sm italic">Links will be uploaded soon.</div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeProject]);

  return (
    <div className="min-h-screen bg-[#010101] font-sans text-gray-300 selection:bg-[#a9ddd3] selection:text-[#010101]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap');
        body { font-family: 'Outfit', sans-serif; }
      `}</style>

      {/* Project Detail Overlay */}
      <AnimatePresence>
        {activeProject && (
          <ProjectDetailView 
            project={activeProject} 
            onBack={() => setActiveProject(null)} 
          />
        )}
      </AnimatePresence>

      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#a9ddd3] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.08]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#e8e3d5] rounded-full mix-blend-screen filter blur-[100px] opacity-[0.05]" />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#010101]/80 backdrop-blur-lg border-b border-white/5 py-4' : 'py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-[#e8e3d5] font-bold text-xl tracking-wider">PORTFOLIO<span className="text-[#a9ddd3]">.</span></div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <ScrollLink to="rialo" className="hover:text-[#a9ddd3] transition-colors">Rialo Work</ScrollLink>
            <ScrollLink to="projects" className="hover:text-[#a9ddd3] transition-colors">Achievements</ScrollLink>
            <ScrollLink to="about" className="hover:text-[#a9ddd3] transition-colors">About</ScrollLink>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#a9ddd3] font-medium mb-4 tracking-widest text-sm uppercase">Welcome to my universe</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Web & AI Builder <br />
              <span className="text-[#e8e3d5]">for Web3 / Crypto</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              Building immersive web solutions, contributing to <span className="text-white font-semibold">Rialo</span>, winning hackathons, and crafting the future of decentralized interfaces.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <ScrollLink to="rialo">
                <button className="px-8 py-4 bg-[#a9ddd3] text-[#010101] font-bold rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(169,221,211,0.4)] flex items-center gap-2">
                  Rialo Work <ArrowRight size={18} />
                </button>
              </ScrollLink>
              <ScrollLink to="projects">
                <button className="px-8 py-4 border border-[#e8e3d5]/30 text-[#e8e3d5] rounded-full hover:border-[#e8e3d5] hover:bg-[#e8e3d5]/5 transition-all transform hover:-translate-y-1">
                  Other Achievements
                </button>
              </ScrollLink>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              {/* Glow Effect behind image */}
              <div className="absolute inset-0 bg-[#a9ddd3] rounded-full filter blur-[80px] opacity-20 animate-pulse" />
              
              {/* Abstract Card / Image Representation */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/0 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 flex flex-col justify-between transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 rounded-full bg-[#a9ddd3] flex items-center justify-center text-[#010101]">
                    <Code size={32} />
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-mono text-[#a9ddd3] border border-[#a9ddd3]/20">
                    AVAILABLE FOR HIRE
                  </div>
                </div>
                <div>
                   <div className="h-32 w-full rounded-xl bg-gradient-to-tr from-[#a9ddd3]/20 to-transparent border border-white/5 mb-4 flex items-center justify-center">
                      <Layers className="text-[#a9ddd3]/50 w-16 h-16" />
                   </div>
                   <div className="text-[#e8e3d5] text-2xl font-bold">Building the Future</div>
                   <div className="text-gray-500 text-sm mt-1">Web3 • AI • Design</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[#a9ddd3] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Section 1: Rialo Work */}
      <section id="rialo" className="relative z-10 py-24 bg-gradient-to-b from-[#010101] to-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Rialo" 
            subtitle="My contributions to growth, community engagement, and visual identity."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RIALO_WORK.map((item, idx) => {
              const isInteractive = !!item.link || item.hasDetails;
              return (
              <GlassCard 
                key={item.id} 
                delay={idx * 0.1} 
                href={item.link}
                onClick={item.hasDetails ? () => setActiveProject(item) : null}
              >
                {/* Image Placeholder area */}
                <div className="h-48 mb-6 rounded-xl bg-[#111] border border-white/5 relative group-hover:border-[#a9ddd3]/30 transition-colors overflow-hidden flex items-center justify-center">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(169,221,211,0.1),transparent_70%)]" />
                   {/* Centered Icon representing the work */}
                   <div className="w-16 h-16 rounded-full bg-[#a9ddd3] flex items-center justify-center shadow-[0_0_15px_#a9ddd3]">
                     {item.icon}
                   </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 bg-[#a9ddd3]/10 text-[#a9ddd3] border border-[#a9ddd3]/20 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {item.description}
                </p>
                
                <div className={`pt-4 mt-auto border-t border-white/5 flex justify-between items-center ${isInteractive ? 'group-hover:text-[#a9ddd3] transition-colors' : 'text-gray-500 cursor-default'}`}>
                  <span className="text-xs uppercase tracking-wider font-semibold">{isInteractive ? 'View Details' : 'Coming Soon'}</span>
                  {isInteractive && <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />}
                </div>
              </GlassCard>
            );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Other Achievements */}
      <section id="projects" className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Projects & Hackathons" 
            subtitle="Personal builds, competition victories, and open source contributions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ACHIEVEMENTS.map((project, idx) => (
              <GlassCard 
                key={project.id} 
                delay={idx * 0.1} 
                href={project.link} 
                onClick={project.hasDetails ? () => setActiveProject(project) : null}
                className="flex flex-col md:flex-row gap-6 items-start md:items-center"
              >
                {/* Thumbnail */}
                <div className="w-full md:w-40 h-40 shrink-0 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                   <Award className="text-[#e8e3d5] w-10 h-10" />
                </div>

                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-[#e8e3d5]">{project.title}</h3>
                      <span className="text-xs text-[#a9ddd3] font-mono uppercase tracking-widest">{project.role}</span>
                    </div>
                    {/* Visual icon only for links, different for internal details */}
                    {!project.hasDetails && project.link && (
                      <div className="p-2 bg-white/5 rounded-full text-[#a9ddd3]">
                        <ExternalLink size={18} />
                      </div>
                    )}
                    {project.hasDetails && (
                      <div className="p-2 bg-[#a9ddd3]/10 border border-[#a9ddd3]/20 rounded-full text-[#a9ddd3]">
                        <ArrowRight size={18} />
                      </div>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* About & Contact */}
      <section id="about" className="relative z-10 py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* About Text */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">About Me</h3>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I am a passionate creative developer bridging the gap between design and decentralized technology. 
                  My work focuses on making Web3 accessible through intuitive interfaces and sleek aesthetics.
                </p>
                <p>
                  Currently building for Rialo, I spend my weekends at hackathons or exploring 
                  Generative AI agents. I believe the future of the web is immersive, glossy, and decentralized.
                </p>
              </div>
            </div>

            {/* Contact Links */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-8 md:mb-10">Let's Connect</h3>
              <div className="flex gap-6">
                <a href="https://x.com/gaminggop24" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-[#111] border border-white/10 flex items-center justify-center group-hover:bg-[#a9ddd3] group-hover:border-[#a9ddd3] group-hover:shadow-[0_0_20px_#a9ddd3] transition-all duration-300">
                    <svg className="text-[#a9ddd3] group-hover:text-black w-6 h-6 transition-colors" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  </div>
                  <span className="text-xs font-mono text-gray-500 group-hover:text-[#e8e3d5] transition-colors">X</span>
                </a>

                <a href="https://github.com/Phonicxxxx24" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-[#111] border border-white/10 flex items-center justify-center group-hover:bg-[#a9ddd3] group-hover:border-[#a9ddd3] group-hover:shadow-[0_0_20px_#a9ddd3] transition-all duration-300">
                    <Github className="text-[#a9ddd3] group-hover:text-black w-6 h-6 transition-colors" />
                  </div>
                  <span className="text-xs font-mono text-gray-500 group-hover:text-[#e8e3d5] transition-colors">GitHub</span>
                </a>

                <a href="mailto:jainharshit24072@gmail.com" className="group flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-[#111] border border-white/10 flex items-center justify-center group-hover:bg-[#a9ddd3] group-hover:border-[#a9ddd3] group-hover:shadow-[0_0_20px_#a9ddd3] transition-all duration-300">
                    <Mail className="text-[#a9ddd3] group-hover:text-black w-6 h-6 transition-colors" />
                  </div>
                  <span className="text-xs font-mono text-gray-500 group-hover:text-[#e8e3d5] transition-colors">Email</span>
                </a>
              </div>
            </div>

          </div>
          
        </div>
      </section>
    </div>
  );
}