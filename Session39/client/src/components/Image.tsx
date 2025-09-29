import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addImage, getAllImage, updateImage } from '../store/slices/imageSlice';

export default function Image() {
  const [comment, setComment] = useState<string>("");
  const [preview, setPreview] = useState<string>("");  
  const [image, setImage] = useState<File | null>(null);
  const [editId, setEditId] = useState<number | null>(null); 

  const images = useSelector((state: any) => state.images.images);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getAllImage());
  }, [dispatch]);

  const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file)); 
    }
  };

  const handleSave = async () => {
    if (editId) {
      let imageUrl = preview; 

      if (image) {
    
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'uploadImage');
        formData.append('cloud_name', 'dsuh0sloa');

        try {
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dsuh0sloa/image/upload",
            formData
          );
          imageUrl = response.data.secure_url;
        } catch (error) {
          console.log(error);
          return;
        }
      }

      const updatedImage = {
        id: editId,
        link: imageUrl,
        comment
      };
      dispatch(updateImage(updatedImage));
    } else {
      if (!image) return;
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'uploadImage');
      formData.append('cloud_name', 'dsuh0sloa');

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dsuh0sloa/image/upload",
          formData
        );
        const imageUrl = response.data.secure_url;

        const newImage = {
          link: imageUrl,
          comment
        };
        dispatch(addImage(newImage));
      } catch (error) {
        console.log(error);
      }
    }

    setComment("");
    setPreview("");
    setImage(null);
    setEditId(null);
  };

  const handleEdit = (item: any) => {
    setEditId(item.id);
    setComment(item.comment);
    setPreview(item.link);
    setImage(null); 
  };

  return (
    <div>
      <h3>{editId ? "Sửa ảnh" : "Thêm ảnh"}</h3>
      <input type="file" onChange={handleChange} /> <br />

      {preview && (
        <div>
          <img src={preview} alt="Preview" width="200" />
        </div>
      )}

      <textarea
        value={comment}
        onChange={handleComment}
        placeholder="Nhập mô tả ảnh"
        rows={5}
        cols={40}
      />
      <br />

      <button onClick={handleSave}>{editId ? "Cập nhật" : "Lưu"}</button>

      <div>
        <h1>Danh sách ảnh</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Nội dung</th>
              <th>Ảnh</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {images.map((item: any, index: number) => (
              <tr key={item.id || index}>
                <td>{index + 1}</td>
                <td>{item.comment}</td>
                <td><img src={item.link} alt="" width="100" /></td>
                <td>
                  <button onClick={() => handleEdit(item)}>Sửa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
