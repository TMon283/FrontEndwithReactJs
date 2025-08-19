import React from 'react'

const Line1 = () => {
  return (
    <div className="col-lg-7 grid-margin stretch-card">
      <div className="card">
        {/* START CONTROL */}
        <div className="card-header">
          <div className="row">
            <div className="col-3">
              <button type="button" className="btn btn-primary btn-icon-text">
                Thêm mới sinh viên
              </button>
            </div>
            <div className="col-6">
              <form className="search-form" action="#">
                <i className="icon-search" />
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Here"
                  title="Search here"
                />
                <button className="btn btn-primary btn-icon-text">
                  Tìm kiếm
                </button>
              </form>
            </div>
            <div className="col-3 d-flex align-items-center">
              <select className="form-control">
                <option value="">Sắp xếp</option>
                <option value="">ABC def</option>
                <option value="">ABC def</option>
                <option value="">ABC def</option>
              </select>
            </div>
          </div>
        </div>
        {/* END CONTROL */}

        {/* START LIST STUDENT */}
        <div className="card-body">
          <h3 className="card-title">Danh sách sinh viên</h3>
          <div className="table-responsive pt-3">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Mã sinh viên</th>
                  <th>Tên sinh viên</th>
                  <th>Tuổi</th>
                  <th>Giới tính</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>SV001</td>
                  <td>Nguyễn Văn A</td>
                  <td>20</td>
                  <td>Nam</td>
                  <td>
                    <div className="template-demo">
                      <button className="btn btn-danger btn-icon-text">Xem</button>
                      <button className="btn btn-warning btn-icon-text">Sửa</button>
                      <button className="btn btn-success btn-icon-text">Xóa</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>SV002</td>
                  <td>Nguyễn Văn B</td>
                  <td>21</td>
                  <td>Nữ</td>
                  <td>
                    <div className="template-demo">
                      <button className="btn btn-danger btn-icon-text">Xem</button>
                      <button className="btn btn-warning btn-icon-text">Sửa</button>
                      <button className="btn btn-success btn-icon-text">Xóa</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>SV003</td>
                  <td>Nguyễn Văn C</td>
                  <td>19</td>
                  <td>Nam</td>
                  <td>
                    <div className="template-demo">
                      <button className="btn btn-danger btn-icon-text">Xem</button>
                      <button className="btn btn-warning btn-icon-text">Sửa</button>
                      <button className="btn btn-success btn-icon-text">Xóa</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* END LIST STUDENT */}
      </div>
    </div>
  );
};

export default Line1;