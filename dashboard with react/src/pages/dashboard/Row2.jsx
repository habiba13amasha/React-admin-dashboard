/* eslint-disable no-unused-vars */
import {Stack,Paper,Box,Typography,IconButton} from "@mui/material"
import { useTheme } from "@mui/material"
import Line from "../lineChart/Line"
import { DownloadOutlined } from "@mui/icons-material"
import {transactions} from "./data"
export default function Row2() {
  const theme=useTheme()

  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={2}>
        <Paper sx={{maxWidth:900 ,flexGrow:1,minWidth:400}}>

          <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"} alignItems={"center"}>
            <Box>
             <Typography variant="h6" color={theme.palette.secondary.main} mb={1} mt={2} ml={4} >
                Revenue Generated
             </Typography>
             <Typography variant="body2" ml={4}>$59,342.32</Typography>
            </Box>
            <Box>
             <IconButton sx={{mr:3}}>
                <DownloadOutlined/>
             </IconButton>
            </Box>
          </Stack>  
          <Line isDashboard={true}/>
        </Paper>
        <Box sx={{flexGrow:1,maxHeight:380, minWidth:280 ,overflow:"auto"}}>
         <Paper>
            <Typography variant="h6" color={theme.palette.secondary.main} fontSize={"bold"} p={1.2}>
                Recent Transactions
            </Typography>
         </Paper>
         {transactions.map((item)=>{
            return(<>
             <Paper sx={{mt:1,display:"flex", justifyContent:"space-between",alignItems:"center"}}>
               <Box p={1.2}>
                <Typography variant="body1" fontWeight={600}>
                 {transactions.txId }
                </Typography>
                <Typography variant="body2" >{transactions.user }</Typography>
               </Box>
               <Typography variant="body1" >{transactions.data}</Typography>
               <Typography variant="body2" borderRadius={1.4} p={1} bgcolor={theme.palette.error.main} color={theme.palette.getContrastText(theme.palette.error.main)}>
                ${transactions.cost}
               </Typography>
             </Paper>
            </>)
         })}
         
        </Box>
    </Stack>
  )
}
