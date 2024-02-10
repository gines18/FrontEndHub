import React from 'react'
import ReactDOM from 'react-dom'
import { Pane, Alert } from 'evergreen-ui'

function Alerty(){
return(
    <Pane>
      <Alert
        intent="none"
     
        isRemoveable="true"
        title="There are over 200 integrations available"
        marginBottom={32}
      />
      </Pane>
)

}

export default Alerty