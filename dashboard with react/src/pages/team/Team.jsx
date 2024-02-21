import { DataGrid } from '@mui/x-data-grid';
import {row} from "./Data"
import { useTheme } from '@emotion/react';
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import { AdminPanelSettingsOutlined,LockOpenOutlined }from "@mui/icons-material"
import Header from "../../components/Header"

export default function  Team() {
const theme=useTheme();
 const column = [
  { field: 'id', headerName: 'ID', width: 33, align:"center" ,headerAlign:"center" },
  { field: 'Name', headerName: 'Name',align:"center" ,headerAlign:"center"  },
{ field: 'Email', headerName: 'Email',flex:1 ,align:"center" ,headerAlign:"center" },
{ field: 'Age', headerName: 'Age',align:"center" ,headerAlign:"center" },
{ field: 'Phone', headerName: 'Phone', flex:1 ,align:"center",headerAlign:"center"  },
{ field: 'Access', headerName: 'Access', flex:1 ,align:"center",headerAlign:"center" ,
renderCell:({row:{Access}})=>{return(
    <>
    <Box sx={{backgroundColor:Access==="Admin"?theme.palette.primary.dark:(Access==="Manager"?theme.palette.secondary.dark:"#036e65") ,p:"5px" ,width:"99px" ,borderRadius:"3px" ,textAlign:"center",display:"flex" ,justifyContent:"space-evenly"}}>
        {Access==="Admin" && (<AdminPanelSettingsOutlined  sx={{color:'#fff'}}  fontSize='small'/>)}
        {Access==="User" && (<LockOpenOutlined  sx={{color:'#fff'}} fontSize='small'/>)}
        {Access==="Manager" && (<SecurityOutlinedIcon sx={{color:'#fff'}} fontSize='small'/>)}
        <Typography sx={{fontSize:"12px" ,color:'#fff'}} variant="body2">{Access}</Typography>
    </Box>
    </>
)} },
];
  return (
    <>
    
    <Box sx={{ height: 600, width: '98%' ,mx:"auto" ,my:"auto" }}>
      <Header titel={"TEAM"} subtitel={"Managing the team members"}/>
      <DataGrid rows={row} columns={column} />
    </Box>

    </>
  )
}
