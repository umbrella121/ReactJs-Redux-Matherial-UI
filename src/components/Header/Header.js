import React from 'react'

import  { AppBar, Toolbar, Typography } from '@material-ui/core/'


const Header = props =>
			<AppBar position="static">
				<Toolbar>
					<Typography 
						variant="headline"
						color="inherit">
        		Exercice
      	</Typography>
				</Toolbar>
			</AppBar>

export default Header