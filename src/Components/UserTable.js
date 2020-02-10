import React, { Component } from 'react';
import DataTableRow from './DataTableRow'
class UserTable extends Component {
    deleteFun = (userId) => {
        this.props.getUserDelInfoApp(userId)
 
        
    }
    render() {
    
        
        
        return (

            <div className="col-9">
                            <table className="table table-striped table-hover">
                                <thead >
                                    <tr>
                                        <th>STT</th>
                                        <th>Họ và tên</th>
                                        <th>Điện thoại</th>
                                        <th>Quyền</th>
                                        <th>Thao tác</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    { 
                                        this.props.dataUser.map((value,key) => {
                            
                                            return(
                                                <DataTableRow
                                                deleteFun = { (userId)=>{
                                                    this.deleteFun(userId)
                                                }}
                                                changeEditUserStatus = {()=>this.props.changeEditUserStatus()}
                                                 editFunClick={(user)=> this.props.editFun(value)} id={value.id} stt={key} name={value.name} tel={value.tel} per={value.permission} key={key} />
                                            );
                                        })
                                    }
                               
                                    </tbody>
                            </table>
                        </div>
        );
    }
}

export default UserTable;