'use client'
//from-[#618685] to-[#c4b7a6]
import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()
    useEffect(() =>  setMounted(true), [])
    if (!mounted) return (
        <Image
            src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDUwIDUwIiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB4PSI1IiB5PSI1IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjUiIHJ4PSI1Ij48L3JlY3Q+PC9zdmc+Cg=="
            width={40}
            height={40}
            sizes="40x40"
            alt="Loading Light/Dark Toggle"
            priority={ false }
            title="Loading Light/Dark Toggle"/>
    )
    if (resolvedTheme === 'dark') {
        return <FiSun size={57} color={"orange"} onClick={() => setTheme('light')} />
    }
    if (resolvedTheme === 'light') {
        return <FiMoon size={57} color={"black"} fill={"moccasin"} onClick={() => setTheme('dark')} />
    }
}