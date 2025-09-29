import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../store/slices/productSlice';

export default function UploadImage() {
  const products = useSelector((state: any) => state.products.product);

  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const [image, setImage] = useState<File | null>(null);
  const [url, setUrl] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const saveImage = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'uploadImage'); // upload preset trong Cloudinary
    formData.append('cloud_name', 'dsuh0sloa'); // cloud name trong Cloudinary

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dsuh0sloa/image/upload",
        formData
      );
      console.log(response.data);
      setUrl(response.data.secure_url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file" onChange={handleChange} />
      <button onClick={saveImage}>Lưu</button>

      <h1>Ảnh sau khi đã lưu</h1>
      {url && <img src={url} alt="Uploaded" width="200" />}

      <h1>Danh sách sản phẩm</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Ảnh</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item: any, index: number) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td><img src={item.image} alt={item.name} width="100" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
