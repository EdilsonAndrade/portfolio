import React from "react";
import { TbBrandCSharp } from "react-icons/tb";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { SiDocker, SiAmazonaws, SiMysql, SiNextdotjs } from "react-icons/si";

function Techstack() {
  return (
    <div className="justify-center text-center tech_stack">
      <div className="stacks" title="React">
        <DiReact size={90} />
      </div>

      <div className="stacks" title="Javascript">
        <DiJavascript1 size={90} />
      </div>
      <div className="stacks" title="NodeJs">
        <DiNodejs size={90} />
      </div>

      <div className="stacks" title="Next Js">
        <SiNextdotjs size={90} />
      </div>
      <div className="stacks" title="AWS">
        <SiAmazonaws size={90} />
      </div>
      <div className="stacks" title="Docker">
        <SiDocker size={90} />
      </div>
      <div className="stacks" title="Git">
        <DiGit size={90} />
      </div>
      <div className="stacks" title="MySql">
        <SiMysql size={90} />
      </div>

      <div className="stacks" title="MongoDB">
        <DiMongodb size={90} />
      </div>
      <div className="stacks" title="Csharp">
        <TbBrandCSharp size={90} />
      </div>
    </div>
  );
}

export default Techstack;
