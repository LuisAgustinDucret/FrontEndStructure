export const getKeys = (object) => {
    return Object.keys(object);
  };

  export const mapPropertiesToColumns = (field, width) => {
    return {
      field: camelCaseToHumanString(field),
      headerName: field,
      width: width,
    };
  };
  
  export const camelCaseToHumanString = (camelCaseString) => {
    return (
      camelCaseString
        .replace(/([A-Z])/g, " $1")
        // uppercase the first character
        .replace(/^./, function (str) {
          return str.toUpperCase();
        })
    );
  };