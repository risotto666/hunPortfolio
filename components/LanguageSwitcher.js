export default function LanguageSwitcher() {
  const targetUrl = "https://roli-portfoli.vercel.app";

  return (
    <a
      href={targetUrl}
      className="text-white hover:text-green-500"
      style={{ fontSize: "1rem", textDecoration: "none" }}
    >
      EN
    </a>
  );
}
