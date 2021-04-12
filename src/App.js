
import './App.css';
import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import Conversation from './components/Conversation';
import Notes from './components/Notes';

const App = () =>{
  const [conversation,setConversation] = useState(false);
  const [notes,setNotes] = useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }));
  
  const classes = useStyles();
    return (
      <>
       <CssBaseline />
       <Container maxWidth = "md" style = {{padding:'10px',}}>
         <Paper style = {{padding:'10px'}}>
            <div className = {classes.root}>
              <Button 
                variant = {`${conversation?'contained':'outlined'}`}
                style = {conversation?{borderBottom:"1px solid red"}:{}}
                onClick={()=>{
                  setNotes(conversation);
                  setConversation(!conversation);
                  }}>Conversations Drafts</Button>
              <Button variant = {`${notes?'contained':'outlined'}`} 
                style = {notes?{borderBottom:"1px solid red"}:{}}
                onClick={()=>{
                  setConversation(notes);
                  setNotes(!notes)
                  }}>Notes</Button>
            </div>
            <Card>
              {
                conversation?<Card style = {{padding:'10px'}} ><Conversation /></Card>:
                <Card style = {{padding:'10px'}}><Notes /></Card>
              }
            </Card>

         </Paper>
       </Container>
      </>
    );
}

export default App;
