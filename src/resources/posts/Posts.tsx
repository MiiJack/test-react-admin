import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  ShowGuesser,
  EditGuesser,
  EditButton,
} from "react-admin";
import { CommentButton } from "../../components/Buttons";
export const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <CommentButton />
      <EditButton />
    </Datagrid>
  </List>
);
export const PostShow = (props) => <ShowGuesser {...props} />;

export const PostEdit = (props) => <EditGuesser {...props} />;
