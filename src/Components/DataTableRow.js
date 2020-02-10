import React, { Component } from 'react';

class DataTableRow extends Component {
   
    setText = (permission) => {
     if(permission===1) return "Moderator";
     else if(permission===2) return "Leader";
     else  return "Employeer";
               
    }
    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }
    deleteButtonClick = (userId) => {
       this.props.deleteFun(userId)
    }
    render() {
        return (
            <tr>
            <td>{this.props.stt+1}</td>
            <td>{this.props.name}</td>
            <td>{this.props.tel}</td>
            <td>{this.setText(this.props.per)}</td>
            <td>
                <div className="btn-group">
                    <div className="btn btn-warning sua" onClick = {() => this.editClick()}><div className="fa fa-edit"> Sửa</div></div>
                    <div className="btn btn-danger xoa" onClick = {(userId) => this.deleteButtonClick(this.props.id)}><div className="fa fa-trash"> Xóa</div></div>
                </div>
                
            </td>
        </tr>
        );
    }
}

export default DataTableRow;