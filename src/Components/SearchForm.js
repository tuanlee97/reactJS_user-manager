import React, { Component } from 'react';
import EditUser from './EditUser' 
class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValueSearch :'',
            userObj :{}
        }
    }
    
    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValueSearch:event.target.value
        });
        // this.props.checkConnProps(this.state.tempValueSearch);
    }
    getUserEditInfo = (info) => {
        this.setState({
            userObj : info
        });
        this.props.getUserEditInfoApp(info)
    }
    isShowEditForm = () => {
        if(this.props.editUserStatus === true)
            return   <EditUser 
            getUserEditInfo = {(info) => this.getUserEditInfo(info)      
        }
            userEditObject = {this.props.userEditObject}
            changeEditUserStatus = { ()=>this.props.changeEditUserStatus()}/>;
    }
    render() {
      
        
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                    <input onChange={(event)=>{this.isChange(event)}} type="text" className="form-control"  aria-describedby="helpId" placeholder="Nhập từ khóa..." style={{width: '665px'}} />
                    <div className="btn btn-info " onClick={()=>this.props.checkConnProps(this.state.tempValueSearch)}>Tìm</div>
                    </div>
                </div>
                <div>
               {this.isShowEditForm()}
                </div>
                </div>

        );
    }
}

export default SearchForm;