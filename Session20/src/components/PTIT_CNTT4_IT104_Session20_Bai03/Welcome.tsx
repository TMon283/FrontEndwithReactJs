import React, { useEffect } from 'react';

const Welcome = () => {
  useEffect(() => {
    console.log('Component đã được render lần đầu');
  }, []);

  return (
    <div>
      Chào mừng bạn đến với ứng dụng của chúng tôi!
    </div>
  );
};

export default Welcome;
