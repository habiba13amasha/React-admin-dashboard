/* eslint-disable react/prop-types */
import { styled,alpha,useTheme} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import Delete from '@mui/icons-material/Delete';
import Box from "@mui/material/Box";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ContrastOutlinedIcon from '@mui/icons-material/ContrastOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

export default function TopBar({open ,handleDrawerOpen,setMode}) {
  const drawerWidth = 240;
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  const theme = useTheme();

  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box flexGrow={1}/>
          <Stack direction="row">
            {theme.palette.mode ==="light"?(<IconButton color='inherit' onClick={() => { 
             const newMode = theme.palette.mode === 'light' ? 'dark' : 'light';
             setMode(newMode);
             localStorage.setItem("curruntMode", newMode);
             theme.palette.mode = newMode; }}
            >
              <LightbulbOutlinedIcon   />
            </IconButton>):(<IconButton color='inherit' onClick={() => { 
             const newMode = theme.palette.mode === 'light' ? 'dark' : 'light';
             setMode(newMode);
             localStorage.setItem("curruntMode", newMode);
             theme.palette.mode = newMode; }}
            >
              <ContrastOutlinedIcon />
            </IconButton>)}
           
           
           <IconButton color='inherit'>
            <Delete />
           </IconButton>

            <IconButton aria-label="delete">
             <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton aria-label="delete">
             <SettingsOutlinedIcon />
            </IconButton>
            <IconButton aria-label="delete">
             <Person2OutlinedIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </>  
  )
}

