import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ThemeProvider} from 'styled-components';

import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';

// Kepler.gl Schema APIs
import KeplerGl from 'kepler.gl';
// Kepler.gl Themes
import { themeLT as theme } from 'kepler.gl/styles';
// Kepler.gl actions
import { forwardTo, addDataToMap, wrapTo } from 'kepler.gl/actions';
// Kepler.gl Data processing APIs
import Processors from 'kepler.gl/processors';
// Kepler.gl Schema APIs
import KeplerGlSchema from 'kepler.gl/schemas';

// Component and helpers
import Button from './Button';
import downloadJsonFile from "../Utilities/FileDownload";

// Data
import sa22018Config from '../Data/sa2-2018-config';
import eduData from '../Data/tnb_education_1.csv.js';
import wrkData from '../Data/tnb_work_1.csv.js';
//import generalisedData from '../Data/sa2-2018-generalised.geojson.js';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZXJpY2x1byIsImEiOiJjazd5bHhjcWcwODdxM2Vuenl6MWIwbDQ5In0.py1zWdF-m_23Zds_UjfYjQ';
const OSM_TILES = [{
	id: 'osm_tiles',
	label: 'Positron',
	type: 'vector',
	url: 'https://api.maptiler.com/maps/positron/style.json?key=YxcaBuOQJUpWfgcGrjp7',
	layerGroups: [
	  {
		slug: 'label',
		filter: ({id}) => id.match(/(?=(label|place_))/),
		defaultVisibility: false
	  },
	  {
		slug: 'road',
		filter: ({id}) =>
		  id.match(/(?=(road|railway|tunnel|street|bridge|highway))(?!.*label)/),
		defaultVisibility: false
	  },
	  {
		slug: 'border',
		filter: ({id}) => id.match(/border|boundaries/),
		defaultVisibility: false
	  },
	  {
		slug: 'building',
		filter: ({id}) => id.match(/building/),
		defaultVisibility: false
	  },
	  {
		slug: 'water',
		filter: ({id}) => id.match(/(?=(water|stream|ferry))/),
		defaultVisibility: true
	  },
	  {
		slug: 'land',
		filter: ({id}) =>
		  id.match(/(?=(parks|park|landcover|industrial|sand|hillshade))/),
		defaultVisibility: true
	  }
	]
}];

const EDU_DATA = Processors.processCsvData(eduData);
const WRK_DATA = Processors.processCsvData(wrkData);

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
							info: {
								label: 'Travel to Education',
								id: 'EDU'
							},
							data: EDU_DATA
						},
						{
							info: {
								label: 'Travel to Work',
								id: 'WRK'
							},
							data: WRK_DATA
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
							info: {
								label: 'Travel to Education',
								id: 'EDU'
							},
							data: EDU_DATA
						},
						{
							info: {
								label: 'Travel to Work',
								id: 'WRK'
							},
							data: WRK_DATA
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
				<div className="Map-container App-card d-flex vh-100" style={{ width: '100%', height: '100%' }}>
					<AutoSizer>
						{({height, width}) => (
							<KeplerGl
								id="map"
								width={width}
								height={height}
								mapboxApiAccessToken={MAPBOX_TOKEN}
								mapStyles={OSM_TILES}
							/>
						)}
					</AutoSizer>
				</div>

				<div className="Button-container d-flex flex-row-reverse mt-1">
					<Button onClick={this.exportMapConfig}>Export Config</Button>
					<Button onClick={this.replaceData}>Reset Data</Button>
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
