import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1400px",
      },
    },
    // colors: {
    // 	chart: {
    // 		'1': 'hsl(var(--chart-1))',
    // 		'2': 'hsl(var(--chart-2))',
    // 		'3': 'hsl(var(--chart-3))',
    // 		'4': 'hsl(var(--chart-4))',
    // 		'5': 'hsl(var(--chart-5))'
    // 	},
    // 	gray: {
    // 		'100': 'hsl(var(--ds-gray-100-value))',
    // 		'200': 'hsl(var(--ds-gray-200-value))',
    // 		'300': 'hsl(var(--ds-gray-300-value))',
    // 		'400': 'hsl(var(--ds-gray-400-value))',
    // 		'500': 'hsl(var(--ds-gray-500-value))',
    // 		'600': 'hsl(var(--ds-gray-600-value))',
    // 		'700': 'hsl(var(--ds-gray-700-value))',
    // 		'800': 'hsl(var(--ds-gray-800-value))',
    // 		'900': 'hsl(var(--ds-gray-900-value))',
    // 		'1000': 'hsl(var(--ds-gray-1000-value))'
    // 	},
    // 	blue: {
    // 		'100': 'hsl(var(--ds-blue-100-value))',
    // 		'200': 'hsl(var(--ds-blue-200-value))',
    // 		'300': 'hsl(var(--ds-blue-300-value))',
    // 		'400': 'hsl(var(--ds-blue-400-value))',
    // 		'500': 'hsl(var(--ds-blue-500-value))',
    // 		'600': 'hsl(var(--ds-blue-600-value))',
    // 		'700': 'hsl(var(--ds-blue-700-value))',
    // 		'800': 'hsl(var(--ds-blue-800-value))',
    // 		'900': 'hsl(var(--ds-blue-900-value))',
    // 		'1000': 'hsl(var(--ds-blue-1000-value))'
    // 	},
    // 	red: {
    // 		'100': 'hsl(var(--ds-red-100-value))',
    // 		'200': 'hsl(var(--ds-red-200-value))',
    // 		'300': 'hsl(var(--ds-red-300-value))',
    // 		'400': 'hsl(var(--ds-red-400-value))',
    // 		'500': 'hsl(var(--ds-red-500-value))',
    // 		'600': 'hsl(var(--ds-red-600-value))',
    // 		'700': 'hsl(var(--ds-red-700-value))',
    // 		'800': 'hsl(var(--ds-red-800-value))',
    // 		'900': 'hsl(var(--ds-red-900-value))',
    // 		'1000': 'hsl(var(--ds-red-1000-value))'
    // 	},
    // 	amber: {
    // 		'100': 'hsl(var(--ds-amber-100-value))',
    // 		'200': 'hsl(var(--ds-amber-200-value))',
    // 		'300': 'hsl(var(--ds-amber-300-value))',
    // 		'400': 'hsl(var(--ds-amber-400-value))',
    // 		'500': 'hsl(var(--ds-amber-500-value))',
    // 		'600': 'hsl(var(--ds-amber-600-value))',
    // 		'700': 'hsl(var(--ds-amber-700-value))',
    // 		'800': 'hsl(var(--ds-amber-800-value))',
    // 		'900': 'hsl(var(--ds-amber-900-value))',
    // 		'1000': 'hsl(var(--ds-amber-1000-value))'
    // 	},
    // 	green: {
    // 		'100': 'hsl(var(--ds-green-100-value))',
    // 		'200': 'hsl(var(--ds-green-200-value))',
    // 		'300': 'hsl(var(--ds-green-300-value))',
    // 		'400': 'hsl(var(--ds-green-400-value))',
    // 		'500': 'hsl(var(--ds-green-500-value))',
    // 		'600': 'hsl(var(--ds-green-600-value))',
    // 		'700': 'hsl(var(--ds-green-700-value))',
    // 		'800': 'hsl(var(--ds-green-800-value))',
    // 		'900': 'hsl(var(--ds-green-900-value))',
    // 		'1000': 'hsl(var(--ds-green-1000-value))'
    // 	},
    // 	teal: {
    // 		'100': 'hsl(var(--ds-teal-100-value))',
    // 		'200': 'hsl(var(--ds-teal-200-value))',
    // 		'300': 'hsl(var(--ds-teal-300-value))',
    // 		'400': 'hsl(var(--ds-teal-400-value))',
    // 		'500': 'hsl(var(--ds-teal-500-value))',
    // 		'600': 'hsl(var(--ds-teal-600-value))',
    // 		'700': 'hsl(var(--ds-teal-700-value))',
    // 		'800': 'hsl(var(--ds-teal-800-value))',
    // 		'900': 'hsl(var(--ds-teal-900-value))',
    // 		'1000': 'hsl(var(--ds-teal-1000-value))'
    // 	},
    // 	purple: {
    // 		'100': 'hsl(var(--ds-purple-100-value))',
    // 		'200': 'hsl(var(--ds-purple-200-value))',
    // 		'300': 'hsl(var(--ds-purple-300-value))',
    // 		'400': 'hsl(var(--ds-purple-400-value))',
    // 		'500': 'hsl(var(--ds-purple-500-value))',
    // 		'600': 'hsl(var(--ds-purple-600-value))',
    // 		'700': 'hsl(var(--ds-purple-700-value))',
    // 		'800': 'hsl(var(--ds-purple-800-value))',
    // 		'900': 'hsl(var(--ds-purple-900-value))',
    // 		'1000': 'hsl(var(--ds-purple-1000-value))'
    // 	},
    // 	pink: {
    // 		'100': 'hsl(var(--ds-pink-100-value))',
    // 		'200': 'hsl(var(--ds-pink-200-value))',
    // 		'300': 'hsl(var(--ds-pink-300-value))',
    // 		'400': 'hsl(var(--ds-pink-400-value))',
    // 		'500': 'hsl(var(--ds-pink-500-value))',
    // 		'600': 'hsl(var(--ds-pink-600-value))',
    // 		'700': 'hsl(var(--ds-pink-700-value))',
    // 		'800': 'hsl(var(--ds-pink-800-value))',
    // 		'900': 'hsl(var(--ds-pink-900-value))',
    // 		'1000': 'hsl(var(--ds-pink-1000-value))'
    // 	},
    // 	grayAlpha: {
    // 		'100': 'var(--ds-gray-alpha-100)',
    // 		'200': 'var(--ds-gray-alpha-200)',
    // 		'300': 'var(--ds-gray-alpha-300)',
    // 		'400': 'var(--ds-gray-alpha-400)',
    // 		'500': 'var(--ds-gray-alpha-500)',
    // 		'600': 'var(--ds-gray-alpha-600)',
    // 		'700': 'var(--ds-gray-alpha-700)',
    // 		'800': 'var(--ds-gray-alpha-800)',
    // 		'900': 'var(--ds-gray-alpha-900)',
    // 		'1000': 'var(--ds-gray-alpha-1000)'
    // 	},
    // 	background: {
    // 		'100': 'hsl(var(--ds-background-100-value))',
    // 		'200': 'hsl(var(--ds-background-200-value))'
    // 	}
    // },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
