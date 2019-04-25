import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import {Panels, Routable, Route} from '@enact/moonstone/Panels';
import PropTypes from 'prop-types';
import React from 'react';
import {SlideLeftArranger} from '@enact/ui/ViewManager';

import MainPanel from '../views/MainPanel';
import ListDataPanel from '../views/ListDataPanel';
import {connect} from 'react-redux';
import {navigate} from '../actions';

const RoutablePanels = Routable({navigate: 'onBack'}, Panels);

const App = kind({
	name: 'App',

	propTypes: {
		onNavigate: PropTypes.func,
		path: PropTypes.string
	},

	render: ({onNavigate, path, ...rest}) => {
		return (
			<RoutablePanels {...rest} arranger={SlideLeftArranger} onBack={onNavigate} path={path}>
				<Route path="main" component={MainPanel} onNavigate={onNavigate}/>
				<Route path="list" component={ListDataPanel} onNavigate={onNavigate}/>
			</RoutablePanels>
		);
	}
});

const mapStateToProps = ({path}) => ({
	path
});

const mapDispatchToProps = (dispatch) => {
	return {
		onNavigate: ({path}) => dispatch(navigate(path))
	};
};

export default MoonstoneDecorator(connect(mapStateToProps, mapDispatchToProps)(App));
