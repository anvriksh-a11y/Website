/* Ambient background layers */

export default function AmbientBackground({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const isLight = variant === 'light';
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base mesh */}
      <div
        className="absolute inset-0"
        style={{
          background: isLight
            ? 'linear-gradient(180deg,#FFF7ED 0%, #FFFBF5 38%, #FDF2E9 62%, #FFF7ED 100%)'
            : 'linear-gradient(180deg,#030712 0%, #0B0F19 55%, #030712 100%)',
        }}
      />

      {/* Aurora blobs — animated, senior-designer palette */}
      <div className="animate-aurora absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full opacity-90"
        style={{ background: 'radial-gradient(ellipse at center, rgba(255,107,0,0.22) 0%, rgba(255,174,82,0.14) 45%, transparent 70%)', filter: 'blur(70px)' }}
      />
      <div className="animate-aurora-delayed absolute top-[18%] -right-64 w-[720px] h-[520px] rounded-full"
        style={{ background: isLight ? 'radial-gradient(ellipse at center, rgba(255,122,0,0.18) 0%, rgba(254,215,170,0.22) 50%, transparent 72%)' : 'radial-gradient(ellipse at center, rgba(59,130,246,0.14) 0%, rgba(99,102,241,0.10) 50%, transparent 72%)', filter: 'blur(80px)' }}
      />
      <div className="animate-aurora-slow absolute bottom-[8%] -left-72 w-[760px] h-[560px] rounded-full"
        style={{ background: isLight ? 'radial-gradient(ellipse at center, rgba(255,183,102,0.20) 0%, rgba(255,138,61,0.12) 50%, transparent 72%)' : 'radial-gradient(ellipse at center, rgba(14,165,233,0.12) 0%, rgba(168,85,247,0.08) 55%, transparent 72%)', filter: 'blur(90px)' }}
      />
      <div className="animate-float-slow absolute top-[38%] left-[12%] w-28 h-28 rounded-full hidden lg:block"
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.55), rgba(255,170,80,0.18) 60%, transparent 70%)', filter: 'blur(6px)', opacity: 0.5 }}
      />

      {/* Fine grid */}
      <div className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: isLight
            ? 'linear-gradient(rgba(180,120,60,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(180,120,60,0.07) 1px, transparent 1px)'
            : 'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 90% 60% at 50% 0%, black 30%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 60% at 50% 0%, black 30%, transparent 78%)',
        }}
      />
      {/* Dot matrix for depth */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: isLight ? 'radial-gradient(rgba(201,78,10,0.10) 1px, transparent 1px)' : 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 70% 50% at 50% 18%, black 20%, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at 50% 18%, black 20%, transparent 72%)',
        }}
      />

      {/* Noise for glass realism */}
      <div className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '180px 180px' }}
      />
      {/* Vignette to focus content */}
      <div className="absolute inset-0" style={{ background: isLight ? 'radial-gradient(ellipse 120% 70% at 50% 42%, transparent 55%, rgba(180,100,40,0.06) 100%)' : 'radial-gradient(ellipse 120% 70% at 50% 42%, transparent 55%, rgba(0,0,0,0.35) 100%)' }} />
    </div>
  );
}
