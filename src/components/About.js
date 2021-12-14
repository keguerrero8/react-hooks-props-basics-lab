import React from "react";
import Links from "./Links"

// has object called props = {links:{
//     github: "https://github.com/liza",
//     linkedin: "https://www.linkedin.com/in/liza/",
//   }
// function Links(props) {
//   return (
//     <div>
//       <h3>Links</h3>
//       <a href={props.links.github}>{props.links.github}</a>
//       <a href={props.links.linkedin}>{props.links.linkedin}</a>
//     </div>
//   )
// }

//gets object called props = {bio: user.bio, links: user.links}
function About(props) {

  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
