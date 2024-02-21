import {Typography,Box,useTheme} from "@mui/material"

export default function NotFound() {
  const theme=useTheme()
  return (
    <>
    <Box>
        <Typography variant="h5" color={theme.palette.error.dark} align="center">
         There is no design yet
         <br/>
         <br/>
         Please try again later...
        </Typography>
    </Box>
    </>
  )
}
