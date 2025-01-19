import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Typography, Row, Col, Card } from "antd";
import { motion } from 'framer-motion';

const menuVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const { Title, Text } = Typography;

const LoginPage = () => {
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
              Giriş Yap
            </Title>
          }
          style={{
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Form
            name="login"
            layout="vertical"
            onFinish={() => {}}
            initialValues={{
              remember: true,
            }}
          >
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
                Giriş Yap
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
            Hesabınız yok mu?{" "}
            <a
              style={{
                color: "#393E46",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => handleNavigation("/Sign")}
            >
              Kayıt Ol
            </a>
          </Text>
        </Card>
      </Col>
    </Row>
    </motion.div>);
};

export default LoginPage;
