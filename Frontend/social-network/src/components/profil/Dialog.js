import React from 'react';
import {Card , Container} from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from "../profil/ava1.png";
import Ava from '@material-ui/core/Avatar';
import { BiPlus } from "react-icons/bi";
import {Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { List,Button} from 'semantic-ui-react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function ScrollDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen('paper')}  style={{ color: "white" , backgroundColor :"white"}}> <Ava  src={Avatar} style={{ height: '80px', width: '80px' }}/></Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Profil </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <Container style={{width:"400px"}}>
          <Ava  src={Avatar} style={{ height: '200px', width: '200px' , marginLeft:"20%"}}/>
          <List divided relaxed>
             <List.Item>
             <List.Icon name='at' size='large' verticalAlign='middle' />
                 <List.Content>
                   <List.Header as='a'>{props.email}</List.Header>
                 </List.Content>
             </List.Item>

             <List.Item>
             <List.Icon name='info circle' size='large' verticalAlign='middle' />
                 <List.Content>
                   <List.Header as='a'> {props.firstName} {props.lastName}</List.Header>
                 </List.Content>
             </List.Item>
            
             <List.Item>
             <List.Icon name='birthday cake' size='large' verticalAlign='middle' />
                 <List.Content>
                   <List.Header as='a'>{props.birthDay}</List.Header>
                 </List.Content>
             </List.Item>
            
  </List>
  </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
