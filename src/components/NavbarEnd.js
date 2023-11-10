"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarEnd() {
  const url = usePathname();

  return (
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          {!url.includes("admin") && (
            <>
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <Link href="/admin" className="button is-light">
                Log in
              </Link>
            </>
          )}
          {url.includes("admin") && (
            <Link href="/" className="button is-light">
              Log out
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
