import React from 'react';
import './styles.css';

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { posts: undefined };
  }
  
  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(result => {
        this.setState({ posts: result });
      });
  }

  render() {
    const { posts = [] } = this.state;

    return (
      <div className="home">
      {
        posts.map(item => <span>{item.title}</span>)
      }
      </div>
    );
  }
}