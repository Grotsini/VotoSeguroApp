import React, { useEffect, useState } from 'react'
import { Box, Container, Typography, Grid, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Avatar } from '@mui/material'
import Page from '../../common/Page'
import axios from 'axios'

// ----------------------------------------------------------------------


const Dashboard = () => {
	const [userList, setUserList] = useState([])

	const getUsers = async () => {
		const { data } = await ApiRequest().get('/candidatos')
		setUserList(data)
		console.log(data)
	}

	useEffect(getUsers, [])
	
	return (
		<Page title="IziPresi | Dashboard">
			<Container maxWidth="xl">
				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Typography sx={{ mt: 3, fontWeight: 'bold' }} variant='h5'>Bienvenido a</Typography>
					<Typography sx={{ mt: 3, fontWeight: 'bold' }} variant='h2'>IziPresi</Typography>
					<br></br>
				</Box>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={12}>
					<TableContainer>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>IMAGEN</TableCell>
									<TableCell>DNI</TableCell>
									<TableCell>NOMBRE</TableCell>
									<TableCell>SEXO</TableCell>
									<TableCell>PARTIDO POLITICO</TableCell>
									<TableCell>PAIS</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{userList.map((user, index) => (
									<TableRow key={index}>
										<TableCell><Avatar src={user.IMAGEN} /></TableCell>
										<TableCell>{user.DNI}</TableCell>
										<TableCell>{user.NOMBRE}</TableCell>
										<TableCell>{user.SEXO}</TableCell>
										<TableCell>{user.PARTIDO_POLITICO}</TableCell>
										<TableCell>{user.PAIS_NACIMIENTO}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					</Grid>
				</Grid>
			</Container>
		</Page>
	)
	

	/*return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>IMAGEN</TableCell>
						<TableCell>DNI</TableCell>
						<TableCell>NOMBRE</TableCell>
						<TableCell>SEXO</TableCell>
						<TableCell>PARTIDO POLITICO</TableCell>
						<TableCell>PAIS</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{userList.map((user, index) => (
						<TableRow key={index}>
							<TableCell><Avatar src={user.IMAGEN} /></TableCell>
							<TableCell>{user.DNI}</TableCell>
							<TableCell>{user.NOMBRE}</TableCell>
							<TableCell>{user.SEXO}</TableCell>
							<TableCell>{user.PARTIDO_POLITICO}</TableCell>
							<TableCell>{user.PAIS_NACIMIENTO}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)*/
}

export default Dashboard