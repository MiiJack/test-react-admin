import { useNavigate } from "react-router-dom";
import { Button, EditGuesser, useRecordContext } from "react-admin";

export const CommentButton = (props) => {
  const navigate = useNavigate();
  const record = useRecordContext(props);
  if (!record) return null;
  const handleClick = () => {
    navigate(`/posts/${record.id}/comments`);
  };

  return <Button onClick={handleClick} label="Comments" />;
};

export const DetailButton = (props) => {
  const navigate = useNavigate();
  const record = useRecordContext(props);
  if (!record) return null;
  const handleClick = () => {
    navigate(`/posts/${record.postId}/comments/${record.id}`);
  };

  return <Button onClick={handleClick} label="Details" />;
};

export const EditButton = (props) => {
  const navigate = useNavigate();
  const record = useRecordContext(props);
  if (!record) return null;
  const handleClick = () => {
    navigate(`/posts/${record.postId}/comments/${record.id}/edit`);
    console.log(record);
  };

  return <Button onClick={handleClick} label="Edit" />;
};
