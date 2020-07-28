import React from "react"

import styles from "./about.module.scss"
import { FloatingThing } from "./floating-thing"
import aboutUsTitleUnderlineImage from "../images/About-Us-Title-Underline.svg"

export function About() {
  return (
    <section className={styles.container}>
      <div className={styles.subContainer}>
        <h2 className={styles.title}>
          About us
          <img
            className={styles.underlineImage}
            src={aboutUsTitleUnderlineImage}
            alt=""
          />
        </h2>
        <p className={styles.bodyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className={styles.floatingThingContainer}>
          <FloatingThing />
        </div>
      </div>
    </section>
  )
}
