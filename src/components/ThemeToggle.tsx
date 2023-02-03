import { useEffect, useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ?? "light"
    );

    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button className="p-4">
            {theme == "dark" ? (
                <MdOutlineDarkMode
                    className="w-8 h-8 delay-50 transition duration-300 ease-in hover:scale-125 hover:text-green-400"
                    onClick={() => setTheme("light")}
                />
            ) : (
                <MdOutlineLightMode
                    className="w-8 h-8 delay-50 transition duration-300 ease-in hover:scale-125 hover:text-green-400"
                    onClick={() => setTheme("dark")}
                />
            )}
        </button>
    );
}
