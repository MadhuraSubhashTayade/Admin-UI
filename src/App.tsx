import {
  ChangeEvent,
  FC,
  ReactElement,
  ReactEventHandler,
  useEffect,
  useState,
} from "react";
import Grid from "./components/Grid";
import "./App.css";
import axios from "axios";
import Search from "./components/Search";
import { StyledAppDiv } from "./App.styles";
import Pagination from "./components/Pagination";
import DeleteSelected from "./components/DeleteSelected";

interface IDictionary {
  [key: string]: string;
}

export interface UserType {
  id: string;
  name: string;
  email: string;
  role: string;
  selected?: boolean;
}

interface AppProps {}

const App: FC<AppProps> = (): ReactElement => {
  const [users, setUsers] = useState<UserType[]>([]);

  // search state
  const [searchText, setSearchText] = useState<string>("");
  const searchParam = ["name", "email", "role"];

  // pagination states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [recordsPerPage] = useState<number>(10);
  const lIndex = currentPage * recordsPerPage;
  const fIndex = lIndex - recordsPerPage;
  const currentRecords = users.slice(fIndex, lIndex);
  const nPages = Math.ceil(users.length / recordsPerPage);

  // select all
  const [selectAll, setSelectAll] = useState<boolean>(false);

  // de-select the checkbox when all users are deleted and page is changed
  useEffect(() => {
    setSelectAll(false);
  }, [nPages, currentPage]);

  // edit user
  const editUser = (id: string, updatedUser: UserType): void => {
    const copy = [...users];
    const userIndex = copy.findIndex((x) => x.id === id);
    copy[userIndex] = updatedUser;
    setUsers(copy);
  };
  // delete single user
  const deleteUser = (id: string): void => {
    const copy = [...users];
    setUsers(copy.filter((x) => x.id !== id));
  };

  useEffect(() => {
    axios
      .get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      )
      .then((res) => {
        const users = res.data;
        const newUsers = users.map((user: UserType) => {
          return { ...user, selected: false };
        });
        setUsers(newUsers);
      });
  }, []);

  const getUsers = (): UserType[] => {
    const records = currentRecords.filter((user: UserType) => {
      return searchParam.some((param: string) => {
        const nameFound =
          user.name
            .toString()
            .toLowerCase()
            .indexOf(searchText.toString().toLowerCase()) > -1;
        const emailFound =
          user.email
            .toString()
            .toLowerCase()
            .indexOf(searchText.toString().toLowerCase()) > -1;
        const roleFound =
          user.role
            .toString()
            .toLowerCase()
            .indexOf(searchText.toString().toLowerCase()) > -1;
        return nameFound || emailFound || roleFound;
      });
    });
    return records;
  };

  const deleteSelectedUsers = () => {
    const copy_users = [...users];
    const selectedUsers = copy_users.filter((x) => x.selected);
    if (!selectedUsers || selectedUsers.length === 0) {
      alert("No users selected !");
      return;
    }
    setUsers(copy_users.filter((x) => !x.selected));
  };

  const handleOnSelect = (id: string) => {
    const user = users.find((x) => x.id === id);
    if (user) user.selected = !user.selected;
    setUsers([...users]);
  };
  const selectAllUsers = () => {
    setSelectAll(!selectAll);
    const currentUsers = getUsers();
    for (let i = 0; i < currentUsers.length; i++) {
      handleOnSelect(currentUsers[i].id);
    }
  };

  return (
    <StyledAppDiv>
      <div className="search-container">
        <Search
          searchVal={searchText}
          setSearchText={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchText(e.target.value)
          }
        />
      </div>
      <div className="grid-container">
        <Grid
          users={getUsers()}
          deleteUser={deleteUser}
          handleOnSelect={handleOnSelect}
          selectAllUsers={selectAllUsers}
          selectAll={selectAll}
          editUser={editUser}
        />
      </div>
      <div className="footer-container">
        <div className="del-btn-container">
          <DeleteSelected onDelete={deleteSelectedUsers} />
        </div>
        <div className="page-container">
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </StyledAppDiv>
  );
};

export default App;
