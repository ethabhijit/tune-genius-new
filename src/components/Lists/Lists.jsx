import "./Lists.css";
import { Container, Row, Col } from "react-bootstrap";

const Lists = ({ title }) => {
  const arr = [1, 2, 3, 4];

  return (
    <div>
      <h3 className="list__heading">{title}</h3>
      <Container fluid="md" className="d-flex justify-content-center">
        <Row>
          {arr.map((num) => (
            <Col
              key={num + "121212"}
              lg={3}
              md={6}
              sm={12}
              className="d-flex justify-content-center p-3"
            >
              <img src={`./images/song${num}.png`} alt="" />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Lists;
