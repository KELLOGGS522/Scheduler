import { Container, Row, Col, Stack, Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import {Blocs as blocJson} from "./components/block";
import { DndContext } from "@dnd-kit/core";
import { CourseComponent } from "./components/CourseComponent";
import { SemesterComponent } from "./components/SemesterComponent";
import { useEffect, useState } from "react";

type blocType = {
  course_id_list: string[];
  id: string;
  max_credits: number;
  min_credits: number;
  title: string;
  type: string;
  courseList: typeof CourseComponent[];
}

export default function Home() {  
  const [blocs, setBlocs] = useState<blocType[]>([]);
  const [semesters, setSemesters] = useState([
    <SemesterComponent
      key={"sdsds"}
      season="Automne"
      year="2023"
    />,
    <SemesterComponent
      key={"dsdsdds"}
      season="Hiver"
      year="2024"
    />
  ]);

 
  useEffect(() => {
    var arr: blocType[] = [];
    Object.keys(blocJson).forEach((key) => {
      // @ts-ignore
      arr.push({...blocJson[key as keyof typeof blocJson], courseList: blocJson[key as keyof typeof blocJson].course_id_list.map(course => <CourseComponent key={course} title={course} index={0} parent={key} parentId={0} />)});
    });
    setBlocs(arr);
  }, []);

  return (
    <DndContext
      onDragEnd={handleDragEnd}
    >
      <Container>
        <Row>
          <Col sm={4}>
            <Stack gap={2}>
              {blocs.map((bloc: blocType) => 
                <Accordion defaultActiveKey="0" key={bloc.title}>
                  <Accordion.Item eventKey="0">
                    <AccordionHeader>{bloc.title} ({bloc.max_credits} crédits)</AccordionHeader>
                    <AccordionBody>
                      <Row>
                        <Col>
                          <Stack gap={2} direction="vertical">
                            {bloc.course_id_list.slice(bloc.course_id_list.length/2).map((course: string) => 
                                <CourseComponent
                                  key={course}
                                  title={course}
                                  parent={bloc.id}
                                  parentId={0}
                                  index={0}
                                />
                            )}
                          </Stack>
                        </Col>
                        <Col>
                          <Stack gap={2} direction="vertical">
                            {bloc.course_id_list.slice(0, bloc.course_id_list.length/2).map((course: string) => 
                                <div key={course} >{course}</div>
                            )}
                          </Stack>
                        </Col>
                      </Row>
                    </AccordionBody>
                  </Accordion.Item>
                </Accordion>
              )}
            </Stack>
          </Col>
          <Col sm={8} key="SemestersList">
            <Stack gap={3} direction="vertical">
              {semesters}
            </Stack>
          </Col>
        </Row>
      </Container>
    </DndContext>
    
  );

  function handleDragEnd(event: any) {
    if (event.over && semesters.filter(sem => sem.props.season+" "+sem.props.year === event.over.id).length != 0) {
      console.log("was dropped in test", event);
      const newCourses: blocType[] = blocs.map(bloc => bloc.id !== event.active.data.current.parent ? bloc : {...bloc, course_id_list: bloc.course_id_list.filter(course => course !== event.active.id)})
      setBlocs(newCourses);
      const newSemesters = semesters.map(sem => sem.props.id !== event.over.id ? sem : sem.props.courses.push(
        <CourseComponent
          key={event.active.data.id}
          title={event.active.data.id}
          parent={event.active.data.current.parent}
          parentId={0}
          index={0}
        />
        ))
      setSemesters(newSemesters);
      console.log(semesters);
    }
  }
}

