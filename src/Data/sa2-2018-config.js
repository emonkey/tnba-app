// Copyright (c) 2020 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the Software), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

export default {
  version: 'v1',
  config: {
    visState: {
      filters: [],
      layers: [
        {
          id: '5zakhmo',
          type: 'geojson',
          config: {
            dataId: 'r5lbtjrn',
            label: 'sa2-2018-generalised',
            color: [248,149,112],
            columns: {
              geojson: '_geojson'
            },
            isVisible: true,
            visConfig: {
              opacity: 0.2,
              strokeOpacity: 0.8,
              thickness: 0.5,
              strokeColor: [27,18,71],
              colorRange: {
                name: 'ColorBrewer Blues-6',
                type: 'singlehue',
                category: 'ColorBrewer',
                colors: [
                  '#eff3ff',
                  '#c6dbef',
                  '#9ecae1',
                  '#6baed6',
                  '#3182bd',
                  '#08519c'
                ]
              },
              strokeColorRange: {
                name: 'Global Warming',
                type: 'sequential',
                category: 'Uber',
                colors: [
                  '#5A1846',
                  '#900C3F',
                  '#C70039',
                  '#E3611C',
                  '#F1920E',
                  '#FFC300'
                ]
              },
              radius: 10,
              sizeRange: [0,10],
              radiusRange: [0,50],
              heightRange: [0,500],
              elevationScale: 10,
              stroked: true,
              filled: true,
              enable3d: false,
              wireframe: false
            },
            hidden: false,
            textLabel: [
              {
                field: null,
                color: [255,255,255],
                size: 18,
                offset: [0,0],
                anchor: 'start',
                alignment: 'center'
              }
            ]
          },
          visualChannels: {
            colorField: {
              name: 'name',
              type: 'string'
            },
            colorScale: 'ordinal',
            sizeField: null,
            sizeScale: 'linear',
            strokeColorField: null,
            strokeColorScale: 'quantile',
            heightField: null,
            heightScale: 'linear',
            radiusField: null,
            radiusScale: 'linear'
          }
        }
      ],
      interactionConfig: {
        tooltip: {
          fieldsToShow: {
            r5lbtjrn: [
              {
                name: 'name',
                format: null
              },
              {
                name: 'styleUrl',
                format: null
              },
              {
                name: 'styleHash',
                format: null
              },
              {
                name: 'stroke',
                format: null
              },
              {
                name: 'stroke-opacity',
                format: null
              }
            ]
          },
          compareMode: false,
          compareType: 'absolute',
          enabled: true
        },
        brush: {
          size: 0.5,
          enabled: false
        },
        geocoder: {
          enabled: false
        },
        coordinate: {
          enabled: false
        }
      },
      layerBlending: 'normal',
      splitMaps: []
    },
    mapState: {
      dragRotate: false,
      latitude: -41.31093128704194,
      longitude: 174.77010893272666,
      zoom: 12,
      pitch: 0,
      bearing: 0,
      isSplit: false
    },
    mapStyle: {
      styleType: 'light',
      topLayerGroups: {
        label: true
      },
      visibleLayerGroups: {
        label: true,
        road: true,
        border: true,
        building: false,
        water: true,
        land: true
      },
      threeDBuildingColor: [106,187,107]
    }
  }
};
