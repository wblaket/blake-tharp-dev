import React from 'react';
import { Helmet } from 'react-helmet';
import {Table} from 'semantic-ui-react';
import {FaReact, FaBootstrap, FaNodeJs} from 'react-icons/fa';
import {AiFillHtml5, AiOutlineGithub} from 'react-icons/ai';
import {SiCss3, SiDjango, SiMongodb, SiMysql, SiPhp, SiPython} from 'react-icons/si';
import {BiAtom} from 'react-icons/bi';
import {DiJavascript, DiJava, DiNodejsSmall, DiJqueryLogo} from 'react-icons/di';
import {ImGit} from 'react-icons/im';
import {DiCss3} from 'react-icons/di';


const SkillsPage = () => {
  return (


    <div id="skills-list">

    <Helmet>
        <title>{ "Blake Tharp | Skills" }</title>
      </Helmet>
    <Table celled color='blue'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Front-End</Table.HeaderCell>
          <Table.HeaderCell>Back-End</Table.HeaderCell>
          <Table.HeaderCell>Other Tools</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell><AiFillHtml5 size={30} /> HTML 5</Table.Cell>
          <Table.Cell><SiPhp size={30} /> PHP</Table.Cell>
          <Table.Cell><ImGit size={30} /> Git</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell><DiCss3 size={30}/> CSS 3</Table.Cell>
          <Table.Cell><SiPython size={30}/> Python</Table.Cell>
          <Table.Cell><SiDjango size={30}/> Django Framework</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell><DiJavascript size={30}/> JavaScript</Table.Cell>
          <Table.Cell><DiJava size={30}/> Java</Table.Cell>
          <Table.Cell> MyPHP Admin</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell><FaBootstrap size={30}/> Bootstrap</Table.Cell>
          <Table.Cell><FaNodeJs size={30} /> Node.JS</Table.Cell>
          <Table.Cell> MongoDB Compass</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell><DiJqueryLogo size={30} /> JQuery</Table.Cell>
          <Table.Cell> Express.JS</Table.Cell>
          <Table.Cell><BiAtom size={30}/> Atom</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell><FaReact size={30}/> React</Table.Cell>
          <Table.Cell><SiMysql size={30}/> MySQL</Table.Cell>
          <Table.Cell><AiOutlineGithub size={30}/> Github</Table.Cell>

        </Table.Row>

        <Table.Row>
          <Table.Cell>Semantic UI</Table.Cell>
          <Table.Cell><SiMongodb size={30}/> MongoDB</Table.Cell>
          <Table.Cell></Table.Cell>
        </Table.Row>
      </Table.Body>

    </Table>
    </div>
  );
};

export default SkillsPage;
