import preguntas from "../../../constants/quiz"
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions, Box, Container, Typography, Grid, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Avatar, TextField, Button, InputAdornment, IconButton } from '@mui/material'
import Page from '../../common/Page'
import axios from 'axios'
import "./quiz.css"
import TinderCard from 'react-tinder-card'
import ApiRequest from "../../../helpers/axiosInstances"

const Quiz = () => {
	const [preguntaActual, setPreguntaActual] = useState(0)
	const [isFinished, setIsFinished] = useState(false)
	const [resultList, setResultList] = useState({
		DNI: '',
		IMAGEN: '',
		NOMBRE: '',
		PARTIDO_POLITICO: ''
	})
	const [body, setBody] = useState({
		espectro_politico: '',
		sexo: '',
		flg_pregrado: '',
		flg_posgrado: '',
		flg_cargo_publico: '',
		flg_ciudad: ''
	})
	const [lastDirection, setLastDirection] = useState()

	const swiped = (direction, nameToDelete) => {
		console.log('removing: ' + nameToDelete)
		setLastDirection(direction)
	  }
	
	  const outOfFrame = (name) => {
		console.log(name + ' left the screen!') 
	  }

	const onSubmit = async () => {
		//console.log(body)
		const { data } = await ApiRequest().post('/quiz',body)
		console.log(data)
		setResultList(data)
		//console.log(resultList)
	}

	useEffect(onSubmit, [])
	//console.log(resultList)

	const handleAnswerSubmit = (valor) => {
		
		/*const {val, value} = valor
		setResultList({
			...body,
			[val]: value
		})*/
		body[Object.keys(body)[preguntaActual]] = valor
		if (preguntaActual == preguntas.length - 1) {
			//console.log(valor)
			//console.log(body)
			onSubmit()
			setIsFinished(true)
		}
		else {
			setPreguntaActual(preguntaActual + 1)
			//console.log(valor)
			//console.log(preguntaActual)
			//console.log(body)
		}
	}

	if (isFinished)
	
		return (
		// 	<Page title="IziPresi | Quiz">
		// 	<Container maxWidth="xl" className="app">
		// 		<div className="quiz-terminado">
		// 		<Card sx={{ maxWidth: 345 }}>
		// 					{resultList.map((user,index) => (
		// 						<CardActionArea>
		// 						<CardMedia
		// 						component="img"
		// 						height="400"
		// 						image={user.IMAGEN}
		// 						alt="green iguana"
		// 						/>
		// 						<CardContent>
		// 							<Typography gutterBottom variant="h5" component="div">
		// 								{user.NOMBRE}
		// 							</Typography>
		// 							<Typography variant="body2" color="text.secondary">
		// 								{user.PARTIDO_POLITICO}
		// 							</Typography>
		// 							<TinderCard className='swipe' >
		// 								<div className='card'>
		// 								<h3>1</h3>
		// 								</div>
		// 							</TinderCard>
									
		// 						</CardContent>
		// 						</CardActionArea>
		// 					))}
		// 			<CardActions>
					
		// 			<Button onClick={() => (window.location.href = '/app/quiz')} size="small" color="primary">
		// 			Volver a realizar el Quiz
		// 			</Button>
		// 			</CardActions>
		// 		</Card> 
		// 		<div className='cardContainer'>
		// 								{resultList.map((user,index) =>
		// 								<TinderCard className='swipe' key={user.DNI} onSwipe={(dir) => swiped(dir, user.NOMBRE)} onCardLeftScreen={() => outOfFrame(user.NOMBRE)}>
		// 									<div style={{ backgroundImage: 'url(' + user.IMAGEN + ')' }} className='card'>
		// 									<h3>{user.NOMBRE}</h3>
		// 									</div>
		// 								</TinderCard>
		// 								)}
		// 							</div>
		// 		</div>
		// 	</Container>
		// </Page>
		<Container maxWidth="xl" className="app2">
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>Candidatos con los que haces match: </h1>
      <div className='cardContainer'>
        {resultList.map((user,index) =>
		
          <TinderCard className='swipe' key={user.NOMBRE} onSwipe={(dir) => swiped(dir, user.NOMBRE)} onCardLeftScreen={() => outOfFrame(user.NOMBRE)}>
		  
            <div style={{ backgroundImage: 'url(' + user.IMAGEN + ')' }} className='card'>
              <h3>{user.NOMBRE}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      
    </Container>
		)

	return (
		
		<Page title="IziPresi | Quiz">
			<Container maxWidth="xl" className="app">
				<div className="lado-izquierdo">
					<div className="numero-pregunta">
						<span>Pregunta {preguntaActual + 1} de </span> {preguntas.length}
					</div>
					<div className="titulo-pregunta">
						{preguntas[preguntaActual].titulo}
					</div>
				</div>
				<div className="lado-derecho">
					{preguntas[preguntaActual].opciones.map((respuesta) => (
						<Button
								key={respuesta.textoRespuesta}
								onClick={() => handleAnswerSubmit(respuesta.textoRespuesta)}
								className="quizBtn"
								variant="contained"
							>{respuesta.textoRespuesta}
						</Button>
					))}
				</div>
			</Container>
		</Page>
		
	)
	
}

export default Quiz