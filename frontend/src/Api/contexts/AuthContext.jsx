import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (formData) => {
        try {
            setLoading(true);
            const response = await fetch('https://backend-travelkuy.vercel.app/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();

            // Ambil token dari struktur data respons
            const token = data.data.token; // Sesuaikan dengan struktur data respons API
            if (token) {
                localStorage.setItem('token', token); // Simpan token ke localStorage
                // Simpan data user (fullname dan email) di state
                setUser({
                    fullname: data.data.full_name,
                    email: data.data.email,
                    phone: data.data.phone,
                });
                setUser(data.data); // Simpan data user di state
            } else {
                throw new Error('Token not found in response');
            }
        } catch (error) {
            console.error('Failed to login:', error);
            Swal.fire({
                title: "Oops!",
                text: "Login failed.",
                icon: "error"
            });
        } finally {
            setLoading(false);
        }
    };

    const register = async (formData) => {
        try {
            setLoading(true);
            const response = await fetch('https://backend-travelkuy.vercel.app/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const data = await response.json();
            Swal.fire({
                title: "Good job!",
                text: "Registration successful!",
                icon: "success",
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/Loginpage');
                }
            });
        } catch (error) {
            console.error('Failed to register:', error);
            Swal.fire({
                title: "Oops!",
                text: "Registration failed.",
                icon: "error"
            });
        } finally {
            setLoading(false);
        }
    };

    const fetchUserData = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }

            const response = await fetch(`https://backend-travelkuy.vercel.app/users/current`, {
                method: 'GET',
                headers: {
                    'Authorization': token, // Kirim token langsung tanpa format "Bearer"
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const data = await response.json();
            console.log('User data:', data); // Debug untuk memeriksa respons API
            setUser(data.data); // Simpan data user ke state
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const logout = () => {
        localStorage.removeItem('token'); // Hapus token dari localStorage
        setUser(null);
        navigate('/Loginpage');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, fetchUserData, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
