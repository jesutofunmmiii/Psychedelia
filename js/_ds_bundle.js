/* @ds-bundle: {"format":4,"namespace":"PsychedeliaDesignSystem_01aa0c","components":[{"name":"CTAPill","sourcePath":"components/core/CTAPill.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"GoldAnnotation","sourcePath":"components/core/GoldAnnotation.jsx"},{"name":"Supergraphic","sourcePath":"components/core/Supergraphic.jsx"},{"name":"TwoToneHeadline","sourcePath":"components/core/TwoToneHeadline.jsx"},{"name":"HeadlineChip","sourcePath":"components/social/HeadlineChip.jsx"},{"name":"NoteCard","sourcePath":"components/social/NoteCard.jsx"},{"name":"PodiumTiles","sourcePath":"components/social/PodiumTiles.jsx"},{"name":"RankingTable","sourcePath":"components/social/RankingTable.jsx"},{"name":"StatBlock","sourcePath":"components/social/StatBlock.jsx"},{"name":"TicketChip","sourcePath":"components/social/TicketChip.jsx"},{"name":"WinnerGrid","sourcePath":"components/social/WinnerGrid.jsx"}],"sourceHashes":{"components/core/CTAPill.jsx":"733fced03a7b","components/core/Eyebrow.jsx":"f5dd4edd5c9b","components/core/GoldAnnotation.jsx":"1925987217a6","components/core/Supergraphic.jsx":"49cc46e64f33","components/core/TwoToneHeadline.jsx":"04120f3d0420","components/social/HeadlineChip.jsx":"d7abf38bb066","components/social/NoteCard.jsx":"af78d37988e0","components/social/PodiumTiles.jsx":"38149e99f5d3","components/social/RankingTable.jsx":"b668cee4e674","components/social/StatBlock.jsx":"48cbd6750a24","components/social/TicketChip.jsx":"c48315397d67","components/social/WinnerGrid.jsx":"cb431f758abe"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PsychedeliaDesignSystem_01aa0c = window.PsychedeliaDesignSystem_01aa0c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/CTAPill.jsx
try { (() => {
const {
  useState
} = React;
function CTAPill({
  label,
  emphasis,
  emphasisColor = "var(--psy-blue)",
  onClick,
  style
}) {
  const [hover, setHover] = useState(false);
  return React.createElement("button", {
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: hover ? "var(--psy-grad-brand)" : "var(--psy-navy)",
      border: "1px solid #1b2f5e",
      borderRadius: "var(--psy-radius-pill)",
      padding: "14px 40px",
      cursor: "pointer",
      fontFamily: "var(--psy-font-display)",
      fontWeight: 600,
      fontSize: "17px",
      color: "#fff",
      transition: "background 200ms",
      ...style
    }
  }, label, emphasis ? " " : null, emphasis ? React.createElement("span", {
    style: {
      color: hover ? "#fff" : emphasisColor,
      transition: "color 200ms"
    }
  }, emphasis) : null);
}
Object.assign(__ds_scope, { CTAPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CTAPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  color = "var(--psy-amber)",
  style
}) {
  return React.createElement("p", {
    style: {
      fontFamily: "var(--psy-font-body)",
      fontWeight: 600,
      fontSize: "13px",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color,
      margin: 0,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/GoldAnnotation.jsx
try { (() => {
function GoldAnnotation({
  children,
  variant = "ellipse",
  style
}) {
  const svg = variant === "ellipse" ? React.createElement("svg", {
    viewBox: "0 0 200 60",
    preserveAspectRatio: "none",
    style: {
      position: "absolute",
      inset: "-16% -8%",
      width: "116%",
      height: "132%",
      pointerEvents: "none"
    }
  }, React.createElement("path", {
    d: "M28 44 C 8 34, 30 8, 104 10 C 176 12, 200 30, 168 44 C 140 55, 60 56, 34 48",
    fill: "none",
    stroke: "#F9A825",
    strokeWidth: 3.4,
    strokeLinecap: "round"
  })) : React.createElement("svg", {
    viewBox: "0 0 200 14",
    preserveAspectRatio: "none",
    style: {
      position: "absolute",
      left: "-2%",
      bottom: "-0.28em",
      width: "104%",
      height: "0.32em",
      pointerEvents: "none"
    }
  }, React.createElement("path", {
    d: "M4 10 C 50 2, 120 2, 196 7",
    fill: "none",
    stroke: "#F9A825",
    strokeWidth: 5,
    strokeLinecap: "round"
  }));
  return React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block",
      ...style
    }
  }, children, svg);
}
Object.assign(__ds_scope, { GoldAnnotation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GoldAnnotation.jsx", error: String((e && e.message) || e) }); }

// components/core/Supergraphic.jsx
try { (() => {
function Supergraphic({
  src,
  tone = "frost",
  rotate = 18,
  opacity,
  width = "150%",
  top = "-25%",
  left = "-20%",
  style
}) {
  const url = src || (tone === "frost" ? "assets/logo-frost.png" : "assets/logo-navy-tone.png");
  return React.createElement("img", {
    src: url,
    alt: "",
    "aria-hidden": true,
    style: {
      position: "absolute",
      width,
      top,
      left,
      transform: `rotate(${rotate}deg)`,
      opacity: opacity ?? (tone === "frost" ? 0.6 : 1),
      pointerEvents: "none",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Supergraphic });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Supergraphic.jsx", error: String((e && e.message) || e) }); }

// components/core/TwoToneHeadline.jsx
try { (() => {
const SIZES = {
  xl: ["64px", 0.95, 700],
  l: ["40px", 1.0, 700],
  m: ["24px", 1.05, 600]
};
function TwoToneHeadline({
  lead,
  emphasis,
  trail,
  joiner = " ",
  size = "l",
  leadColor = "var(--psy-navy)",
  emphasisColor = "var(--psy-blue)",
  gradient = false,
  as = "h1",
  style
}) {
  const [fs, lh, fw] = SIZES[size] || SIZES.l;
  const base = {
    fontFamily: "var(--psy-font-display)",
    fontSize: fs,
    lineHeight: lh,
    fontWeight: fw,
    margin: 0,
    color: leadColor,
    textWrap: "pretty"
  };
  if (gradient) Object.assign(base, {
    background: "var(--psy-grad-headline)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent"
  });
  return React.createElement(as, {
    style: {
      ...base,
      ...style
    }
  }, lead, lead ? joiner : null, !gradient && emphasis ? React.createElement("span", {
    style: {
      color: emphasisColor
    }
  }, emphasis) : emphasis, trail ? " " : null, trail);
}
Object.assign(__ds_scope, { TwoToneHeadline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TwoToneHeadline.jsx", error: String((e && e.message) || e) }); }

// components/social/HeadlineChip.jsx
try { (() => {
function HeadlineChip({
  lead,
  emphasis,
  tilt = -4,
  prism = true,
  size = "34px",
  style
}) {
  return React.createElement("div", {
    className: "psy-wave",
    style: {
      position: "relative",
      overflow: "hidden",
      display: "inline-block",
      backgroundColor: "var(--psy-midnight)",
      borderRadius: "var(--psy-radius-card)",
      padding: "26px 36px",
      transform: `rotate(${tilt}deg)`,
      boxShadow: "var(--psy-shadow-soft)",
      ...style
    }
  }, prism ? React.createElement("i", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--psy-prism)",
      opacity: 0.7
    }
  }) : null, React.createElement("p", {
    style: {
      position: "relative",
      margin: 0,
      fontFamily: "var(--psy-font-display)",
      fontWeight: 600,
      fontSize: size,
      lineHeight: 1.1,
      color: "var(--psy-periwinkle)",
      textWrap: "balance"
    }
  }, lead, lead ? " " : null, React.createElement("span", {
    style: {
      color: "#fff"
    }
  }, emphasis)));
}
Object.assign(__ds_scope, { HeadlineChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/HeadlineChip.jsx", error: String((e && e.message) || e) }); }

// components/social/NoteCard.jsx
try { (() => {
function NoteCard({
  items = [],
  tilt = 3,
  width = "360px",
  style
}) {
  return React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "var(--psy-radius-chip)",
      boxShadow: "var(--psy-shadow-soft)",
      transform: `rotate(${tilt}deg)`,
      width,
      padding: "18px 24px",
      ...style
    }
  }, items.map((it, i) => React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      padding: "10px 2px",
      borderBottom: "1px solid var(--psy-frost)",
      fontFamily: "var(--psy-font-body)",
      fontWeight: 500,
      fontSize: "16px",
      color: "var(--psy-navy)"
    }
  }, React.createElement("span", {
    style: {
      fontFamily: "var(--psy-font-display)",
      fontWeight: 600
    }
  }, i + 1 + " . "), it)));
}
Object.assign(__ds_scope, { NoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/NoteCard.jsx", error: String((e && e.message) || e) }); }

// components/social/PodiumTiles.jsx
try { (() => {
function Tile({
  rank,
  label,
  image,
  big
}) {
  return React.createElement("div", {
    className: "psy-wave",
    style: {
      backgroundColor: "var(--psy-midnight)",
      borderRadius: "var(--psy-radius-tile)",
      width: big ? "200px" : "160px",
      height: big ? "240px" : "180px",
      position: "relative",
      overflow: "hidden",
      padding: "18px",
      boxSizing: "border-box",
      boxShadow: "var(--psy-shadow-soft)",
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, image ? React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: "absolute",
      right: "-18%",
      bottom: "-10%",
      width: "75%",
      opacity: 0.9
    }
  }) : null, React.createElement("span", {
    style: {
      fontFamily: "var(--psy-font-display)",
      fontWeight: 700,
      fontSize: big ? "56px" : "44px",
      color: "#fff",
      lineHeight: 1,
      position: "relative"
    }
  }, rank), React.createElement("span", {
    style: {
      fontFamily: "var(--psy-font-display)",
      fontWeight: 600,
      fontSize: "18px",
      color: "#fff",
      position: "relative",
      textWrap: "balance"
    }
  }, label));
}
function PodiumTiles({
  items = [],
  style
}) {
  const by = r => items.find(i => String(i.rank) === String(r));
  const order = [by(2), by(1), by(3)].filter(Boolean);
  return React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      ...style
    }
  }, order.map((it, i) => React.createElement(Tile, {
    key: i,
    ...it,
    big: String(it.rank) === "1"
  })));
}
Object.assign(__ds_scope, { PodiumTiles });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/PodiumTiles.jsx", error: String((e && e.message) || e) }); }

// components/social/RankingTable.jsx
try { (() => {
function RankingTable({
  rows = [],
  width = "560px",
  style
}) {
  return React.createElement("div", {
    style: {
      width,
      background: "#fff",
      borderRadius: "var(--psy-radius-card)",
      boxShadow: "var(--psy-shadow-soft)",
      borderLeft: "10px solid var(--psy-navy)",
      padding: "14px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...style
    }
  }, rows.map((r, i) => React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      background: "var(--psy-cream)",
      borderRadius: "12px",
      padding: "12px 18px"
    }
  }, React.createElement("span", {
    style: {
      fontFamily: "var(--psy-font-display)",
      fontWeight: 700,
      fontSize: "20px",
      color: "var(--psy-blue)",
      width: "28px"
    }
  }, r.rank), React.createElement("span", {
    style: {
      fontFamily: "var(--psy-font-display)",
      fontWeight: 600,
      fontSize: "18px",
      color: "var(--psy-amber)",
      flex: 1
    }
  }, r.name), React.createElement("span", {
    style: {
      fontFamily: "var(--psy-font-display)",
      fontWeight: 600,
      fontSize: "17px",
      color: "var(--psy-sky)",
      fontVariantNumeric: "tabular-nums"
    }
  }, r.score))));
}
Object.assign(__ds_scope, { RankingTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/RankingTable.jsx", error: String((e && e.message) || e) }); }

// components/social/StatBlock.jsx
try { (() => {
const FILLS = {
  midnight: "var(--psy-midnight)",
  blue: "var(--psy-blue)",
  royal: "var(--psy-royal)"
};
function StatBlock({
  value,
  caption,
  fill = "midnight",
  size = "180px",
  style
}) {
  return React.createElement("figure", {
    style: {
      margin: 0,
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "12px",
      ...style
    }
  }, React.createElement("div", {
    style: {
      width: size,
      height: size,
      background: FILLS[fill] || fill,
      borderRadius: "var(--psy-radius-chip)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--psy-font-display)",
      fontWeight: 700,
      fontSize: `calc(${size} / 3.4)`,
      color: "#fff",
      fontVariantNumeric: "tabular-nums"
    }
  }, value), caption ? React.createElement("figcaption", {
    style: {
      fontFamily: "var(--psy-font-display)",
      fontWeight: 600,
      fontSize: "18px",
      color: "var(--psy-blue)"
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/social/TicketChip.jsx
try { (() => {
function TicketChip({
  label,
  value,
  width = "420px",
  style
}) {
  return React.createElement("div", {
    style: {
      width,
      borderRadius: "var(--psy-radius-chip)",
      border: "2px dashed rgba(255,255,255,0.85)",
      background: "linear-gradient(104deg, var(--psy-midnight) 0 44%, var(--psy-amber) 44% 46.5%, var(--psy-sky) 46.5%)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 28px",
      boxShadow: "var(--psy-shadow-lift)",
      boxSizing: "border-box",
      ...style
    }
  }, React.createElement("span", {
    style: {
      fontFamily: "var(--psy-font-display)",
      fontWeight: 600,
      fontSize: "20px",
      color: "var(--psy-sky)"
    }
  }, label), React.createElement("span", {
    style: {
      fontFamily: "var(--psy-font-display)",
      fontWeight: 700,
      fontSize: "22px",
      color: "#fff",
      textTransform: "uppercase"
    }
  }, value));
}
Object.assign(__ds_scope, { TicketChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/TicketChip.jsx", error: String((e && e.message) || e) }); }

// components/social/WinnerGrid.jsx
try { (() => {
function WinnerGrid({
  handles = [],
  columns = 5,
  style
}) {
  return React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: "14px 24px",
      ...style
    }
  }, handles.map((h, i) => React.createElement("span", {
    key: i,
    style: {
      fontFamily: "var(--psy-font-body)",
      fontWeight: 500,
      fontSize: "16px",
      color: "var(--psy-navy)",
      textAlign: "center"
    }
  }, h.startsWith("@") ? h : "@" + h)));
}
Object.assign(__ds_scope, { WinnerGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/WinnerGrid.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CTAPill = __ds_scope.CTAPill;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.GoldAnnotation = __ds_scope.GoldAnnotation;

__ds_ns.Supergraphic = __ds_scope.Supergraphic;

__ds_ns.TwoToneHeadline = __ds_scope.TwoToneHeadline;

__ds_ns.HeadlineChip = __ds_scope.HeadlineChip;

__ds_ns.NoteCard = __ds_scope.NoteCard;

__ds_ns.PodiumTiles = __ds_scope.PodiumTiles;

__ds_ns.RankingTable = __ds_scope.RankingTable;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.TicketChip = __ds_scope.TicketChip;

__ds_ns.WinnerGrid = __ds_scope.WinnerGrid;

})();
