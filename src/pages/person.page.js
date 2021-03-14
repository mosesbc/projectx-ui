import React from 'react'
import BasicTable from '../components/basic-table.component'
import personList from '../test-data/person-list'

export const PersonPage = () => {


  
  return (
    <BasicTable personList={ personList }/>
  )
}
