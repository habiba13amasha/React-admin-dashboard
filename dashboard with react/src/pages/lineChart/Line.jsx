/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import Box from "@mui/material/Box";
import { ResponsiveLine } from '@nivo/line'
import { useTheme } from '@mui/material';
const data=[
    {
      "id": "japan",
      "color": "hsl(242, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 190
        },
        {
          "x": "helicopter",
          "y": 1
        },
        {
          "x": "boat",
          "y": 19
        },
        {
          "x": "train",
          "y": 78
        },
        {
          "x": "subway",
          "y": 135
        },
        {
          "x": "bus",
          "y": 262
        },
        {
          "x": "car",
          "y": 13
        },
        {
          "x": "moto",
          "y": 261
        },
        {
          "x": "bicycle",
          "y": 191
        },
        {
          "x": "horse",
          "y": 87
        },
        {
          "x": "skateboard",
          "y": 30
        },
        {
          "x": "others",
          "y": 106
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(350, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 273
        },
        {
          "x": "helicopter",
          "y": 229
        },
        {
          "x": "boat",
          "y": 82
        },
        {
          "x": "train",
          "y": 265
        },
        {
          "x": "subway",
          "y": 271
        },
        {
          "x": "bus",
          "y": 235
        },
        {
          "x": "car",
          "y": 79
        },
        {
          "x": "moto",
          "y": 274
        },
        {
          "x": "bicycle",
          "y": 176
        },
        {
          "x": "horse",
          "y": 149
        },
        {
          "x": "skateboard",
          "y": 15
        },
        {
          "x": "others",
          "y": 147
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(273, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 11
        },
        {
          "x": "helicopter",
          "y": 283
        },
        {
          "x": "boat",
          "y": 254
        },
        {
          "x": "train",
          "y": 101
        },
        {
          "x": "subway",
          "y": 247
        },
        {
          "x": "bus",
          "y": 21
        },
        {
          "x": "car",
          "y": 125
        },
        {
          "x": "moto",
          "y": 68
        },
        {
          "x": "bicycle",
          "y": 222
        },
        {
          "x": "horse",
          "y": 140
        },
        {
          "x": "skateboard",
          "y": 102
        },
        {
          "x": "others",
          "y": 85
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(104, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 245
        },
        {
          "x": "helicopter",
          "y": 61
        },
        {
          "x": "boat",
          "y": 36
        },
        {
          "x": "train",
          "y": 33
        },
        {
          "x": "subway",
          "y": 199
        },
        {
          "x": "bus",
          "y": 136
        },
        {
          "x": "car",
          "y": 2
        },
        {
          "x": "moto",
          "y": 7
        },
        {
          "x": "bicycle",
          "y": 66
        },
        {
          "x": "horse",
          "y": 83
        },
        {
          "x": "skateboard",
          "y": 104
        },
        {
          "x": "others",
          "y": 283
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(1, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 222
        },
        {
          "x": "helicopter",
          "y": 280
        },
        {
          "x": "boat",
          "y": 153
        },
        {
          "x": "train",
          "y": 42
        },
        {
          "x": "subway",
          "y": 85
        },
        {
          "x": "bus",
          "y": 280
        },
        {
          "x": "car",
          "y": 6
        },
        {
          "x": "moto",
          "y": 187
        },
        {
          "x": "bicycle",
          "y": 75
        },
        {
          "x": "horse",
          "y": 292
        },
        {
          "x": "skateboard",
          "y": 52
        },
        {
          "x": "others",
          "y": 22
        }
      ]
    }
  ];

export default function Line({isDashboard=false}) {
  const theme=useTheme()
  return (
    <>
    <Box sx={{height:isDashboard?"280px" :"70vh"}}>
      <ResponsiveLine
        data={data}
        const theme={[

          {
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            },
            "axis": {
                "domain": {
                    "line": {
                        "stroke": theme.palette.divider,
                        "strokeWidth": 1
                    }
                },
                "legend": {
                    "text": {
                        "fontSize": 12,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                },
                "ticks": {
                    "line": {
                        "stroke":theme.palette.divider ,
                        "strokeWidth": 1
                    },
                    "text": {
                        "fontSize": 11,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                }
            },
            "grid": {
                "line": {
                    "stroke":theme.palette.divider,
                    "strokeWidth": 0
                }
            },
            "legends": {
                "title": {
                    "text": {
                        "fontSize": 11,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                },
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                },
                "ticks": {
                    "line": {},
                    "text": {
                        "fontSize": 10,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                }
            },
            "annotations": {
                "text": {
                    "fontSize": 13,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "link": {
                    "stroke": "#000000",
                    "strokeWidth": 1,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "outline": {
                    "stroke": "#000000",
                    "strokeWidth": 2,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "symbol": {
                    "fill": "#000000",
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                }
            },
            "tooltip": {
                "container": {
                    "background": theme.palette.background.default,
                    "fontSize": 12
                },
                "basic": {},
                "chip": {},
                "table": {},
                "tableCell": {},
                "tableCellValue": {}
            }
        }]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard?null: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard?null: 'Count',
            legendOffset: -45,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
  </Box>
    </>
  )
}


