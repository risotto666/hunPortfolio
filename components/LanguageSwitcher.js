export default function LanguageSwitcher() {
  const targetUrl = "https://roli-portfoli.vercel.app";

  return (
    <a
      href={targetUrl}
      className="text-white"
      style={{ fontSize: "1rem", textDecoration: "none" }}
    >
      EN
    </a>
  );
}
