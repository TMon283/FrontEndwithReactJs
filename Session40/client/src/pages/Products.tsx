import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Form,
  Image,
  Input,
  Modal,
  Pagination,
  Select,
  Table,
  message,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import type { Category, Product } from "../utils/type";
import { v4 as uuidv4 } from "uuid";

// Kiểu trạng thái sản phẩm
type ProductStatus = "active" | "inactive";

// Kiểu dữ liệu sản phẩm hiển thị trong bảng
type ProductRow = {
  id: string;
  code: string;
  name: string;
  category: string;
  price: number;
  image: string;
  status: ProductStatus;
};

export default function Products() {
  const [rows, setRows] = useState<ProductRow[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<ProductStatus | "">("");
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<ProductRow | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [url, setUrl] = useState<string>(""); // link ảnh sau khi upload
  const pageSize = 5;

// get categories
  const getAllCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/categories");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // get product
  const getAllProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/products");
      setRows(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
    getAllProducts();
  }, []);

  
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const image: any = e.target.files?.[0];
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset","uploadImage");
    formData.append("cloud_name", "dsuh0sloa");
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dsuh0sloa/image/upload`,
        formData
      );
      console.log(response.data.url);
      setUrl(response.data.url); 
    } catch (error) {
      console.log(error);
    }
  };

  // add
  const addProduct = async (new_product: ProductRow) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/products",
        new_product
      );
      setRows([...rows, response.data]);
      message.success("Thêm sản phẩm thành công");
    } catch (error) {
      console.log(error);
    }
  };

  // sua
  const updateProduct = async (id: string, updated: ProductRow) => {
    try {
      await axios.put(`http://localhost:8080/products/${id}`, updated);
      setRows((prev) => prev.map((r) => (r.id === id ? updated : r)));
      message.success("Cập nhật sản phẩm thành công");
    } catch (error) {
      console.log(error);
    }
  };

  // xoa
  const onDelete = (id: string) => {
    axios.delete(`http://localhost:8080/products/${id}`).then(() => {
      setRows((prev) => prev.filter((r) => r.id !== id));
      message.success("Xóa sản phẩm thành công");
    });
  };

  const filtered = useMemo(() => {
    return rows
      .filter((r) =>
        search
          ? (r.name + r.code).toLowerCase().includes(search.toLowerCase())
          : true
      )
      .filter((r) => (statusFilter ? r.status === statusFilter : true));
  }, [rows, search, statusFilter]);

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const columns: ColumnsType<ProductRow> = [
    { title: "Mã", dataIndex: "code", key: "code", width: 120 },
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Danh mục", dataIndex: "category", key: "category", width: 160 },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      width: 140,
      render: (v: number) => v.toLocaleString() + " đ",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      width: 120,
      render: (src: string) => (src ? <Image src={src} width={56} /> : "-"),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (s: string) => (s === "active" ? "Hoạt động" : "Ngừng"),
    },
    {
      title: "Thao tác",
      key: "actions",
      width: 160,
      render: (_, record) => (
        <div className="flex gap-2">
          <Button size="small" type="primary" onClick={() => onEdit(record)}>
            Sửa
          </Button>
          <Button size="small" danger onClick={() => onDelete(record.id)}>
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  function onAdd() {
    setEditing(null);
    setUrl(""); // reset url
    setOpen(true);
  }
  function onEdit(row: ProductRow) {
    setEditing(row);
    setUrl(row.image); 
    setOpen(true);
  }

  interface ProductFormValues {
    name: string;
    category: string;
    price: number | string;
    status: ProductStatus;
  }

  function onSubmit(values: ProductFormValues) {
    const categoryName =
      categories.find((c) => c.id === values.category)?.name || "";

    if (editing) {
      const updated: ProductRow = {
        ...editing,
        name: values.name,
        category: categoryName,
        price: Number(values.price) || 0,
        image: url || editing.image,
        status: values.status,
      };
      updateProduct(editing.id, updated);
    } else {
      const next: ProductRow = {
        id: uuidv4(),
        code: "SP" + Math.floor(Math.random() * 9999),
        name: values.name,
        category: categoryName,
        price: Number(values.price) || 0,
        image: url,
        status: values.status,
      };
      console.log(" url :" ,url);
      addProduct(next);
    }

    setOpen(false);
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Ứng dụng Quản lý sản phẩm</div>
        <Button type="primary" onClick={onAdd}>
          Thêm mới
        </Button>
      </div>

      <div className="flex justify-end gap-3">
        <Select
          placeholder="Trạng thái"
          className="min-w-40"
          allowClear
          value={statusFilter || undefined}
          onChange={(v) => setStatusFilter((v as ProductStatus) || "")}
          options={[
            { value: "active", label: "Hoạt động" },
            { value: "inactive", label: "Ngừng hoạt động" },
          ]}
        />
        <Input
          style={{ width: "300px" }}
          placeholder="Tìm kiếm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Bảng sản phẩm */}
      <Table
        columns={columns}
        dataSource={paged}
        pagination={false}
        rowKey="id"
      />

      <div className="flex justify-end">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={filtered.length}
          onChange={setPage}
        />
      </div>

      {/* Modal thêm/sửa */}
      <Modal
        title={editing ? "Sửa sản phẩm" : "Thêm mới sản phẩm"}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        destroyOnClose
      >
        <Form
          layout="vertical"
          onFinish={onSubmit}
          initialValues={editing ?? { status: "active" }}
        >
          <Form.Item
            name="name"
            label="Tên"
            rules={[{ required: true, message: "Nhập tên" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Danh mục"
            rules={[{ required: true, message: "Chọn danh mục" }]}
          >
            <Select
              options={categories.map((item) => ({
                value: item.id,
                label: item.name,
              }))}
              placeholder="Chọn danh mục"
            />
          </Form.Item>
          <Form.Item
            name="price"
            label="Giá"
            rules={[{ required: true, message: "Nhập giá" }]}
          >
            <Input type="number" min={0} />
          </Form.Item>
          <Form.Item name="image" label="Ảnh sản phẩm">
            <Input type="file" onChange={handleChange} />
            {/* Hiển thị ảnh preview */}
            {url && (
              <Image
                src={url}
                width={100}
                style={{ marginTop: 10, border: "1px solid #ddd" }}
              />
            )}
          </Form.Item>
          <Form.Item
            name="status"
            label="Trạng thái"
            rules={[{ required: true }]}
          >
            <Select
              options={[
                { value: "active", label: "Hoạt động" },
                { value: "inactive", label: "Ngừng" },
              ]}
            />
          </Form.Item>
          <Form.Item noStyle>
            <div className="flex justify-end gap-2">
              <Button onClick={() => setOpen(false)}>Hủy</Button>
              <Button type="primary" htmlType="submit">
                Lưu
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}