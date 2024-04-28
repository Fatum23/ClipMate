import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './home/HomePage'
import { isRegistered, register } from '@tauri-apps/plugin-global-shortcut'
import { invoke } from '@tauri-apps/api/core'

export default function App() {
	useEffect(() => {
		async function regShortcut() {
			await isRegistered('Control+D').then(async reg => {
				if (!reg) await register('Control+D', () => invoke('toggle_window'))
			})
		}
		regShortcut()
	}, [])
	return (
		<BrowserRouter>
			<Routes>
				<Route path='src/main.html' element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	)
}
