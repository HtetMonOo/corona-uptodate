export const formatData = ( raws ) => {
    const dataArr = Object.keys(raws).map( key => {
      raws[key].date = new Date(key);
      return raws[key];
    })
    return dataArr;
  }

export const changeArr = ( raws ) => {
  const arr = Object.keys(raws).map( key => raws[key] );
  return arr;
}