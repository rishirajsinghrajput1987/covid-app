import react, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allrecords, setRecords] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    alert(`Email : ${email} and Password: ${password}`);
    const newEntry = { email, password };

    console.log(newEntry);
    setRecords([...allrecords, newEntry]);

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };

  return (
    <Container>
      <h2 className="py-4">Login Form</h2>
      <Form onSubmit={submitForm}>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {allrecords.map((curEle) => {
        return (
          <div className="showResult">
            <span>Email: {curEle.email}</span>
            <span>Password: {curEle.password}</span>
          </div>
        );
      })}
    </Container>
  );
};

export default Login;
