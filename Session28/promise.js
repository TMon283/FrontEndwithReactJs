function getDataFromAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Lấy data từ API1 thành công");
      resolve("API1 data");
    }, 1000);
  });
}

function getDataFromAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Lấy data từ API2 thành công");
      resolve("API2 data");
    }, 1000);
  });
}

function getDataFromAPI3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Lấy data từ API3 thành công");
      resolve("API3 data");
    }, 1000);
  });
}
