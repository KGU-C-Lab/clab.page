import Content from '@components/common/Content/Content';
import HistorySection from '@components/my/HistorySection/HistorySection';
import ProfileSection from '@components/my/ProfileSection/ProfileSection';
import { useMyNotifications, useMyBoards, useMyComments } from '@hooks/queries';
import { useMyProfile } from '@hooks/queries/useMyProfile';

const MyPage = () => {
  const { data: myProfile } = useMyProfile();
  const { data: myNotificationsData } = useMyNotifications(0, 10);
  const { data: myBoardsData } = useMyBoards(0, 10);
  const { data: myCommentsData } = useMyComments(0, 10);

  return (
    <Content>
      <ProfileSection data={myProfile} />
      <HistorySection title="지난 알림" data={myNotificationsData.items} />
      <HistorySection title="나의 게시글" data={myBoardsData.items} />
      <HistorySection title="나의 댓글" data={myCommentsData.items} />
    </Content>
  );
};

export default MyPage;
