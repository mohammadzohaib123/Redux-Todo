import React, { Component } from 'react';
import TodoAction from '../Store/TodoAction'
import { connect } from 'react-redux';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Today from '@material-ui/icons/Today';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Update from '@material-ui/icons/Update';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },margin: {
      margin: theme.spacing.unit,
    },
  });

class Todo extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { taskInput: '',buttonName: "Add", buttonHandler: this.addHandler }
    }
    inputHandler = (ev) =>{ console.log("In input handler")
        this.setState({taskInput:ev.target.value});}

    addHandler = () => {
        this.props.add({  task: this.state.taskInput })
        this.setState({ taskInput: '' })
    }
    updateHandler = key => {
        this.setState({ buttonName: "Update",
        buttonHandler: () => {
            this.props.update(key,this.state.taskInput);
            this.afterUpdate()},
        taskInput:   this.props.taskArray[key].task })
    }
    afterUpdate=()=>{
        this.setState({buttonName:"Add",buttonHandler:this.addHandler,taskInput:""})
    }
    render()
    {
        const { classes } = this.props;
        return(
            <div>
                <AppBar position="static" color="default" style={{ backgroundColor: "#594DC7",marginTop:-7,marginLeft:-7,width:'104%' }}>
                  <Toolbar>
                    <Typography variant="title" color="inherit" style={{ color: "#FFF" ,fontSize:"28px"}}>
                     Todo App
                    </Typography>
                  </Toolbar>
                </AppBar>
                <div>
                    <Grid container direction="row" style={{ display: "flex", justifyContent: "space-around" }} >
                        <Grid item xs={12} md={12} >
                            <Paper  style={{paddingBottom: '20px', marginTop: 25, marginBottom: 25, marginRight: 20, marginLeft: 20}}
                            className={classes.root} > 
                            <Grid item>
                              <Today style={{marginBottom:-10}} />
                              <TextField onChange={this.inputHandler} value={this.state.taskInput} id="input-with-icon-grid" label="What Needs to be done?" style={{width:'90%',marginLeft:30}}/>
                            </Grid>
                            <Grid item>
                            <Button onClick={this.state.buttonHandler} value={this.state.buttonName} variant="contained" color="primary" className={classes.button} style={{marginTop:20,marginLeft:50}}>
                                  ADD TODO
                                </Button>
                            </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
                {/* <input type="text" onChange={this.inputHandler} value={this.state.taskInput} />
                <input type="submit" onClick={this.state.buttonHandler} value={this.state.buttonName}/> */}
                {/* <ul>
                    {this.props.taskArray.map((value, i) => {
                        return <li id={value.key} >{value}
                        <button onClick={()=>this.updateHandler(i)} >update</button> 
                        <button onClick={(e) => this.props.delete(i)} >delete</button></li>
                    })}
                </ul> */}
                <Grid container direction="row" style={{ display: "flex", justifyContent: "space-around" }} >
                    <Grid item xs={12} md={12} >
                        <List component="nav">
                            {this.props.taskArray.map((value, i) => {
                                 return  <ListItem id={value.key}>
                                    {value.task}
                                    <Button variant="contained" color="primary" onClick={()=>this.updateHandler(i)} className={classes.button} style={{ marginLeft: 100, }}>
                                        UPDATE
                                        <Update />
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={(e) => this.props.delete(i)} className={classes.button} style={{ marginLeft: 10,  }}>
                                        DELETE
                                        <DeleteIcon className={classes.rightIcon} />
                                    </Button>
                                </ListItem> })}
                        </List>
                    </Grid>
                </Grid>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return{
        taskArray: state.todo,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add: (value) => dispatch(TodoAction.add(value)),
        update:(id,inputValue)=> dispatch(TodoAction.update(id,inputValue)),
        delete: (id) => dispatch(TodoAction.delete(id)),
    }
}

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Todo));
