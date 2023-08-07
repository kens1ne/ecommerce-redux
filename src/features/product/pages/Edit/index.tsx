import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  Form,
  Input,
  Select,
  Space,
  Upload,
  UploadProps,
  message,
} from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Image } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { useAppDispatch } from "../../../../app/hook";
import { updateProduct } from "../../../../actions/product";
import {
  useGetOneProductQuery,
  useUpdateProductMutation,
} from "../../../../api/product";

const { TextArea } = Input;

const EditProductPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const { id } = useParams(); // lấy id từ url
  const [form] = Form.useForm();
  const Navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isUpload, setIsUpload] = useState<boolean>(false);

  const { data: currentProduct } = useGetOneProductQuery(Number(id));

  const [updateProduct] = useUpdateProductMutation();
  const onFinish = async (data: any) => {
    let product;
    if (isUpload) {
      product = { id, ...data, images: images };
    } else {
      product = { id, ...currentProduct, ...data };
    }
    updateProduct(product).then(() => {
      message.success("Sửa sản phẩm thành công!");
      Navigate("/admin/products");
    });
  };

  useEffect(() => {
    form.setFieldsValue({
      name: currentProduct?.name,
      price: currentProduct?.price,
      description: currentProduct?.description,
    });
  }, [currentProduct]);

  const propsUploadImage: UploadProps = {
    name: "image",
    multiple: true,
    action:
      "https://api.imgbb.com/1/upload?key=125c7f00022fa6f17871d0e7f5e7a238",
    onChange(info) {
      setIsUpload(true);
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
    <div>
      <Card title="Sửa" style={{ width: "70%", margin: "0 auto" }}>
        <Form
          form={form}
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
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Dragger">
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
            {isUpload ? (
              ""
            ) : (
              <Form.Item style={{ display: "flex", marginTop: 30 }}>
                {currentProduct?.images?.map((product: any, index: any) => {
                  return (
                    <Image key={index} width={200} height={200} src={product} />
                  );
                })}
              </Form.Item>
            )}
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
            <Space wrap>
              <Button htmlType="submit">Update Product</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default EditProductPage;
