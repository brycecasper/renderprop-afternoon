import React, { Component } from 'react';
import CurrencyDisplay from './CurrencyDisplay';

class CurrencyConverter extends Component {
	state = {
		currencyChosen: false,
		selectedCurrency: 'Select Currency',
		amount: 0
	}

	
	handleOptionSelect = (event) => {
		const userValue = event.target.value
		this.setState(() => {
			return {
				selectedCurrency: userValue,
				currencyChosen: userValue === 'Select Currency' ? false : true
			}
		})
	}

	render() {
		return (
			<div>
				{this.state.currencyChosen ? (
					this.props.render(
						currencyData[this.state.selectedCurrency],
						this.state.amount
					)
				) : (
					<p>Please Select Currency</p>
				)}
			</div>
		)
	}
}

export default CurrencyConverter;