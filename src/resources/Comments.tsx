import { List, Datagrid, TextField, Show, SimpleShowLayout } from "react-admin";
import { useParams } from "react-router-dom";
import { DetailButton } from "../components/Buttons";

export const CommentList = () => {
  const { id } = useParams();
  return (
    <List resource="Comments" filter={{ postId: id }}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="email" />
        <DetailButton />
      </Datagrid>
    </List>
  );
};
export const CommentShow = () => {
  const { commentId } = useParams();
  return (
    <Show resource="Comments" id={commentId}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="body" />
      </SimpleShowLayout>
    </Show>
  );
};
