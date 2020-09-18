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
      width: '350px',
      paddingTop: '20px',
      paddingBottom: '10px',
      border: '1px solid rgba(156, 150, 150, 0.15)',
      background: '#fff',
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
      borderRadius: '4px',
    },
    hoverGroup: {
      margin: 'auto',
      width: '300px',
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