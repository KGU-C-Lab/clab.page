import { useNavigate } from 'react-router-dom';

import { Button } from '@clab/design-system';

import { PATH } from '@constants/path';

const CommunityWriteButton = () => {
  const navigate = useNavigate();

  return (
    <Button size="sm" onClick={() => navigate(PATH.COMMUNITY_WRITE)}>
      글쓰기
    </Button>
  );
};

export default CommunityWriteButton;
