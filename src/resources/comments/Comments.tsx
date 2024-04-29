import {
  List,
  Datagrid,
  TextField,
  Show,
  SimpleShowLayout,
  SimpleForm,
  Edit,
  TextInput,
} from "react-admin";
import { useParams } from "react-router-dom";
import { DetailButton, EditButton } from "../../components/Buttons";
import React from "react";

export const CommentList = () => {
  const { id } = useParams();
  return (
    <List resource="Comments" filter={{ postId: id }}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="email" />
        <DetailButton />
        <EditButton />
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

export const CommentEdit = () => {
  const { commentId } = useParams();
  return (
    <Edit resource="Comments" id={commentId}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="body" />
      </SimpleForm>
    </Edit>
  );
};
