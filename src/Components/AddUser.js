import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      name : "",
      tel: "" ,
      permission:""

    }
}
 
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value,
      
    });
   
    
    
}
    display_buttom_add = () => {
        if(this.props.checkState)
            return <div className="btn btn-block btn-outline-secondary"onClick={()=>{this.props.thaydoiState()}}> Đóng lại </div>
        else
            return <div className="btn btn-block btn-outline-info"onClick={()=>{this.props.thaydoiState()}}> Thêm mới </div>
    }
    display_form_add = () => {
        if(this.props.checkState)
            return (
                <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header">Thêm mới nhân viên</div>
                <form>
                  <div className="card-body text-primary ">
                    <div className="form-group">
                      <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="name"  aria-describedby="helpId" placeholder="Tên người dùng..." />
                    </div>
                    <div className="form-group">
                      <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="tel"  aria-describedby="helpId" placeholder="Số điện thoại..." />
                    </div>
                    <div className="form-group">
                      <select onChange={(event)=>this.isChange(event)} className="custom-select" name="permission" required>
                        <option value>Chọn quyền</option>
                        <option value={1}>Moderator</option>
                        <option value={2}>Leader</option>
                        <option value={3}>Employeer</option>
                      </select>
                    </div>
                    <div className="form-group  text-center">
                      <input className="btn btn-block btn-success" type="reset" onClick = {(name, tel,permission)=>this.props.addUser(this.state.name,this.state.tel,this.state.permission)} value="Thêm" />
                    </div>
                  </div>
                  </form>
                </div>
                
            )
            
    }
    render() {
     
      
        return (
            <div className="col-3">
                
                {this.display_buttom_add()}
                {this.display_form_add()}
         
          </div>
          
        );
    }
}

export default AddUser;