import React from 'react';
import {Card ,Button} from 'react-bootstrap';
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
import { Grid} from 'semantic-ui-react'

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

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
      <Button onClick={handleClickOpen('paper')}  style={{ color: "white" , backgroundColor :"#F05945"}}>Add Friends</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">All users </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
        <Grid stackable columns={3}  >
  <Grid.Column>
  <Card style={{ alignItems:"center"}} >
           <Link to="/friendprofil">
           <Ava  src={Avatar} style={{ height: '80px', width: '80px' }}/>
           </Link>
           <Card.Body>
              <Card.Title>Random friend</Card.Title>
              <Row>
              <Button onClick={handleClose} style={{ marginLeft : "35%" , backgroundColor :"#5EAAA8"}}><BiPlus/> </Button>
              </Row>
           </Card.Body>
        </Card>
  </Grid.Column>
  <Grid.Column>
  <Card style={{ alignItems:"center"}} >
           <Ava  src={Avatar} style={{ height: '80px', width: '80px' }}/>
           <Card.Body>
              <Card.Title>Random friend</Card.Title>
              <Row>
              <Button onClick={handleClose} style={{ marginLeft : "35%" , backgroundColor :"#5EAAA8"}}><BiPlus/> </Button>
              </Row>
           </Card.Body>
        </Card>
  </Grid.Column>
  <Grid.Column>
  <Card style={{ alignItems:"center"}} >
           <Ava  src={Avatar} style={{ height: '80px', width: '80px' }}/>
           <Card.Body>
              <Card.Title>Random friend</Card.Title>
              <Row>
              <Button onClick={handleClose} style={{ marginLeft : "35%" , backgroundColor :"#5EAAA8"}}><BiPlus/> </Button>
              </Row>
           </Card.Body>
        </Card>
  </Grid.Column>
  <Grid.Column>
  <Card style={{ alignItems:"center"}} >
           <Ava  src={Avatar} style={{ height: '80px', width: '80px' }}/>
           <Card.Body>
              <Card.Title>Random friend</Card.Title>
              <Row>
              <Button onClick={handleClose} style={{ marginLeft : "35%" , backgroundColor :"#5EAAA8"}}><BiPlus/> </Button>
              </Row>
           </Card.Body>
        </Card>
  </Grid.Column>
  <Grid.Column>
  <Card style={{ alignItems:"center"}} >
           <Ava  src={Avatar} style={{ height: '80px', width: '80px' }}/>
           <Card.Body>
              <Card.Title>Random friend</Card.Title>
              <Row>
              <Button  style={{ marginLeft : "35%" , backgroundColor :"#5EAAA8"}}><BiPlus/> </Button>
              </Row>
           </Card.Body>
        </Card>
  </Grid.Column>
  <Grid.Column>
  <Card style={{ alignItems:"center"}} >
           <Ava  src={Avatar} style={{ height: '80px', width: '80px' }}/>
           <Card.Body>
              <Card.Title>Random friend</Card.Title>
              <Row>
              <Button  style={{ marginLeft : "35%" , backgroundColor :"#5EAAA8"}}><BiPlus/> </Button>
              </Row>
           </Card.Body>
        </Card>
  </Grid.Column>
  <Grid.Column>
  <Card style={{ alignItems:"center"}} >
           <Ava  src={Avatar} style={{ height: '80px', width: '80px' }}/>
           <Card.Body>
              <Card.Title>Random friend</Card.Title>
              <Row>
              <Button  style={{ marginLeft : "35%" , backgroundColor :"#5EAAA8"}}><BiPlus/> </Button>
              </Row>
           </Card.Body>
        </Card>
  </Grid.Column>     
</Grid>
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
