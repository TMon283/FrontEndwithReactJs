# Session38 - Book Library Manager

Ứng dụng quản lý thư viện sách sử dụng React + Redux Toolkit + TypeScript.

## Tính năng

- ✅ CRUD operations (Create, Read, Update, Delete) cho sách
- ✅ Tìm kiếm sách theo tên hoặc tác giả
- ✅ Lọc sách theo thể loại
- ✅ Sắp xếp sách theo tên hoặc năm xuất bản
- ✅ Validation form đầy đủ
- ✅ Loading states và error handling
- ✅ Responsive design với Material-UI và Tailwind CSS

## Cấu trúc dự án

```
Session38/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── store/         # Redux store và slices
│   │   ├── utils/         # Types và utilities
│   │   └── App.tsx        # Main component
│   └── package.json
├── server/                 # JSON Server backend
│   ├── db.json            # Database file
│   └── package.json
└── README.md
```

## Cài đặt và chạy

### 1. Cài đặt dependencies

```bash
# Cài đặt cho client
cd client
npm install

# Cài đặt cho server
cd ../server
npm install
```

### 2. Chạy ứng dụng

```bash
# Terminal 1: Chạy JSON Server
cd server
npm run server

# Terminal 2: Chạy React app
cd client
npm run dev
```

Ứng dụng sẽ chạy tại:
- Frontend: http://localhost:5173
- Backend API: http://localhost:8080

## Các cải tiến đã thực hiện

1. **Sửa lỗi database**: Đồng bộ lại ID trong db.json
2. **Cải thiện error handling**: Thêm try-catch cho tất cả async operations
3. **Cải thiện validation**: Thêm validation cho năm xuất bản
4. **Cải thiện UI/UX**: 
   - Hiển thị error messages
   - Loading states rõ ràng
   - Responsive design
5. **Code quality**: Cải thiện TypeScript types và error handling

## Công nghệ sử dụng

- **Frontend**: React 19, TypeScript, Redux Toolkit, Material-UI, Tailwind CSS
- **Backend**: JSON Server
- **Build tool**: Vite
- **State management**: Redux Toolkit với RTK Query

## API Endpoints

- `GET /books` - Lấy danh sách sách
- `POST /books` - Thêm sách mới
- `PUT /books/:id` - Cập nhật sách
- `DELETE /books/:id` - Xóa sách
