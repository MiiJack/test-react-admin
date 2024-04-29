import { Admin, Resource } from "react-admin";
import { Route } from "react-router-dom";
import { dataProvider } from "./dataProvider";
import { PostEdit, PostList, PostShow } from "./resources/posts/Posts";
import {
  CommentEdit,
  CommentList,
  CommentShow,
} from "./resources/comments/Comments";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit}>
      <Route path=":id/comments" element={<CommentList />} />
      <Route path=":id/comments/:commentId" element={<CommentShow />} />
      <Route path=":id/comments/:commentId/edit" element={<CommentEdit />} />
    </Resource>
  </Admin>
);
