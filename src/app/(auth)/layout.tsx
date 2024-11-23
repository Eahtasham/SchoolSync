import Link from "next/link";
import Image from "next/image";
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative bg-none min-h-max w-screen overflow-hidden flex p-3 z-0">
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-10 h-10">
                        <Image
                            src="/logo.png"
                            alt="SchoolSync Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        SchoolSync
                    </span>
                </Link>
            </div>
            {children}
            <span className="absolute bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 flex justify-stretch items-center gap-2">
                <Link href="/termsofuse" className="text-sm shrink text-nowrap">Terms of Use</Link><span className="text-sm">|</span><Link href="/privacypolicy" className="text-sm shrink text-nowrap">Privacy Policy</Link>
            </span>

        </div >
    );
}
