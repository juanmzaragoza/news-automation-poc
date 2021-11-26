import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Grid,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import useStyles from "./style";

const PublicRoute = ({ component: Component, path, ...rest }) => {
  const classes = useStyles();

  const footers = [
    {
      title: `Company`,
      description: [
        { name: `About Us`, link: "#" },
        { name: `Services`, link: "#" },
        {
          name: `Contact`,
          isAnchorTag: true,
          link: "mailto:juanmanuelzar@gmail.com",
        },
      ],
    },
    {
      title: `Legal`,
      description: [
        { name: `Privacy Policy`, link: "#" },
        { name: `Terms of Use`, link: "#" },
        { name: `Cookies policy`, link: "#" },
      ],
    },
  ];

  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Atacana - News Automation
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box
        component={"main"}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "85vh",
          overflow: "auto",
        }}
      >
        <div style={{ paddingTop: "20px" }}>
          <Route
            path={path}
            render={(props) => <Component {...props} />}
            {...rest}
          />
        </div>
      </Box>
      <div className={classes.footer}>
        <Grid container justify="space-evenly">
          {footers.map((footer) => (
            <Grid
              item
              xs={6}
              sm={6}
              key={footer.title}
              className={classes.columns}
            >
              <Typography variant="h6" style={{ color: "white" }} gutterBottom>
                {footer.title}
              </Typography>
              <ul className={classes.columns}>
                {footer.description.map((item) => (
                  <li key={item.name}>
                    {item.isAnchorTag ? (
                      <Link
                        variant="subtitle2"
                        style={{ color: "white" }}
                        href={`${item.link}?Subject=Help`}
                        target="_top"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <Link
                        variant="subtitle2"
                        style={{ color: "white" }}
                        rel="noopener noreferrer"
                        {...{ component: NavLink, to: item.link }}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default PublicRoute;
