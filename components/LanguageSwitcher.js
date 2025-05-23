export default function LanguageSwitcher() {
  const isHungarian =
    typeof window !== "undefined" &&
    window.location.hostname.includes("roli-portfoli");

  const targetUrl = isHungarian ? "" : "https://roli-portfoli.vercel.app";

  return (
    <a
      href={targetUrl}
      title={isHungarian ? "Switch to English" : "Váltás magyarra"}
      aria-label={isHungarian ? "Switch to English" : "Váltás magyarra"}
      style={{ fontSize: "2rem", textDecoration: "none" }}
    >
      {!isHungarian ? "🇬🇧" : "🇭🇺"}
    </a>
  );
}
