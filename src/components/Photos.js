import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Dialog from '@material-ui/core/Dialog';

const BASE_PHOTO_URL = `http://jsonplaceholder.typicode.com/photos?albumId=`

const divStyle = {
  bg: {
    backgroundColor: '#212121',
  },
  gridList: {
    width: 150,
    height: 150,
  },
};


class Photos extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
    this.state = { photos: [], open: false, url: '' };
    this.title = 'Photos';
    this.aid = props.match.params.aid;
  }

  componentDidMount() {
    fetch(BASE_PHOTO_URL + this.aid)
      .then(res => res.json())
      .then(json => this.setState({ photos: json }));

  }

  handleClickOpen = (url) => {
    this.setState({ open: true, url: url });
  };

  handleClose = () => {
    this.setState({ open: false, url: '' });
  };

  render() {
    return (
      <div className="Photos" style={divStyle.bg}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" component={Link} to="/albums">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" >
              {this.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <GridList cellHeight={150} cols={10} spacing={8}>
          {this.state.photos.map(p => (
            <GridListTile className='GridListTiles' key={p.id}>
              <img className='image' src={p.thumbnailUrl} alt={p.title} onClick={() => this.handleClickOpen(p.url)} />
              <GridListTileBar
                // title={tile.title}
                subtitle={<span>{p.title}</span>}
              />
            </GridListTile>
          ))}
        </GridList>
        <Dialog open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          maxWidth='md'
        >
          <img height={600} width={600} src={this.state.url} alt={this.state.url} />
        </Dialog>
      </div>
    );
  }
}

export default Photos;