var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentBox = React.createClass({
  render: function (){
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data}/>
        <CommentForm />
      </div>
    )
  }
})

var CommentList = React.createClass({
  render: function (){
    var commentNodes = this.props.data.map(function (comment){
      return <CommentContent author={comment.author}>{comment.text}</CommentContent>
    })

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    )
  }
});

var CommentContent = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render: function (){
    return (
      <div>
        <h2 className = "commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    )
  }
})

var CommentForm = React.createClass({
  render: function (){
    return (
      <div className="commentForm">
        Hello I am a comment form
      </div>
    )
  }
});

ReactDOM.render(
  <CommentBox data={data}/>,
  document.getElementById('content')
);