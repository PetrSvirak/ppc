import type { ReactNode } from "react";
import { link, links } from "./Links.css";

interface LinksProps {
	children: ReactNode;
}

interface LinkProps {
	href: string;
	children: ReactNode;
}

const Link = ({ href, children }: LinkProps) => {
	return (
		<a href={href} className={link}>
			{children}
		</a>
	);
};

export const Links = ({ children }: LinksProps) => {
	return <div className={links}>{children}</div>;
};

Links.Link = Link;
