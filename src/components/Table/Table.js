import React, { useState, useCallback } from 'react'
import { withRouter } from 'react-router'
import './Table.css'
import Button from '@material-ui/core/Button'
import app from '../../config/base'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'

// import { useDispatch, useSelector } from 'react-redux'

const columns = [
  { id: 'view', label: '', minWidth: 120 },
  { id: 'edit', label: '', minWidth: 150 },
  {
    id: 'empID',
    label: 'empID',
    minWidth: 170,
    align: 'left',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'empName',
    label: 'empName',
    minWidth: 170,
    align: 'left',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'empActive',
    label: 'empActive',
    minWidth: 170,
    align: 'left',
    format: value => value.toFixed(2),
  },
  {
    id: 'empDepartment',
    label: 'empDepartment',
    minWidth: 170,
    align: 'left',
    format: value => value.toFixed(2),
  },
  { id: 'delete', label: '', minWidth: 100 },
]

const rows = [
  {
    empID: 1,
    empName: 'Julia',
    empActive: 'Yes',
    empDepartment: 'Development',
  },
  {
    empID: 1,
    empName: 'Julia',
    empActive: 'Yes',
    empDepartment: 'Development',
  },
  {
    empID: 1,
    empName: 'Julia',
    empActive: 'Yes',
    empDepartment: 'Development',
  },
  {
    empID: 1,
    empName: 'Julia',
    empActive: 'Yes',
    empDepartment: 'Development',
  },
  {
    empID: 1,
    empName: 'Julia',
    empActive: 'Yes',
    empDepartment: 'Development',
  },
  {
    empID: 1,
    empName: 'Julia',
    empActive: 'Yes',
    empDepartment: 'Development',
  },
  {
    empID: 1,
    empName: 'Julia',
    empActive: 'Yes',
    empDepartment: 'Development',
  },
  {
    empID: 1,
    empName: 'Julia',
    empActive: 'Yes',
    empDepartment: 'Development',
  },
  {
    empID: 1,
    empName: 'Julia',
    empActive: 'Yes',
    empDepartment: 'Development',
  },
  {
    empID: 1,
    empName: 'Julia',
    empActive: 'Yes',
    empDepartment: 'Development',
  },
  {
    empID: 1,
    empName: 'Julia',
    empActive: 'Yes',
    empDepartment: 'Development',
  },
  {
    empID: 1,
    empName: 'Julia',
    empActive: 'Yes',
    empDepartment: 'Development',
  },
  {
    empID: 1,
    empName: 'Julia',
    empActive: 'Yes',
    empDepartment: 'Development',
  },
  {
    empID: 1,
    empName: 'Julia',
    empActive: 'Yes',
    empDepartment: 'Development',
  },
]

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 500,
  },
})

// const tableDetails = useSelector(state => state.tableDetails)
// const dispatch = useDispatch()

const TableWrapper = ({ history }) => {
  const handleSignOut = useCallback(
    async event => {
      event.preventDefault()

      try {
        await app.auth().signOut()
        history.push('/login')
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )

  const handleView = () => {}

  const handleEdit = () => {}

  const handleDelete = () => {}

  const classes = useStyles()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  return (
    <div>
      <div className='Button_container'>
        <Button variant='contained' color='primary' onClick={handleSignOut}>
          Logout
        </Button>
      </div>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.code}
                    >
                      {/* {columns.map(column => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        )
                      })} */}
                      <TableCell>
                        <Button
                          variant='contained'
                          color='primary'
                          onclick={handleView}
                        >
                          View
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant='contained'
                          color='secondary'
                          onClick={handleEdit}
                        >
                          Edit
                        </Button>
                      </TableCell>
                      <TableCell>{row.empID}</TableCell>
                      <TableCell>{row.empName}</TableCell>
                      <TableCell>{row.empActive}</TableCell>
                      <TableCell>{row.empDepartment}</TableCell>
                      <TableCell>
                        <Button
                          variant='contained'
                          color='default'
                          onClick={handleDelete}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component={TableContainer}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
}

export default withRouter(TableWrapper)
