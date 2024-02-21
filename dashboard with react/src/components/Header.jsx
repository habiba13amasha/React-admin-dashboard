/* eslint-disable react/prop-types */
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useTheme } from '@mui/material';
export default function Header({titel,subtitel,isDashboard=false}) {
    const theme=useTheme()
  return (
    <>
    <Box mb={isDashboard? 2: 4}>
      <Typography variant="h5" sx={{fontWeight:"bold",color:theme.palette.info.light}}>{titel}</Typography>
      <Typography variant="body1">{subtitel}</Typography>
     </Box>
    </>
  )
}

