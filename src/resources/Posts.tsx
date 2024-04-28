import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  ShowGuesser,
} from "react-admin";
import { CommentButton } from "../components/Buttons";
export const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <CommentButton />
    </Datagrid>
  </List>
);
export const PostShow = (props) => <ShowGuesser {...props} />;
