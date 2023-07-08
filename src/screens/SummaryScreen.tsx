import BreadcrumbsBar from '../components/BreadcrumbsBar/BreadcrumbsBar';
import Summary from '../components/Summary/Summary';

const SummaryScreen = () => {
	return (
		<>
			<BreadcrumbsBar currentStep={3} />
			<Summary />
		</>
	);
};

export default SummaryScreen;
