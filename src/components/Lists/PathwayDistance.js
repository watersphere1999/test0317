import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
// core components
// import styles from 'assets/jss/material-kit-pro-react/components/pathwayStyle.js';
import Button from '@material-ui/core/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { Checkbox, Divider } from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import Grid from "@material-ui/core/Grid";
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//import styles from '../../assets/jss/material-kit-pro-react/components/pathwayStyle';
//import { whiteColor } from 'assets/jss/material-kit-pro-react';

const styles = {
    gridcontain: {
        marginRight: "-15px",
        marginLeft: "-15px",
        width: "100%",
    },
    gridItem: {
        position: "relative",
        width: "auto",
        height: "auto",
        margin: "16px 0 0 0",
        /* flexBasis: "auto" */
    },
    media: {
        margin: 16,
        display: 'flex',
        WebkitBoxAlign: 'start',
        alignItems: 'flex-start',
        '& p': {
            fontSize: '1rem',
            lineHeight: '1.6em'
        },
        '& $media $mediaBody': {
            paddingRight: '0px'
        }
    },
    mediaLink: {
        width: '100%',
        float: 'left !important',
        textDecoration: 'none',
    },
    mediaAvatar: {
        position: 'relative',
        margin: '0 auto',
        '& img': {
            borderRadius: '4px',
            minWidth: '104px',
            width: '100%',
            height: '72px',
            objectFit: 'cover',
        }
    },
    mediaBody: {
        paddingLeft: 16,
        WebkitBoxFlex: '1',
        flex: '1'
    },
    mediaFooter: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        '& button, & a': {
            marginBottom: '20px'
        },
        '&:after': {
            display: 'table',
            content: '" "',
            clear: 'both'
        }
    },
    limitText: {
        width: '38vw',
    },
    image: {
        width: 200,
        height: 160,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    favorite: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: "#ffffff"
    },
    Rectangle: {
        //width: "100px",
        //height: "32px",
        //margin: "80px 0 20px 200px",
        width:"100px",//need to be fix
        minHeight: 32,
        padding: 3,
        backgroundColor: "00d04c",
        color: "00d04c"
    },
    root: {
        width: '100%',
    }
};

const useStyles = makeStyles(styles);

export default function PathwayCard(props) {
    const {
        pathLink,
        avatar,
        avatarAlt,
        title,
        location,
        miles,
        innerMedias,
        distance,
        favorite,
        ...rest
    } = props;
    const classes = useStyles();
    const [checked, setChecked] = React.useState(favorite);
    const handleChange = () => {
        setChecked(!checked);
    };
    return (
        <div>
            <Grid container className={classes.gridcontain} spacing={2} spacing={2} direction='row'
                justify='center'
                alignItems='center'
            >
                <Grid item className={classes.gridItem}  xs={4}>
                    <ButtonBase >
                        <img className={classes.img} src={avatar} alt={avatarAlt} />
                        <Checkbox
                            data-testid='checkFavorite'
                            checked={checked}
                            onChange={handleChange}
                            icon={<FavoriteBorder fontSize={'small'} />}
                            checkedIcon={<Favorite fontSize={'small'} />}
                            className={classes.favorite}
                            name='favorite' />
                    </ButtonBase>
                </Grid>
                <Grid item xs={5}>
                    {title !== undefined ? (
                        <h3 className={`${classes.mediaHeading} ${classes.limitText}`}>{title}</h3>
                    ) : null}
                    <div className={`${classes.mediaFooter} ${classes.limitText}`}>{location}<br /><small>全程約 {miles} km</small></div>
                    {innerMedias !== undefined
                        ? innerMedias.map(prop => {
                            return prop;
                        })
                        : null}
                </Grid>
                <Grid item xs={3}>
                    <Button
                        backgroundColor='00d04c'
                        fullWidth
                        size='small'
                        variant='outlined'
                        className={classes.Rectangle}
                        startIcon={<LocationOnIcon />}
                    >
                        {miles} km
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
            </Grid>
        </div>
    );
}

PathwayCard.defaultProps = {
    pathLink: '#pablo',
    avatarAlt: '...'
};

PathwayCard.propTypes = {
    pathLink: PropTypes.string,
    avatar: PropTypes.string,
    avatarAlt: PropTypes.string,
    title: PropTypes.node,
    location: PropTypes.node,
    miles: PropTypes.node,
    innerMedias: PropTypes.arrayOf(PropTypes.object)
};
