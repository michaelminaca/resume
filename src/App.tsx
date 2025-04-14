import './App.css';
import { ThemeProvider } from '@/components/theme-provider';
import { HeroSection } from './components/hero-section';
import { CallToAction } from './components/cta-section';
import { ExperienceSection } from './components/experience-section';
import { ProjectsSection } from './components/projects';

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div>
				<HeroSection />
				<ExperienceSection />
				<ProjectsSection />
				<CallToAction />
			</div>
		</ThemeProvider>
	);
}

export default App;
