export const getFiltredList = ({ items: contacts, filter }) => {
  if (filter) {
    const subString = filter.toLocaleUpperCase();
    const key = isNaN(+filter.charAt(0)) ? 'name' : 'number';
    return contacts.filter(el =>
      el[key].toLocaleUpperCase().includes(subString)
    );
  } else {
    return contacts;
  }
};

export const getFilter = ({ filter }) => filter;
