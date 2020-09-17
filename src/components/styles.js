export const styles = theme => ({
    primaryButton: {
      margin: theme.spacing(1),
      width: '120px',
    },
    secondaryButton: {
      margin: theme.spacing(1),
      width: '170px',
    },
    leftIcon: {
      marginRight: theme.spacing(1),
      marginBottom: '1px',
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
      marginBottom: '1px',
    },
    text: {
      display: 'flex',
      flexDirection: 'row',
    },
    group: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '400px',
      paddingTop: '20px',
      border: '1px solid rgba(156, 150, 150, 0.15)',
    },
    hoverGroup: {
      margin: 'auto',
    },
    name: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  });
  export const tooltipContentTitleStyle = {
    fontWeight: 'bold',
    padding: 0,
  };
  export const tooltipContentBodyStyle = {
    padding: 0,
  };