import { useEffect } from "react";
import { app } from "./App.css";
import { Circle, Consulting, Form, Links } from "./components";
import {
	extractPath,
	extractSubdomain,
	performRedirect,
} from "./utils/redirects";

const REDIRECTS: Record<string, string> = {
	key1: "<url-1>",
	key2: "<url-2>",
};

function App() {
	useEffect(() => {
		// Try subdomain redirect first, then path redirect
		performRedirect(extractSubdomain, REDIRECTS) ??
			performRedirect(extractPath, REDIRECTS);
	}, []);

	return (
		<div className={app}>
			<Circle>
				<Links>
					<Links.Link href={REDIRECTS.key1}>[Value 1]</Links.Link>{" "}
					<Links.Link href={REDIRECTS.key2}>[Value 2]</Links.Link>
				</Links>
				<Consulting>Consulting</Consulting>
				<Form>[form]</Form>
			</Circle>
		</div>
	);
}

export default App;
