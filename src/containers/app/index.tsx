import * as React from 'react'

import { AlmanacPage } from '../../pages/almanac'

const styles = require('./index.scss')

export default class App extends React.Component<any, any> {
  render() {
    return (
      <div className={styles.container}>
        <AlmanacPage />
      </div>
    )
  }
}
