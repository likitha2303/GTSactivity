import React from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const JobBoardComponent = ({
    job: {
        name,
        logo,
        isNew,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,
        exp,
        jd,
        resp
    },
}) => {
    const langAndTools = [];
    if (tools){
        langAndTools.push(...tools);
    }
    if (languages) {
        langAndTools.push(...languages);
    }

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    return(
    <div className='flex bg-white shadow-md m-4 mr-10 ml-10 p-4 rounded'>
        <div>
           {/* <img src={logo} alt={name} /> */}
        </div>
        <div className="flex flex-col justify-between ml-4">
            <h4 className="font-bold text-red-400 mr-auto">{name}</h4>
            <h5 className="font-bold mr-auto">{position}</h5>
            <p className="text-gray-700">
                {postedAt} . {contract} . {location} . {exp}
            </p>
        </div>
        <div className="flex items-center ml-auto">
            {/*langAndTools
                ? langAndTools.map((langAndTools)=> <span className="text-gray-600 bg-gray-300 
                font-bold m-2 p-2 rounded">
                    {langAndTools}</span>)
            : '' */}
        </div>
        <div>
        <ButtonComponent cssClass='e-info' className='ml-auto mb-auto' variant="outlined" color="primary" onClick={handleClickOpen} style={style1}>more info</ButtonComponent>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {position}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
           {languages}
          </Typography>
          <Typography gutterBottom>
            {jd}
          </Typography>
          <Typography gutterBottom>
            {resp}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save Job
          </Button>
          <Button autoFocus onClick={handleClose} color="primary">
            Apply
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    </div>
    );
};

const styles = (theme) => ({
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
  }); 
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);


const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  
const style1 ={
    textDecorationLine: 'underline'
}

export default JobBoardComponent;