
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Aerospace Design System - Black & White Only
				'space-black': '#000000',
				'cosmic-white': '#ffffff',
				'tech-gray': 'hsl(0, 0%, 10%)',
				'scanner-green': 'hsl(120, 100%, 50%)',
				'warning-amber': 'hsl(45, 100%, 50%)',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			fontFamily: {
				'mono': ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
				'tech': ['Orbitron', 'Arial', 'sans-serif'],
			},
			fontSize: {
				'hero': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.9' }],
				'section': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1' }],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'10%': { transform: 'translate(-2px, 2px)' },
					'20%': { transform: 'translate(2px, -2px)' },
					'30%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(2px, -2px)' },
					'50%': { transform: 'translate(-2px, 2px)' },
					'60%': { transform: 'translate(2px, -2px)' },
					'70%': { transform: 'translate(-2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
					'90%': { transform: 'translate(-2px, 2px)' },
				},
				'scan-line': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'rocket-launch': {
					'0%': { transform: 'translateY(0) scale(1)' },
					'100%': { transform: 'translateY(-100px) scale(1.2)' },
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #ffffff' },
					'50%': { boxShadow: '0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff' },
				},
			},
			animation: {
				'glitch': 'glitch 0.3s ease-in-out infinite alternate',
				'scan-line': 'scan-line 3s linear infinite',
				'float': 'float 6s ease-in-out infinite',
				'rocket-launch': 'rocket-launch 0.8s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
