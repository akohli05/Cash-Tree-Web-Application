import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import SavingsIcon from '../AccountSelectionForm/account_type_icons/SavingsIcon';
import MoneyMarketIcon from '../AccountSelectionForm/account_type_icons/MoneyMarketIcon';
import CDIcon from '../AccountSelectionForm/account_type_icons/CDIcon';
import SpendingIcon from '../AccountSelectionForm/account_type_icons/SpendingIcon';
import { CardActionArea } from '@mui/material';
import { AccountType } from '../../context/ApplicationContext';

const StyledCard = styled(Card)({
	'backgroundColor': '#f0f0f0',
	'position': 'relative',
	'width': 130,
	'height': 130,
	'color': 'black',
	'margin': '1px',
	'borderBottom': 'ridge rgba(211, 220, 50, .6)',
	'textAlign': 'center',
	'&:hover': {
		transform: 'scale(1.1)',
	},
});

const StyledTopography = styled(Typography)({
});

interface BasicCardProps {
	accountType: AccountType;
}

const BasicCard: React.FC<BasicCardProps> = ({ accountType }) => {
	//Choose the icon image
	function accountTypeIcon() {
		switch (accountType) {
			case 'Savings':
				return <SavingsIcon />;
			case 'Money Market':
				return <MoneyMarketIcon />;
			case 'Certificate of Deposit':
				return <CDIcon />;
			case 'Spending':
				return <SpendingIcon />;
		}
	}

	return (
		<StyledCard aria-label={accountType}>
			<CardActionArea>
				<CardContent>
					{accountTypeIcon()}
					<StyledTopography>{accountType}</StyledTopography>
				</CardContent>
			</CardActionArea>
		</StyledCard>
	);
};

export default BasicCard;
