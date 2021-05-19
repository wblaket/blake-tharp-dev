import React from 'react';
import projectContent from '../Components/project-data';
import ProjectsList from '../Components/ProjectsList';
import { Helmet } from 'react-helmet';

const ProjectsListPage = () => {

  return (
    <>
    <Helmet>
        <title>{ "Blake Tharp | Projects" }</title>
      </Helmet>
    <ProjectsList projects={projectContent} />
    </>
  );
};

export default ProjectsListPage;
