import TypeIt from "typeit-react";

function Intro() {
  return (
    <TypeIt
      // speed="10"
      // autoStart = "true"
      getBeforeInit={(instance) => {
        instance
          .type("Welcome to my portfolio.")
          .pause(750)
          .delete(24)
          .pause(500)
          .type("My name is Yulia.")
          .pause(750)
          .delete(17)
          .type("I am a web developer.");

        // Remember to return it!
        return instance;
      }}
    />
  );
}

export default Intro;
