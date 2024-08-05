import {
  Container,
  H2TitleContainer,
  InnerContainer,
  H2,
  Card,
  Flex,
  H3ProjectsExtend,
  FlexProjectsExtend,
} from "../styles/styled-components/all-styled-components";

import { Grid } from "@mui/material";
import CustomTransition from "./Transitions/CustomTransition";

// icon imports
import ReactIcon from "../assets/black-icons/blk-react-native-100.png";
import NodeJSIcon from "../assets/black-icons/blk-nodejs-100.png";
import CssIcon from "../assets/black-icons/blk-css3-100.png";
import FirebaseIcon from "../assets/black-icons/blk-firebase-100.png";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import TailwindIcon from "../assets/black-icons/blk-tailwind-css-100.png";
import VueIcon from "../assets/black-icons/blk-vue-100.png";
import ElectronIcon from "../assets/black-icons/blk-electron-100.png";

// img imports
import HazzardCountyProject from "../assets/hazzard-county-project/hazzard-project-combined.jpg";
import ResourceCompassProject from "../assets/resource-compass-project/resource-compass-combined.jpg";
import PointTrackerProject from "../assets/score-tracker-project/pointtracker-project-combined.jpg";
import TimeTrackerProject from "../assets/time-tracker-project/time-tracker-project-combined.jpg";

export default function Projects() {
  return (
    <>
      <Container>
        <InnerContainer>
          <CustomTransition type="fade">
            <H2TitleContainer>
              <H2 id="projects">Projects</H2>
              <aside>*Click on a project's image to view a demo*</aside>
            </H2TitleContainer>
          </CustomTransition>

          <Grid container rowSpacing={4}>
            <Grid item xs={12} sx={{ marginTop: "4rem" }}>
              <Card>
                <FlexProjectsExtend>
                  <div className="left-side">
                    <a>
                      <img
                        src={TimeTrackerProject}
                        alt="Electrong JS time tracker application overview"
                      />
                    </a>
                  </div>
                  <div className="mini-div"></div>
                  <div className="right-side">
                    <H3ProjectsExtend margin="1.5rem 0 1rem 0" fontWeight="500">
                      Daily Time Tracker Electron App
                    </H3ProjectsExtend>
                    <Flex flexDirection="column" justifyContent="space-between">
                      <div className="right-p-container">
                        <p>
                          I built this as a solution to make tracking my tasks
                          at work throughout the day simple and efficient.
                        </p>
                        <p>
                          The tech used involves Vite, Vue 3 (Composition API),
                          Firestore, Tailwind CSS, and Daisy UI Tailwind
                          Component Library.
                        </p>
                        <p>
                          This electron app requires the user to sign in using a
                          google account using Firebase Auth. The user can then
                          create time groups and start one task at a time
                          associated to a created time group. A summary for each
                          group is computed at the bottom of the screen where
                          all the task descriptions are put into bullet form and
                          can be copied by the click of a button. I use this
                          every day at work. I also have features on the to-do
                          list for it like adding a button to sync the times
                          with the software we use at work.
                        </p>
                      </div>
                      <div className="right-icon-container">
                        <Flex
                          justifyContent="start"
                          alignItems="end"
                          margin="0 0 0 1.2rem"
                        >
                          <img
                            className="icon vue-icon"
                            src={VueIcon}
                            alt="VueJS icon"
                          />
                          <img
                            className="icon tailwind-icon"
                            src={TailwindIcon}
                            alt="Tailwind CSS icon"
                          />
                          <img
                            className="icon electron-icon"
                            src={ElectronIcon}
                            alt="Electron JS icon"
                          />
                          <img
                            className="icon firebase-icon"
                            src={FirebaseIcon}
                            alt="Google Firebase icon"
                          />
                        </Flex>
                      </div>
                    </Flex>
                  </div>
                </FlexProjectsExtend>
              </Card>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "4rem" }}>
              <CustomTransition type="slide" direction="right">
                <Card>
                  <FlexProjectsExtend>
                    <div className="left-side">
                      <a href="https://pointtracker.netlify.app/">
                        <img
                          src={PointTrackerProject}
                          alt="point tracker app website overview"
                        />
                      </a>
                    </div>
                    <div className="mini-div"></div>
                    <div className="right-side">
                      <H3ProjectsExtend
                        margin="1.5rem 0 1rem 0"
                        fontWeight="500"
                      >
                        <a href="https://pointtracker.netlify.app/">
                          Nerts Score Tracker Web App{" "}
                          <ArrowCircleRightIcon fontSize="medium" />
                        </a>
                      </H3ProjectsExtend>
                      <Flex
                        flexDirection="column"
                        justifyContent="space-between"
                      >
                        <div className="right-p-container">
                          <p>
                            This was a personal project built for my parents who
                            are avid Nerts players.
                          </p>
                          <p>
                            The tech used involves Vite, React JS, Firestore,
                            and Material UI.
                          </p>
                          <p>
                            This web app involves user authentication, a stats
                            page to view personal performance stats, an account
                            management page to add or request friends and set
                            default settings for matches, a page to continue in
                            progress matches or start a new match. To start a
                            new match one user must have all other participants
                            added as a friend on the app, the user can then link
                            the other player's accounts to the appropriate
                            teams. Matches can consist of 1 vs 1 or 2 vs 2 and
                            the score goes to 121. The score is only kept on one
                            persons device but all players linked will receive
                            the stats from the match once it is finished.
                          </p>
                        </div>
                        <div className="right-icon-container">
                          <Flex
                            justifyContent="start"
                            alignItems="end"
                            margin="0 0 0 1.2rem"
                          >
                            <img
                              className="icon"
                              src={ReactIcon}
                              alt="ReactJS icon"
                            />
                            <img
                              className="icon node-icon"
                              src={NodeJSIcon}
                              alt="NodeJS icon"
                            />
                            <img
                              className="icon"
                              src={CssIcon}
                              alt="CSS3 icon"
                            />
                            <img
                              className="icon firebase-icon"
                              src={FirebaseIcon}
                              alt="Google Firebase icon"
                            />
                          </Flex>
                        </div>
                      </Flex>
                    </div>
                  </FlexProjectsExtend>
                </Card>
              </CustomTransition>
            </Grid>

            <Grid item xs={12}>
              <CustomTransition type="slide" direction="right">
                <Card>
                  <FlexProjectsExtend>
                    <div className="left-side">
                      <a href="https://hazzardcountybarandgrill.ca">
                        <img
                          src={HazzardCountyProject}
                          alt="hazzardcountybarandgrill.ca website overview"
                        />
                      </a>
                    </div>
                    <div className="mini-div"></div>
                    <div className="right-side">
                      <H3ProjectsExtend
                        margin="1.5rem 0 1rem 0"
                        fontWeight="500"
                      >
                        <a href="https://hazzardcountybarandgrill.ca">
                          Responsive Restaurant Web App{" "}
                          <ArrowCircleRightIcon fontSize="medium" />
                        </a>
                      </H3ProjectsExtend>
                      <div className="right-p-container">
                        <p>
                          This was built for a bar and grill in Sylvan Lake, AB.
                        </p>
                        <p>
                          The tech used involves Vite, React JS, Firestore, CSS,
                          and a couple node packages for minor animation and the
                          contact page email form.
                        </p>
                        <p>
                          The site features an admin component that allows an
                          admin to login and perform CRUD functionalities to
                          manage the upcoming music posts on the “Live Music”
                          page.
                        </p>
                      </div>
                      <div className="right-icon-container">
                        <Flex justifyContent="start" margin="0 0 0 1.2rem">
                          <img
                            className="icon"
                            src={ReactIcon}
                            alt="ReactJS icon"
                          />
                          <img
                            className="icon node-icon"
                            src={NodeJSIcon}
                            alt="NodeJS icon"
                          />
                          <img className="icon" src={CssIcon} alt="CSS3 icon" />
                          <img
                            className="icon firebase-icon"
                            src={FirebaseIcon}
                            alt="Google Firebase icon"
                          />
                        </Flex>
                      </div>
                    </div>
                  </FlexProjectsExtend>
                </Card>
              </CustomTransition>
            </Grid>

            <Grid item xs={12}>
              <CustomTransition type="slide" direction="right">
                <Card>
                  <FlexProjectsExtend>
                    <div className="left-side">
                      <a>
                        <img
                          src={ResourceCompassProject}
                          alt="Resource compass web-app overview"
                        />
                      </a>
                    </div>
                    <div className="mini-div"></div>
                    <div className="right-side">
                      <H3ProjectsExtend
                        margin="1.5rem 0 1rem 0"
                        fontWeight="500"
                      >
                        Resource Compass Web App
                      </H3ProjectsExtend>
                      <div className="right-p-container">
                        <p>
                          This was built by my capstone team for a non-profit
                          established in Edmonton, AB.
                        </p>
                        <p>
                          The tech used involves Parcel, React JS, Firestore,
                          CSS, and node packages for loading animations and a
                          multi-select for forms.
                        </p>
                        <p>
                          The purpose of this site was to house Alberta
                          resources for people facing physical and mental
                          disabilities and allow users to filter through the
                          database based on their specific criteria. This site
                          enabled people to suggest Alberta resources in which a
                          site admin or volunteer could then perform CRUD
                          operations on the resources and adjust if they would
                          be available for the public to view using the
                          application. *NDA prohibits app and code to be viewed
                        </p>
                      </div>
                      <div className="right-icon-container">
                        <Flex justifyContent="start" margin="0 0 0 1.2rem">
                          <img
                            className="icon"
                            src={ReactIcon}
                            alt="ReactJS icon"
                          />
                          <img
                            className="icon node-icon"
                            src={NodeJSIcon}
                            alt="NodeJS icon"
                          />
                          <img className="icon" src={CssIcon} alt="CSS3 icon" />
                          <img
                            className="icon firebase-icon"
                            src={FirebaseIcon}
                            alt="Google Firebase icon"
                          />
                        </Flex>
                      </div>
                    </div>
                  </FlexProjectsExtend>
                </Card>
              </CustomTransition>
            </Grid>
          </Grid>
        </InnerContainer>
      </Container>
    </>
  );
}
