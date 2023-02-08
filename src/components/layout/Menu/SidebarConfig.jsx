import React from 'react'
import { PersonOutlined, HomeOutlined, QuizOutlined } from '@mui/icons-material'

const sidebarConfig = [
	{
		title: 'inicio',
		path: '/app',
		icon: <HomeOutlined />
	},
	{
		title: 'quiz',
		path: '/app/quiz',
		icon: <QuizOutlined />
	}
]

export default sidebarConfig