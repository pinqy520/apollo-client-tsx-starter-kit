import * as React from 'react'
import { ApolloClient, createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import { AlmanacPage } from '../../pages/almanac'
const styles = require('./index.scss')



const Client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:3000/graphql' })
})


export default class App extends React.Component<any, any> {
  render() {
    return (
      <ApolloProvider client={Client}>
        <div className={styles.container}>
          <AlmanacPage />
        </div>
      </ApolloProvider>
    )
  }
}
