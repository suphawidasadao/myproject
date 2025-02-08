"use client";
// pages/profile.js
import Layout from '../components/layout'; // นำเข้า Layout
import React, { useState } from 'react'; 

const ProfilePage = () => {
    const [birthdate, setBirthdate] = useState('');
    const [phone, setPhone] = useState('+66');
    const [email, setEmail] = useState('');

    const handleBirthdateChange = (e) => {
        setBirthdate(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <Layout>
            <div className="flex-1 bg-white p-6 rounded-lg shadow">
                <span className="text-lg font-bold">จัดการบัญชีโปรไฟล์</span>
                {/* Profile form content... */}
            </div>
        </Layout>
    );
};

export default ProfilePage;
