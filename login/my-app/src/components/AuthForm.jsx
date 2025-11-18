import React, { useState } from "react";
import { Form, Button, Tabs, Tab } from "react-bootstrap";

export default function AuthForm({ onSubmit }) {
  const [key, setKey] = useState("signup"); // To switch between tabs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Update input values
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, key === "login");
  };

  return (
    <div
      className="p-4 bg-white rounded shadow"
      style={{ width: "350px", borderRadius: "20px" }}
    >
      {/* Tab navigation (Sign Up / Login) */}
      <Tabs
        id="auth-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 justify-content-center"
      >
        <Tab eventKey="signup" title="Sign Up">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
        </Tab>

        <Tab eventKey="login" title="Login">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Tab>
      </Tabs>
    </div>
  );
}
