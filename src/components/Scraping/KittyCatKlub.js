import React from 'react';

import axios from 'axios';

export default class KittyCatKlub extends React.Component {
    state = {
      info: []
    }

    componentDidMount() {
        axios.get(`https://www.kittycatklub.net/music/`)
          .then(res => {
            const info = res.data;
            this.setState({ info });
          })
      }

      render() {
        return (
          <ul>
            { this.state.info.map(info => <li>{info.name}</li>)}
          </ul>
        )
      }
    }