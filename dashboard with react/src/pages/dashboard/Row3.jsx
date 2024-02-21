import {Stack,Paper,Typography} from "@mui/material"
import Pie from "../pieChart/Pie"
import { useTheme } from '@mui/material';
import AllBar from '../barChart/AllBar'
import Geo from "../geography/Geo";
export default function Row3() {
    const theme=useTheme()

  return (
    <Stack gap={1.5} direction={"row"} mt={2} flexWrap={"wrap"}>
        <Paper sx={{width:"28%",minWidth:"400px",flexGrow:1}}>
         <Typography varient="h6" fontWeight="600" sx={{padding:"30px 30px 0 30px" }} color={theme.palette.secondary.main}>
            Campaign
         </Typography>
         <Pie isDashboard={true}/>
         <Typography varient="h6" align="center" sx={{mt:"15px"}}>
            $48,352 revenue generated
         </Typography>
         <Typography varient="body2" align="center" sx={{px:"0.7px",pb:"3px"}}>
            Includes extra misc expanditures and costs
         </Typography>
        </Paper>
        <Paper sx={{width:"33%",minWidth:"400px",flexGrow:1}}>
        <Typography varient="h6" fontWeight="600" sx={{padding:"30px 30px 0 30px" }} color={theme.palette.secondary.main}>
            Sales Quantity
         </Typography>
         <AllBar isDashboard={true}/>
        </Paper>
        <Paper sx={{width:"33%",minWidth:"400px",flexGrow:1}}>
         <Geo  isDashboard={true}/>
        </Paper>
    </Stack>
        
  )
}
