import React, { Component } from 'react';
import './../App.css';
import Header from './Header' 
import SearchForm from './SearchForm' 
import UserTable from './UserTable' 
import AddUser from './AddUser' 
import DataUser from './dataJSON.json'
const uuidv1 = require('uuid/v1');
class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
        isShowAddNewForm:false,
        // data: DataUser,      
        data: [], //LocalStorage
        searchData : '',
        editUserStatus: false,
        userEditObject:{}
    } 
}
//SEARCH 
getTextSearch = (dulieu) =>{
  // console.log("Dữ liệu nhận đc là "+ dulieu);
      this.setState({
        searchData:dulieu
  }) 
}
//ADD NEW ONE
setStateForAddNew = () =>{
  this.setState({isShowAddNewForm : !this.state.isShowAddNewForm});
}
createNewUserData = (name, tel,permission) => {
  //Get information
  var User = {};
  User.id = uuidv1();
  User.name = name;
  User.tel = tel;
  User.permission = parseInt(permission);
  //Add to JSON
  var users = this.state.data;
      users.push(User);
 this.setState({
   data:users
 });
 localStorage.setItem('userData',JSON.stringify(users)) // LOCALSTORAGE
}
//EDIT USER
editUser = (user) => {
  
  this.setState({
    userEditObject : user
  });
  
}
changeEditUserStatus = ()=>{
  this.setState({
    editUserStatus : !this.state.editUserStatus
  });
 
}
getUserEditInfoApp = (info) =>
{
  this.state.data.forEach((value,key) => {
      if(value.id === info.id)
          {
            value.name= info.name;
            value.tel = info.tel;
            value.permission = info.permission;

          }
          localStorage.setItem('userData',JSON.stringify(this.state.data)) // LOCALSTORAGE
  })
  
}
//XÓA
getUserDelInfoApp = (info) =>{

    
     var tempData = this.state.data.filter(item => item.id !== info);
      this.setState({
        data : tempData
      });
      localStorage.setItem('userData',JSON.stringify(tempData)) // LOCALSTORAGE
}
// LOCALSTORAGE
  
  componentWillMount() {
    if(localStorage.getItem('userData')===null)
      localStorage.setItem('userData',JSON.stringify(DataUser))
    else {
      var temp = JSON.parse(localStorage.getItem('userData'));
          this.setState({
            data: temp
          });
    }

  }
  
  render() {
    var ketqua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchData)!==-1)
        ketqua.push(item); 
    })
    //LocalStorage CODE
    

    return (
      <div>
                      <Header/>
        <div className="search-form">
          <div className="container">
                  <div className="row">
                    <SearchForm 
                    getUserEditInfoApp = {(info)=>{
                      this.getUserEditInfoApp(info)
                    }}
                    userEditObject = {this.state.userEditObject}
                    changeEditUserStatus = {()=>this.changeEditUserStatus()}
                    editUserStatus = {this.state.editUserStatus}
                    checkConnProps = {(dl) => this.getTextSearch(dl) }/>
                    <div className="col-12"><hr /></div>
                    <UserTable 
                        getUserDelInfoApp = {(info)=>{
                      this.getUserDelInfoApp(info)
                    }}
                    changeEditUserStatus = { () => {
                      this.changeEditUserStatus()
                    }}
                    dataUser={ketqua} editFun={(user)=> this.editUser(user)}/>
                    <AddUser 
                    thaydoiState={()=>{this.setStateForAddNew()}} 
                    checkState={this.state.isShowAddNewForm}
                    addUser ={(name, tel,permission)=>this.createNewUserData(name, tel,permission)}
                    />
                  </div>
          </div>
        </div>
      
      </div>
    );
  }
}

export default App;
