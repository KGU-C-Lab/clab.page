import { useLocation, useParams } from 'react-router-dom';

import Content from '@components/common/Content/Content';
import Header from '@components/common/Header/Header';
import Section from '@components/common/Section/Section';
import AssignmentUploadSection from '@components/group/AssignmentUploadSection/AssignmentUploadSection';

import { GROUP_MESSAGE } from '@constants/message';
import { useActivityGroupBoardMyAssignment } from '@hooks/queries';
import { useActivityGroupBoard } from '@hooks/queries/activity/useActivityGroupBoard';

const GroupAssignmentPage = () => {
  const { id, assignmentId } = useParams();
  const { state } = useLocation();

  if (!id || !assignmentId || !state?.name) {
    throw new Error(GROUP_MESSAGE.NO_ACTIVITY);
  }

  const { data: board } = useActivityGroupBoard(+assignmentId);
  const { data: myAssignment } =
    useActivityGroupBoardMyAssignment(+assignmentId);

  const feedback = myAssignment?.[0].feedbacks?.[0];

  return (
    <Content>
      <Header title={[...state.name]} />
      <Section>
        <Section.Header title="과제 설명" />
        <p className="pt-3">{board?.content}</p>
      </Section>
      <AssignmentUploadSection
        activityGroupId={+id}
        assignmentId={+assignmentId}
        dueDateTime={board?.dueDateTime}
        myAssignment={myAssignment?.[0]}
      />
      <Section>
        <Section.Header title="피드백" />
        <p className="whitespace-pre-line break-keep">
          {feedback?.content ? feedback.content : GROUP_MESSAGE.NO_FEEDBACK}
        </p>
      </Section>
    </Content>
  );
};

export default GroupAssignmentPage;
