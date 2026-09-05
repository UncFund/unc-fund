"use client";

import { useEffect, useId, useRef } from "react";

export type Mood = "happy" | "think" | "approve";

type Props = {
  mood?: Mood;
  size?: number;
  wave?: boolean;
  bubble?: string;
  follow?: boolean;
  className?: string;
};

const INK = "#1E2430";
const SKIN = "#E8C4A0";
const SKIN_2 = "#DDB58E";
const SKIN_LINE = "#C99A72";
const HAIR = "#8C8F94";
const HAIR_2 = "#B5B8BD";
const SHIRT = "#BFD7EA";
const COLLAR = "#E4EEF6";
const VEST_HI = "#3A6A9A";
const VEST_LO = "#2F5D8A";
const VEST_D = "#22456A";
const VEST_L = "#4E7FB0";
const ZIP = "#C9D3DE";
const KHAKI = "#D9C8A6";
const CREASE = "#C2AF89";
const BELT = "#6B4F3A";
const BUCKLE = "#C9A86A";
const SHOE = "#9AA3AD";
const SOLE = "#F1EDE3";
const CREAM = "#F7F3EA";

/**
 * Unc, the mascot. Mirrors brand/character/unc-master.svg.
 * Blinks on a CSS loop, eyes follow the cursor, waves once on mount.
 * Replace with the Rive runtime once the polished character exists.
 */
export default function Unc({ mood = "happy", size = 280, wave = true, bubble, follow = true, className = "" }: Props) {
  const ref = useRef<SVGSVGElement>(null);
  const uid = useId().replace(/:/g, "");
  const skinId = `skin-${uid}`;
  const puffId = `puff-${uid}`;

  useEffect(() => {
    if (!follow) return;
    const svg = ref.current;
    if (!svg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const pupils = svg.querySelectorAll<SVGGElement>("[data-pupil]");
    const onMove = (e: MouseEvent) => {
      const r = svg.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height * 0.34;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const d = Math.hypot(dx, dy) || 1;
      const k = Math.min(1, d / 260) * 3.5;
      const tx = ((dx / d) * k).toFixed(2);
      const ty = ((dy / d) * k).toFixed(2);
      pupils.forEach((p) => p.setAttribute("transform", `translate(${tx} ${ty})`));
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [follow]);

  const rightArmWaves = mood !== "approve" && (wave || mood === "happy");

  return (
    <svg
      ref={ref}
      className={`unc ${className}`}
      viewBox="0 0 320 400"
      width={size}
      height={(size * 400) / 320}
      role="img"
      aria-label="Unc, in a half-zipped puffer vest"
    >
      <defs>
        <linearGradient id={skinId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={SKIN} />
          <stop offset="1" stopColor={SKIN_2} />
        </linearGradient>
        <linearGradient id={puffId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={VEST_HI} />
          <stop offset="1" stopColor={VEST_LO} />
        </linearGradient>
      </defs>

      {/* left arm, at rest, with the watch */}
      <g>
        <rect x="68" y="198" width="38" height="92" rx="19" fill={SHIRT} stroke={INK} strokeWidth="2.5" />
        <rect x="68" y="272" width="38" height="14" rx="4" fill={COLLAR} stroke={INK} strokeWidth="2" />
        <rect x="66" y="262" width="42" height="9" rx="3" fill="#3A3F47" />
        <circle cx="87" cy="266" r="7" fill="#DDE6EE" stroke={INK} strokeWidth="2" />
        <path d="M87 266 L87 262 M87 266 L90 267" stroke={INK} strokeWidth="1.5" />
        <ellipse cx="87" cy="296" rx="15" ry="13" fill={`url(#${skinId})`} stroke={INK} strokeWidth="2.5" />
        <path d="M78 300 L78 306 M85 303 L85 309 M92 303 L92 309 M99 299 L99 305" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* right arm: waving, thumbs up, or at rest */}
      {mood === "approve" ? (
        <g>
          <g transform="rotate(-100 233 210)">
            <rect x="214" y="198" width="38" height="82" rx="19" fill={SHIRT} stroke={INK} strokeWidth="2.5" />
            <rect x="214" y="262" width="38" height="14" rx="4" fill={COLLAR} stroke={INK} strokeWidth="2" />
          </g>
          <ellipse cx="302" cy="214" rx="17" ry="15" fill={`url(#${skinId})`} stroke={INK} strokeWidth="2.5" />
          <rect x="296" y="178" width="13" height="30" rx="6.5" fill={SKIN} stroke={INK} strokeWidth="2.5" />
          <path d="M290 212 L314 212 M290 220 L314 220" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
        </g>
      ) : (
        <g className={rightArmWaves ? `arm-wave ${wave ? "" : "idle"}` : ""}>
          <rect x="214" y="198" width="38" height="92" rx="19" fill={SHIRT} stroke={INK} strokeWidth="2.5" />
          <rect x="214" y="272" width="38" height="14" rx="4" fill={COLLAR} stroke={INK} strokeWidth="2" />
          {rightArmWaves ? (
            <g>
              <ellipse cx="233" cy="300" rx="15" ry="13" fill={`url(#${skinId})`} stroke={INK} strokeWidth="2.5" />
              <rect x="218" y="300" width="7" height="24" rx="3.5" fill={SKIN} stroke={INK} strokeWidth="2" />
              <rect x="226" y="304" width="7" height="26" rx="3.5" fill={SKIN} stroke={INK} strokeWidth="2" />
              <rect x="234" y="304" width="7" height="26" rx="3.5" fill={SKIN} stroke={INK} strokeWidth="2" />
              <rect x="242" y="300" width="7" height="22" rx="3.5" fill={SKIN} stroke={INK} strokeWidth="2" />
              <rect x="246" y="286" width="7" height="18" rx="3.5" fill={SKIN} stroke={INK} strokeWidth="2" transform="rotate(-40 249 295)" />
            </g>
          ) : (
            <g>
              <ellipse cx="233" cy="296" rx="15" ry="13" fill={`url(#${skinId})`} stroke={INK} strokeWidth="2.5" />
              <path d="M224 300 L224 306 M231 303 L231 309 M238 303 L238 309 M245 299 L245 305" stroke={INK} strokeWidth="2" strokeLinecap="round" />
            </g>
          )}
        </g>
      )}

      {/* legs, belt, sneakers */}
      <rect x="116" y="288" width="38" height="84" rx="11" fill={KHAKI} stroke={INK} strokeWidth="2.5" />
      <rect x="166" y="288" width="38" height="84" rx="11" fill={KHAKI} stroke={INK} strokeWidth="2.5" />
      <path d="M135 300 L135 362 M185 300 L185 362" stroke={CREASE} strokeWidth="2" strokeLinecap="round" />
      <rect x="110" y="284" width="100" height="12" rx="3" fill={BELT} stroke={INK} strokeWidth="2" />
      <rect x="152" y="282" width="16" height="16" rx="3" fill={BUCKLE} stroke={INK} strokeWidth="2" />
      <rect x="158" y="286" width="4" height="8" fill={BELT} />
      <path d="M104 372 Q104 360 118 358 L150 358 Q160 358 162 366 L164 380 Q164 386 156 386 L110 386 Q102 386 104 372 Z" fill={SHOE} stroke={INK} strokeWidth="2.5" />
      <path d="M104 378 L164 378 L164 380 Q164 386 156 386 L110 386 Q102 386 104 378 Z" fill={SOLE} stroke={INK} strokeWidth="2" />
      <path d="M122 364 L136 364 M124 369 L138 369" stroke={CREAM} strokeWidth="2" strokeLinecap="round" />
      <path d="M158 372 Q158 360 172 358 L204 358 Q214 358 216 366 L218 380 Q218 386 210 386 L164 386 Q156 386 158 372 Z" fill={SHOE} stroke={INK} strokeWidth="2.5" />
      <path d="M158 378 L218 378 L218 380 Q218 386 210 386 L164 386 Q156 386 158 378 Z" fill={SOLE} stroke={INK} strokeWidth="2" />
      <path d="M176 364 L190 364 M178 369 L192 369" stroke={CREAM} strokeWidth="2" strokeLinecap="round" />

      {/* torso: oxford shirt under a quilted puffer vest */}
      <rect x="94" y="186" width="132" height="124" rx="28" fill={SHIRT} stroke={INK} strokeWidth="2.5" />
      <path d="M104 192 Q160 172 216 192 L220 296 Q160 310 100 296 Z" fill={`url(#${puffId})`} stroke={INK} strokeWidth="2.5" />
      <g stroke={VEST_D} strokeWidth="1.6" fill="none">
        <path d="M104 214 Q160 220 216 214" />
        <path d="M103 230 Q160 236 217 230" />
        <path d="M102 246 Q160 252 218 246" />
        <path d="M101 262 Q160 268 219 262" />
        <path d="M100 278 Q160 284 220 278" />
      </g>
      <g stroke={VEST_L} strokeWidth="1.2" fill="none" opacity=".7">
        <path d="M104 208 Q160 214 216 208" />
        <path d="M103 224 Q160 230 217 224" />
        <path d="M102 240 Q160 246 218 240" />
        <path d="M101 256 Q160 262 219 256" />
        <path d="M100 272 Q160 278 220 272" />
      </g>
      <path d="M104 192 Q100 240 100 296 M216 192 Q220 240 220 296" fill="none" stroke={VEST_D} strokeWidth="3.5" />
      <path d="M100 296 Q160 310 220 296 L220 290 Q160 304 100 290 Z" fill={VEST_D} stroke={INK} strokeWidth="2" />
      <path d="M108 192 Q160 172 212 192 L208 208 Q160 192 112 208 Z" fill={VEST_HI} stroke={INK} strokeWidth="2.5" />
      <path d="M112 200 Q160 186 208 200" fill="none" stroke={VEST_D} strokeWidth="1.6" />
      <path d="M146 194 L160 240 L174 194 Z" fill={SHIRT} stroke={INK} strokeWidth="2" />
      <path d="M138 188 L160 210 L182 188 L172 178 L160 192 L148 178 Z" fill={COLLAR} stroke={INK} strokeWidth="2" />
      <path d="M156 240 L155 300 M164 240 L165 300" stroke={VEST_D} strokeWidth="2" />
      <line x1="160" y1="240" x2="160" y2="300" stroke={ZIP} strokeWidth="3.5" strokeDasharray="2.5 2" />
      <rect x="155" y="234" width="10" height="16" rx="3" fill={ZIP} stroke={INK} strokeWidth="1.5" />
      <rect x="158" y="250" width="4" height="9" rx="1.5" fill={ZIP} stroke={INK} strokeWidth="1" />
      <path d="M150 180 L170 180 L170 190 L150 190 Z" fill={VEST_HI} stroke={INK} strokeWidth="1.5" />
      <path d="M110 258 L132 280" stroke={VEST_D} strokeWidth="5" strokeLinecap="round" />
      <path d="M110 258 L132 280" stroke={ZIP} strokeWidth="2" strokeDasharray="2 2" strokeLinecap="round" />
      <rect x="128" y="276" width="5" height="9" rx="1.5" fill={ZIP} stroke={INK} strokeWidth="1" transform="rotate(-45 130 280)" />
      <path d="M210 258 L188 280" stroke={VEST_D} strokeWidth="5" strokeLinecap="round" />
      <path d="M210 258 L188 280" stroke={ZIP} strokeWidth="2" strokeDasharray="2 2" strokeLinecap="round" />
      <rect x="187" y="276" width="5" height="9" rx="1.5" fill={ZIP} stroke={INK} strokeWidth="1" transform="rotate(45 190 280)" />
      <g transform="translate(180 214)">
        <rect x="0" y="0" width="28" height="16" rx="1.5" fill={SOLE} stroke={INK} strokeWidth="1.5" />
        <rect x="2" y="2" width="24" height="3" fill="#E8742C" />
        <rect x="2" y="5" width="24" height="3" fill="#B0568A" />
        <rect x="2" y="8" width="24" height="3" fill={VEST_LO} />
        <path d="M2 11 L6 6 L9 9 L13 4 L17 8 L20 6 L24 10 L26 8 L26 11 Z" fill={INK} />
        <text x="14" y="15" fontFamily="var(--font-display), sans-serif" fontSize="4.6" fontWeight="700" textAnchor="middle" fill={INK} letterSpacing=".6">UNC</text>
      </g>

      {/* head */}
      <rect x="144" y="160" width="32" height="34" fill={`url(#${skinId})`} stroke={INK} strokeWidth="2.5" />
      <path d="M96 118 Q96 56 160 56 Q224 56 224 118 Q224 158 200 176 Q182 188 160 188 Q138 188 120 176 Q96 158 96 118 Z" fill={`url(#${skinId})`} stroke={INK} strokeWidth="2.5" />
      <path d="M100 152 L98 118 Q96 56 160 56 Q224 56 222 118 L220 152 L212 152 L212 128 Q212 106 196 101 Q176 96 160 99 Q144 96 124 101 Q108 106 108 128 L108 152 Z" fill={HAIR} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M114 88 Q136 70 166 68 M126 78 Q152 62 186 66 M196 76 Q206 84 210 98" fill="none" stroke={HAIR_2} strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="97" cy="128" rx="10" ry="13" fill={SKIN} stroke={INK} strokeWidth="2.5" />
      <ellipse cx="223" cy="128" rx="10" ry="13" fill={SKIN} stroke={INK} strokeWidth="2.5" />
      <path d="M94 122 Q100 126 96 134 M226 122 Q220 126 224 134" fill="none" stroke={SKIN_LINE} strokeWidth="2" strokeLinecap="round" />
      <path d="M102 116 L122 96 M218 116 L198 96" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <rect x="120" y="86" width="32" height="18" rx="9" fill="#7FA7CF" fillOpacity=".3" stroke={INK} strokeWidth="3" />
      <rect x="168" y="86" width="32" height="18" rx="9" fill="#7FA7CF" fillOpacity=".3" stroke={INK} strokeWidth="3" />
      <line x1="152" y1="94" x2="168" y2="94" stroke={INK} strokeWidth="3" />
      <path d="M138 116 Q160 112 182 116" fill="none" stroke={SKIN_LINE} strokeWidth="1.5" strokeLinecap="round" opacity=".7" />

      {mood === "think" ? (
        <g>
          <path d="M120 124 Q134 128 152 126 Q138 132 124 132 Z" fill={INK} />
          <path d="M200 124 Q186 128 168 126 Q182 132 196 132 Z" fill={INK} />
          <path d="M128 140 Q138 136 148 140 M172 140 Q182 136 192 140" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      ) : (
        <g>
          <path d="M120 128 Q134 114 152 122 Q138 122 124 132 Z" fill={INK} />
          <path d="M200 128 Q186 114 168 122 Q182 122 196 132 Z" fill={INK} />
          <g className="eye">
            <ellipse cx="138" cy="138" rx="10" ry="8.5" fill="#FFFFFF" stroke={INK} strokeWidth="2" />
            <g data-pupil>
              <circle cx="139" cy="139" r="4.6" fill={INK} />
              <circle cx="137.4" cy="137.2" r="1.5" fill="#FFFFFF" />
            </g>
            <path d="M128 133 Q138 128 148 133" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
          </g>
          <g className="eye r">
            <ellipse cx="182" cy="138" rx="10" ry="8.5" fill="#FFFFFF" stroke={INK} strokeWidth="2" />
            <g data-pupil>
              <circle cx="183" cy="139" r="4.6" fill={INK} />
              <circle cx="181.4" cy="137.2" r="1.5" fill="#FFFFFF" />
            </g>
            <path d="M172 133 Q182 128 192 133" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>
      )}
      <path d="M124 136 L118 134 M124 141 L118 143 M196 136 L202 134 M196 141 L202 143" stroke={SKIN_LINE} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M130 150 Q138 153 146 150 M174 150 Q182 153 190 150" fill="none" stroke={SKIN_LINE} strokeWidth="1.5" strokeLinecap="round" opacity=".8" />
      <ellipse cx="126" cy="154" rx="9" ry="6" fill="#E9A98D" opacity=".45" />
      <ellipse cx="194" cy="154" rx="9" ry="6" fill="#E9A98D" opacity=".45" />
      <path d="M160 134 Q150 150 156 158 Q160 162 166 158 Q170 152 164 142" fill={SKIN_2} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M130 166 Q146 154 160 164 Q174 154 190 166 Q176 178 160 170 Q144 178 130 166 Z" fill={HAIR} stroke={INK} strokeWidth="2" />
      {mood === "approve" ? (
        <path d="M136 176 Q160 198 184 176" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      ) : mood === "think" ? (
        <path d="M146 180 Q160 176 174 180" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      ) : (
        <g>
          <path d="M140 178 Q160 190 180 178" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M148 183 Q160 187 172 183" fill="none" stroke={SKIN_LINE} strokeWidth="1.5" strokeLinecap="round" />
        </g>
      )}

      {bubble ? (
        <g className="bubble">
          <rect x="196" y="14" width="118" height="46" rx="12" fill="#FFFFFF" stroke={INK} strokeWidth="2" />
          <path d="M212 60 L206 76 L230 60 Z" fill="#FFFFFF" stroke={INK} strokeWidth="2" />
          <text x="255" y="42" fontFamily="var(--font-display), sans-serif" fontSize="12" fontWeight="600" textAnchor="middle" fill={INK}>
            {bubble}
          </text>
        </g>
      ) : null}
    </svg>
  );
}
