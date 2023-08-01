import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Upload,
  UploadProps,
  message,
} from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import Dragger from "antd/es/upload/Dragger";
import { useAppDispatch } from "../../../../app/hook";
import { addProduct } from "../../../../actions/product";
import { useNavigate } from "react-router-dom";

type Props = {};

const AddProduct = (props: Props) => {
  const navigate = useNavigate();
  const [images, setImages] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const onFinish = async (values: any) => {
    const product = { ...values, images };
    const result = await dispatch(addProduct(product));
    if (addProduct.fulfilled.match(result)) {
      message.success("Thêm sản phẩm thành công!");
      navigate("/admin/products");
    }
  };

  const propsUploadImage: UploadProps = {
    name: "image",
    multiple: true,
    action:
      "https://api.imgbb.com/1/upload?key=125c7f00022fa6f17871d0e7f5e7a238",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        setImages((prev) => [...prev, info.file.response.data.display_url]);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Card title="Thêm danh mục" style={{ width: "70%", margin: "0 auto" }}>
      <Form
        style={{ width: "100%" }}
        labelCol={{ span: 3 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true, message: "Vui lòng điền tên sản phẩm!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Price"
          name="price"
          rules={[{ required: true, message: "Vui lòng điền giá sản phẩm!" }]}
        >
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Ảnh">
          <Dragger {...propsUploadImage}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
        </Form.Item>
        <Space wrap>
          <Button htmlType="submit">Add Product</Button>
        </Space>
      </Form>
    </Card>
  );
};

export default AddProduct;
