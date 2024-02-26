import Section from '@components/common/Section/Section';
import { LiaCertificateSolid } from 'react-icons/lia';
import { MdOutlineDateRange } from 'react-icons/md';

interface DetailInfoSectionProps {
  name: string;
  description: string;
  category: string;
}

const DetailInfoSection = ({
  name,
  description,
  category,
}: DetailInfoSectionProps) => {
  return (
    <Section>
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-sm my-1">{description}</p>
      <div className="text-sm flex items-center text-gray-500">
        <LiaCertificateSolid className="mr-1" />
        <span>{category}</span>
        <span className="px-2">•</span>
        <MdOutlineDateRange className="mr-1" />
        <span>24년도 1학기</span>
      </div>
    </Section>
  );
};

export default DetailInfoSection;