import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Menu, X, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const isMobile = useIsMobile();
	const { toast } = useToast();

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			setIsScrolled(scrollTop > 100);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleQuoteClick = () => {
		document
			.getElementById("contact")
			?.scrollIntoView({ behavior: "smooth" });
		setMobileMenuOpen(false);
	};

	const showConsultationToast = () => {
		toast({
			title: "Schedule a consultation",
			description:
				"Our team is ready to assist you with your project needs.",
		});
	};

	const closeMobileMenu = () => {
		setMobileMenuOpen(false);
	};

	return (
		<header
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				isScrolled ? "bg-white/98 shadow-lg" : "bg-white/95 shadow-md"
			}`}
			style={{ backdropFilter: "blur(15px)" }}
		>
			<nav className="container flex justify-between items-center py-3 md:py-4">
				<div className="flex items-center">
					<img
						src="/kcn.png"
						alt="KCN Logo"
						className="h-8 md:h-12 mr-2"
					/>
					<span className="font-playfair text-lg md:text-xl font-medium text-kcn-black ml-2">
						BUILD FOR FUTURE
					</span>
				</div>

				{/* Desktop Navigation */}
				<ul className="hidden md:flex space-x-8 lg:space-x-10">
					<li>
						<a href="#home" className="nav-link">
							Home
						</a>
					</li>
					<li>
						<a href="#projects" className="nav-link">
							Projects
						</a>
					</li>
					<li>
						<a href="#features" className="nav-link">
							About
						</a>
					</li>
					<li>
						<a href="#testimonials" className="nav-link">
							Reviews
						</a>
					</li>
					<li>
						<a href="#contact" className="nav-link">
							Contact
						</a>
					</li>
				</ul>

				{/* Desktop CTA Button */}
				<button
					className="hidden md:block cta-btn"
					onClick={() => {
						handleQuoteClick();
						showConsultationToast();
					}}
				>
					Get Quote
				</button>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden flex items-center justify-center p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					aria-label="Toggle mobile menu"
				>
					{mobileMenuOpen ? (
						<X size={24} className="text-kcn-red" />
					) : (
						<Menu size={24} className="text-kcn-red" />
					)}
				</button>
			</nav>

			{/* Mobile Menu Overlay */}
			{mobileMenuOpen && (
				<div
					className="md:hidden fixed inset-0 bg-black/50 z-40"
					onClick={closeMobileMenu}
				></div>
			)}

			{/* Mobile Navigation Menu - Updated with white background */}
			<div
				className={`md:hidden fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
					mobileMenuOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex justify-between items-center px-4 py-5 border-b bg-white">
					<img src="/kcn.png" alt="KCN Logo" className="h-8" />
					<button onClick={closeMobileMenu} className="p-2">
						<X size={24} className="text-kcn-red" />
					</button>
				</div>

				<nav className="px-4 py-6 bg-white">
					<ul className="space-y-6">
						<li>
							<a
								href="#home"
								className="flex items-center justify-between text-lg font-medium text-kcn-black hover:text-kcn-red transition-colors"
								onClick={closeMobileMenu}
							>
								Home{" "}
								<ChevronRight
									size={18}
									className="text-kcn-red"
								/>
							</a>
						</li>
						<li>
							<a
								href="#projects"
								className="flex items-center justify-between text-lg font-medium text-kcn-black hover:text-kcn-red transition-colors"
								onClick={closeMobileMenu}
							>
								Projects{" "}
								<ChevronRight
									size={18}
									className="text-kcn-red"
								/>
							</a>
						</li>
						<li>
							<a
								href="#features"
								className="flex items-center justify-between text-lg font-medium text-kcn-black hover:text-kcn-red transition-colors"
								onClick={closeMobileMenu}
							>
								About{" "}
								<ChevronRight
									size={18}
									className="text-kcn-red"
								/>
							</a>
						</li>
						<li>
							<a
								href="#testimonials"
								className="flex items-center justify-between text-lg font-medium text-kcn-black hover:text-kcn-red transition-colors"
								onClick={closeMobileMenu}
							>
								Reviews{" "}
								<ChevronRight
									size={18}
									className="text-kcn-red"
								/>
							</a>
						</li>
						<li>
							<a
								href="#contact"
								className="flex items-center justify-between text-lg font-medium text-kcn-black hover:text-kcn-red transition-colors"
								onClick={closeMobileMenu}
							>
								Contact{" "}
								<ChevronRight
									size={18}
									className="text-kcn-red"
								/>
							</a>
						</li>
					</ul>

					<div className="mt-8 pt-6 border-t">
						<button
							className="w-full cta-btn py-3 flex justify-center items-center"
							onClick={() => {
								handleQuoteClick();
								showConsultationToast();
							}}
						>
							Get Free Quote
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
