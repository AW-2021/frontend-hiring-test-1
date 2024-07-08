import ListHeader from "./ListHeader";
import ListItem from "./ListItem";

const CallsList = () => {
    return (
      <div>
        <table>
          <thead>
            <ListHeader />
          </thead>
          <tbody>
            <ListItem />
          </tbody>
        </table>
      </div>
    );
  }
  
export default CallsList;