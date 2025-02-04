import React from "react";
import portfolio from "../../../../src/assets/portfolio.png";
import portfolio_mobile from "../../../../src/assets/portfolio_mobile.png";
import { SkillName } from "../About";
import { SkillsApplied } from "./SkillsApplied";

const PortfolioSiteSkills: SkillName[] = [
  "HTML5",
  "CSS3",
  "TypeScript",
  "React",
  "NodeJS",
  "Yarn",
  "Git",
  "GitHub",
];

export const Portfolio: React.FC<{
  openImageOnClick: (image: string) => Window | null;
}> = ({ openImageOnClick }) => (
  <section id="website" className="md:grid md:grid-cols-[1fr_auto] gap-5">
    <article>
      <h2>Portfolio Website</h2>
      <h3 className="mt-3">Why I decided to build my own portfolio site</h3>
      <div className="flex flex-col gap-3">
        <p>
          As a software developer, I believe in showcasing my technical skills
          and creativity. Instead of using pre-made templates like Wiz or
          SquareSpace, I chose to develop my portfolio website using React
          without using a template. This decision allows me to demonstrate my
          proficiency in web development and highlight the skills I’ve mastered.
        </p>
        <p>
          To develop this website, I utilized React.js and TypeScript, along
          with a blend of CSS and Tailwind CSS. I ensured that the site is fully
          responsive, providing an optimal viewing experience on both large and
          small screens.
        </p>
      </div>
      <SkillsApplied skillsArray={PortfolioSiteSkills} />
    </article>
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 items-center">
        <span className="text-center">Desktop View</span>
        <img
          src={portfolio}
          alt="Elias Portfolio"
          className="md:h-60 cursor-pointer portfolio"
          onClick={() => openImageOnClick(portfolio)}
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-center">Mobile View</span>
        <img
          src={portfolio_mobile}
          alt="Elias Portfolio Mobile"
          className="md:h-60 md:w-[112px] cursor-pointer portfolio"
          onClick={() => openImageOnClick(portfolio_mobile)}
        />
      </div>
    </div>
  </section>
);
