import React,{useState,useRef} from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


/** Table cell styles */
const CustomizedTableCell = withStyles((theme)=>({
    head:{
        backgroundColor:theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body:{
        fontSize:14,
    },

}))(TableCell);

/** Table Row styles */
const CustomizedTableRow = withStyles((theme)=>({
    root:{
        '&:nth-of-type(even)':{
            backgroundColor: theme.palette.action.hover,
        },
    }
}))(TableRow);

const useStyle = makeStyles({
    table:{
        minWidth: 700,
    }
});



const  Notes = () => {
    const classes = useStyle();
    const [searchKey,setSearchKey] = useState('');
    const objList = [
        {
            user_id: "456",
            name: "Mock Holliday",
            email: "mock.holliday@example.com",
            birthdate: "1971-08-01T00:00:00+00:0",
            type: 'Actor'
        },
        {
            user_id: "123",
            name: "Check aleot",
            email: "all.holliday@example.com",
            birthdate: "1856-08-879540:00:00+00:0",
            type: 'Hero'
        }
    ];
    const [newNote, setNewNote] = useState(['test note']);
    const notInputRef = useRef();
    
const headingsList = ['User Id',"Name","email","birthdate","User Type"];

    return (
        <TableContainer component = {Paper}>
            <Table className = {classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                       <CustomizedTableCell colSpan={5}>Esse incididunt est incididunt enim incididunt quis dolor.</CustomizedTableCell > 
                    </TableRow>
                </TableHead>
                <TableBody>
                    <CustomizedTableRow style = {{backgroundColor:'#fff'}}>
                        <CustomizedTableCell colSpan={3} >
                            <TextField fullWidth="true"
                                variant = 'outlined'
                                onChange = {(event)=>setSearchKey(event.target.value)}
                                value = {searchKey}
                            ></TextField>
                        </CustomizedTableCell>
                        <CustomizedTableCell colSpan={2}>
                            <Button variant = "contained" onClick = {()=>setSearchKey('')}>Clear</Button>
                        </CustomizedTableCell>
                    </CustomizedTableRow>
                    
                    <CustomizedTableRow>
                        { 
                            headingsList.map(v =><CustomizedTableCell key = {v} style = {{fontWeight:'600'}}>{v}</CustomizedTableCell>)
                        }
                        
                    </CustomizedTableRow>
                    {
                        objList.filter(
                            obj=>
                            {
                                const str = obj.user_id.toLowerCase()+obj.name.toLowerCase()+obj.email.toLowerCase()
                                            +obj.birthdate.toLowerCase()+obj.type.toLowerCase();
                                if(str.includes(searchKey.toLowerCase())){
                                    return obj;
                                }
                            }
                            
                        ).map(
                            (data,index)=>{
                                //console.log("MAP index:",data.name,"Object:",index);
                               return <CustomizedTableRow key = {index+data.name}>
                                   <CustomizedTableCell>{data.user_id}</CustomizedTableCell>
                                    <CustomizedTableCell>{data.name}</CustomizedTableCell>
                                    <CustomizedTableCell>{data.email}</CustomizedTableCell>
                                    <CustomizedTableCell>{data.birthdate}</CustomizedTableCell>
                                    <CustomizedTableCell>{data.type}</CustomizedTableCell>
                                </CustomizedTableRow>
                            }
                        )
                    }
                    {
                        /** If it has only array values */
                        newNote.filter(note=>note.toLowerCase().includes(searchKey.toLowerCase()))
                        .map(n=>{
                            return <CustomizedTableRow key = {n}>
                                <CustomizedTableCell colSpan={5}>{n}</CustomizedTableCell>
                            </CustomizedTableRow>}
                            )
                    }
                </TableBody>
                <TableFooter>
                <CustomizedTableRow>
                    <CustomizedTableCell colSpan = {3}>
                        <TextField fullWidth="true"
                                    variant = 'outlined'
                                    inputRef = {notInputRef}
                        ></TextField>
                    </CustomizedTableCell>
                    <CustomizedTableCell colSpan={2}>
                    <Button 
                    variant = 'contained'
                    onClick ={()=>{
                            //setNote({note:notInputRef.current.value});
                            
                                setNewNote([...newNote,notInputRef.current.value]);
                                console.log(newNote)
                                //console.log(notInputRef.current.value);
                            
                            notInputRef.current.value = '';

                            }} >Submit</Button>
                    </CustomizedTableCell>
                </CustomizedTableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}
export default  Notes;