import React from "react";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiFirebase,
  SiInsomnia,
} from "react-icons/si";

function Toolstack() {
  return (
    <div className="justify-center text-center tools">
      <div className="stacks" title="Linux Wsl2">
        <SiLinux size={90} />
      </div>
      <div className="stacks" title="Visual Studio Code">
        <SiVisualstudiocode size={90} />
      </div>
      <div className="stacks" title="Postman">
        <SiPostman size={90} />
      </div>
      <div className="stacks" title="Firebase">
        <SiFirebase size={90} />
      </div>
      <div className="stacks" title="Heroku">
        <SiHeroku size={90} />
      </div>
      <div className="stacks" title="Insomnia">
        <SiInsomnia size={90} />
      </div>
    </div>
  );
}

export default Toolstack;
