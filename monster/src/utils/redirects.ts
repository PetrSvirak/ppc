export const extractSubdomain = (
	redirects: Record<string, string>,
): string | undefined => {
	const hostname = window.location.hostname;
	const subdomain = hostname.split(".")[0];
	return redirects[subdomain];
};

export const extractPath = (
	redirects: Record<string, string>,
): string | undefined => {
	const pathname = window.location.pathname;
	const pathSegment = pathname.slice(1);
	return redirects[pathSegment];
};

export const performRedirect = (
	extractorFn: (redirects: Record<string, string>) => string | undefined,
	redirects: Record<string, string>,
): string | undefined => {
	const url = extractorFn(redirects);
	if (!url) {
		return undefined;
	}
	window.location.replace(url);
	return url;
};
