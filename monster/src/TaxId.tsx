import { useTheme } from "./contexts/ThemeContext";
import { taxId, taxIdIcon, taxIdIconWrapper, taxIdLink } from "./TaxId.css";

export const TaxId = () => {
	const { isDark } = useTheme();

	return (
		<div className={taxId}>
			<span>22366393</span>
			<a
				href="https://www.kdpcr.cz/spolecnost/petr-pavel-consulting-sro"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Komora Daňových Poradců"
				title="→ https://www.kdpcr.cz/…"
				className={taxIdLink}
			>
				<span className={taxIdIconWrapper}>
					<img
						key={`DarkIs${isDark}`}
						src={isDark ? "/kdp-logo-dark.svg" : "/kdp-logo-light.svg"}
						alt="Logo pro Komoru Daňových Poradců"
						className={taxIdIcon}
					/>
				</span>
			</a>
		</div>
	);
};
