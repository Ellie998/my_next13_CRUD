import Link from "next/link";

export default function ProtpolioLayout({ children }) {
  return (
    <>
      <header>
        <Link href="/">Go to Home</Link>
      </header>
      <>{children}</>
    </>
  );
}
