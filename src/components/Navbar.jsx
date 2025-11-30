import { User } from "lucide-react";

export default function Navbar({ username = "Aman" }) {
  return (
    <div className="w-full bg-gray-900 border-b border-gray-800 p-4 flex items-center justify-between min-h-[69px]">
      <h1 className="text-xl font-semibold text-white">
        Welcome Back 👋
      </h1>
      <div className="flex items-center gap-3">
        <span className="text-gray-200 font-medium">{username}</span>
        <User className="h-6 w-6 text-gray-300" />
      </div>

    </div>
  );
}
