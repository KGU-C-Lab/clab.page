import Content from '@components/common/Content/Content';
import MyHistorySection from '@components/my/MyHistorySection/MyHistorySection';
import MyProfileSection from '@components/my/MyProfileSection/MyProfileSection';
import {
  useMyNotifications,
  useMyBoards,
  useMyComments,
  useMembershipFee,
} from '@hooks/queries';
import { useMyProfile } from '@hooks/queries/useMyProfile';
import { Grid } from '@clab/design-system';
import MyMembershipHistorySection from '@components/my/MyMembershipHistorySection/MyMembershipHistorySection';

const MyPage = () => {
  const { data: myProfile } = useMyProfile();
  const { data: myNotificationsData } = useMyNotifications(0, 10);
  const { data: myBoardsData } = useMyBoards(0, 10);
  const { data: myCommentsData } = useMyComments(0, 10);
  const { data: myMembershipFee } = useMembershipFee({
    memberId: myProfile.id,
  });

  return (
    <Content>
      <MyProfileSection data={myProfile} />
      <MyHistorySection title="지난 알림" data={myNotificationsData.items} />
      <Grid col={2} gap="md">
        <MyMembershipHistorySection data={myMembershipFee.items} />
        <MyHistorySection title="도서 대출 내역" data={[]} />
      </Grid>
      <MyHistorySection title="나의 활동" data={[]} />
      <Grid col={2} gap="md">
        <MyHistorySection title="나의 게시글" data={myBoardsData.items} />
        <MyHistorySection title="나의 댓글" data={myCommentsData.items} />
      </Grid>
    </Content>
  );
};

export default MyPage;
