import React, { Fragment, useState, useEffect } from "react";
import { makeStyles,createMuiTheme,ThemeProvider } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import SearchBar from "../../components/SearchBar/SearchBar";
import TitleBar from "../../components/TopBar/TitleBar";
import CollectionList from '../../components/Lists/CollectionList';
import Navigation from "../../components/Bottom/Navigation";
import axios from "axios";
import Container from '@material-ui/core/Container';

const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
      primary:{
        main:'#00d04c',
      },
    },
  });

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow:1,
    },
    quitSearchText: {
        fontFamily: "NotoSansCJKtc",
        fontWeight:'bold',
        width: "100%",
        textAlign: "left",
        lineHeight: "56px",
    },
    footer: {
        boxShadow: " 0 0 3px 0 rgba(0, 0, 0, 0.2)",
        backgroundColor: "white",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        fontFamily: "NotoSansCJKtc",
    },
}));

const api = axios.create({
    baseURL: "https://go-hiking-backend-laravel.herokuapp.com/",
    headers: {
        "X-Secure-Code": "12345678",
    },
});

function SearchPage() {
    const classes = useStyles();
    const [searchResult, setSearchResult] = useState([]);
    const collectionData = async () => {
        const Data = await api.get("api/collection");
        setSearchResult(Data.data);
    };
    useEffect(() => {
        collectionData();
    }, []);

    return (
        <>
            <div className={classes.root}>
            <ThemeProvider theme={lightTheme}>
            <TitleBar title="步道搜尋" />
            <Container maxWidth="sm">
                <SearchBar />
                <div className={classes.quitSearchText}>快速搜尋</div>

                <Grid container spacing={2}>
                    <CollectionList data={searchResult}></CollectionList>
                </Grid>
            </Container>
            <Navigation/>
            </ThemeProvider>
            </div>
        </>
    )
}

export default SearchPage;
