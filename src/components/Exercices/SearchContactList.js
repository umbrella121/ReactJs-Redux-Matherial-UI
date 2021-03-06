import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = {
	contact: {
		position: 'relative',
		zIndex: '1',
		margin: '0 auto',
		backgroundColor: '#078fb9d9',
		display: 'flex',
		padding: '10px',
		borderBottom: '1px dotted #04e2ff',
		alignItems: 'center',
		fontFamily: 'sans-serif',
		width: '100%',
		maxWidth: '400px',
		'&:firstChild': {
			marginTop: '10px',
			borderRadius: '5px 5px 0px 0px',
		},
		'&:lastChild': {
			border: 'none',
			borderRadius: '0px 0px 5px 5px',
			marginBottom: '10px',
		},
		'&:hover': {
			backgroundColor: '#6d4242f7',
			transition: 'all 1s',
			cursor: 'pointer',
		}
	},
	contact_image: {
		borderRadius: '50%',
		margin: '5px',
		width: '75px',
		height: '75px',
	},
	contact_info: {
		fontFamily: '"RobotoRegular", Arial, sans-serif',
		letterSpacing: '1px',
		fontSize: '21px',
		color: '#fff',
		textTransform: 'capitalize',
		paddingLeft: '8px',
	},
	contact_phone: {
		letterSpacing: '2px',
	}
}

const SearchContactList = props =>{

	const showContact = event => {
		const oldItems = props.contactsList.slice();
		const newItem = oldItems.filter(item =>
			item.id === props.id )
		props.selectUserDispatch(...newItem)
		props.displayContactsDispatch([])
console.log('SearchContactList', )
	}

	const { classes } = props
	return(
		<li 
			onClick={showContact}
			key={props.id}
			className={classes.contact}>
			<img className={classes.contact_image} src={props.contacts.photo} alt=""/>
			<div className={classes.contac_info}>
				<div>
					{props.contacts.name}
				</div>
				<div className={classes.contact_phone}>
					{props.contacts.phone}
				</div> 
			</div>
		</li>
	)
}

SearchContactList.propTypes = {
	selectUserDispatch: PropTypes.func.isRequired,
	displayContactsDispatch: PropTypes.func.isRequired,
}
export default withStyles(styles)(SearchContactList);
