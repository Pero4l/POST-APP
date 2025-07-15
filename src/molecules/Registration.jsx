import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Nav2 from './Nav2';

const Registration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    team_name: '',
  });

  const [message, setMessage] = useState('');

  const registerUser = (data) => {
    fetch('https://test.blockfuselabs.com/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(res => res.json());
  };

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: registerUser,
    onSuccess: (res) => {
      if (res?.status === 'error') {
        setMessage(res.message || 'Something went wrong.');
        return;
      }
      setMessage('Registration successful!');
      setFormData({
        name: '',
        email: '',
        password: '',
        team_name: '',
      });
      setTimeout(() => navigate('/login'), 2000);
    },
    onError: () => {
      setMessage('Something went wrong. Please try again.');
    }
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <>
    <Nav2/>
    <div className="flex lg:items-center lg:justify-center lg:px-4 lg:py-6 min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6 mt-10">
          Create an Account
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Select Team</label>
            <select
              name="team_name"
              value={formData.team_name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white"
            >
              <option value="" disabled>Select a team</option>
              <option value="404">404</option>
              <option value="Pull Request">Pull Request</option>
              <option value="Elon">Elon</option>
              <option value="Pheonix">Pheonix</option>
              <option value="Titans">Titans</option>
            </select>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-200 hover:text-black transition duration-200"
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>

        {message && (
          <p className={`text-center mt-4 text-sm ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <span className="text-blue-600 hover:underline cursor-pointer" onClick={() => navigate('/login')}>
            Login here
          </span>
        </p>
      </div>
    </div>
    </>
  );
};

export default Registration;