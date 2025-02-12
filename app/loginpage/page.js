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
                            <h2 className="text-md font-medium text-gray-800">ยินดีต้อนรับกลับมา!</h2>
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
                                ถัดไป
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
                            <a href="#" className="text-blue-500 font hover:underline text-sm">
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
