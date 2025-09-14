import { useEffect } from "react";
import { app } from "./App.css";
import { Circle, Consulting, Form, Links } from "./components";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TaxId } from "./TaxId";
import {
	extractPath,
	extractSubdomain,
	performRedirect,
} from "./utils/redirects";

const REDIRECTS: Record<string, string> = {
	pavel: "https://pavelsvirak.cz",
	petr: "https://sviraak.cz",
};

function App() {
	useEffect(() => {
		// Try subdomain redirect first, then path redirect
		performRedirect(extractSubdomain, REDIRECTS) ??
			performRedirect(extractPath, REDIRECTS);
	}, []);

	return (
		<ThemeProvider>
			<div className={app}>
				<Circle>
					<Links>
						<Links.Link href={REDIRECTS.petr} title={`→ ${REDIRECTS.petr}`}>
							Petr
						</Links.Link>{" "}
						<Links.Link href={REDIRECTS.pavel} title={`→ ${REDIRECTS.pavel}`}>
							Pavel
						</Links.Link>
					</Links>
					<Consulting>Consulting</Consulting>
					<Form>s.r.o.</Form>
					<TaxId />
				</Circle>
			</div>
		</ThemeProvider>
	);
}

export default App;
