import React from "react";
import {TouchableHighlight, Image} from 'react-native';

import colors from '../../styleguide/colors';

const ImageButton = ({uri, style, width, height, onPress}) =>
(
	<TouchableHighlight
		underlayColor="#fff"
		extendedStyle={[
			{
				borderRadius: 4,
				borderWidth: 1,
				borderColor: colors.veryLightPink,
			},
			style,
		]}
		activeOpacity={0.7}
		onPress={onPress}>
		<Image
			style={{
				width,
				height,
				borderRadius: 4,
			}}
			source={{
				uri,
			}}
		/>
	</TouchableHighlight>
);

export default ImageButton;
