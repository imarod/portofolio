import { Mail, Linkedin, Github, CastleIcon as ChessKnight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#13131a] py-12">
      {/* Animated background dots */}
      <div className="absolute inset-0 grid grid-cols-6 gap-4 opacity-10">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="aspect-square w-2 rounded-full bg-primary animate-pulse"
            style={{
              animationDelay: `${i * 0.1}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container relative px-4 md:px-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Let&apos;s create something amazing together.
            </h2>
            <p className="text-xl text-gray-400 text-muted-foreground">
              Have a project in mind? Let&apos;s bring your ideas to life.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <a
              href="mailto:your.email@example.com"
              className="inline-flex text-white items-center justify-center rounded-lg bg-primary px-6 py-3 text-2xl font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1"
            >
              Get in touch
            </a>
            <div className="flex gap-8">
              <a href="mailto:rodhiyatimardhiyyah@gmail.com" className="">
                <Mail className="text-white w-10 h-auto hover:text-[#E040FF] transition-colors duration-300" />
                <span className="sr-only ">Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rodhiyati-mardhiyyah/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E040FF] transition-colors duration-300"
              >
                <Linkedin className="text-white w-10 h-auto hover:text-[#E040FF] transition-colors duration-300" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/imarod"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E040FF] transition-colors duration-300"
              >
                <Github className="text-white w-10 h-auto hover:text-[#E040FF] transition-colors duration-300" />
                <span className="sr-only">GitHub</span>
              </a>

              <a
                href="https://www.chess.com/member/dyah27"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E040FF] transition-colors duration-300"
              >
                <ChessKnight className="text-white w-10 h-auto hover:text-[#E040FF] transition-colors duration-300" />
                <span className="sr-only">Chess Profile</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#30363D] border-muted-foreground/10 pt-8 md:flex-row">
          <p className="text-center text-sm text-muted-foreground text-white">
            © {new Date().getFullYear()} Rodhiyati Mardhiyyah.
          </p>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            
          </nav>
        </div>
      </div>
    </footer>
  )
}

