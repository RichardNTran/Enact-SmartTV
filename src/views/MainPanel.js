import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
import PropTypes from 'prop-types';

const MainPanel = kind({
	name: 'MainPanel',
	propTypes: {
		onNavigate: PropTypes.func,
		path: PropTypes.string
	},
	render: ({onNavigate,...rest}) => {
		console.log('render MainPanel');
		return (
			<Panel {...rest}>
				<Header title="Hello world!" />
				<Button onClick={e=>onNavigate({path: '/list'})}
				>Go to list</Button>
			</Panel>
		)
	}
});

export default MainPanel;
