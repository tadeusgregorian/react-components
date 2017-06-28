import React from 'react'
import './styles.css'

const SModalMain = ({title, children, onClose}) => (
	<fb className='sModalMain'>
		<fb className='sModalHead'>
			<fb className='sModalTitle'><span className="titleSpan">{title}</span></fb>
			<fb className='sModalX' onClick={onClose}><icon className='icon-close'/></fb>
			</fb>
		{children}
	</fb>
)

const SModalBody = ({children}) => (
	<fb className='sModalBody'>{children}</fb>
)

export const SModalFooter = ({children}) => (
	<fb className='sModalFooter'>{children}</fb>
)

export default {Main: SModalMain, Body: SModalBody, Footer: SModalFooter}
