
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// KCN brand colors
				kcn: {
					red: '#ea384c',
					black: '#000000e6',
				},
				// Removing gold colors and adding KCN colors
				gold: {
					DEFAULT: '#ea384c', // Changed from gold to KCN red
					light: '#f05b6b',  // Lighter version of KCN red
				},
				dark: '#000000e6', // Changed to KCN black
				accent2: '#ea384c', // Changed to KCN red
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)', opacity: '0' },
					'50%': { transform: 'translateY(-200px)', opacity: '1' }
				},
				shimmer: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				heroTitleAnimation: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				heroSubtitleAnimation: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '0.9', transform: 'translateY(0)' }
				},
				heroButtnsAnimation: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				bounce: {
					'0%, 20%, 50%, 80%, 100%': { transform: 'translateX(-50%) translateY(0)' },
					'40%': { transform: 'translateX(-50%) translateY(-10px)' },
					'60%': { transform: 'translateX(-50%) translateY(-5px)' }
				},
				scroll: {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(15px)' }
				},
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				pulse: {
					'0%': { boxShadow: '0 5px 20px rgba(37, 211, 102, 0.3)' },
					'50%': { boxShadow: '0 5px 30px rgba(37, 211, 102, 0.6)' },
					'100%': { boxShadow: '0 5px 20px rgba(37, 211, 102, 0.3)' }
				},
				spin: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s infinite ease-in-out',
				'shimmer': 'shimmer 8s infinite',
				'hero-title': 'heroTitleAnimation 1s ease-out',
				'hero-subtitle': 'heroSubtitleAnimation 1s ease-out 0.3s both',
				'hero-buttons': 'heroButtnsAnimation 1s ease-out 0.6s both',
				'bounce': 'bounce 2s infinite',
				'scroll': 'scroll 2s infinite',
				'fadeInUp': 'fadeInUp 0.8s ease-out',
				'pulse': 'pulse 2s infinite',
				'spin': 'spin 1s linear infinite',
			},
			backgroundImage: {
				'gold-gradient': 'linear-gradient(135deg, #ea384c 0%, #f05b6b 100%)', // Changed from gold to KCN red gradient
			},
			fontFamily: {
				'playfair': ['"Playfair Display"', 'serif'],
				'inter': ['Inter', 'sans-serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
