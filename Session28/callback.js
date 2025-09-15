function askForPhoneNumber() {
  console.log("Anh gọi cho Duy xin số...");
  console.log("Duy bảo đợi một tí...");

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tìm thấy rồi");
      resolve("12344");
    }, 3000);
  });
}

async function main() {
  const sdt = await askForPhoneNumber();
  console.log(`Anh gọi cho Nhung theo số ${sdt}`);
}

main();
