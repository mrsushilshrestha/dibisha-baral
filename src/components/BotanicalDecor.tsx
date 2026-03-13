/**
 * BotanicalDecor — decorative SVG elements placed absolutely behind section content.
 * Use inside a `relative` wrapper. Pass `side` to cluster decorations left or right.
 */
const BotanicalDecor = ({ variant = "default" }: { variant?: "about" | "projects" | "contact" | "education" | "default" }) => {
  return (
    <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden="true">

      {/* ─── SUNFLOWER top-right ─────────────────────────────────────────── */}
      {(variant === "about" || variant === "default") && (
        <svg
          className="absolute -top-8 -right-12 opacity-[0.07] text-amber-500"
          width="260" height="260" viewBox="0 0 200 200" fill="currentColor"
        >
          {/* petals */}
          {Array.from({ length: 16 }, (_, i) => {
            const angle = (i * 360) / 16;
            return (
              <ellipse
                key={i}
                cx="100" cy="100"
                rx="12" ry="36"
                transform={`rotate(${angle} 100 100) translate(0 -52)`}
                fill="#d97706"
                opacity="0.85"
              />
            );
          })}
          {/* center */}
          <circle cx="100" cy="100" r="28" fill="#92400e" />
          <circle cx="100" cy="100" r="22" fill="#78350f" />
          {/* seeds pattern */}
          {Array.from({ length: 6 }, (_, r) =>
            Array.from({ length: Math.ceil(6 + r * 2) }, (_, c) => {
              const theta = (c / (6 + r * 2)) * Math.PI * 2;
              const radius = 5 + r * 3;
              return (
                <circle
                  key={`${r}-${c}`}
                  cx={100 + Math.cos(theta) * radius}
                  cy={100 + Math.sin(theta) * radius}
                  r="1.8"
                  fill="#d97706"
                  opacity="0.6"
                />
              );
            })
          )}
        </svg>
      )}

      {/* Large leaf removed from left */}

      {/* flask removed */}

      {/* ─── DNA HELIX — right side ──────────────────────────────────────── */}
      {(variant === "education" || variant === "projects" || variant === "default") && (
        <svg
          className="absolute top-1/4 -right-6 opacity-[0.06]"
          width="80" height="220" viewBox="0 0 60 200" fill="none"
        >
          {/* left strand */}
          <path d="M10 0 Q50 25 10 50 Q50 75 10 100 Q50 125 10 150 Q50 175 10 200"
            stroke="#16a34a" strokeWidth="4" fill="none" strokeLinecap="round" />
          {/* right strand */}
          <path d="M50 0 Q10 25 50 50 Q10 75 50 100 Q10 125 50 150 Q10 175 50 200"
            stroke="#d97706" strokeWidth="4" fill="none" strokeLinecap="round" />
          {/* rungs */}
          {[12, 25, 37, 50, 62, 75, 87, 100, 112, 125, 137, 150, 162, 175, 187].map((y) => (
            <line key={y} x1="10" y1={y} x2="50" y2={y} stroke="#166534" strokeWidth="2.5" opacity="0.6" />
          ))}
          {/* rung circles */}
          {[12, 25, 37, 50, 62, 75, 87, 100, 112, 125, 137, 150, 162, 175, 187].map((y) => (
            <g key={`c-${y}`}>
              <circle cx="10" cy={y} r="3.5" fill="#4ade80" opacity="0.7" />
              <circle cx="50" cy={y} r="3.5" fill="#fbbf24" opacity="0.7" />
            </g>
          ))}
        </svg>
      )}

      {/* ─── SMALL LEAF — scattered ──────────────────────────────────────── */}
      {(variant === "contact" || variant === "about") && (
        <svg
          className="absolute top-1/2 right-16 opacity-[0.08] rotate-[-30deg]"
          width="110" height="130" viewBox="0 0 90 110" fill="none"
        >
          <path
            d="M45 105 Q10 80 8 45 Q10 10 45 5 Q80 10 82 45 Q80 80 45 105Z"
            fill="#22c55e"
          />
          <path d="M45 105 Q45 55 45 5" stroke="#16a34a" strokeWidth="2.5" fill="none" />
          <path d="M45 30 Q28 42 18 40" stroke="#16a34a" strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M45 50 Q25 62 14 58" stroke="#16a34a" strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M45 70 Q30 80 22 78" stroke="#16a34a" strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M45 30 Q62 42 72 40" stroke="#16a34a" strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M45 50 Q65 62 76 58" stroke="#16a34a" strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M45 70 Q60 80 68 78" stroke="#16a34a" strokeWidth="1.5" fill="none" opacity="0.5" />
        </svg>
      )}

      {/* ─── PROPER COMPOUND MICROSCOPE ───────────────────────────────────── */}
      {(variant === "contact" || variant === "education") && (
        <svg
          className="absolute bottom-0 right-8 opacity-[0.09]"
          width="160" height="220" viewBox="0 0 110 160" fill="none"
        >
          {/* === BASE === */}
          <ellipse cx="55" cy="148" rx="40" ry="9" fill="#166534" />
          <rect x="20" y="142" width="70" height="10" rx="5" fill="#15803d" />

          {/* === PILLAR (vertical post) === */}
          <rect x="50" y="70" width="10" height="75" rx="4" fill="#16a34a" />

          {/* === ARM CURVE === */}
          <path
            d="M55 70 Q55 45 48 38 Q42 32 40 22"
            stroke="#166534" strokeWidth="10" fill="none" strokeLinecap="round"
          />
          <path
            d="M55 70 Q55 45 48 38 Q42 32 40 22"
            stroke="#15803d" strokeWidth="6" fill="none" strokeLinecap="round"
          />

          {/* === EYEPIECE TUBE === */}
          <rect x="34" y="6" width="12" height="28" rx="5" fill="#14532d" />
          {/* eyepiece lens */}
          <ellipse cx="40" cy="6" rx="6" ry="4" fill="#166534" />
          <ellipse cx="40" cy="6" rx="3.5" ry="2" fill="#4ade80" opacity="0.5" />
          {/* diopter ring */}
          <rect x="32" y="18" width="16" height="5" rx="2.5" fill="#166534" />

          {/* === HEAD / REVOLVING NOSEPIECE === */}
          <rect x="30" y="34" width="24" height="16" rx="5" fill="#16a34a" />
          {/* nosepiece disc */}
          <ellipse cx="40" cy="50" rx="14" ry="5" fill="#15803d" />

          {/* === OBJECTIVE LENSES (3 barrels) === */}
          {/* centre objective */}
          <rect x="37" y="50" width="6" height="20" rx="3" fill="#14532d" />
          <ellipse cx="40" cy="70" rx="3.5" ry="2.5" fill="#166534" />
          <ellipse cx="40" cy="70" rx="2" ry="1.5" fill="#86efac" opacity="0.6" />
          {/* left objective (tilted) */}
          <rect x="26" y="47" width="5" height="16" rx="2.5"
            fill="#14532d"
            transform="rotate(-18 28 55)"
          />
          {/* right objective (tilted) */}
          <rect x="49" y="47" width="5" height="16" rx="2.5"
            fill="#14532d"
            transform="rotate(18 52 55)"
          />

          {/* === COARSE FOCUS KNOB === */}
          <ellipse cx="62" cy="95" rx="10" ry="6" fill="#166534" />
          <ellipse cx="62" cy="93" rx="10" ry="6" fill="#15803d" />
          {/* knob ridges */}
          {[-6,-3,0,3,6].map(dx => (
            <line key={dx} x1={62+dx} y1="88" x2={62+dx} y2="99"
              stroke="#166534" strokeWidth="1" opacity="0.6" />
          ))}

          {/* === FINE FOCUS KNOB (smaller, lower) === */}
          <ellipse cx="62" cy="108" rx="7" ry="4.5" fill="#166534" />
          <ellipse cx="62" cy="106" rx="7" ry="4.5" fill="#15803d" />

          {/* === STAGE === */}
          <rect x="20" y="108" width="50" height="7" rx="3" fill="#166534" />
          {/* stage clips */}
          <rect x="24" y="104" width="8" height="10" rx="2" fill="#14532d" />
          <rect x="58" y="104" width="8" height="10" rx="2" fill="#14532d" />
          {/* slide on stage */}
          <rect x="32" y="107" width="26" height="5" rx="1" fill="#bbf7d0" opacity="0.35" />

          {/* === CONDENSER / SUB-STAGE === */}
          <rect x="37" y="115" width="6" height="12" rx="3" fill="#15803d" />
          <ellipse cx="40" cy="127" rx="8" ry="3" fill="#166534" />

          {/* === LIGHT BEAM (below condenser) === */}
          <path d="M36 127 L28 142 L52 142 L44 127Z"
            fill="#bbf7d0" opacity="0.25" />
        </svg>
      )}

      {/* ─── SMALL SUNFLOWER — scattered bottom-right (projects) ─────────── */}
      {variant === "projects" && (
        <svg
          className="absolute bottom-4 right-8 opacity-[0.07]"
          width="150" height="150" viewBox="0 0 120 120" fill="currentColor"
        >
          {Array.from({ length: 12 }, (_, i) => {
            const angle = (i * 360) / 12;
            return (
              <ellipse
                key={i}
                cx="60" cy="60"
                rx="8" ry="24"
                transform={`rotate(${angle} 60 60) translate(0 -34)`}
                fill="#d97706"
                opacity="0.9"
              />
            );
          })}
          <circle cx="60" cy="60" r="18" fill="#92400e" />
          <circle cx="60" cy="60" r="13" fill="#78350f" />
        </svg>
      )}

    </div>
  );
};

export default BotanicalDecor;
