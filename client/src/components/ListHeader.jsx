const ListHeader = () => {
    const tableHeader = ['calltype', 'direction', 'duration', 'from', 'to', 'via'];

    return (
      <tr>
        {tableHeader.map(el => <th>{el}</th>)}
      </tr>
    );
  }
  
export default ListHeader;