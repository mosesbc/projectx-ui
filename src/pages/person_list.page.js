import { Typography } from '@material-ui/core'
import React, { useContext, useEffect } from 'react'
import BasicTable from '../components/basic-table.component'
import { useClientsContext } from '../services/clients.service'
import personList from '../test-data/person-list'

export const PersonListPage = () => {

  const { clients,fetchClients } = useClientsContext()

  useEffect(() => {
    fetchClients()
  },[])
  
  return (
    <>
    <BasicTable personList={personList} />
      {clients.map(client => <Typography key={client.id}>{client.id}</Typography>)}
    </>
  )
}
