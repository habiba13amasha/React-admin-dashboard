/* eslint-disable react/prop-types */
import {Stack,Paper,Box} from "@mui/material"
import Typography from "@mui/material/Typography"
import { ResponsivePie } from '@nivo/pie'
import { useTheme } from '@mui/material';


export default function Card({icon,titel,subtitel,increase,data,scheme}) {
    const theme=useTheme()

 return (
   <>
    <Paper sx={{flexGrow: 1 , minWidth:"333px", padding:1.5 , display:"flex", justifyContent:"space-between"}}>
      <Stack gap={1} >
       {icon}
       <Typography  variant="body2" sx={{fontSize:"13px"}}>
        {titel}
       </Typography>
       <Typography variant="body2" sx={{fontSize:"13px"}}>
        {subtitel}
       </Typography>
      </Stack>
      <Stack  alignItems={"center"}>
        <Box height={"70px"} width={"70px"}>
         <ResponsivePie
          data={data}
          theme={[
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
          margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
          innerRadius={0.5}
          colors={{scheme:scheme}}
          padAngle={0.7}
          cornerRadius={3}
          enableArcLabels={false}
          enableArcLinkLabels={false}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
          from: 'color',
          modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}

  
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
          ]} 
         />
        </Box>
       <Typography variant="body2">
        {increase}
       </Typography>
      </Stack>
     </Paper>
   </>
  )
}
