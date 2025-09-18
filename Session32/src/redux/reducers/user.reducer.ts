const initialState = [
    {
      id: 1,
      userName: "Nguyễn Văn A",
      gender: "Nam",
      dateOfBirth: "20/11/2023",
      address: "Thanh Xuân, Hà Nội",
    },
    {
      id: 2,
      userName: "Nguyễn Thị B",
      gender: "Nữ",
      dateOfBirth: "20/11/2023",
      address: "Cầu Giấy, Hà Nội",
    },
  ];
  
  type ActionTypes = {
    type: string;
    payload?: unknown;
  };
  
  const userReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default userReducer;