import React from 'react';
import { Helmet } from 'react-helmet';
import projectContent from '../Components/project-data';
import {Table, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const ProjectPage = ( {match} ) => {

  const name = match.params.name;
  const project = projectContent.find(project => project.name === name);
  console.log("hello");

  return (
    <div id="project-page">

    <Helmet>
        <title>{ `Blake Tharp | ${project.title}` }</title>
      </Helmet>
    <Table celled compact>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colspan="3" textAlign='center'>{project.title}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>


        <Table.Row>
          <Table.Cell colspan="3">{project.description.map((paragraph, key ) => (
            <p id={key}>{paragraph}</p>
          ))}</Table.Cell>

        </Table.Row>

        <Table.Row>
          <Table.Cell>Tech Stack:</Table.Cell>
          <Table.Cell>Front-End:</Table.Cell>
            <Table.Cell>Back-End:</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>{project.stack}</Table.Cell>

          <Table.Cell><ul>{project.frontend.map((tech, key ) => (
            <li id={key}>{tech}</li>
          ))}
          </ul></Table.Cell>

          <Table.Cell><ul>{project.backend.map((tech, key ) => (
            <li id={key}>{tech}</li>
          ))}
          </ul></Table.Cell>

        </Table.Row>


        <Table.Row>

        </Table.Row>

        <Table.Row>

        </Table.Row>

        </Table.Body>
    </Table>

    <Button color='green'><a href={project.github}>View on Github</a></Button>
    <Link to="../projects"><Button color='blue'>Back to Projects</Button></Link>

    </div>
  );
}

export default ProjectPage;
