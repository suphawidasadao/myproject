import Image from 'next/image';

export default function LoginPage() {
    return (
        <>
            <div className="relative w-full h-screen">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/bg.svg"
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                {/* Login Form */}
                <div className="relative z-10 flex items-center justify-center min-h-screen bg-black bg-opacity-50">
                    <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-sm">
                        {/* Logo */}
                        <div className="flex justify-between items-center mb-4">
                            <Image
                                src="/logo.svg"
                                alt="logo"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </div>

                        {/* Header */}
                        <div className="mb-4">
                            <h2 className="text-md font-bold text-gray-800">ยินดีต้อนรับกลับมา!</h2>
                            <p className="text-gray-600 text-xs">เข้าสู่ระบบสมาชิกติดตามสถานะกับเราได้ง่ายกว่า</p>
                        </div>

                        {/* Email Input */}
                        <form className="space-y-3">
                            <div>
                                <input
                                    type="email"
                                    placeholder="อีเมล"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                                />
                            </div>

                            {/* Continue Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-1 rounded-lg text-sm hover:bg-blue-600"
                            >
                                สมัครสมาชิกใหม่ฟรี!
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="flex items-center my-4">
                            <hr className="flex-1 border-gray-300" />
                            <span className="px-2 text-gray-500 text-xs">หรือ</span>
                            <hr className="flex-1 border-gray-300" />
                        </div>

                        {/* Other Login Options */}
                        <div className="space-y-3">
                            <button
                                type="button"
                                className="w-full border border-gray-300 flex items-center justify-center py-1 rounded-lg text-gray-700 hover:bg-gray-100 text-xs"
                            >
                                <span className="mr-2">
                                    <svg width="16" height="16" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.9375 24.75C22.3851 24.75 22.8143 24.5722 23.1307 24.2557C23.4472 23.9393 23.625 23.5101 23.625 23.0625V19.125C23.625 18.6774 23.4472 18.2482 23.1307 17.9318C22.8143 17.6153 22.3851 17.4375 21.9375 17.4375C20.6213 17.4375 19.3275 17.235 18.09 16.8187C17.7941 16.7254 17.4783 16.7148 17.1769 16.7882C16.8754 16.8615 16.5998 17.0161 16.38 17.235L14.76 18.855C11.9613 17.3277 9.66103 15.0275 8.13375 12.2287L9.7425 10.62C10.2037 10.1812 10.3725 9.52875 10.17 8.89875C9.765 7.6725 9.5625 6.37875 9.5625 5.0625C9.5625 4.61495 9.38471 4.18572 9.06824 3.86926C8.75178 3.55279 8.32255 3.375 7.875 3.375H3.9375C3.48995 3.375 3.06072 3.55279 2.74426 3.86926C2.42779 4.18572 2.25 4.61495 2.25 5.0625C2.25 15.9187 11.0813 24.75 21.9375 24.75ZM3.9375 4.5H7.875C8.02418 4.5 8.16726 4.55926 8.27275 4.66475C8.37824 4.77024 8.4375 4.91332 8.4375 5.0625C8.4375 6.5025 8.6625 7.90875 9.10125 9.2475C9.1575 9.405 9.14625 9.63 8.96625 9.81L6.75 12.015C8.60625 15.6488 11.3288 18.3713 14.9738 20.25L17.1675 18.0338C17.325 17.8763 17.5388 17.8312 17.7413 17.8875C19.0913 18.3375 20.4975 18.5625 21.9375 18.5625C22.0867 18.5625 22.2298 18.6218 22.3352 18.7273C22.4407 18.8327 22.5 18.9758 22.5 19.125V23.0625C22.5 23.2117 22.4407 23.3548 22.3352 23.4602C22.2298 23.5657 22.0867 23.625 21.9375 23.625C11.7 23.625 3.375 15.3 3.375 5.0625C3.375 4.91332 3.43426 4.77024 3.53975 4.66475C3.64524 4.55926 3.78832 4.5 3.9375 4.5Z" fill="#FFCC00" />
                                    </svg>
                                </span> เบอร์โทรศัพท์
                            </button>
                            <button
                                type="button"
                                className="w-full border border-gray-300 flex items-center justify-center py-1 rounded-lg text-gray-700 hover:bg-gray-100 text-xs"
                            >
                                <span className="mr-2">
                                    <svg width="16" height="16" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5011 2.25226C7.28882 2.25226 2.2522 7.28888 2.2522 13.5011C2.2522 19.1149 6.3652 23.7679 11.7438 24.615V16.7535H8.88632V13.5011H11.7438V11.0228C11.7438 8.20126 13.4234 6.64538 15.9918 6.64538C17.2226 6.64538 18.5118 6.86476 18.5118 6.86476V9.63113H17.0898C15.6948 9.63113 15.2583 10.4996 15.2583 11.3895V13.4989H18.3757L17.8773 16.7513H15.2583V24.6128C20.6369 23.7701 24.7499 19.116 24.7499 13.5011C24.7499 7.28888 19.7133 2.25226 13.5011 2.25226Z" fill="#0268D7" />
                                    </svg>

                                </span> เข้าสู่ระบบด้วย Facebook
                            </button>
                            <button
                                type="button"
                                className="w-full border border-gray-300 flex items-center justify-center py-1 rounded-lg text-gray-700 hover:bg-gray-100 text-xs"
                            >
                                <span className="mr-2">
                                    <svg width="16" height="16" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.5312 11.2967H23.625V11.25H13.5V15.75H19.8579C18.9304 18.3696 16.4379 20.25 13.5 20.25C9.77231 20.25 6.75 17.2277 6.75 13.5C6.75 9.77231 9.77231 6.75 13.5 6.75C15.2207 6.75 16.7861 7.39912 17.9781 8.45944L21.1601 5.27737C19.1509 3.40481 16.4633 2.25 13.5 2.25C7.28719 2.25 2.25 7.28719 2.25 13.5C2.25 19.7128 7.28719 24.75 13.5 24.75C19.7128 24.75 24.75 19.7128 24.75 13.5C24.75 12.7457 24.6724 12.0094 24.5312 11.2967Z" fill="#FFC107" />
                                        <path d="M3.54712 8.26369L7.24331 10.9744C8.24343 8.49825 10.6656 6.75 13.5 6.75C15.2207 6.75 16.7861 7.39912 17.9781 8.45944L21.1601 5.27737C19.1509 3.40481 16.4632 2.25 13.5 2.25C9.17887 2.25 5.43149 4.68956 3.54712 8.26369Z" fill="#FF3D00" />
                                        <path d="M13.5001 24.75C16.4059 24.75 19.0463 23.638 21.0426 21.8295L17.5607 18.8831C16.3935 19.7714 14.9668 20.2516 13.5001 20.25C10.5739 20.25 8.08937 18.3842 7.15337 15.7804L3.48474 18.607C5.34662 22.2503 9.12774 24.75 13.5001 24.75Z" fill="#4CAF50" />
                                        <path d="M24.5312 11.2967H23.625V11.25H13.5V15.75H19.8579C19.4142 16.9967 18.615 18.0862 17.559 18.8837L17.5607 18.8826L21.0426 21.8289C20.7962 22.0528 24.75 19.125 24.75 13.5C24.75 12.7457 24.6724 12.0094 24.5312 11.2967Z" fill="#1976D2" />
                                    </svg>
                                </span> เข้าสู่ระบบด้วย Google
                            </button>
                        </div>

                        {/* Signup */}
                        <div className="mt-4 text-center border border-gray-300 rounded-lg py-1">
                            <a href="#" className="text-blue-500 font-bold hover:underline text-sm">
                                สมัครสมาชิกเลย
                            </a>
                        </div>

                        {/* Terms */}
                        <div className="mt-3 text-center text-[10px] text-gray-500">
                            การลงชื่อสมัครใช้บริการ DriveFlex ท่านได้รับทราบและตกลงตาม
                            <a href="#" className="text-blue-500 hover:underline">
                                เงื่อนไขการให้บริการและนโยบายความเป็นส่วนตัว
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
