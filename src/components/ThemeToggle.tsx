// // import React, { useState, useEffect } from "react";
// // import { Moon, Sun } from "lucide-react";

// // export default function ThemeToggle() {
// //   const [isDark, setIsDark] = useState<boolean>(false);
// //   const [mounted, setMounted] = useState<boolean>(false);

// //   useEffect(() => {
// //     setMounted(true);
// //     // Check if dark mode is active
// //     const isDarkMode = document.documentElement.classList.contains("dark");
// //     setIsDark(isDarkMode);
// //   }, []);

// //   const toggleTheme = () => {
// //     const html = document.documentElement;
// //     const newIsDark = !isDark;

// //     if (newIsDark) {
// //       html.classList.add("dark");
// //       localStorage.setItem("theme", "dark");
// //     } else {
// //       html.classList.remove("dark");
// //       localStorage.setItem("theme", "light");
// //     }

// //     setIsDark(newIsDark);
// //   };

// //   // Avoid hydration mismatch
// //   if (!mounted) {
// //     return (
// //       <button
// //         className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300"
// //         aria-label="Toggle dark mode"
// //         type="button"
// //         disabled
// //       >
// //         <div className="h-4 w-4" />
// //       </button>
// //     );
// //   }

// //   return (
// //     <button
// //       onClick={toggleTheme}
// //       className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm transition-all hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300 dark:hover:bg-gray-900"
// //       aria-label="Toggle dark mode"
// //       type="button"
// //     >
// //       {isDark ? (
// //         <Sun className="h-4 w-4" />
// //       ) : (
// //         <Moon className="h-4 w-4" />
// //       )}
// //     </button>
// //   );
// // }


// import React, { useState, useEffect } from "react";
// import { Moon, Sun } from "lucide-react";

// export default function ThemeToggle() {
//   const [isDark, setIsDark] = useState<boolean>(false);
//   const [mounted, setMounted] = useState<boolean>(false);

//   // Detect & apply saved or system theme
//   useEffect(() => {
//     setMounted(true);

//     const userTheme = localStorage.getItem("theme");
//     const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

//     // Apply theme based on user or system preference
//     if (userTheme === "dark" || (!userTheme && systemPrefersDark)) {
//       document.documentElement.classList.add("dark");
//       setIsDark(true);
//     } else {
//       document.documentElement.classList.remove("dark");
//       setIsDark(false);
//     }

//     // Watch for system theme changes in real-time
//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//     const handleChange = (e: MediaQueryListEvent) => {
//       if (!localStorage.getItem("theme")) {
//         // Only sync if user hasn’t set a manual preference
//         setIsDark(e.matches);
//         document.documentElement.classList.toggle("dark", e.matches);
//       }
//     };

//     mediaQuery.addEventListener("change", handleChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleChange);
//     };
//   }, []);

//   // Toggle manually
//   const toggleTheme = () => {
//     const html = document.documentElement;
//     const newIsDark = !isDark;

//     if (newIsDark) {
//       html.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       html.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }

//     setIsDark(newIsDark);
//   };

//   // Prevent hydration mismatch (Next.js safe)
//   if (!mounted) {
//     return (
//       <button
//         className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300"
//         aria-label="Toggle dark mode"
//         type="button"
//         disabled
//       >
//         <div className="h-4 w-4" />
//       </button>
//     );
//   }

//   return (
//     <button
//       onClick={toggleTheme}
//       className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm transition-all hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300 dark:hover:bg-gray-900"
//       aria-label="Toggle dark mode"
//       type="button"
//     >
//       {isDark ? (
//         <Sun className="h-4 w-4" />
//       ) : (
//         <Moon className="h-4 w-4" />
//       )}
//     </button>
//   );
// }


import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const html = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    html.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newIsDark = !isDark;

    html.classList.toggle("dark", newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
    setIsDark(newIsDark);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300 dark:hover:bg-gray-800"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
