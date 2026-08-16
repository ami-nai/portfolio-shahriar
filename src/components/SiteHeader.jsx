import { profile } from '../data'
import profileImg from '../assets/shahriar-profile-photo.png'
import bgImg from '../assets/background.jpg'

const navItems = [
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

// Header arc = f(x) = -1/(1+e^-x)  (descending sigmoid: high-left, low-right)
const sigmoid = (t) => 1 / (1 + Math.exp(-t))

const W = 1440
const H = 520
const yTop = 250
const center = W / 2
const steepness = 80
const samples = 64

let d = `M0 0 H${W} V${H}`
let cn = 'M0 0 H1 V1'
for (let i = 0; i <= samples; i++) {
  const x = W - (W / samples) * i
  const y = yTop + (H - yTop) * sigmoid((x - center) / steepness)
  d += ` L${x.toFixed(1)} ${y.toFixed(1)}`
  cn += ` L${(x / W).toFixed(4)} ${(y / H).toFixed(4)}`
}
const HEADER_PATH = d + ' Z'
const HEADER_CLIP_PATH = cn + ' Z'

export default function SiteHeader() {
  return (
    <header className="relative h-[36rem] overflow-visible md:h-[32rem]">
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 520"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <clipPath id="header-bg-clip" clipPathUnits="userSpaceOnUse">
            <path d={HEADER_PATH} />
          </clipPath>
        </defs>
        <path d={HEADER_PATH} fill="#95cff2" />
        <image
          href={bgImg}
          x="0"
          y="0"
          width={W}
          height={H}
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#header-bg-clip)"
        />
      </svg>

      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="header-clip" clipPathUnits="objectBoundingBox">
            <path d={HEADER_CLIP_PATH} />
          </clipPath>
        </defs>
      </svg>

      <div
        className="relative z-10 h-full text-ink"
        style={{ clipPath: 'url(#header-clip)' }}
      >
        <div className="absolute left-6 top-16 md:left-12 md:top-20">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.25em] text-ink/60 md:text-base">
            {profile.title}
          </p>
        </div>

        <nav className="absolute left-6 top-[34%] flex flex-wrap gap-x-8 gap-y-3 md:left-12 md:top-[32%]">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-semibold uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-ink"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-ink transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <img
          src={profileImg}
          alt={`Portrait of ${profile.name}`}
          className="absolute bottom-0 right-4 h-[22rem] w-auto md:right-12 md:h-[31rem]"
        />
      </div>
    </header>
  )
}