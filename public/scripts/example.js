var data = [
  {fruitName: "Apple", color: "green"},
  {fruitName: "Orange",color: "yellow"},
  {fruitName: "grape", color:"purple"},
  {fruitName: "banana", color:"yellow"},
  {fruitName: "pear", color:"yellow"}
];

var MainWrapper = React.createClass({
  getInitialState: function(){
    return {
        data:[],
        itemCheck: []
    }
  },
    handleSearch: function(queryString){
        /*Seach is based on the all data source*/
      var fruitInfo = this.props.data;
      var result = [];
      fruitInfo.map(function(fruit){
         if (fruit.fruitName === queryString || fruit.color === queryString){
            result.push(fruit);
         }
      }); 

      this.setState({data:result});    
    },
    handleAdd: function(fruit){
      var fruits = this.state.data;
      var newFruits = fruits.concat([fruit]);
      this.setState({data: newFruits});
      data.push(fruit);  
    },
  handleItemCheck: function(fruitCheckStatus){
     var changedFruitName = fruitCheckStatus.fruitName;
     var status = fruitCheckStatus.isChecked;
     var currentStatus = this.state.itemCheck;

     console.log(currentStatus);
     this.props.data.map(function(fruit, index){
        if (fruit.fruitName == changedFruitName){
          
        }
     })
  },

  componentDidMount: function(){
      this.setState({data:data,itemCheck: [false, false, false]});
  },
  render: function(){
      return (
      <div className="mainWrapper">
    <TableAction handleAdd = {this.handleAdd} handleSearch = {this.handleSearch} />
    <TableBox tableHead = {this.props.head} 
              data = {this.state.data} 
              itemCheckUpdate={this.handleItemCheck}
    />
    </div>
    )
  }
});

var TableAction = React.createClass({
    render: function(){
        return (
      <div className="tableAction"> 
        <TableAdd onAddSubmit={this.props.handleAdd} />
        <TableSearch onSearchSubmit={this.props.handleSearch} />
        <TableEdit  />
        <TableDelete />
      </div>
      )
    } 
});

var TableSearch = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();
        var queryString = this.refs.queryString.value.trim();

        if(!queryString){
          return;
        }
     this.props.onSearchSubmit(queryString);

        this.refs.queryString.value = '';

        return;
    },

    render: function(){
      return (
      <div className="pull-right search" onSubmit={this.handleSubmit}>
         <input type="text" placeholder="Search" ref="queryString" />

         <button id="searchSubmit" className="btn btn-default btn-sm">Search</button> 
         </div>
      )
    }
})

var TableAdd  = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();
        var fruitName  = this.refs.fruitName.value.trim();
        var color = this.refs.color.value.trim();

        if(!fruitName || !color){
          return;
        }
        this.props.onAddSubmit({fruitName: fruitName, color:color});

        this.refs.fruitName.value = '';
        this.refs.color.value = '';

        return;
    },

    render: function(){
      return (
      <button className="btn btn-success" onClick={this.handleSubmit}>Add</button>    
      )
    }
});

var TableEdit  = React.createClass({

    render: function(){
      return (
        <button className="btn btn-warning" >Edit</button>    
      )
    }
});
var TableDelete  = React.createClass({

    render: function(){
      return (
      <button className="btn btn-danger" >Delete</button>    
      )
    }
});




var TableBox = React.createClass({
 propTypes: {
     tableHead: React.PropTypes.array.isRequired,
  },
  render: function (){
    return (
      <table className="table table-bordered table-striped table-hover">
        <TableHead tableHead={this.props.tableHead} />
        <TableContent data = {this.props.data} itemCheckUpdate={this.props.itemCheckUpdate}/>
      </table>
    )
  }
});


var TableHead  = React.createClass({
  render: function (){
    var headNodes = this.props.tableHead.map(function (headInfo, i){
      return <th key={"head"+i}>{headInfo}</th>
    })

    return (
      <thead className="tableHead">  
        <tr>
          <input type="checkbox"  name="selectAll" />
          {headNodes}
        </tr>
      </thead>
    )
  }
});
var TableContent = React.createClass({

    render: function(){
        var rowNodes = this.props.data.map(function(tableList, i){
             return (
                 <RowNode fruitName = {tableList.fruitName} 
                          color={tableList.color} 
                          key={i} 
                           />
             )
         });

      return (
          <tbody className="tableBody">
              {rowNodes}
         </tbody>
      )
    }
})


var RowNode = React.createClass({
    getInitialState: function() {
        return {
        isChecked: false
      };
    },
    toggleChange: function() {
        console.log(this.state.isChecked);
      this.setState({
        isChecked: !this.state.isChecked});
      this.props.itemCheckUpdate({isChecked: this.state.isChecked, fruitName: this.props.fruitName});
   },

    render: function(){
      return (
       <tr>
        <input type = "checkbox" name="item" checked={this.state.isChecked} onChange={this.toggleChange} />
        <td>{this.props.fruitName}</td>
        <td>{this.props.color}</td>  
       </tr>
      )
    }
});


var popUpBox = React.createClass({
   render: function(){
    return (
        <div className="popUp"> 
        
        </div>
        )
   }
});

ReactDOM.render(
  <MainWrapper head={["fruitName", "color"]} data = {data} />,
  document.getElementById('content')

);



