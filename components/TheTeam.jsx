/* eslint-disable react/display-name */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { forwardRef } from "react";
import vikingMan from "../public/vikingMan.jpg";
import strikingMan from "../public/strikingMan.jpg";
import gentleWoman from "../public/gentleWoman.jpg";

const TheTeam = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="flex flex-col justify-center items-center sm:px-20 px-5 py-20"
    >
      <div>
        <div>
          <span className="font-bold text-4xl">Meet</span>{" "}
          <span className="italic">the</span>{" "}
          <span className="font-bold text-4xl">Team</span>
        </div>
        <div className="text-[11px] mt-[-5px] text-main">
          Responsible for making the magic happen
        </div>
      </div>
      <div className="my-10 flex sm:flex-row flex-col justify-evenly gap-8 sm:gap-0">
        <div className="flex flex-col items-center sm:w-[33%] bg-white p-4 rounded-lg shadow-lg">
          <Image
            className="w-[20%] sm:w-[25%] rounded-full"
            src={strikingMan}
            alt="Justin"
          />
          <p className="text-main font-bold text-[25px] py-2">Justin</p>
          <p>
            Justin, a prodigious planner and system optimization expert,
            consistently dazzles his peers with his innovative ideas and
            remarkable problem-solving abilities. His unmatched talent for
            streamlining complex processes and crafting ingenious solutions is
            an invaluable asset to any team. Possessing an uncanny ability to
            identify inefficiencies, Justin thrives in challenging situations,
            consistently delivering breakthrough results. As the mastermind
            behind numerous successful projects, his genius-level intellect and
            unparalleled expertise have established him as a highly sought-after
            strategist in his field.
          </p>
        </div>
        <div className="flex flex-col items-center sm:w-[33%] bg-white p-4 rounded-lg shadow-lg">
          <Image
            className="w-[20%] sm:w-[25%] rounded-full"
            src={vikingMan}
            alt="Jonker"
          />
          <p className="text-main font-bold text-[25px] py-2">Jonker</p>
          <p>
            Jonker is an exceptionally talented senior developer with a strong
            mastery of React. His genius-level intellect, combined with his
            relentless work ethic, has enabled him to contribute significantly
            to the industry. Not only does Jonker excel at overcoming technical
            challenges, but he is also an inspiring team player, always eager to
            help his colleagues and share his wealth of knowledge. His passion
            and commitment to excellence have established him as a truly
            invaluable asset in the world of software development.
          </p>
        </div>

        <div className="flex flex-col items-center sm:w-[33%] bg-white p-4 rounded-lg shadow-lg">
          <Image
            className="w-[20%] sm:w-[25%] rounded-full"
            src={gentleWoman}
            alt="Kaylee"
          />
          <p className="text-main font-bold text-[25px] py-2">Kaylee</p>
          <p>
            Kaylee is a passionate and driven up-and-coming developer, whose
            enthusiasm for her craft is contagious. With an insatiable appetite
            for learning, she consistently goes above and beyond to expand her
            knowledge and sharpen her skills. Her dedication to teamwork is
            admirable, as she is always eager to contribute and collaborate with
            others, fostering a positive and supportive environment. As Kaylee
            continues to grow as a developer, her hard work and unrelenting
            spirit are sure to propel her to new heights of success in the tech
            industry.
          </p>
        </div>
      </div>
    </section>
  );
});

export default TheTeam;
