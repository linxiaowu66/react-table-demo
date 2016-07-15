var data = [
  {fruitName: "Apple", color: "green"},
  {fruitName: "Orange",color: "yellow"},
    {fruitName: "grape", color:"purple"},
    {fruitName: "banana", color:"yellow"},
    {fruitName: "pear", color:"yellow"}
];

var TableBox = React.createClass({
  getInitialState: function(){
    return {data:[]}
  },
    handleSearch: function(queryString){
      var fruitInfo = this.state.data;
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
  componentDidMount: function(){
      this.setState({data:data});
  },
  render: function (){
    return (
      <table className="tableBox">
        <TableCaption title={this.props.title} />
        <TableHead head={this.props.head} />
        <TableContent data = {this.state.data} />
        <TableSearch onSearchSubmit={this.handleSearch} />
        <TableAdd onAddSubmit={this.handleAdd} />
      </table>
    )
  }
})

var TableHead  = React.createClass({
  render: function (){
    var headNodes = this.props.head.map(function (headInfo, i){
      return <th key={"head"+i}>{headInfo}</th>
    })

    return (
      <thead className="tableHead">  
        <tr>
          {headNodes}
        </tr>
      </thead>
    )
  }
});

var TableCaption = React.createClass({

  render: function (){
    return (
      <caption>
        {this.props.title}
      </caption>
    )
  }
})

var TableContent = React.createClass({
  
    render: function(){
        var rowNodes = this.props.data.map(function(tableList, i){
             return (
                 <RowNode fruitName = {tableList.fruitName} color={tableList.color} key={i}>
                 </RowNode>
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
    render: function(){
      return (
       <tr>
        <td>{this.props.fruitName}</td>
        <td>{this.props.color}</td>  
       </tr>
      )
    }
})


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
      <form className="search" onSubmit={this.handleSubmit}>
         <input type="text" placeholder="Search Key Value" ref="queryString" />

          <input type="submit" value="Post" />
          </form>
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
      <form className="add" onSubmit={this.handleSubmit}>
         <input type="text" placeholder="fruit name" ref="fruitName" />
        <input type="text" placeholder="color" ref="color" />
          <input type="submit" value="Post" />
          </form>
      )
    }
})
ReactDOM.render(
    <TableBox head={["fruitName", "color"]} title="fruit information"/>,
  document.getElementById('content')
);
