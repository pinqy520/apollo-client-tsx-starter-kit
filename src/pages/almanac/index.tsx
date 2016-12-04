import * as React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const styles = require('./index.scss')


@graphql(gql`
query Almanacs {
  almanacs(timestamp: 0){
    id
    text
    type
    timestamp
  }
}
`)
export class AlmanacPage extends React.Component<any, any> {
  render() {
    const { almanacs } = this.props.data
    return (
      <div className={styles.container}>
        AlmanacPage here
        {
          JSON.stringify(almanacs, 2 as any)
        }
      </div>
    )
  }
}



