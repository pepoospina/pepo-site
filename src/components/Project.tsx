import {
  Accordion,
  AccordionPanel,
  Box,
  BoxExtendedProps,
  Button,
  Grid,
  Heading,
  Tag,
  Text,
  Image,
  Layer,
} from "grommet";
import { CaretDownFill, CaretUpFill, Close } from "grommet-icons";
import { ReactNode, useEffect, useState } from "react";

export interface LinkDetails {
  href: string;
  logo: string;
  text: string;
}

export interface Subproject {
  name: string;
  type: string;
  summary: ReactNode;
  links: LinkDetails[];
  image?: ReactNode;
}

export interface ProjectProps extends BoxExtendedProps {
  logo?: string;
  name: string;
  role: string;
  codeUrl: string;
  demo: ReactNode;
  links: string[];
  subtitle: string;
  summary: ReactNode;
  technologies: string[];
  subprojects?: Subproject[];
  shade?: boolean;
}

export function Project(props: ProjectProps) {
  const [technologies, setTechnologies] = useState(
    props.technologies.slice(0, 3)
  );
  const [isShowAll, setShowAll] = useState(false as boolean);
  const [isShowDemo, setShowDemo] = useState(false as boolean);

  const showFew = () => {
    setTechnologies(props.technologies.slice(0, 3));
  };

  const showAll = () => {
    setTechnologies(props.technologies);
  };

  useEffect(() => {
    if (!isShowAll) {
      showFew();
    } else {
      showAll();
    }
  }, [isShowAll]);

  return (
    <Box
      direction="column"
      align="center"
      style={{
        margin: "0px 0px",
        padding: "60px 0vw",
        borderRadius: "0px",
        borderTop: "solid 4px #dfdfcbff",
        backgroundColor: props.shade ? "#F4F4ED" : "#ececdf",
        width: "100%",
      }}
    >
      <Box
        direction="column"
        align="center"
        style={{ maxWidth: "800px", width: "100%" }}
      >
        <Box direction="column" align="center" style={{ padding: "0px 24px" }}>
          <Box direction="row" align="center" style={{ width: "100%" }}>
            {props.logo !== undefined ? (
              <Box
                style={{
                  width: "20vw",
                  maxWidth: "120px",
                  maxHeight: "120px",
                  minWidth: "60px",
                }}
              >
                <Image fit="contain" src={props.logo}></Image>
              </Box>
            ) : (
              <></>
            )}

            <Heading
              level="2"
              style={{
                width: "100%",
                textAlign: "center",
                paddingLeft: "25px",
              }}
            >
              {props.name}
            </Heading>
          </Box>
        </Box>
        <Box
          style={{
            borderRadius: "0px",
            padding: "0px 24px",
            margin: "5vw 0vw",
            width: "100%",
          }}
        >
          <Box>
            <Heading level="3" style={{ width: "100%", margin: "0 auto" }}>
              {props.subtitle}
            </Heading>
            <Text size="medium" style={{ margin: "3vw 0px 2vw 0px" }}>
              {props.role}
            </Text>
          </Box>
          <Box direction="row" align="end" style={{ margin: "12px auto" }}>
            <Button
              secondary
              color="brand"
              style={{ width: "100px", fontWeight: "bold" }}
              onClick={() => {
                setShowAll(!isShowAll);
              }}
            >
              <Box
                direction="row"
                align="center"
                justify="center"
                style={{ padding: "0px 0px" }}
              >
                <Text color="brand" size="medium">
                  {isShowAll ? "hide" : "more"}
                </Text>
                <Box style={{ height: "10px" }} direction="row" align="center">
                  {isShowAll ? (
                    <CaretUpFill color="brand"></CaretUpFill>
                  ) : (
                    <CaretDownFill color="brand"></CaretDownFill>
                  )}
                </Box>
              </Box>
            </Button>

            <a href={props.codeUrl} target="_blank" rel="noreferrer">
              <Button
                secondary
                color="brand"
                style={{ width: "100px", fontWeight: "bold" }}
                onClick={() => {
                  setShowAll(!isShowAll);
                }}
              >
                <Text color="brand" size="medium">
                  code
                </Text>
              </Button>
            </a>

            <Button
              secondary
              color="brand"
              style={{ width: "100px", fontWeight: "bold" }}
              onClick={() => {
                setShowDemo(!isShowDemo);
              }}
            >
              <Text color="brand" size="medium">
                demo
              </Text>
            </Button>

            {isShowDemo ? (
              <Layer
                onEsc={() => setShowDemo(false)}
                onClickOutside={() => setShowDemo(false)}
              >
                <Box style={{ padding: "4vw" }} justify="center">
                  <Box direction="row" justify="end">
                    <Button onClick={() => setShowDemo(false)}>
                      <Close></Close>
                    </Button>
                  </Box>
                  <Box style={{ marginTop: "24px", width: "90vw" }}>
                    {props.demo}
                  </Box>
                </Box>
              </Layer>
            ) : (
              <></>
            )}
          </Box>

          {isShowAll ? (
            <Box
              style={{
                backgroundColor: props.shade ? "#ececdf" : "#F4F4ED",
                padding: "20px 5vw",
              }}
            >
              <Box style={{}}>
                <Text size="medium">{props.summary}</Text>
              </Box>

              <Text
                style={{ alignSelf: "start", marginTop: "16px" }}
                size="medium"
              >
                <b>Technologies used:</b>
              </Text>

              <Grid
                style={{ padding: "20px 0px" }}
                columns="medium"
                gap="medium"
              >
                {technologies.map((tech) => {
                  return <Tag size="medium" value={tech}></Tag>;
                })}
              </Grid>
            </Box>
          ) : (
            <></>
          )}
        </Box>
        <Box style={{ padding: "0vw 5vw", width: "100%" }}>
          <Heading level="4" style={{ textAlign: "left" }}>
            Tools built:
          </Heading>

          <Accordion style={{ padding: "0px 0px" }}>
            {props.subprojects &&
              props.subprojects.map((subproject) => {
                return (
                  <AccordionPanel
                    label={
                      <Box direction="column" style={{ padding: "3vw 0" }}>
                        <Heading
                          style={{
                            margin: "0",
                            padding: "0",
                            textAlign: "left",
                          }}
                          level="4"
                        >
                          {subproject.name}
                        </Heading>
                        <Text size="medium">{subproject.type}</Text>
                      </Box>
                    }
                  >
                    <Box style={{ textAlign: "left", paddingBottom: "20px" }}>
                      <Box style={{ padding: "0px 20px" }}>
                        <Text
                          size="medium"
                          color="hsl(60, 25.4901960784314%, 20%)"
                        >
                          {subproject.summary}
                        </Text>
                      </Box>
                      {subproject.image ? (
                        <Box
                          style={{
                            height: "100px",
                            margin: "36px 0px 0px 0px",
                          }}
                        >
                          {subproject.image}
                        </Box>
                      ) : (
                        <></>
                      )}
                    </Box>
                  </AccordionPanel>
                );
              })}
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
}
