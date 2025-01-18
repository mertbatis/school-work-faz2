// src/pages/Signup.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, DatePicker, Typography, Row, Col, Card } from "antd";
import { motion } from 'framer-motion';

const menuVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const { Title, Text } = Typography;

const SignupPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
     <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={menuVariants}
                >
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f4f9",
      }}
    >
      <Col xs={24} sm={18} md={12} lg={8}>
        <Card
          title={
            <Title level={2} style={{ textAlign: "center", color: "#393E46" }}>
              Kayıt Ol
            </Title>
          }
          style={{
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Form
            name="signup"
            layout="vertical"
            onFinish={() => {}}
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item
              label="Kullanıcı Adı"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Lütfen kullanıcı adınızı giriniz!",
                },
              ]}
            >
              <Input
                placeholder="Kullanıcı adınızı giriniz"
                style={{
                  padding: "0.75rem",
                  fontFamily: "'Poppins', sans-serif",
                }}
              />
            </Form.Item>

            <Form.Item
              label="Doğum Tarihi"
              name="birthdate"
              rules={[
                {
                  required: true,
                  message: "Lütfen doğum tarihinizi giriniz!",
                },
              ]}
            >
              <DatePicker
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  fontFamily: "'Poppins', sans-serif",
                }}
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Lütfen geçerli bir email adresi girin!",
                  type: "email",
                },
              ]}
            >
              <Input
                type="email"
                placeholder="Email adresinizi girin"
                style={{
                  padding: "0.75rem",
                  fontFamily: "'Poppins', sans-serif",
                }}
              />
            </Form.Item>

            <Form.Item
              label="Şifre"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Lütfen şifrenizi girin!",
                },
              ]}
            >
              <Input.Password
                placeholder="Şifrenizi girin"
                style={{
                  padding: "0.75rem",
                  fontFamily: "'Poppins', sans-serif",
                }}
              />
            </Form.Item>

            <Form.Item
              label="Şifreyi Onayla"
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Şifrenizi tekrar girin!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Şifreler uyuşmuyor!"));
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="Şifrenizi tekrar girin"
                style={{
                  padding: "0.75rem",
                  fontFamily: "'Poppins', sans-serif",
                }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{
                  backgroundColor: "#393E46",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  fontFamily: "'Poppins', sans-serif",
                  transition: "background-color 0.3s ease",
                }}
              >
                Kayıt Ol
              </Button>
            </Form.Item>
          </Form>

          <Text
            style={{
              textAlign: "center",
              fontFamily: "'Poppins', sans-serif",
              color: "#393E46",
            }}
          >
            Zaten hesabınız var mı?{" "}
            <a
              style={{
                color: "#393E46",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => handleNavigation("/login")}
            >
              Giriş Yap
            </a>
          </Text>
        </Card>
      </Col>
    </Row>
    </motion.div>
  );
};

export default SignupPage;
