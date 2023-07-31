import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  message,
} from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

type Props = {};

const AddProduct = (props: Props) => {
  const onFinish = (values: any) => {
    console.log(123);
  };
  const normFile = (e: any) => {
    e.file.status = "done";
    return e?.fileList;
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
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Dragger">
          <Form.Item
            name="dragger"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger
              name="image"
              action="https://api.imgbb.com/1/upload?key=125c7f00022fa6f17871d0e7f5e7a238"
              multiple={true}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add New Product
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AddProduct;
