import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/authActions";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      email,
      password,
    });

    dispatch(login(data, navigate));
  };
  return (
    <Container className="p-4">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>

        <Row>
          <Col>
            <h4 className="text-center">Or</h4>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <GoogleLogin buttonText="Login with Google 🚀" />
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Login;
