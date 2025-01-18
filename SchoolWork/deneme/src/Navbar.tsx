import { Layout, Input, Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "./assets/uniformlogo.png";

const { Header } = Layout;
const { Search } = Input;

function Navbar() {
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      {/* Header alanı için bir üst boşluk bırakmak */}
      <div style={{ height: "120px" }}></div>

      <Layout>
        <Header
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#222831",
            padding: "0 20px",
            height: "120px",
            position: "fixed", // Header'ı sabitle
            top: 0, // Sayfanın en üstüne sabitle
            zIndex: 5, // Header'ın diğer elementlerin önünde görünmesi için
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "220px",
                height: "220px",
                objectFit: "contain",
                cursor: "pointer",
              }}
              onClick={() => handleNavigation("/")}
            />
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "bold",
                fontSize: "40px",
                color: "#393E46",
                cursor: "pointer",
              }}
              onClick={() => handleNavigation("/")}
            >
              üni<span style={{ color: "#EEEEEE" }}>form</span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >           
            <Search
              placeholder="Bir şey ara..."
              enterButton="Ara"
              style={{
                maxWidth: "500px",
                height: "40px",
                fontSize: "16px",
                padding: "0 20px",
              }}
              onSearch={(value) => console.log("Arama:", value)}
            />
          </div>
          <div>
            <Space size="large">
              <Button
                type="default"
                style={{
                  backgroundColor: "#393E46",
                  color: "#fff",
                  border: "none",
                  fontSize: "16px",
                  padding: "10px 20px",
                }}
                onClick={() => handleNavigation("/login")}
              >
                Giriş Yap
              </Button>
              <Button
                type="default"
                style={{
                  backgroundColor: "#393E46",
                  color: "#fff",
                  border: "none",
                  fontSize: "16px",
                  padding: "10px 20px",
                  marginRight: "15px",
                }}
                onClick={() => handleNavigation("/Sign")}
              >
                Kayıt Ol
              </Button>
            </Space>
          </div>
        </Header>
      </Layout>
    </>
  );
}

export default Navbar;
