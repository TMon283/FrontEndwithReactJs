import React, { useState ,useEffect} from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import axios from "axios";

type Post={
    id:number;
    title:string;
    image:string;
    date:string;
    status:boolean;
}

export default function ListPost() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setIsEdit(false);
    setCurrentId(null);
    setTitle("");
    setImage("");
  };
  const handleShow = () => setShow(true);

  const [posts,setPosts]=useState<Post[]>([]);
  const [title,setTitle]=useState<string>("");
  const [image,setImage]=useState<string>("");
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState<number|null>(null);

  async function getData() {
      const posts  = await axios.get("http://localhost:8080/posts");
      setPosts([...posts.data]);
  }
  useEffect(() => {
    getData();
  }, []);

  const handleBlock = (id: number) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === id ? { ...post, status: !post.status } : post
      )
    );
  };

  const handleTitle=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setTitle(e.target.value);
  }
  const handleImage=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setImage(e.target.value);
  }

  async function addPost(post: any) {
    const res = await axios.post("http://localhost:8080/posts", post);
    return res;
  }

  const handleDelete = async (id: number) => {
    const choice = confirm("Xác nhận xóa.");
    if (choice) {
      await axios.delete(`http://localhost:8080/posts/${id}`);
      setPosts(prev => prev.filter(post => post.id !== id));
    }
  };

  const handleAddPosts = async () => {
    setShow(false)
    const reponse = await addPost({
      title:title,
      image:image,
      date:"17/9",
      status: true,
    });
    const newPosts = reponse.data;
    setPosts([...posts, newPosts]);
    setImage("");
    setTitle("");
  };

  const handleEdit = (id:number) => {
    const post = posts.find(p=>p.id===id);
    if(post){
      setTitle(post.title);
      setImage(post.image);
      setIsEdit(true);
      setCurrentId(id);
      setShow(true);
    }
  }

  const handleUpdate = async () => {
    if(currentId!==null){
      const updated = {id:currentId, title, image, date:"17/9", status:true};
      await axios.put(`http://localhost:8080/posts/${currentId}`, updated);
      setPosts(prev=>prev.map(p=>p.id===currentId? updated:p));
      setShow(false);
      setIsEdit(false);
      setCurrentId(null);
      setTitle("");
      setImage("");
    }
  }
 const [search, setSearch] = useState("")

const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearch(e.target.value);
}

const searchPosts = posts.filter((item) =>
  item.title.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <input onChange={handleSearch} value={search} type="text" placeholder="Nhập từ khóa tìm kiếm"/>
      <select>
        <option value="">Lựa chọn</option>
        <option value="published">Đã xuất bản</option>
        <option value="draft">Chưa xuất bản</option>
      </select>

      <Button variant="primary" onClick={handleShow}>
        Thêm bài viết mới
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? "Cập nhật bài viết" : "Thêm bài viết mới"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Tên bài viết</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={handleTitle}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hình ảnh</Form.Label>
              <Form.Control
                type="text"
                value={image}
                onChange={handleImage}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nội dung bài viết</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          {isEdit ? (
            <Button variant="primary" onClick={handleUpdate}>
              Cập nhật
            </Button>
          ):(
            <Button variant="primary" onClick={handleAddPosts}>
              Lưu bài viết
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Hình ảnh</th>
            <th>Ngày viết</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {searchPosts.map((item,index)=>(
            <tr key={index}>
              <th>{index+1}</th>
              <th>{item.title}</th>
              <th>{item.image}</th>
              <th>{item.date}</th>
              <th>{item.status? <Button>Đã xuất bản</Button>:<Button>Chưa xuất bản</Button>}</th>
              <th className="flex gap-[10px]"> 
                <Button onClick={()=>handleBlock(item.id)} variant="warning">{item.status?"Chặn":"Bỏ chặn"}</Button>
                <Button onClick={()=>handleEdit(item.id)} variant="outline-success">Sửa</Button>
                <Button onClick={()=>handleDelete(item.id)} variant="outline-danger">Xóa</Button>
              </th>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}