import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAction } from 'redux-actions';
import { Container, Row, Col } from 'react-bootstrap';
import styled, { ThemeProvider } from 'styled-components';
import MapGL, { StaticMap } from 'react-map-gl';
import DeckGL from 'deck.gl';

import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';

// Kepler.gl Schema APIs
import KeplerGl from 'kepler.gl';
// Kepler.gl themes
import { themeLT as theme } from 'kepler.gl/styles';
// Kepler.gl actions
import { forwardTo, updateMap, addDataToMap, wrapTo } from 'kepler.gl/actions';
// Kepler.gl Data processing APIs
import Processors from 'kepler.gl/processors';
// Kepler.gl Schema APIs
import KeplerGlSchema from 'kepler.gl/schemas';

// Component and helpers
import Charts from './Charts';
import Button from './Button';
import { LayerControls, MapStylePicker, HEXAGON_CONTROLS } from './Controls';
import { tooltipStyle } from '../Utilities/Style';
import { renderLayers } from '../VisGL/DeckGLLayers';

import downloadJsonFile from "../Utilities/FileDownload";

// Data
import sa22018Config from '../Data/sa2-2018-config';
import eduData from '../Data/tnb_education_1.geojson.js';
//import wrkData from '../Data/tnb_work_1.geojson.js';
//import generalisedData from '../Data/sa2-2018-generalised.geojson.js';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZXJpY2x1byIsImEiOiJjazd5bHhjcWcwODdxM2Vuenl6MWIwbDQ5In0.py1zWdF-m_23Zds_UjfYjQ';

const EDU_DATA = Processors.processGeojson(eduData);

class KeplerTest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uiState: {
				currentModal: null
			}
		};
	};

	componentDidMount() {
		this.props.dispatch(
			wrapTo(
				'map',
				addDataToMap({
					datasets: [
						{
							info: {label: 'Travel to Education'},
							data: EDU_DATA
						}
					],
					config: sa22018Config
				})
			)
		);
	};

	// This method is used as reference to show how to export the current kepler.gl instance configuration
	// Once exported the configuration can be imported using parseSavedConfig or load method from KeplerGlSchema
	getMapConfig() {
		// retrieve kepler.gl store
		const {keplerGl} = this.props;
		// retrieve current kepler.gl instance store
		const {map} = keplerGl;

		// create the config object
		return KeplerGlSchema.getConfigToSave(map);
	}

	// This method is used as reference to show how to export the current kepler.gl instance configuration
	// Once exported the configuration can be imported using parseSavedConfig or load method from KeplerGlSchema
	exportMapConfig = () => {
		// create the config object
		const mapConfig = this.getMapConfig();
		// save it as a json file
		downloadJsonFile(mapConfig, 'kepler.gl.json');
	};

	// Created to show how to replace dataset with new data and keeping the same configuration
	replaceData = () => {
		this.props.dispatch(
			wrapTo(
				'map',
				addDataToMap({
					datasets: [
						{
							info: {label: 'Travel to Education'},
							data: EDU_DATA
						}
					],
					config: sa22018Config
				})
			)
		);
	};

	render() {
		return (
			<ThemeProvider theme={theme}>
				<div className="Map-container vh-100" style={{ width: '100%', height: '100%' }}>
					<div className="Button-container d-flex flex-column">
						<Button onClick={this.exportMapConfig}>Export Config</Button>
						<Button onClick={this.replaceData}>Reset Data</Button>
					</div>

					<AutoSizer>
						{({height, width}) => (
							<KeplerGl
								mapboxApiAccessToken={MAPBOX_TOKEN}
								id="map"
								width={width}
								height={height}
							/>
						)}
					</AutoSizer>
				</div>
			</ThemeProvider>
		);
	};
}

const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch, props) => ({
	dispatch,
	keplerGlDispatch: forwardTo('map', dispatch)
   });

export default connect(mapStateToProps, mapDispatchToProps)(KeplerTest);
