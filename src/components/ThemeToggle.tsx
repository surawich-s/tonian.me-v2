import { useEffect, useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ?? "light"
    );

    const handleClick = () => {
        console.log("click");
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
        <button>
            {theme == "dark" ? (
                <MdOutlineDarkMode
                    className="w-8 h-8"
                    onClick={() => setTheme("light")}
                />
            ) : (
                <MdOutlineLightMode
                    className="w-8 h-8"
                    onClick={() => setTheme("dark")}
                />
            )}
        </button>
    );
}
