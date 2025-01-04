import { Link } from "react-router";

const NAV_LINKS = [
	{ title: "Services", href: "/services" },
	{ title: "Latest Collections", href: "/latest-collections" },
	{ title: "Blog", href: "/blog" },
];

export default function Nav() {
	return (
		<nav className="md:flex">
			<div className="grid gap-y-6 md:space-x-10 md:items-center md:justify-center md:flex">
				{NAV_LINKS.map((link, id) => (
					<Link
						key={id}
						to={link.href}
						title={link.title}
						className="text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 hover:text-indigo-600"
					>
						{link.title}
					</Link>
				))}
			</div>
		</nav>
	);
}

// md:space-x-10 md:items-center md:justify-center md:flex
