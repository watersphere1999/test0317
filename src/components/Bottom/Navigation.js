
import React, { Fragment } from "react";
import { makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
//to add router link for navigation btn
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  footer:{
    boxShadow:" 0 0 3px 0 rgba(0, 0, 0, 0.2)",
    backgroundColor:"white",
    position:"fixed",
    bottom:0,
    left:0,
    width:"100%",
    fontFamily:"NotoSansCJKtc",
  }, 
}));

function Navigation() {
  const classes = useStyles(); 
  const [value, setValue] = React.useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return(
    
    <Fragment>
    <div className={classes.bottom}>
    <BottomNavigation
     value={value} 
     onChange={handleChange}
     showLabels
     classes={{
      root: classes.footer,
      selected: classes.selected
    }}
     >
     
      <BottomNavigationAction  component={Link} to="/home" label="首頁" value="home"  icon={<HomeIcon />} />
      <BottomNavigationAction component={Link} to="/searchResult" label="步道搜尋" value="search"  icon={<SearchIcon />} />
      <BottomNavigationAction component={Link} to="/nearbypathway" label="附近步道" value="nearby"   icon={<LocationOnIcon />} />
      <BottomNavigationAction component={Link} to="/home" label="我的最愛"  value="favorite" icon={<FavoriteIcon  />} />
    
    </BottomNavigation>
    </div>
  </Fragment>
  );
}
export default Navigation;