import Image from "next/image";
import Link from "next/link";
import ArchitectureDiagram from "./components/ArchitectureDiagram";

const skills = [
  "C++",
  "Java",
  "Python",
  "RESTful APIs",
  "Linux",
  "git",
  "Docker",
  "Docker Compose",
  "Flask",
  "Test Driven Development",
  "llama.cpp",
  "Google Cloud APIs",
  "CI/CD",
  "SQL",
  "Rust",
  "TypeScript",
  "Next.js",
  "React",
  "WASM",
  "nginx",
  "Tailwind CSS",
];

export default function Home() {
  return (
    <div className="pt-12">
      <section className="page-section">
        <p className="section-eyebrow-accent">
          i can&apos;t bring myself to say i&apos;m an AI native
        </p>
        <h1 className="page-title-lg mb-6">Ryan Houlberg</h1>
        <p className="body-lead mb-10">
          After 8 &ldquo;grad prep&rdquo; classes and 7 graduate classes at
          Portland State (3.93 graduate GPA btw), I&apos;ve transferred to
          Georgia Tech&apos;s OMSCS program. Since classes don&apos;t start
          until the Fall, I finally have time for crushing projects! I hope to
          do fun stuff, show it off, and learn through repetitive
          inconsequential failure (off the job training)
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/projects" className="btn-primary">
            view projects &rarr;
          </Link>
          <Link href="/about" className="btn-secondary">
            about me
          </Link>
        </div>
      </section>

      <section className="page-section">
        <div className="surface-card">
          <h2 className="section-eyebrow">Links</h2>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
            <a
              href="https://github.com/RyanHoulberg"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              <Image
                src="/media/github-icon-1.svg"
                alt=""
                width={18}
                height={18}
                unoptimized
                className="opacity-60"
                aria-hidden
              />
              github.com/RyanHoulberg
            </a>
            <a
              href="https://linkedin.com/in/ryan-houlberg-272a0256"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              <Image
                src="/media/linkedin-icon-2.svg"
                alt=""
                width={18}
                height={18}
                unoptimized
                className="opacity-60"
                aria-hidden
              />
              linkedin.com/in/ryan-houlberg
            </a>
          </div>
          <p className="mt-3 text-[0.8rem] leading-relaxed text-[var(--color-text-muted)]">
            Lots of repos are private due to academic honesty policies. I&apos;m
            reviewing and integrating each project into this main{" "}
            <a
              href="https://github.com/rho2-pdx/dev_site"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--color-accent)]"
            >
              dev site repo
            </a>{" "}
            as I go.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2 className="section-eyebrow">How this site works</h2>
        <p className="body-text mb-6">
          Served from home and a Hetzner VPS over the same Cloudflare Tunnel —
          visitors hit whichever connector is nearer and live. A push to{" "}
          <a
            href="https://github.com/rho2-pdx/dev_site"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
          >
            main
          </a>{" "}
          redeploys both origins.
        </p>
        <ArchitectureDiagram />
      </section>

      <section className="surface-card page-section">
        <h2 className="section-eyebrow mb-4">Skills</h2>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((tech) => (
            <span key={tech} className="skill-tag">
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
