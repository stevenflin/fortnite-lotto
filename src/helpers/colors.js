export const generateColor = (bet) => {
	switch(bet) {
		case 1:
			return 'green';
		case 10:
			return 'blue';
		case 100:
			return 'purple';
		case 1000:
			return 'gold';
	}
};