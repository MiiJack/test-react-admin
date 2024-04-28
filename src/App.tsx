import { Admin, Resource } from "react-admin";
import { Route } from "react-router-dom";
import { dataProvider } from "./dataProvider";
import { PostList, PostShow } from "./resources/Posts";
import { CommentList, CommentShow } from "./resources/Comments";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} show={PostShow}>
      <Route path=":id/comments" element={<CommentList />} />
      <Route path=":id/comments/:commentId" element={<CommentShow />} />
    </Resource>
  </Admin>
);
