import React, { useState } from "react";
import { Button, Modal, Input, Upload, message, Typography, Card, DatePicker } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  CloseCircleOutlined,
  PlusCircleOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { motion } from "framer-motion";

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

type Post = {
  title: string;
  text: string;
  eventDate: string;
  images: string[];
  date: string;
};

const PostEventPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [eventTitle, setEventTitle] = useState<string>("");
  const [eventDate, setEventDate] = useState<string>("");
  const [eventDetails, setEventDetails] = useState<string>("");
  const [newImages, setNewImages] = useState<string[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const menuVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEventTitle("");
    setEventDate(""); // Event date reset on close
    setEventDetails("");
    setNewImages([]);
    setImagePreviews([]);
  };

  const addPost = () => {
    if (eventTitle.trim() || eventDetails.trim() || newImages.length > 0) {
      const currentDateTime = moment().format("DD.MM.YYYY HH:mm");
      const newPostData: Post = {
        title: eventTitle,
        text: eventDetails,
        eventDate: eventDate,
        images: [...newImages],
        date: currentDateTime,
      };
      setPosts([newPostData, ...posts]);
      closeModal();
    }
  };

  const handleImageChange = (file: File): boolean => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("Sadece fotoğraf yüklenebilir!");
      return false;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setNewImages((prev) => [...prev, reader.result as string]);
      setImagePreviews((prev) => [...prev, reader.result as string]);
    };
    reader.readAsDataURL(file);
    return false;
  };

  const removePost = (index: number) => {
    Modal.confirm({
      title: "Gönderi silinecek!",
      content: "Bu gönderiyi silmek istediğinize emin misiniz?",
      okText: "Sil", 
      cancelText: "Hayır", 
      onOk: () => {
        setPosts((prev) => prev.filter((_, i) => i !== index));
        message.success("Gönderi silindi!");
      },
    });
  };

  const viewImage = (image: string) => {
    Modal.info({
      content: <img src={image} alt="preview" style={{ maxWidth: "100%" }} />,
      icon: null,
      footer: null, 
      closable: true,
    });
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={menuVariants}>
      <div
        style={{
          width: "50%",
          margin: "30px auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Card
          title={<Title level={3} style={{textAlign:'center'}} >Etkinlikler</Title>}
          extra={
            <Button
            style={{background:'rgb(34, 40, 49)'}}
              type="primary"
              icon={<PlusCircleOutlined />}
              onClick={openModal}
            >
              Etkinlik Oluştur
            </Button>
          }
        >
          <div className="posts" style={{ marginTop: "20px" }}>
            {posts.map((post, index) => (
              <div
                key={index}
                className="post"
                style={{
                  padding: "15px",
                  border: "1px solid #d9d9d9",
                  borderRadius: "12px",
                  backgroundColor: "#fafafa",
                  marginBottom: "15px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  position: "relative",
                }}
              >
                <Button
                  type="text"
                  icon={<CloseCircleOutlined />}
                  style={{
                    color: "#ff4d4f",
                    fontWeight: "bold",
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                  }}
                  onClick={() => removePost(index)}
                />
                {post.title && <Title level={4}>{post.title}</Title>}
                {post.text && (
                  <Paragraph
                    style={{
                      margin: 0,
                      color: "#333",
                      fontSize: "16px",
                      fontWeight: "normal",
                      lineHeight: "1.5",
                    }}
                  >
                    {post.text}
                  </Paragraph>
                )}
                {post.eventDate && (
                  <div style={{ fontSize: "14px", color: "#555" }}>
                    <strong>Etkinlik Tarihi: </strong>
                    {post.eventDate}
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                >
                  {post.images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image}
                      alt={`post-image-${imgIndex}`}
                      style={{
                        maxWidth: post.images.length === 1 ? "100%" : "48%",
                        borderRadius: "12px",
                        cursor: "pointer",
                      }}
                      onClick={() => viewImage(image)}
                    />
                  ))}
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Button
                      type="text"
                      icon={<ArrowUpOutlined style={{color:'#001529'}} />}
                      style={{ color: "#1890ff", fontWeight: "bold" }}
                    />
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <UserOutlined style={{ color: "#808080" }} />
                    <span
                      style={{
                        color: "#808080",
                        fontWeight: "bold",
                        marginLeft: 5,
                      }}
                    >
                      User
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#888",
                      fontWeight: "lighter",
                    }}
                  >
                    {post.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Modal
          className="Post-Page-Modal"
          title={<Title level={4}>Etkinlik</Title>}
          open={isModalOpen}
          onCancel={closeModal}
          footer={[
            <Button key="cancel" onClick={closeModal} 
            className="Post-Page-Cancel-Btn">
              İptal
            </Button>,
            <Button            
              className="Post-Page-Share-Btn"
              key="submit"
              type="primary"
              onClick={addPost}
              disabled={
                !eventTitle.trim() && !eventDetails.trim() && newImages.length === 0
              }
            >
              Paylaş
            </Button>,
          ]}
        >
          <Input
            placeholder="Etkinlik adı"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <TextArea
            rows={4}
            placeholder="Etkinlik detayı"
            value={eventDetails}
            onChange={(e) => setEventDetails(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <DatePicker
            placeholder="Etkinlik Tarihi Giriniz"
            style={{ width: "100%", marginBottom: "10px" }}
            onChange={(date) => setEventDate(date ? date.format("YYYY-MM-DD") : "")}
            value={eventDate ? moment(eventDate) : null}
          />
          <Upload
            accept="image/*"
            multiple
            showUploadList={false}
            beforeUpload={handleImageChange}
          >
            <Button icon={<UploadOutlined />}>Fotoğraf Yükle</Button>
          </Upload>
          {imagePreviews.length > 0 && (
            <div style={{ marginTop: "15px" }}>
              <strong>Yüklenecek Fotoğraflar:</strong>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                {imagePreviews.map((preview, index) => (
                  <div
                    key={index}
                    style={{
                      position: "relative",
                      width: "48%",
                      borderRadius: "12px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <img
                      src={preview}
                      alt={`preview-${index}`}
                      style={{
                        width: "100%",
                        borderRadius: "12px",
                      }}
                    />
                    <Button
                      type="text"
                      icon={<CloseCircleOutlined />}
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        background: "rgba(255, 255, 255, 0.8)",
                        borderRadius: "50%",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                      }}
                      onClick={() => {
                        setImagePreviews((prev) =>
                          prev.filter((_, i) => i !== index)
                        );
                        setNewImages((prev) =>
                          prev.filter((_, i) => i !== index)
                        );
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </motion.div>
  );
};

export default PostEventPage;
