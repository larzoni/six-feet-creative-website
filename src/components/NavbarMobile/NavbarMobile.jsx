// Import necessary components and icons
"use client";
import React, { useState } from "react";
import styles from "./NavbarMobile.module.scss";
import Link from "next/link";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { NavToggleTheme } from "../NavToggleTheme/NavToggleTheme";
import { useTheme } from "@/context/ThemeContext";

const NavbarMobile = () => {
  const { isDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClassname = `${styles.link} ${isDarkMode ? styles.dark : ""}`;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.container} ${isDarkMode ? styles.dark : ""}`}>
      <NavToggleTheme />

      <div className={styles.hamburgerIcon} onClick={toggleMenu}>
        <HamburgerMenuIcon width={30} height={30} />
      </div>

      {menuOpen && (
        <div>
          <div className={styles.overlay} onClick={closeMenu}></div>
          <div
            className={`${styles.mobileMenu} ${isDarkMode ? styles.dark : ""}`}
          >
            <div className={styles.closeMenu} onClick={closeMenu}>
              <Cross1Icon width={30} height={30} />
            </div>
            <Link href="/">
              <span className={linkClassname} onClick={closeMenu}>
                HOME
              </span>
            </Link>
            <Link href="/music">
              <span className={linkClassname} onClick={closeMenu}>
                MUSIC
              </span>
            </Link>
            <Link href="/about">
              <span className={linkClassname} onClick={closeMenu}>
                ABOUT ME
              </span>
            </Link>
            <Link href="/contact">
              <span className={linkClassname} onClick={closeMenu}>
                CONTACT
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;
