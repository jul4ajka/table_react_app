import React, { useState, useCallback, useEffect } from 'react'
import { withRouter } from 'react-router'
import './Table.css'
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
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

import { useDispatch, useSelector } from 'react-redux'
import getAllUsers from '../../store/actions/users'

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

// const rows = [
//   {
//     empID: 1,
//     empName: 'Julia',
//     empActive: 'Yes',
//     empDepartment: 'Development',
//   },
//   {
//     empID: 2,
//     empName: 'Julia',
//     empActive: 'Yes',
//     empDepartment: 'Development',
//   },
//   {
//     empID: 3,
//     empName: 'Julia',
//     empActive: 'Yes',
//     empDepartment: 'Development',
//   },
//   {
//     empID: 4,
//     empName: 'Julia',
//     empActive: 'Yes',
//     empDepartment: 'Development',
//   },
//   {
//     empID: 5,
//     empName: 'Julia',
//     empActive: 'Yes',
//     empDepartment: 'Development',
//   },
//   {
//     empID: 6,
//     empName: 'Julia',
//     empActive: 'Yes',
//     empDepartment: 'Development',
//   },
//   {
//     empID: 7,
//     empName: 'Julia',
//     empActive: 'Yes',
//     empDepartment: 'Development',
//   },
//   {
//     empID: 8,
//     empName: 'Julia',
//     empActive: 'Yes',
//     empDepartment: 'Development',
//   },
//   {
//     empID: 1,
//     empName: 'Julia',
//     empActive: 'Yes',
//     empDepartment: 'Development',
//   },
//   {
//     empID: 1,
//     empName: 'Julia',
//     empActive: 'Yes',
//     empDepartment: 'Development',
//   },
//   {
//     empID: 1,
//     empName: 'Julia',
//     empActive: 'Yes',
//     empDepartment: 'Development',
//   },
//   {
//     empID: 1,
//     empName: 'Julia',
//     empActive: 'Yes',
//     empDepartment: 'Development',
//   },
//   {
//     empID: 1,
//     empName: 'Julia',
//     empActive: 'Yes',
//     empDepartment: 'Development',
//   },
//   {
//     empID: 1,
//     empName: 'Julia',
//     empActive: 'Yes',
//     empDepartment: 'Development',
//   },
// ]

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

const getUsers = () => {
  const users = app.database.read()
  console.log(users)
}

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

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

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const [user, setUser] = useState(null)

  // Redux
  const rows = useSelector(state => [...state])
  const dispatch = useDispatch()
  const handler = useCallback(() => {
    dispatch(getAllUsers())
  }, [])

  return (
    <div>
      <div className='Button_container'>
        <Button variant='contained' color='primary' onClick={handler}>
          Get Users
        </Button>
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
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={index}
                      onClick={() => setUser(row)}
                    >
                      <TableCell>
                        <Button
                          variant='contained'
                          color='primary'
                          onClick={handleClickOpen}
                        >
                          View
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button variant='contained' color='secondary'>
                          Edit
                        </Button>
                      </TableCell>
                      <TableCell>{row.empID}</TableCell>
                      <TableCell>{row.empName}</TableCell>
                      <TableCell>{row.empActive}</TableCell>
                      <TableCell>{row.empDepartment}</TableCell>
                      <TableCell>
                        <Button variant='contained'>Delete</Button>
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
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <DialogTitle id='customized-dialog-title' onClose={handleClose}>
          <strong>Employee</strong>
        </DialogTitle>
        <DialogContent>
          {user ? (
            <div>
              <p>
                <strong>Employee ID:</strong> {user.empID}
              </p>
              <p>
                <strong>Name:</strong> {user.empName}
              </p>
              <p>
                <strong>Active:</strong> {user.empActive}
              </p>
              <p>
                <strong> Department:</strong> {user.empDepartment}
              </p>
            </div>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color='primary'>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default withRouter(TableWrapper)
