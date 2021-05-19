import { Link } from 'react-router-dom';
import projects from '../Components/project-data';
import Badges from '../Components/Badges'
import { Button, Card, Image } from 'semantic-ui-react';
import {FaReact, FaBootstrap} from 'react-icons/fa';
import {AiFillHtml5} from 'react-icons/ai';
import {SiDjango, SiMongodb, SiMysql, SiPhp, SiPython} from 'react-icons/si';
import {BiAtom} from 'react-icons/bi';
import {DiCss3, DiJavascript} from 'react-icons/di';


const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const ProjectsList =( { projects }) => (
    <div id="project-list">

      <Card.Group centered itemsPerRow={3}>
        <Link to="/project/my-library">
          <Card
            color="blue">
              <Card.Content>
                <Image />
                <Card.Header>My Library</Card.Header>
                <Card.Meta>LAMP Stack</Card.Meta>
                <Card.Description>Book cataloguing website.</Card.Description>
              </Card.Content>
              <Card.Content extra >
                <Card.Description><AiFillHtml5 size={30} /> <DiCss3 size={30} /> <SiMysql size={30}/> <SiPhp size={30}/></Card.Description>
              </Card.Content>
            </Card>
          </Link>

          <Link to="/project/jax-blog">
            <Card
              color="blue">
              <Card.Content>
                <Image />
                <Card.Header>Jax Blog</Card.Header>
                <Card.Meta>LAMP Stack</Card.Meta>
                <Card.Description>Microblogging website</Card.Description>
              </Card.Content>
              <Card.Content extra >
                <Card.Description><AiFillHtml5 size={30} /> <DiCss3 size={30} /> <SiMysql size={30}/> <SiPhp size={30}/></Card.Description>
              </Card.Content>
            </Card>
          </Link>

          <Link to="/project/ticket-now">
            <Card
            color="green">
              <Card.Content>
                <Image />
                <Card.Header>Ticket Now!</Card.Header>
                <Card.Meta>Django Stack</Card.Meta>
                <Card.Description>IT Ticketing System</Card.Description>
              </Card.Content>
              <Card.Content extra >
                <Card.Description><AiFillHtml5 size={30} /> <DiCss3 size={30} /> <SiDjango size={30}/> <SiPython size={30}/>
                <FaBootstrap size={30}/>
                </Card.Description>
              </Card.Content>
            </Card>
          </Link>

          <Link to="/project/the-302">
            <Card
            color="red">
              <Card.Content>
                <Image />
                <Card.Header>The 302</Card.Header>
                <Card.Meta>MERN Stack</Card.Meta>
                <Card.Description>Technical Blog</Card.Description>
              </Card.Content>
              <Card.Content extra >
                <Card.Description><AiFillHtml5 size={30} /> <DiCss3 size={30} /> <DiJavascript size={30}/><FaReact size={30}/> <FaBootstrap size={30}/>
                <SiMongodb size={30} />
                </Card.Description>
              </Card.Content>
            </Card>
          </Link>

          <Link to="/project/fetch-walker">
            <Card
            color="red">
              <Card.Content>
                <Image />
                <Card.Header>Fetch-Walker</Card.Header>
                <Card.Meta>MERN Stack</Card.Meta>
                <Card.Description>App for dog walkers</Card.Description>
              </Card.Content>
              <Card.Content extra >
                <Card.Description><AiFillHtml5 size={30} /> <DiCss3 size={30} /> <DiJavascript size={30}/><FaReact size={30}/>
                <SiMongodb size={30} />
                </Card.Description>
              </Card.Content>
            </Card>
          </Link>

          <Link to="/project/blake-tharp">
            <Card
            color="red">
              <Card.Content>
                <Image />
                <Card.Header>blaketharp.dev</Card.Header>
                <Card.Meta>React Framework</Card.Meta>
                <Card.Description>My resume website built with React!</Card.Description>
              </Card.Content>
              <Card.Content extra >
                <Card.Description><AiFillHtml5 size={30} /> <DiCss3 size={30} /> <DiJavascript size={30}/><FaReact size={30}/></Card.Description>
              </Card.Content>
            </Card>
          </Link>

          <Link to="/project/tic-tac-toe">
            <Card
            color="blue">
              <Card.Content>
                <Image />
                <Card.Header>Advanced Tic-Tac-Toe</Card.Header>
                <Card.Meta>No Stack</Card.Meta>
                <Card.Description>JavaScript game with advanced rules.</Card.Description>
              </Card.Content>
              <Card.Content extra >
                <Card.Description><AiFillHtml5 size={30} /> <DiCss3 size={30} /> <DiJavascript size={30}/></Card.Description>
              </Card.Content>
            </Card>
          </Link>

      </Card.Group>

    </div>
);


export default ProjectsList;
