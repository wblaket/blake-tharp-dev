import React from 'react';
import { Helmet } from 'react-helmet';


const AboutPage = () => {
  return (
    <>
    <div id="about-page">
    <Helmet>
        <title>{ "Blake Tharp | About" }</title>
      </Helmet>
      <h1>Who I am </h1>
        <p>Originally Kentucky-born, I now live in the west-side of Cincinnati with my beautiful wife and Australian Cattle Dog.
        When I'm not programming as a hobby, you can typically find me reading a good book, walking my dog or eating at one of the
        great restaraunts here on the west-side with my wife.</p>

      <h1>What I do</h1>
        <p>I am a full-stack developer who is constantly looking for new technologies to learn and new projects to tackle.
        From setting up a clean user interface, to configuring the database with SQL or NOSQL, to coding everything in between,
        I love constantly challenging myself to do more and constantly improve my projects. You can see my skill page for a summary
        of my skillset.</p>

    </div>
    </>
  );
};

export default AboutPage;
