import Link from "next/link";

export default function Header() {
  return (
    <h2 className="pageHeader">
      <Link href="/">
        <a href="/" className="pageHeaderGrid">
          <img src="/images/logo.svg" alt="logo" />
          <span> Robin's recipes</span>
        </a>
      </Link>
    </h2>
  );
}
