import React, { useState } from 'react';
import { userService } from '../services/userService';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: string[] = [];
    if (!username.trim()) newErrors.push('Họ tên không được bỏ trống');
    if (!email.trim()) newErrors.push('Email không được bỏ trống');
    if (!password.trim()) newErrors.push('Mật khẩu không được bỏ trống');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (email && !emailRegex.test(email)) newErrors.push('Email không đúng định dạng');
    if (password && password.length < 8) newErrors.push('Mật khẩu phải có ít nhất 8 ký tự');
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async () => {
    setSuccess(null);
    if (!validate()) return;
    try {
      setLoading(true);
      // Check duplicate email
      const exists = await userService.checkEmailExists(email.trim());
      if (exists) {
        setErrors(['Email đã được đăng ký, vui lòng dùng email khác']);
        return;
      }
      await userService.register({ username: username.trim(), email: email.trim(), password });
      setErrors([]);
      setSuccess('Đăng ký thành công');
      setTimeout(() => navigate('/signin'), 900);
    } catch (e) {
      setSuccess(null);
      setErrors(['Có lỗi xảy ra khi đăng ký. Vui lòng thử lại.']);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Alerts fixed top-left */}
      <div className="fixed top-6 left-6 z-50 space-y-3 w-[320px]">
        {errors.length > 0 && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 shadow-sm">
            <div className="font-semibold mb-2">Error</div>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              {errors.map((err, idx) => (
                <li key={idx}>{err}</li>
              ))}
            </ul>
          </div>
        )}
        {success && (
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-700 shadow-sm">
            <div className="font-semibold mb-1">Đăng ký thành công</div>
            <div className="text-sm">Đang chuyển sang trang đăng nhập...</div>
          </div>
        )}
      </div>
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Trello</h1>
          <h2 className="text-xl text-gray-700">Please sign up</h2>
        </div>

        {/* Sign-up Form */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-4">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Username Input */}
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Sign In Link */}
            <div className="text-sm text-gray-700">
              Already have an account,{' '}
              <a href="/signin" className="text-blue-600 hover:text-blue-700 font-medium">
                click here !
              </a>
            </div>

            {/* Sign Up Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-blue-600 disabled:opacity-60 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {loading ? 'Processing...' : 'Sign up'}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-start mt-8 text-sm text-gray-600">
          © 2025 - Rikkei Education
        </div>
      </div>
    </div>
  );
};

export default SignUp;