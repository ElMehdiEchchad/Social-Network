import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import "./style.css";

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark ">
        <div class="col-10">
        <Link to="/" className="navbar-brand">Social netwok application </Link> 
        </div>
        <div class="col-2">
        <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <MenuItem>
              <Link to="/chat" className="nav-link">
                    <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                         <MailIcon />
                      </Badge>
                   </IconButton>
                </Link>
                <Link to="/myprofil" className="nav-link">
                <IconButton aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true"  color="inherit"  >
                     <ExitToAppIcon />
                   </IconButton>
                </Link>
                <Link to="/myprofil" className="nav-link">
                <IconButton aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true"  color="inherit"  >
                        <AccountCircle />
                   </IconButton>
                </Link>
                </MenuItem>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}