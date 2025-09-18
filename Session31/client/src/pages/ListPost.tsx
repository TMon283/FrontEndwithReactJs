  import axios from 'axios';
  import React, { useEffect, useState } from 'react'
  type Post={
    id: number,
    title: string,
    image: string,
    createdAt: string,
    status: boolean,
    content: string
  }
  export default function Main() {
    const [posts, setPosts]=useState<Post[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [newPost, setNewPost]=useState<Post>({id: 0, title: "", image: "", createdAt: "18/09/2025", status: true, content: ""});
    const [updateId, setUpdateId]=useState<number>(-1);
    const [search, setSearch]=useState<string>("");
    const searchPosts=posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));
    const [filter, setFilter] = useState<string>("");
    const filteredSearchPosts=searchPosts.filter((post) => filter=="true" ? post.status==true : filter=="false" ? post.status==false : true);
    async function getData(){
      const res = await axios.get("http://localhost:8080/posts");
      setPosts(res.data);
    }
    useEffect(()=>{
      getData();
    }, []);
    function handleChange(e: (React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)){
      const {value, name} = e.target;
      setNewPost({...newPost, [name]: value});
    }
    async function addPost(){
      if(newPost.title=="" || newPost.image=="" || newPost.content==""){
        alert("Khong duoc de trong thong tin");
        return;
      }
      if(posts.some((post) => post.title == newPost.title && post.id!=updateId)){
        alert("Ten bai dang da ton tai");
        return;
      }
      if(updateId==-1){
        const res = await axios.post("http://localhost:8080/posts", newPost);
        setPosts([...posts, res.data]);
      }else{
        await axios.put(`http://localhost:8080/posts/${updateId}`, newPost);
        setPosts(posts.map((post) => {return post.id==updateId ? newPost : post}));
      }
      setShowModal(false);
      setNewPost({id: 0, title: "", image: "", createdAt: "18/09/2025", status: true, content: ""});
      setUpdateId(-1)
    }
    async function blockPost(id: number){
      if(confirm("Chan/Bo chan bai viet?")){
        await axios.patch(`http://localhost:8080/posts/${id}`, {status: !posts.find((post) => post.id==id)?.status});
        getData();
      }
    }
    async function deletePost(id: number){
      if(confirm("Xoa bai dang nay?")){
        await axios.delete(`http://localhost:8080/posts/${id}`);
        getData();
      }
    }
    return (
      <div className='w-screen flex flex-col justify-center items-center'>
        <h1 className='text-[25px] text-center mb-[10px]'>Quan li bai viet</h1>
        <div className='w-[800px]'>
          <div className='flex justify-between'>
            <div className='flex gap-[10px]'>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} className='h-[34px] border rounded-[5px] pl-[5px] pr-[5px]' type="text" placeholder='Nhap tu khoa tim kiem'/>
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setFilter(e.target.value)} defaultValue={""} name="" className='h-[34px] border rounded-[5px]'>
                    <option value="" disabled hidden>Loc bai viet</option>
                    <option value="true">Da xuat ban</option>
                    <option value="false">Ngung xuat ban</option>
                </select>
            </div>
            <div>
                <button onClick={() => setShowModal(true)} className='bg-blue-500 text-white rounded-[5px] p-[5px]'>Them bai viet</button>
            </div>
          </div>
          <table className='w-[100%] mt-[15px]'>
            <thead className='h-[35px]'>
              <tr>
                <th>STT</th>
                <th>Tieu de</th>
                <th>Hinh anh</th>
                <th>Ngay viet</th>
                <th>Trang thai</th>
                <th>Chuc nang</th>
              </tr>
            </thead>
            <tbody>
              {filteredSearchPosts.map((post, index) =>{
                return <tr key={index}>
                  <td className='text-center'>{post.id}</td>
                  <td className='text-center'>{post.title}</td>
                  <td className='flex justify-center align-center'><img className='rounded-[100%] w-[30px] h-[30px]' src={post.image} alt="img"/></td>
                  <td className='text-center'>{post.createdAt}</td>
                  <td className='text-center'>{post.status ? "Da xuat ban" : "Ngung xuat ban"}</td>
                  <td className='flex justify-around'>
                    <button onClick={()=>blockPost(post.id)} className='rounded-[4px] bg-amber-400 text-white p-[3px] min-w-[66px]'>{post.status ? "Chan" : "Bo chan"}</button>
                    <button onClick={()=>{setShowModal(true); setUpdateId(post.id); setNewPost(post)}} className='rounded-[4px] bg-orange-400 text-white w-[66px]'>Sua</button>
                    <button onClick={()=>deletePost(post.id)} className='rounded-[4px] bg-red-400 text-white w-[66px]'>Xoa</button>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
        <>
          {!showModal ? <></> : (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50">
              <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                <h2 className="text-xl font-bold mb-4">{updateId!=-1 ? "Sửa bài viết" : "Thêm bài viết"}</h2>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Tên bài viết</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    name='title'
                    value={newPost.title}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Hình ảnh</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    name='image'
                    value={newPost.image}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Nội dung</label>
                  <textarea
                    className="w-full border rounded px-3 py-2"
                    rows={4}
                    name='content'
                    onChange={handleChange}
                    value={newPost.content}
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => {setShowModal(false); setNewPost({id: 0, title: "", image: "", createdAt: "18/09/2025", status: true, content: ""})}}
                    className="px-4 py-2 bg-gray-300 rounded-lg"
                  >
                    Hủy
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    onClick={addPost}
                  >
                    Xuat ban
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      </div>
    )
  }