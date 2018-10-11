/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

// create a component
class NavigationItem extends Component {
	render() {
		let icon = this.props.icon && <Image style={[ styles.icon, this.props.iconStyle ]} source={this.props.icon} />

		let title =
			this.props.title &&
			<Text style={[ styles.title, this.props.titleStyle ]}>
				{this.props.title}
			</Text>
		return (
			<TouchableOpacity style={styles.container} onPress={this.props.onPress}>
				{icon}
				{title}
			</TouchableOpacity>
		)
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	icon: {
		width: 20,
		height: 20,
		margin: 8,
		marginRight: 16
	},
	title: {
		fontSize: 16,
		color: 'white',
		margin: 8
	}
})

//make this component available to the app
export default NavigationItem
