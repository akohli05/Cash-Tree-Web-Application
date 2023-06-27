import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import SavingsIcon from '../AccountSelection/account_type_icons/SavingsIcon';
import MoneyMarketIcon from '../AccountSelection/account_type_icons/MoneyMarketIcon';
import CDIcon from '../AccountSelection/account_type_icons/CDIcon';
import SpendingIcon from '../AccountSelection/account_type_icons/SpendingIcon';
import { CardActionArea } from '@mui/material';

const StyledCard = styled(Card)({
	'backgroundColor': '#f0f0f0',
	'position': 'relative',
	'width': 130,
	'height': 130,
	'color': 'black',
	'margin': '0px 15px 30px 0px',
	'borderBottom': 'ridge rgba(211, 220, 50, .6)',
	'textAlign': 'center',
	'&:hover': {
		transform: 'scale(1.1)',
	},
});

const BasicCard = (props: { accountType: string }) => {
	return (
		<StyledCard>
			<CardActionArea>
				<CardContent>
					{props.accountType === 'Savings' ? (
						<SavingsIcon />
					) : props.accountType === 'Money Market' ? (
						<MoneyMarketIcon />
					) : props.accountType === 'Certificate of Deposit' ? (
						<CDIcon />
					) : (
						<SpendingIcon />
					)}

					<Typography component='div'>{props.accountType}</Typography>
				</CardContent>
			</CardActionArea>
		</StyledCard>
	);
};

export default BasicCard;
