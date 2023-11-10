"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarStart() {
  const url = usePathname();

  const admin = url.includes("admin") ? "admin" : "";

  return (
    <div className="navbar-start">
      <Link
        href={`/${admin}`}
        className={`navbar-item ${
          !url.includes("blog") ? "has-text-link has-text-weight-bold" : ""
        }`}>
        Home
      </Link>
      <Link
        href={`${admin !== "" ? `/${admin}` : ""}/blog`}
        className={`navbar-item ${
          url.includes("blog") ? "has-text-link has-text-weight-bold" : ""
        }`}>
        Blog
      </Link>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">More</a>

        <div className="navbar-dropdown">
          <a className="navbar-item">About</a>
          <a className="navbar-item">Jobs</a>
          <a className="navbar-item">Contact</a>
          <hr className="navbar-divider" />
          <a className="navbar-item">Report an issue</a>
        </div>
      </div>
    </div>
  );
}
