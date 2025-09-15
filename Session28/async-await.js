function fakeAPI(name, shouldFail = false, delay = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(`Lỗi khi gọi ${name}`);
      } else {
        console.log(`Lấy data từ ${name} thành công`);
        resolve(`${name} data`);
      }
    }, delay);
  });
}

async function runSequential() {
  console.log("👉 Chạy tuần tự:");
  try {
    const data1 = await fakeAPI("API1");
    const data2 = await fakeAPI("API2");
    const data3 = await fakeAPI("API3");
    console.log("🎉 Tất cả API đã chạy xong:", [data1, data2, data3]);
  } catch (error) {
    console.error("Có lỗi:", error);
  }
}

runSequential();
