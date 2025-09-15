function getDataFromIPI1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Lấy data API1 thành công");
      resolve();
    }, 1000);
  });
}

function getDataFromIPI2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Lấy data API2 thành công");
      resolve();
    }, 1000);
  });
}

function getDataFromIPI3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Lấy data API3 thành công");
      console.log("Tất cả dữ liệu lấy trên server thành công");
      resolve();
    }, 1000);
  });
}

function runAllTask() {
  getDataFromIPI1()
    .then(() => getDataFromIPI2())
    .then(() => getDataFromIPI3())
    .catch((err) => console.error("Có lỗi:", err));
}

runAllTask();
