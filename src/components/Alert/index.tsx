import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FaClone } from 'react-icons/fa';

interface AlertProps {
  icon: string;
  title: string;
  text: string;
  nameDuplicateTraining?: string;
  setNameDuplicateTraining(): void;
  execute(): void;
}

const Icon = {
  duplicate: <FaClone size={20} />,
};

export default function Alert({
  icon,
  title,
  text,
  execute,
  nameDuplicateTraining,
  setNameDuplicateTraining,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <span onClick={handleClickOpen}>{icon && Icon[icon]}</span>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{text}</DialogContentText>
          <TextField
            autoFocus
            value={nameDuplicateTraining}
            onChange={e => setNameDuplicateTraining(e.target.value)}
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              setNameDuplicateTraining('');
            }}
            color="primary"
          >
            Cancelar
          </Button>
          <Button
            onClick={() => {
              handleClose();
              execute();
            }}
            color="primary"
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
