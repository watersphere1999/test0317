import React from "react";
import axios from "axios";
import {
    makeStyles,
} from "@material-ui/core/styles";
// Import Swiper React components
// Import Swiper styles
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Navigation from "../../components/Bottom/Navigation";
import PathwayDistance from "../../components/Lists/PathwayDistance";
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { pathway, pathwayFamily, pathwayFavorite } from 'data/pathway';
const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "NotoSansCJKtc",
        flexGrow: 1,
        width: "100%",
    },
    appbar: {
        width: "-webkit-fill-available",
        height: "56px",
        backgroundColor: "#3c5754"
    },
    tabs: {
        width: "-webkit-fill-available",
        height: "48px",
        margin: "12px 0 0",
        backgroundColor: "#3c5754"
    },
    listItem: {
        height: "48px",
        margin: "20px 0 0",
        fontSize: "20px"
    },
    title: {
        fontFamily: "PingFangTC",
        width: "-webkit-fill-available",
        padding: "17px 0 0 16px",
        fontSize: "18px"
    },
    tangle: {
        width: "100%",
        height: "16px",

        backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
}));

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const classes = useStyles();
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography className={classes.listItem}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const NearByPathway = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        <>
            <div className={classes.root}>
                <AppBar className={classes.appbar} position="static">
                    <Typography className={classes.title}>
                        附近步道
                    </Typography>
                    <Tabs
                        className={classes.tabs}
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        aria-label="collection tabs"
                    >
                        <Tab label={<span style={{ color: '#ffffff' }}>賞楓</span>} {...a11yProps(0)} />
                        <Tab label={<span style={{ color: '#ffffff' }}>挑戰</span>} {...a11yProps(1)} />
                        <Tab label={<span style={{ color: '#ffffff' }}>溫泉</span>} {...a11yProps(2)} />
                        <Tab label={<span style={{ color: '#ffffff' }}>親子</span>} {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    {pathway.suggest.map((path, i) => (
                        <PathwayDistance
                            pathLink={path.pathLink}
                            favorite={false}
                            key={i}
                            avatar={path.img}
                            avatarAlt={path.pathTitle}
                            title={path.pathTitle}
                            location={path.pathLocation}
                            miles={path.pathMiles}
                        />
                    ))}
                </TabPanel>
                <TabPanel value={value} index={1}>
                {pathway.suggest.map((path, i) => (
                        <PathwayDistance
                            pathLink={path.pathLink}
                            favorite={false}
                            key={i}
                            avatar={path.img}
                            avatarAlt={path.pathTitle}
                            title={path.pathTitle}
                            location={path.pathLocation}
                            miles={path.pathMiles}
                        />
                    ))}
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Page Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Page Four
                </TabPanel>
                <Navigation />
            </div>
        </>
    );
}

export default NearByPathway;