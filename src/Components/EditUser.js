import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.userEditObject.id,
      name : this.props.userEditObject.name,
      tel: this.props.userEditObject.tel ,
      permission:this.props.userEditObject.permission

    }
}
 
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value,
      
    });
}
saveButton = () =>{
  var info = {};
  info.id = this.state.id;
  info.name = this.state.name;
  info.tel = this.state.tel;
  info.permission = parseInt(this.state.permission);
  this.props.getUserEditInfo(info);
  
  this.props.changeEditUserStatus();
  
  

}
    render() {
   
      
      
        return (
            <form className="bg-warning border border-warning rounded pt-2 px-2" method = "post">
            <div className="form-row align-items-center">
              <div className="col-3">
                <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                <input name="name" onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.name} type="text" className="form-control mb-2" id="inlineFormInput"  />
              </div>
              <div className="col-3">
                <label className="sr-only" htmlFor="inlineFormInputGroup">Phone</label>
                <div className="input-group mb-2">
                
                  <input name="tel" onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.tel} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Điện thoại" />
                </div>
              </div>
              <div className="col-3">
                <label className="sr-only" htmlFor="inlineFormInputGroup">Quyền</label>
                <div className="input-group mb-2">
                
                <select onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.permission} className="custom-select" name="permission" required>
                        <option value={1}>Moderator</option>
                        <option value={2}>Leader</option>
                        <option value={3}>Employeer</option>
                      </select>
                </div>
              </div>
              <div className="col-3 text-center">
                <button type="button" onClick={()=> {this.saveButton()} }className="border btn btn-dark mb-2">Lưu</button>
              </div>
            </div>
          </form>
        );
    }
}

export default EditUser;