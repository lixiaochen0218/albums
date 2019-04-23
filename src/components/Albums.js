import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const USER_LIST_URL = `http://jsonplaceholder.typicode.com/users`;
const ALBUMS_LIST_URL = `http://jsonplaceholder.typicode.com/albums`;

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}


class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.users = [];
  }

  componentDidMount() {
    fetch(USER_LIST_URL)
      .then(res => res.json())
      .then(json => {
        this.users = json.map(user => {
          user.albums = [];
          return user;
        })
        //   console.log(this.users)
        this.setState({ users: this.users });
        fetch(ALBUMS_LIST_URL)
          .then(res => res.json())
          .then(albums => {
            this.mapAlbumsWithUser(albums);
            // console.log(this.users);
            this.setState({ users: this.users });
          })
      })

  }

  mapAlbumsWithUser(albums){
    for (let i = 0; i < albums.length; i++) {
      let index = albums[i].userId - 1
      this.users[index].albums.push(albums[i]);
    }
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography className='title' variant="h6" color="inherit">
              Albums
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <Grid container
            className='GridList'
            spacing={24}
            alignItems='baseline'
            direction='row'
            justify='space-evenly'>
            {this.state.users.map((value) => {
              return (
                <Grid className='GridListItem' key={value.id} item xs={12} sm={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {value.name}
                      </Typography>
                      <Typography color="textSecondary" gutterBottom>
                        User ID : {value.id}
                      </Typography>
                      <List component="nav" className='List'>
                        {value.albums.map(a => (
                          <ListItemLink className='ListItem' key={a.id} href={`/photos/${a.id}`}>
                            <ListItemText primary={a.title} />
                          </ListItemLink>
                        )
                        )}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Albums;
