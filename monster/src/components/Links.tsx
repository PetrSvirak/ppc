import type { ReactNode } from "react";
import { link, links } from "./Links.css";

interface LinksProps {
	children: ReactNode;
}

interface LinkProps {
	href: string;
	children: ReactNode;
	title?: string;
}

const Link = ({ href, children, title }: LinkProps) => {
	return (
		<a href={href} className={link} title={title || children?.toString()}>
			{children}
		</a>
	);
};

export const Links = ({ children }: LinksProps) => {
	return <div className={links}>{children}</div>;
};

Links.Link = Link;
